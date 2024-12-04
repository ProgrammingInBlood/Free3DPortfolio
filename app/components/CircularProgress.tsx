'use client';

import { useEffect, useState } from 'react';

interface CircularProgressProps {
  progress: number;
}

export default function CircularProgress({ progress }: CircularProgressProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const animate = () => {
      const targetProgress = progress;
      if (animatedProgress !== targetProgress) {
        const diff = targetProgress - animatedProgress;
        const step = diff * 0.1;
        setAnimatedProgress(animatedProgress + step);
        requestAnimationFrame(animate);
      } else {
        setAnimatedProgress(targetProgress);
      }
    };
    
    requestAnimationFrame(animate);
  }, [progress, animatedProgress]);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const progressValue = isNaN(animatedProgress) ? 0 : Math.min(100, Math.max(0, animatedProgress));
  const strokeDashoffset = String(circumference - (progressValue / 100) * circumference);

  return (
    <div className={`flex flex-col items-center gap-3 transition-all duration-500 ease-in-out ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
    }`}>
      <div className="relative inline-flex items-center justify-center">
        <svg className="transform -rotate-90 w-20 h-20">
          {/* Background circle */}
          <circle
            className="text-gray-700"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
          />
          {/* Progress circle */}
          <circle
            className="text-white transition-all duration-300 ease-out"
            strokeWidth="6"
            strokeDasharray={String(circumference)}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
          />
        </svg>
        <span className="absolute text-white text-sm">
          {Math.round(progressValue)}%
        </span>
      </div>
      <div className="text-white/80 text-sm font-medium animate-fade-in">
        Loading 3D Scene
      </div>
    </div>
  );
}
