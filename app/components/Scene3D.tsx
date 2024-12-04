'use client';

import Scene3DClient from './Scene3DClient';

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 p-[1px]">
      <div className="w-full h-full rounded-3xl overflow-hidden bg-black/30 backdrop-blur-sm">
        <Scene3DClient />
      </div>
    </div>
  );
}
