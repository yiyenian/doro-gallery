'use client';

import { useState, useEffect, useMemo } from 'react';
import { X, Copy, Check, ExternalLink, ChevronLeft, ChevronRight, Info, Type, Hash, Terminal, Search, Sparkles, Maximize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Gallery({ images }: { images: any[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
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

  const copyPrompt = () => {
    if (selectedImage?.prompt) {
      navigator.clipboard.writeText(selectedImage.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const defaultTags = ['人像摄影', '赛博朋克', '二次元', '3D渲染', 'Logo设计', '中国风', '建筑设计', '科幻'];
  const displayTags = allTags.length > 0 ? allTags : defaultTags;

  return (
    <>
      {/* --- 首页 Hero 区域 --- */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 text-center px-4 w-full overflow-hidden bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg backdrop-blur-md">
                <Sparkles size={10} className="text-indigo-400" />
                AI Prompt Library
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl leading-tight drop-shadow-2xl">
              探索
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-3 font-black animate-pulse">
                无限想象
              </span>
            </h1>
            
            <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed font-light">
              Doro Gallery 收录全网高质量 AI 生成图像与提示词。
            </p>

            <div className="max-w-2xl mx-auto relative group z-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-50 blur-lg transition duration-1000"></div>
                <div className="relative flex items-center bg-[#121212]/90 backdrop-blur-xl rounded-full p-2 ring-1 ring-white/10 focus-within:ring-indigo-500/50 focus-within:ring-2 transition-all shadow-2xl">
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
                        <span className="text-xs font-mono text-gray-500 whitespace-nowrap group-focus-within:text-indigo-400 transition-colors"><span className="font-bold mr-1">{filteredImages.length}</span> 案例</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
                {displayTags.map((tag) => (
                    <button 
                        key={tag} 
                        onClick={() => setSearch(tag === search ? "" : tag)} 
                        className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-300 backdrop-blur-md ${search === tag ? 'bg-white text-black border-white scale-105' : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5'}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* --- 瀑布流列表 --- */}
      <div className="max-w-[1960px] mx-auto px-4 py-12 min-h-[400px]">
        {filteredImages.length > 0 ? (
            <div className="columns-1 gap-6 sm:columns-2 xl:columns-3 2xl:columns-4">
            {filteredImages.map((image) => (
                <div 
                key={image.id}
                onClick={() => setSelectedId(image.id)}
                className="group relative mb-6 block w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#1e1e20] border border-white/5 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-900/10 hover:border-white/20"
                >
                <img 
                    src={image.url} 
                    alt={image.title || "AI Art"} 
                    className="w-full h-auto object-cover transform transition will-change-auto"
                    loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 pb-4 px-4">
                    <h3 className="font-bold text-gray-100 text-sm line-clamp-1 tracking-wide">{image.title}</h3>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500 border border-dashed border-white/10 rounded-xl bg-white/5">
                <Search size={48} className="mb-4 opacity-20" />
                <p>未找到内容</p>
                <button onClick={() => setSearch("")} className="mt-4 text-indigo-400 text-sm underline">清空搜索</button>
            </div>
        )}
      </div>

      {/* --- 弹窗 (上下结构布局) --- */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* 背景遮罩 */}
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-lg transition-opacity" 
            onClick={() => setSelectedId(null)} 
          />
          
          {/* 弹窗容器：最大宽度限制，居中，允许滚动 */}
          <div className="relative w-full max-w-4xl bg-[#18181b] shadow-2xl ring-1 ring-white/10 rounded-2xl flex flex-col my-auto animate-in zoom-in-95 duration-200 overflow-hidden">
            
            {/* 1. 图片区域 (上方) */}
            <div className="relative w-full bg-[#09090b] flex items-center justify-center min-h-[400px] max-h-[70vh] p-2 group/nav border-b border-white/5">
              <img 
                src={selectedImage.url} 
                className="w-auto h-auto max-h-full max-w-full object-contain shadow-2xl rounded-lg" 
                alt="Detail" 
              />
              
              {/* 悬浮按钮 */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200">
                  <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/80 border border-white/10 backdrop-blur-md" title="查看原图"><Maximize2 size={18}/></button>
                  <button onClick={() => setSelectedId(null)} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/80 border border-white/10 backdrop-blur-md" title="关闭"><X size={18}/></button>
              </div>

              {/* 左右导航 */}
              {selectedIndex > 0 && (
                <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/5 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-md"><ChevronLeft size={24} /></button>
              )}
              {selectedIndex < images.length - 1 && (
                <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/5 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-md"><ChevronRight size={24} /></button>
              )}
            </div>

            {/* 2. 信息区域 (下方) */}
            <div className="w-full bg-[#18181b] p-6 sm:p-8">
              
              {/* 标题行 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
                 <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300 uppercase tracking-wider">
                            AI Generated
                        </span>
                        {selectedImage.tags?.map((tag: string) => (
                            <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-400">#{tag}</span>
                        ))}
                    </div>
                    <h2 className="text-2xl font-bold text-white leading-tight">{selectedImage.title}</h2>
                 </div>
                 
                 {/* 复制按钮 */}
                 {selectedImage.prompt && (
                    <button 
                        onClick={copyPrompt} 
                        className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition-all border shrink-0 ${copied ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30'}`}
                    >
                        {copied ? <Check size={16}/> : <Copy size={16}/>} 
                        {copied ? "已复制提示词" : "复制提示词"}
                    </button>
                 )}
              </div>

              {/* 提示词内容 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2"><Terminal size={14}/> Prompt</h3>
                    <div className="rounded-xl bg-[#0a0a0a] border border-white/10 p-5 shadow-inner">
                        <div className="text-sm leading-7 text-gray-300 font-mono select-text whitespace-pre-wrap break-words">
                            <ReactMarkdown components={{ p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} /> }}>
                                {selectedImage.prompt.replace(/\n/g, '  \n')}
                            </ReactMarkdown>
                        </div>
                    </div>
                 </div>

                 {/* 侧边详情 */}
                 <div className="lg:col-span-1 space-y-6">
                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">Image Details</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-xs text-gray-500">ID</span>
                                <span className="text-xs font-mono text-gray-300 truncate max-w-[100px]" title={selectedImage.public_id}>{selectedImage.public_id}</span>
                            </div>
                            <div className="flex justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-xs text-gray-500">Dimensions</span>
                                <span className="text-xs font-mono text-gray-300">{selectedImage.width} × {selectedImage.height}</span>
                            </div>
                            <div className="flex justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-xs text-gray-500">Format</span>
                                <span className="text-xs font-mono text-gray-300 uppercase">{selectedImage.format}</span>
                            </div>
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
