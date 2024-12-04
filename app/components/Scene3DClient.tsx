'use client';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import CircularProgress from './CircularProgress';
import { scene3DConfig } from '@/config';
import { motion } from 'framer-motion';
import { FiMousePointer } from 'react-icons/fi';

// Singleton instance management
let instanceCount = 0;
let activeInstance: Scene3DClient | null = null;

const TECH_ICONS = scene3DConfig.techIcons;

class Scene3DClient {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private container: HTMLDivElement;
  private animationFrameId: number | null = null;
  private model: THREE.Object3D | null = null;
  private icons: THREE.Sprite[] = [];
  private onProgress: ((progress: number) => void) | null = null;
  private clock: THREE.Clock;

  constructor(container: HTMLDivElement, onProgress: (progress: number) => void) {
    this.container = container;
    this.onProgress = onProgress;
    this.clock = new THREE.Clock();
    
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x111111);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 1.8, 4);

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // Controls setup
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 2.5;
    this.controls.maxDistance = 7;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 1;
    this.controls.target.set(0, 0.5, 0);

    this.setupScene();
    this.setupEventListeners();
    this.animate();
  }

  private createSVGTexture(Icon: React.ComponentType<{ color: string }>, color: string): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d')!;
        
        // Create a temporary div to render the icon
        const div = document.createElement('div');
        document.body.appendChild(div);
        const root = ReactDOM.createRoot(div);
        root.render(<Icon color={color} />);
        
        // Wait for the icon to be rendered
        setTimeout(() => {
          try {
            // Get the rendered SVG
            const renderedSvg = div.querySelector('svg');
            if (!renderedSvg) {
              throw new Error('No SVG element found');
            }

            // Create new SVG with proper size
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '128');
            svg.setAttribute('height', '128');
            svg.setAttribute('viewBox', renderedSvg.getAttribute('viewBox') || '0 0 24 24');
            
            // Copy the inner content of the rendered SVG
            const content = renderedSvg.innerHTML;
            svg.innerHTML = content;
            
            // Ensure all paths have the correct color
            svg.querySelectorAll('path').forEach(path => {
              path.setAttribute('fill', color);
            });
            
            // Convert SVG to data URL
            const svgData = new XMLSerializer().serializeToString(svg);
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
            const svgUrl = URL.createObjectURL(svgBlob);
            
            // Create image and draw to canvas
            const img = new Image();
            img.onload = () => {
              context.clearRect(0, 0, canvas.width, canvas.height);
              context.drawImage(img, 0, 0, canvas.width, canvas.height);
              URL.revokeObjectURL(svgUrl);
              
              const texture = new THREE.CanvasTexture(canvas);
              texture.needsUpdate = true;
              
              // Clean up
              document.body.removeChild(div);
              root.unmount();
              
              resolve(texture);
            };
            
            img.onerror = (error) => {
              document.body.removeChild(div);
              root.unmount();
              reject(error);
            };
            
            img.src = svgUrl;
          } catch (error) {
            document.body.removeChild(div);
            root.unmount();
            reject(error);
          }
        }, 100); // Increased timeout to ensure rendering is complete
      } catch (error) {
        reject(error);
      }
    });
  }

  private async setupScene() {
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(10, 10, 10);
    mainLight.castShadow = true;
    this.scene.add(mainLight);

    await this.createIcons();
    this.loadModel();
  }

  private async createIcons() {
    const radius = 2; // Radius of the circle around the duck
    const height = 1; // Height of icons above the ground

    for (let i = 0; i < TECH_ICONS.length; i++) {
      const { Icon, color } = TECH_ICONS[i];
      const angle = (i / TECH_ICONS.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      try {
        const texture = await this.createSVGTexture(Icon, color);
        const spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          sizeAttenuation: true,
        });

        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(0.5, 0.5, 1);
        sprite.position.set(x, height, z);
        sprite.userData = { initialY: height, angle };
        
        this.icons.push(sprite);
        this.scene.add(sprite);
        console.log(`Added icon ${i} at position:`, { x, y: height, z });
      } catch (error) {
        console.error(`Error creating icon ${i}:`, error);
      }
    }
  }

  private loadModel() {
    if (!this.model) {
      const loader = new GLTFLoader();
      loader.load(
        '/models/duck.glb',
        (gltf) => {
          const model = gltf.scene;
          this.model = model;

          const scale = 1.1;
          model.scale.setScalar(scale);
          model.position.set(0, 0, 0);

          // Enable shadows
          model.traverse((node) => {
            if (node instanceof THREE.Mesh) {
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });

          this.scene.add(model);
          if (this.onProgress) {
            this.onProgress(100);
          }
        },
        (progress) => {
          if (this.onProgress) {
            const percentage = (progress.loaded / progress.total) * 100;
            this.onProgress(percentage);
          }
        },
        (error) => {
          console.error('Error loading model:', error);
        }
      );
    }
  }

  private animate = () => {
    if (!this.container) return;

    const time = this.clock.getElapsedTime();

    // Animate icons
    this.icons.forEach((icon, index) => {
      const initialY = icon.userData.initialY;
      const angle = icon.userData.angle;
      
      // Floating animation
      icon.position.y = initialY + Math.sin(time * 2 + index) * 0.1;
      
      // Rotate around the duck
      const radius = 2;
      const rotationSpeed = 0.2;
      const newAngle = angle + time * rotationSpeed;
      icon.position.x = Math.cos(newAngle) * radius;
      icon.position.z = Math.sin(newAngle) * radius;
      
      // Make icons always face the camera
      icon.quaternion.copy(this.camera.quaternion);
    });

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private setupEventListeners() {
    const handleResize = () => {
      if (!this.container) return;

      this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    };

    window.addEventListener('resize', handleResize);
  }

  public dispose() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    // Dispose of geometries and materials
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh || object instanceof THREE.Sprite) {
        if (object.material instanceof THREE.Material) {
          if ('map' in object.material && object.material.map) {
            (object.material.map as THREE.Texture).dispose();
          }
          object.material.dispose();
        }
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
        }
      }
    });

    // Remove the canvas
    if (this.container && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
    }

    // Dispose of the renderer
    (this.renderer as THREE.WebGLRenderer).dispose();
  }
}

export default function Scene3DClientComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Increment instance count
    instanceCount++;
    const currentInstanceCount = instanceCount;

    // Dispose of active instance if it exists
    if (activeInstance) {
      activeInstance.dispose();
      activeInstance = null;
    }

    // Create new instance
    const instance = new Scene3DClient(containerRef.current, (progress) => {
      setLoadingProgress(progress);
      if (progress === 100) {
        setTimeout(() => setIsLoading(false), 500);
      }
    });
    activeInstance = instance;

    return () => {
      if (currentInstanceCount === instanceCount && activeInstance) {
        activeInstance.dispose();
        activeInstance = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative group">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10 rounded-3xl">
          <CircularProgress progress={loadingProgress} />
        </div>
      )}
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white/80 text-sm bg-gradient-to-r from-black/40 via-white/10 to-black/40 px-6 py-3 rounded-full backdrop-blur-sm pointer-events-none"
        >
          <motion.div
            animate={{ 
              x: [-3, 3, -3],
              rotate: [-10, 10, -10]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <FiMousePointer className="w-4 h-4" />
            <motion.div 
              className="absolute -right-1 -top-1 w-2 h-2 bg-white/30 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <span>Drag to explore</span>
        </motion.div>
      )}
    </div>
  );
}
