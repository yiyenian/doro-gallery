'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // 让光斑中心对准鼠标 (假设光斑大小是 500px，所以减去 250)
      // 使用 translate3d 开启 GPU 加速，性能更好，不会卡顿
      blobRef.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 1. 保留原有的静态氛围光 (做底色) */}
      <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[120px] opacity-30" />
      <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px] opacity-30" />

      {/* 2. 新增：鼠标跟随的流体光斑 */}
      {/* duration-500 ease-out 制造“拖尾”效果，让光斑像液体一样慢半拍跟过来 */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-cyan-500/40 blur-[100px] opacity-50 mix-blend-screen transition-transform duration-500 ease-out will-change-transform"
        style={{ 
          // 初始位置移出屏幕，防止闪烁
          transform: 'translate3d(-1000px, -1000px, 0)' 
        }}
      />
      
      {/* 3. 网格纹理 (增加科技感) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}
