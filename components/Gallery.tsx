'use client';

import { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, ChevronLeft, ChevronRight, Hash, Terminal, Image as ImageIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Gallery({ images }: { images: any[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedIndex = images.findIndex(img => img.id === selectedId);
  const selectedImage = images[selectedIndex];

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
      {/* 首页瀑布流 */}
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

      {/* 详情弹窗 */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-200" onClick={() => setSelectedId(null)} />
          
          <div className="relative flex h-full w-full max-w-[1500px] flex-col overflow-hidden bg-[#121212] shadow-2xl ring-1 ring-white/10 sm:rounded-xl md:h-[90vh] md:flex-row animate-in zoom-in-95 duration-200">
            
            {/* 左侧：大图展示 */}
            <div className="relative flex-1 bg-[#000000] flex items-center justify-center p-4 md:p-8 group/nav">
              <img 
                src={selectedImage.url} 
                className="max-h-full max-w-full object-contain shadow-2xl" 
                alt="Detail" 
              />
              
              {/* 导航按钮 */}
              {selectedIndex > 0 && (
                <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} 
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white/70 hover:text-white border border-white/10 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-md"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              {selectedIndex < images.length - 1 && (
                <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white/70 hover:text-white border border-white/10 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-md"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* 右侧：OpenNana 风格信息栏 */}
            <div className="flex w-full flex-col border-t border-white/10 bg-[#18181b] md:h-full md:w-[420px] md:flex-none md:border-l md:border-t-0 z-20">
              
              {/* 头部工具栏 */}
              <div className="flex items-center justify-between p-6 pb-4 border-b border-white/5 bg-[#18181b]">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                        <Terminal size={16} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Generated by</span>
                        <span className="text-sm font-bold text-white">Doro AI</span>
                    </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition" title="View Original"><ExternalLink size={18}/></button>
                  <button onClick={() => setSelectedId(null)} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition" title="Close"><X size={18}/></button>
                </div>
              </div>

              {/* 滚动内容区 */}
              <div className="flex-1 overflow-y-auto p-6 pt-4 space-y-8 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                
                {/* 1. 标题展示 */}
                <div>
                    <h2 className="text-2xl font-bold text-white leading-tight mb-3 tracking-tight">
                        {selectedImage.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-1 text-[10px] text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                           <Hash size={10} /> Midjourney
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                           <ImageIcon size={10} /> High Res
                        </span>
                    </div>
                </div>

                {/* 2. 提示词区域 (OpenNana 核心样式) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Prompt</h3>
                    {selectedImage.prompt && selectedImage.prompt !== "No prompt available" && (
                      <button 
                        onClick={copyPrompt} 
                        className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-bold transition-all border ${copied ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'}`}
                      >
                        {copied ? <Check size={14}/> : <Copy size={14}/>} 
                        {copied ? "COPIED" : "COPY"}
                      </button>
                    )}
                  </div>
                  
                  {/* 提示词框 */}
                  <div className="relative group">
                    <div className="rounded-xl bg-[#09090b] border border-white/10 p-5 min-h-[160px] shadow-inner">
                        <div className="text-xs leading-6 text-gray-300 font-mono select-text whitespace-pre-wrap break-words">
                            <ReactMarkdown
                                components={{
                                    p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} />,
                                    strong: ({node, ...props}) => <span className="text-indigo-400 font-bold" {...props} />,
                                    ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-4" {...props} />,
                                    li: ({node, ...props}) => <li className="mb-1" {...props} />,
                                }}
                            >
                                {selectedImage.prompt.replace(/\n/g, '  \n')}
                            </ReactMarkdown>
                        </div>
                    </div>
                  </div>
                </div>

                {/* 3. 详情参数 */}
                <div className="border-t border-white/5 pt-6">
                   <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-4">Details</h3>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                          <p className="text-[10px] uppercase text-gray-500 mb-1">ID</p>
                          <p className="text-xs font-medium text-gray-200 font-mono truncate" title={selectedImage.public_id}>{selectedImage.public_id}</p>
                      </div>
                      <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                          <p className="text-[10px] uppercase text-gray-500 mb-1">Format</p>
                          <p className="text-sm font-medium text-gray-200 uppercase font-mono">{selectedImage.format}</p>
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
