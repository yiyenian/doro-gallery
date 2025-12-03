'use client';

import { useState, useEffect, useMemo } from 'react';
import { X, Copy, Check, ExternalLink, ChevronLeft, ChevronRight, Info, Type, Hash, Terminal, Search, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Gallery({ images }: { images: any[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  // 1. 提取标签
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    images.forEach(img => {
      if (Array.isArray(img.tags)) {
        img.tags.forEach((t: string) => tags.add(t));
      }
    });
    return Array.from(tags).sort();
  }, [images]);

  // 2. 过滤逻辑
  const filteredImages = images.filter((image) => {
    const term = search.toLowerCase();
    const title = (image.title || "").toLowerCase();
    const prompt = (image.prompt || "").toLowerCase();
    const tags = (image.tags || []).join(" ").toLowerCase();
    return title.includes(term) || prompt.includes(term) || tags.includes(term);
  });

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

  // 默认热门标签 (中文)
  const defaultTags = ['人像摄影', '赛博朋克', '二次元', '3D渲染', 'Logo设计', '中国风', '建筑设计', '科幻'];
  const displayTags = allTags.length > 0 ? allTags : defaultTags;

  return (
    <>
      {/* --- Hero & Search 区域 --- */}
      <div className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 text-center px-4 max-w-5xl mx-auto">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Sparkles size={10} className="text-indigo-400" />
            AI Prompt Library
        </div>

        {/* 汉化大标题 */}
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl leading-tight drop-shadow-2xl">
          探索
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse px-4">
            无限想象
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl mb-10 leading-relaxed font-light">
          Doro Gallery 收录全网高质量 AI 生成图像与提示词。
          <br className="hidden sm:block"/>
          复制 Prompt，激发灵感，创造属于你的杰作。
        </p>

        {/* 🔍 搜索框 (带右侧统计) */}
        <div className="max-w-2xl mx-auto relative group z-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-50 blur transition duration-1000"></div>
            <div className="relative flex items-center bg-[#18181b] rounded-full p-2 ring-1 ring-white/10 focus-within:ring-indigo-500/50 transition-all shadow-2xl">
                <div className="pl-4 text-gray-500"><Search className="w-5 h-5" /></div>
                <input 
                    type="text" 
                    placeholder="搜索关键词，如：赛博朋克、人像..." 
                    className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none text-base"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                    <button onClick={() => setSearch("")} className="p-1 rounded-full hover:bg-white/10 text-gray-400 transition mr-2">
                        <X size={16} />
                    </button>
                )}
                
                {/* 📊 右侧统计 (仿 OpenNana) */}
                <div className="hidden sm:flex items-center pr-4 pl-4 border-l border-white/10 h-6">
                    <span className="text-xs font-mono text-gray-500 whitespace-nowrap group-focus-within:text-indigo-400 transition-colors">
                        <span className="font-bold mr-1">{filteredImages.length}</span> 
                        个案例
                    </span>
                </div>
            </div>
        </div>

        {/* 标签 */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
            {displayTags.map((tag) => (
                <button 
                    key={tag} 
                    onClick={() => setSearch(tag === search ? "" : tag)} 
                    className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all 
                        ${search === tag
                            ? 'bg-white text-black border-white' 
                            : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10'
                        }`}
                >
                    {tag}
                </button>
            ))}
        </div>
      </div>

      {/* --- 瀑布流 --- */}
      <div className="max-w-[1960px] mx-auto px-4 pb-20 min-h-[400px]">
        {filteredImages.length > 0 ? (
            <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            {filteredImages.map((image) => (
                <div 
                key={image.id}
                onClick={() => setSelectedId(image.id)}
                className="group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#1e1e20] border border-white/5 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-900/10 hover:border-white/20"
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
        ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500 border border-dashed border-white/10 rounded-xl bg-white/5">
                <Search size={48} className="mb-4 opacity-20" />
                <p>未找到与 "{search}" 相关的提示词</p>
                <button onClick={() => setSearch("")} className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-medium underline decoration-indigo-400/30 underline-offset-4">清空搜索条件</button>
            </div>
        )}
      </div>

      {/* --- 弹窗 --- */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-200" onClick={() => setSelectedId(null)} />
          
          <div className="relative flex h-full w-full max-w-[1500px] flex-col overflow-hidden bg-[#18181b] shadow-2xl ring-1 ring-white/10 sm:rounded-xl md:h-[90vh] md:flex-row animate-in zoom-in-95 duration-200">
            <div className="relative flex-1 bg-[#09090b] flex items-center justify-center p-4 md:p-8 group/nav">
              <img src={selectedImage.url} className="max-h-full max-w-full object-contain shadow-2xl drop-shadow-2xl" alt="Detail" />
              {selectedIndex > 0 && <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/5 transition backdrop-blur-md opacity-0 group-hover/nav:opacity-100"><ChevronLeft size={24} /></button>}
              {selectedIndex < images.length - 1 && <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/5 transition opacity-0 group-hover/nav:opacity-100"><ChevronRight size={24} /></button>}
            </div>

            <div className="flex w-full flex-col border-t border-white/10 bg-[#18181b] md:h-full md:w-[420px] md:flex-none md:border-l md:border-t-0 z-20">
              <div className="flex items-center justify-between p-6 pb-2 border-b border-white/5 bg-[#18181b]">
                <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1">
                        <Terminal size={10} /> AI Generated
                    </span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition" title="查看原图"><ExternalLink size={18}/></button>
                  <button onClick={() => setSelectedId(null)} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition" title="关闭"><X size={18}/></button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 pt-4 space-y-8 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                <div>
                    <h2 className="text-2xl font-bold text-white leading-tight mb-3">
                        {selectedImage.title}
                    </h2>
                    {selectedImage.tags && selectedImage.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                          {selectedImage.tags.map((tag: string) => (
                              <span key={tag} className="flex items-center gap-1 text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded-full border border-white/5 hover:border-white/10 transition cursor-default">
                                  <Hash size={10} className="opacity-50"/> {tag}
                              </span>
                          ))}
                      </div>
                    )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Prompt</h3>
                    {selectedImage.prompt && (
                      <button onClick={copyPrompt} className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-bold transition-all border ${copied ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'}`}>
                        {copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? "已复制" : "复制"}
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

                <div className="border-t border-white/5 pt-6">
                   <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-4">Details</h3>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-white/5 p-3 border border-white/5"><p className="text-[10px] uppercase text-gray-500 mb-1">ID</p><p className="text-xs font-medium text-gray-200 font-mono truncate" title={selectedImage.public_id}>{selectedImage.public_id}</p></div>
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
