'use client';

import { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery({ images }: { images: any[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  // 计算当前选中的图片信息
  const selectedIndex = images.findIndex(img => img.id === selectedId);
  const selectedImage = images[selectedIndex];

  // 键盘监听 (左右切换、ESC关闭)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId === null) return;
      if (e.key === 'Escape') setSelectedId(null);
      if (e.key === 'ArrowLeft' && selectedIndex > 0) setSelectedId(images[selectedIndex - 1].id);
      if (e.key === 'ArrowRight' && selectedIndex < images.length - 1) setSelectedId(images[selectedIndex + 1].id);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, selectedIndex, images]);

  // 锁定背景滚动
  useEffect(() => {
    if (selectedId !== null) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedId]);

  // 复制功能
  const copyPrompt = () => {
    if (selectedImage?.prompt) {
      navigator.clipboard.writeText(selectedImage.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* --- 1. 瀑布流列表 --- */}
      <div className="max-w-[1960px] mx-auto px-4 pb-20">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map((image) => (
            <div 
              key={image.id}
              onClick={() => setSelectedId(image.id)}
              className="group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#151515] transition-all hover:scale-[1.01] hover:shadow-2xl"
            >
              <img 
                src={image.url} 
                alt="AI" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* 悬停遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                 <div className="absolute bottom-4 left-4 right-4">
                    <p className="line-clamp-2 text-xs text-gray-200 font-medium">{image.prompt}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 2. 全屏弹窗 --- */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* 黑色背景遮罩 */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setSelectedId(null)} />
          
          {/* 弹窗主体 */}
          <div className="relative flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-xl bg-[#121212] shadow-2xl md:h-[85vh] md:flex-row border border-white/10 z-50">
            
            {/* 左侧：大图展示区 */}
            <div className="relative flex-1 bg-black/50 flex items-center justify-center p-4 md:p-8 group/nav">
              <img 
                src={selectedImage.url} 
                className="max-h-full max-w-full object-contain shadow-2xl" 
                alt="Detail"
              />
              
              {/* 左右切换按钮 */}
              {selectedIndex > 0 && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} 
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white/20 border border-white/10 transition opacity-0 group-hover/nav:opacity-100"
                >
                  <ChevronLeft />
                </button>
              )}
              {selectedIndex < images.length - 1 && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white/20 border border-white/10 transition opacity-0 group-hover/nav:opacity-100"
                >
                  <ChevronRight />
                </button>
              )}
            </div>

            {/* 右侧：OpenNana 风格信息栏 */}
            <div className="flex w-full flex-col border-t border-white/10 bg-[#121212] md:h-full md:w-[380px] md:flex-none md:border-l md:border-t-0">
              
              {/* 顶部操作 */}
              <div className="flex items-center justify-between border-b border-white/5 p-6">
                <span className="font-bold tracking-wide text-white">Doro Gallery</span>
                <div className="flex gap-2">
                  <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 rounded-full hover:bg-white/10 transition text-gray-400 hover:text-white" title="View Original"><ExternalLink size={18}/></button>
                  <button onClick={() => setSelectedId(null)} className="p-2 rounded-full hover:bg-white/10 transition text-gray-400 hover:text-white" title="Close"><X size={18}/></button>
                </div>
              </div>

              {/* 滚动内容 */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Prompt</h3>
                    {selectedImage.prompt && (
                      <button onClick={copyPrompt} className={`flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-bold transition-all ${copied ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20'}`}>
                        {copied ? <Check size={12}/> : <Copy size={12}/>} {copied ? "COPIED" : "COPY"}
                      </button>
                    )}
                  </div>
                  
                  {/* 提示词框 */}
                  <div className="rounded-xl bg-[#0a0a0a] border border-white/5 p-4 min-h-[120px]">
                    <p className="text-sm leading-7 text-gray-300 font-mono select-text whitespace-pre-wrap">
                      {selectedImage.prompt || "No prompt available"}
                    </p>
                  </div>
                </div>

                {/* 底部详情 */}
                <div>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Details</h3>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                          <p className="text-[10px] uppercase text-gray-500 mb-1">Dimensions</p>
                          <p className="text-sm font-medium text-gray-200">{selectedImage.width} × {selectedImage.height}</p>
                      </div>
                      <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                          <p className="text-[10px] uppercase text-gray-500 mb-1">Format</p>
                          <p className="text-sm font-medium text-gray-200 uppercase">{selectedImage.format}</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
