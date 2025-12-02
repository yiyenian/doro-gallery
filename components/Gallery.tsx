'use client';

import { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, ChevronLeft, ChevronRight, Info, Type } from 'lucide-react';

export default function Gallery({ images }: { images: any[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedIndex = images.findIndex(img => img.id === selectedId);
  const selectedImage = images[selectedIndex];

  // 键盘监听
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

  const copyPrompt = () => {
    if (selectedImage?.prompt) {
      navigator.clipboard.writeText(selectedImage.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* --- 首页瀑布流 --- */}
      <div className="max-w-[1960px] mx-auto px-4 pb-20">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map((image) => (
            <div 
              key={image.id}
              onClick={() => setSelectedId(image.id)}
              className="group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#151515] transition-all hover:scale-[1.01] hover:shadow-2xl border border-white/5"
            >
              <img 
                src={image.url} 
                alt={image.title || "AI Art"} 
                className="w-full h-auto object-cover transform transition will-change-auto"
                loading="lazy"
              />
              
              {/* 🔴 核心修改：首页卡片底部固定显示标题
                  1. 移除了 opacity-0 (现在一直显示)
                  2. 移除了 hover 效果
                  3. 只显示 image.title，不显示 prompt
              */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-10 pb-4 px-4">
                 <h3 className="font-bold text-white text-sm line-clamp-1 tracking-wide">
                    {image.title || "Untitled"}
                 </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 全屏弹窗 --- */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 md:p-8">
          {/* 背景遮罩 - 毛玻璃效果 */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl transition-opacity" onClick={() => setSelectedId(null)} />
          
          <div className="relative flex h-full w-full max-w-[1400px] flex-col overflow-hidden bg-[#121212] shadow-2xl ring-1 ring-white/10 sm:rounded-xl md:h-[85vh] md:flex-row animate-in fade-in zoom-in duration-200">
            
            {/* 左侧大图 */}
            <div className="relative flex-1 bg-[#050505] flex items-center justify-center p-4 md:p-8 group/nav">
              <img src={selectedImage.url} className="max-h-full max-w-full object-contain shadow-2xl" alt="Detail" />
              
              {/* 左右按钮 */}
              {selectedIndex > 0 && (
                <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white/70 hover:text-white border border-white/10 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-sm">
                  <ChevronLeft size={24} />
                </button>
              )}
              {selectedIndex < images.length - 1 && (
                <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white/70 hover:text-white border border-white/10 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-sm">
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* 右侧信息栏 */}
            <div className="flex w-full flex-col border-t border-white/10 bg-[#121212] md:h-full md:w-[400px] md:flex-none md:border-l md:border-t-0 z-20">
              
              {/* 头部：显示标题 */}
              <div className="flex items-center justify-between border-b border-white/5 p-6 h-16 shrink-0 bg-[#151515]">
                <div className="flex items-center gap-2 overflow-hidden">
                    <div className="h-5 w-5 shrink-0 rounded bg-gradient-to-tr from-indigo-500 to-purple-600" />
                    <span className="font-bold tracking-wide text-sm text-white truncate">
                        {selectedImage.title || "Untitled"}
                    </span>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 rounded-lg hover:bg-white/5 transition text-gray-400 hover:text-white" title="View Original"><ExternalLink size={18}/></button>
                  <button onClick={() => setSelectedId(null)} className="p-2 rounded-lg hover:bg-white/5 transition text-gray-400 hover:text-white" title="Close"><X size={18}/></button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* 提示词区域 */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <Type size={14} className="text-indigo-400" />
                        <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Prompt</h3>
                    </div>
                    {selectedImage.prompt && (
                      <button onClick={copyPrompt} className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-bold transition-all border ${copied ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'}`}>
                        {copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? "COPIED" : "COPY"}
                      </button>
                    )}
                  </div>
                  <div className="rounded-xl bg-[#080808] border border-white/5 p-4 min-h-[140px] shadow-inner">
                      <p className="text-xs leading-6 text-gray-400 font-mono select-text whitespace-pre-wrap break-words">{selectedImage.prompt || "No prompt available."}</p>
                  </div>
                </div>

                {/* 详情参数 */}
                <div>
                   <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 border-t border-white/5 pt-6">Details</h3>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-white/5 p-3 border border-white/5"><p className="text-[10px] uppercase text-gray-500 mb-1">Dimensions</p><p className="text-sm font-medium text-gray-200 font-mono">{selectedImage.width} × {selectedImage.height}</p></div>
                      <div className="rounded-lg bg-white/5 p-3 border border-white/5"><p className="text-[10px] uppercase text-gray-500 mb-1">Format</p><p className="text-sm font-medium text-gray-200 uppercase font-mono">{selectedImage.format}</p></div>
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
