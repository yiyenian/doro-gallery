'use client';

import { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, ChevronLeft, ChevronRight, Terminal, Type, Hash } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { ImageProps } from '../utils/types';

export default function Gallery({ images }: { images: ImageProps[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  // 计算当前选中的图片
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

  // 锁定滚动
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
      {/* 瀑布流区域 */}
      <div className="max-w-[1960px] mx-auto px-4 pb-20">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map((image) => (
            <div 
              key={image.id}
              onClick={() => setSelectedId(image.id)}
              className="group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#1e1e20] border border-white/5 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-white/20"
            >
              {/* 🔴 调试条：显示真实ID (对齐后可删除) */}
              <div className="absolute top-0 left-0 right-0 bg-red-600/80 text-white text-[10px] font-mono px-2 py-1 z-20 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                 {image.public_id}
              </div>

              <img 
                src={image.url} 
                alt={image.title || "AI Art"} 
                className="w-full h-auto object-cover transform transition will-change-auto"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-12 pb-4 px-4">
                 <h3 className="font-bold text-gray-100 text-sm line-clamp-1 tracking-wide">
                    {image.title}
                 </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 全屏弹窗 */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-200" onClick={() => setSelectedId(null)} />
          
          <div className="relative flex h-full w-full max-w-[1500px] flex-col overflow-hidden bg-[#18181b] shadow-2xl ring-1 ring-white/10 sm:rounded-xl md:h-[90vh] md:flex-row animate-in zoom-in-95 duration-200">
            
            {/* 左侧图片 */}
            <div className="relative flex-1 bg-[#09090b] flex items-center justify-center p-4 md:p-8 group/nav">
              <img 
                src={selectedImage.url} 
                className="max-h-full max-w-full object-contain shadow-2xl drop-shadow-2xl" 
                alt="Detail" 
              />
              
              {/* 导航按钮 */}
              {selectedIndex > 0 && (
                <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/5 transition backdrop-blur-md opacity-0 group-hover/nav:opacity-100"><ChevronLeft size={24} /></button>
              )}
              {selectedIndex < images.length - 1 && (
                <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/5 transition opacity-0 group-hover/nav:opacity-100"><ChevronRight size={24} /></button>
              )}
            </div>

            {/* 右侧信息 */}
            <div className="flex w-full flex-col border-t border-white/10 bg-[#18181b] md:h-full md:w-[420px] md:flex-none md:border-l md:border-t-0 z-20">
              <div className="flex items-center justify-between p-6 pb-2 border-b border-white/5 bg-[#18181b]">
                <div className="flex gap-2 items-center">
                    <span className="text-[10px] font-mono text-gray-500 select-all">ID: {selectedImage.public_id}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition"><ExternalLink size={18}/></button>
                  <button onClick={() => setSelectedId(null)} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition"><X size={18}/></button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 pt-4 space-y-8 scrollbar-thin scrollbar-thumb-gray-800">
                {/* 标题 */}
                <div>
                    <h2 className="text-2xl font-bold text-white leading-tight mb-3">
                        {selectedImage.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-1 text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded-full border border-white/5 cursor-default"><Hash size={10} className="opacity-50"/> Midjourney</span>
                    </div>
                </div>

                {/* 提示词 */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Prompt</h3>
                    {selectedImage.prompt && (
                      <button onClick={copyPrompt} className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-bold transition-all border ${copied ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'}`}>
                        {copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? "COPIED" : "COPY"}
                      </button>
                    )}
                  </div>
                  
                  <div className="relative group">
                    <div className="rounded-xl bg-[#09090b] border border-white/10 p-5 min-h-[160px] shadow-inner">
                        <div className="text-xs leading-6 text-gray-300 font-mono select-text whitespace-pre-wrap break-words">
                            <ReactMarkdown components={{ p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} /> }}>
                                {selectedImage.prompt.replace(/\n/g, '  \n')}
                            </ReactMarkdown>
                        </div>
                    </div>
                  </div>
                </div>

                {/* 详情 */}
                <div className="border-t border-white/5 pt-6">
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
