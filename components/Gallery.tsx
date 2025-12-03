'use client';

import { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, ChevronLeft, ChevronRight, Terminal, Type, Hash } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Gallery({ images }: { images: any[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedIndex = images.findIndex(img => img.id === selectedId);
  const selectedImage = images[selectedIndex];

  // 键盘操作
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

  // 锁屏
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
      {/* 首页列表 */}
      <div className="max-w-[1960px] mx-auto px-4 pb-20">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map((image) => (
            <div 
              key={image.id}
              onClick={() => setSelectedId(image.id)}
              className="group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#1e1e20] border border-white/5 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-white/20"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-auto object-cover transform transition will-change-auto"
                loading="lazy"
              />
              {/* 首页显示标题 */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-12 pb-4 px-4">
                 <h3 className="font-bold text-gray-100 text-sm line-clamp-1 tracking-wide">
                    {image.title}
                 </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OpenNana 风格弹窗 */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-200" onClick={() => setSelectedId(null)} />
          
          <div className="relative flex h-full w-full max-w-[1500px] flex-col overflow-hidden bg-[#18181b] shadow-2xl ring-1 ring-white/10 sm:rounded-xl md:h-[90vh] md:flex-row animate-in zoom-in-95 duration-200">
            {/* 左侧图 */}
            <div className="relative flex-1 bg-[#09090b] flex items-center justify-center p-4 md:p-8 group/nav">
              <img src={selectedImage.url} className="max-h-full max-w-full object-contain shadow-2xl drop-shadow-2xl" alt="Detail" />
              {selectedIndex > 0 && <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white border border-white/5 transition opacity-0 group-hover/nav:opacity-100"><ChevronLeft size={24} /></button>}
              {selectedIndex < images.length - 1 && <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white border border-white/5 transition opacity-0 group-hover/nav:opacity-100"><ChevronRight size={24} /></button>}
            </div>

            {/* 右侧文 */}
            <div className="flex w-full flex-col border-t border-white/10 bg-[#18181b] md:h-full md:w-[420px] md:flex-none md:border-l md:border-t-0 z-20">
              <div className="flex items-center justify-between p-6 pb-2 border-b border-white/5 bg-[#18181b]">
                <div className="flex items-center gap-2 overflow-hidden">
                    <span className="font-bold tracking-wide text-sm text-white truncate">{selectedImage.title}</span>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition"><ExternalLink size={18}/></button>
                  <button onClick={() => setSelectedId(null)} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition"><X size={18}/></button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 pt-4 space-y-8 scrollbar-thin scrollbar-thumb-gray-800">
                {/* 提示词 */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Prompt</h3>
                    {selectedImage.prompt && <button onClick={copyPrompt} className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-bold transition-all border ${copied ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'}`}>{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? "COPIED" : "COPY"}</button>}
                  </div>
                  <div className="rounded-xl bg-[#09090b] border border-white/10 p-5 min-h-[160px] shadow-inner">
                      <div className="text-xs leading-6 text-gray-300 font-mono select-text whitespace-pre-wrap break-words">
                          <ReactMarkdown components={{ p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} /> }}>
                              {selectedImage.prompt.replace(/\n/g, '  \n')}
                          </ReactMarkdown>
                      </div>
                  </div>
                  {/* 调试信息：显示 ID 方便你填 data.ts */}
                  <div className="mt-4 p-2 bg-red-900/20 border border-red-900/50 rounded text-[10px] text-red-400 font-mono">
                    ID: {selectedImage.public_id}
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
