'use client';

import { useState, useEffect, useMemo } from 'react';
import { X, Copy, Check, ExternalLink, ChevronLeft, ChevronRight, Terminal, Sparkles, Search, Hash, Languages } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Gallery({ images }: { images: any[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copiedCn, setCopiedCn] = useState(false);
  const [copiedEn, setCopiedEn] = useState(false);
  const [copiedDefault, setCopiedDefault] = useState(false);
  const [search, setSearch] = useState("");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    images.forEach(img => {
      if (Array.isArray(img.tags)) {
        img.tags.forEach((t: string) => tags.add(t));
      }
    });
    return Array.from(tags).sort();
  }, [images]);

  const filteredImages = images.filter((image) => {
    const term = search.toLowerCase();
    const title = (image.title || "").toLowerCase();
    const prompt = (image.prompt || "").toLowerCase();
    const tags = (image.tags || []).join(" ").toLowerCase();
    return title.includes(term) || prompt.includes(term) || tags.includes(term);
  });

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

  const copyToClipboard = (text: string, type: 'cn' | 'en' | 'default') => {
    navigator.clipboard.writeText(text);
    if (type === 'cn') { setCopiedCn(true); setTimeout(() => setCopiedCn(false), 2000); }
    if (type === 'en') { setCopiedEn(true); setTimeout(() => setCopiedEn(false), 2000); }
    if (type === 'default') { setCopiedDefault(true); setTimeout(() => setCopiedDefault(false), 2000); }
  };

  const defaultTags = ['人像摄影', '赛博朋克', '二次元', '3D渲染', 'Logo设计', '中国风', '建筑设计', '科幻'];
  const displayTags = allTags.length > 0 ? allTags : defaultTags;

  // --- 提示词子组件 (毛玻璃风格) ---
  const PromptBox = ({ title, content, isCopied, onCopy, icon: Icon }: any) => (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
            <Icon size={14} className="text-indigo-400" />
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{title}</h3>
        </div>
        <button 
          onClick={() => onCopy(content)} 
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-bold transition-all border ${isCopied ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20'}`}
        >
          {isCopied ? <Check size={14}/> : <Copy size={14}/>} {isCopied ? "已复制" : "复制"}
        </button>
      </div>
      
      {/* 🟢 核心修改：毛玻璃特效背景 */}
      <div className="relative group">
        <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-xl hover:bg-white/[0.07] transition-colors">
            <div className="text-sm leading-7 text-gray-200 font-mono select-text whitespace-pre-wrap break-words">
                <ReactMarkdown components={{ 
                  p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} />,
                  strong: ({node, ...props}) => <strong className="text-indigo-300 font-bold" {...props} />
                }}>
                    {content.replace(/\n/g, '  \n')}
                </ReactMarkdown>
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* --- 首页瀑布流 (保持不变) --- */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 text-center px-4 w-full border-b border-white/5 bg-transparent">
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-lg backdrop-blur-md">
                <Sparkles size={10} className="text-indigo-400" />
                AI Prompt Library
            </div>

            <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl leading-tight drop-shadow-2xl">
              探索
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse px-4">
                无限想象
              </span>
            </h1>
            
            <div className="max-w-2xl mx-auto relative group z-10 mb-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-50 blur-lg transition duration-1000"></div>
                <div className="relative flex items-center bg-[#18181b] rounded-full p-2 ring-1 ring-white/10 focus-within:ring-indigo-500/50 focus-within:ring-2 transition-all shadow-2xl">
                    <div className="pl-4 text-gray-500"><Search className="w-5 h-5" /></div>
                    <input 
                        type="text" 
                        placeholder="搜索关键词..." 
                        className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none text-base"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && <button onClick={() => setSearch("")} className="p-1 rounded-full hover:bg-white/10 text-gray-400 transition mr-2"><X size={16} /></button>}
                    <div className="hidden sm:flex items-center pr-4 pl-4 border-l border-white/10 h-6">
                        <span className="text-xs font-mono text-gray-500 whitespace-nowrap group-focus-within:text-indigo-400 transition-colors"><span className="font-bold mr-1">{images.length}</span> 案例</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
                {displayTags.map((tag) => (
                    <button 
                        key={tag} 
                        onClick={() => setSearch(tag === search ? "" : tag)} 
                        className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${search === tag ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30'}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
      </div>

      <div className="max-w-[1960px] mx-auto px-4 py-12 min-h-[400px]">
        <div className="columns-1 gap-6 sm:columns-2 xl:columns-3 2xl:columns-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              onClick={() => setSelectedId(image.id)}
              className="group relative mb-6 block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[#1e1e20] border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/20 hover:border-white/20 backdrop-blur-sm"
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

      {/* --- 🔴 核心重构：通栏滚动布局 --- */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex justify-center bg-black/90 backdrop-blur-lg overflow-y-auto">
          {/* 关闭层 */}
          <div className="absolute inset-0" onClick={() => setSelectedId(null)} />

          <div className="relative w-full max-w-4xl my-8 px-4 sm:px-6 animate-in fade-in zoom-in-95 duration-300">
             {/* 关闭按钮 (右上角悬浮) */}
             <button 
                onClick={() => setSelectedId(null)} 
                className="fixed top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md z-[70] transition-all"
             >
                <X size={20} />
             </button>

             {/* 内容容器 */}
             <div className="bg-[#121212] rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                
                {/* 1. 标题与操作栏 */}
                <div className="p-8 border-b border-white/5 bg-[#18181b]">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <h2 className="text-3xl font-bold text-white leading-tight tracking-tight">{selectedImage.title}</h2>
                            <a 
                                href={selectedImage.url} 
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-gray-300 transition"
                            >
                                <ExternalLink size={16} /> 查看原图
                            </a>
                        </div>
                        {/* 标签 */}
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-bold text-indigo-300 uppercase tracking-wider">AI Generated</span>
                            {selectedImage.tags?.map((tag: string) => (
                                <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-gray-400 flex items-center gap-1">
                                    <Hash size={10} className="opacity-50"/> {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. 图片展示区域 (居中大图) */}
                <div className="bg-black/50 border-b border-white/5 relative group">
                    <div className="flex justify-center p-4 sm:p-8">
                        <img 
                            src={selectedImage.url} 
                            className="w-auto h-auto max-h-[80vh] rounded-lg shadow-2xl" 
                            alt="Detail" 
                        />
                    </div>
                    
                    {/* 左右切换按钮 (悬浮在图片两侧) */}
                    {selectedIndex > 0 && (
                        <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white/80 hover:bg-black/70 hover:text-white hover:scale-110 border border-white/10 backdrop-blur-md transition-all z-20">
                            <ChevronLeft size={28} />
                        </button>
                    )}
                    {selectedIndex < images.length - 1 && (
                        <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white/80 hover:bg-black/70 hover:text-white hover:scale-110 border border-white/10 backdrop-blur-md transition-all z-20">
                            <ChevronRight size={28} />
                        </button>
                    )}
                </div>

                {/* 3. 提示词区域 (通栏布局) */}
                <div className="p-8 sm:p-10 bg-[#121212]">
                    {/* 中文提示词 */}
                    {selectedImage.promptCn && (
                        <PromptBox 
                          title="中文提示词" 
                          content={selectedImage.promptCn} 
                          isCopied={copiedCn} 
                          onCopy={(t: string) => copyToClipboard(t, 'cn')}
                          icon={Languages}
                        />
                    )}

                    {/* 英文提示词 */}
                    {selectedImage.promptEn && (
                        <PromptBox 
                          title="英文提示词" 
                          content={selectedImage.promptEn} 
                          isCopied={copiedEn} 
                          onCopy={(t: string) => copyToClipboard(t, 'en')}
                          icon={Terminal}
                        />
                    )}

                    {/* 默认提示词 */}
                    {!selectedImage.promptCn && !selectedImage.promptEn && (
                        <PromptBox 
                          title="提示词 / Prompt" 
                          content={selectedImage.prompt || "No prompt available."} 
                          isCopied={copiedDefault} 
                          onCopy={(t: string) => copyToClipboard(t, 'default')}
                          icon={Terminal}
                        />
                    )}
                </div>

             </div>
          </div>
        </div>
      )}
    </>
  );
}
