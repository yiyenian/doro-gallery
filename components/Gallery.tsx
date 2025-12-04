'use client';

import { useState, useEffect, useMemo } from 'react';
import { X, Copy, Check, Search, Sparkles, Image as ImageIcon, Terminal, ExternalLink, ChevronLeft, ChevronRight, Hash, Languages } from 'lucide-react';
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
    const promptCn = (image.promptCn || "").toLowerCase();
    const promptEn = (image.promptEn || "").toLowerCase();
    const tags = (image.tags || []).join(" ").toLowerCase();
    return title.includes(term) || prompt.includes(term) || promptCn.includes(term) || promptEn.includes(term) || tags.includes(term);
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

  // 提示词组件 (背景改为半透明)
  const PromptBox = ({ title, content, isCopied, onCopy, icon: Icon }: any) => (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
            <Icon size={14} className="text-indigo-400/80" />
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{title}</h3>
        </div>
        <button 
          onClick={() => onCopy(content)} 
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-bold transition-all border ${isCopied ? 'bg-green-500/20 border-green-500/30 text-green-300' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20'}`}
        >
          {isCopied ? <Check size={14}/> : <Copy size={14}/>} {isCopied ? "已复制" : "复制"}
        </button>
      </div>
      <div className="relative group">
        {/* 🟢 核心修改：提示词框使用半透明黑 + 模糊，透出下方内容 */}
        <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 p-4 shadow-inner transition-colors hover:bg-black/50">
            <div className="text-xs leading-6 text-gray-300 font-mono select-text whitespace-pre-wrap break-words max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent pr-2">
                <ReactMarkdown components={{ p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} /> }}>
                    {content.replace(/\n/g, '  \n')}
                </ReactMarkdown>
            </div>
        </div>
      </div>
    </div>
  );

  const defaultTags = ['人像摄影', '赛博朋克', '二次元', '3D渲染', 'Logo设计', '中国风', '建筑设计', '科幻'];
  const displayTags = allTags.length > 0 ? allTags : defaultTags;

  return (
    <>
      {/* --- 首页瀑布流 --- */}
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 text-center px-4 w-full overflow-hidden bg-[#121212] border-b border-white/5">
         <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-purple-600/40 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob"></div>
            <div className="absolute top-[-10%] right-[10%] w-96 h-96 bg-indigo-600/40 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-pink-600/40 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)] backdrop-blur-md">
                <Sparkles size={10} className="text-indigo-400" />
                AI Prompt Library
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl leading-tight drop-shadow-2xl">
              探索
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 px-3 font-black animate-pulse">
                无限想象
              </span>
            </h1>
            
            <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg mb-12 leading-relaxed font-light">
              Doro Gallery 收录全网高质量 AI 生成图像与提示词。<br/>
              复制 Prompt，激发灵感，创造属于你的杰作。
            </p>

            <div className="max-w-2xl mx-auto relative group z-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-60 blur-lg transition duration-1000"></div>
                <div className="relative flex items-center bg-[#121212]/80 backdrop-blur-xl rounded-full p-2 ring-1 ring-white/10 focus-within:ring-indigo-500/50 focus-within:ring-2 transition-all shadow-2xl">
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

            <div className="mt-10 flex flex-wrap justify-center gap-2">
                {displayTags.map((tag) => (
                    <button 
                        key={tag} 
                        onClick={() => setSearch(tag === search ? "" : tag)} 
                        className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-300 backdrop-blur-md ${search === tag ? 'bg-white text-black border-white' : 'bg-white/10 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30'}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
      </div>

      <div className="max-w-[1960px] mx-auto px-4 pb-20 min-h-[400px]">
        {filteredImages.length > 0 ? (
            <div className="columns-1 gap-6 sm:columns-2 xl:columns-3 2xl:columns-4">
            {filteredImages.map((image) => (
                <div 
                key={image.id}
                onClick={() => setSelectedId(image.id)}
                className="group relative mb-6 block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[#1e1e20]/60 border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/20 hover:border-white/20 backdrop-blur-sm"
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
                <p>未找到内容</p>
                <button onClick={() => setSearch("")} className="mt-4 text-indigo-400 text-sm underline">清空搜索</button>
            </div>
        )}
      </div>

      {/* --- 🟢 全屏弹窗 (毛玻璃通透版) --- */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* 🟢 核心修改 1：遮罩层改为 bg-black/60 + backdrop-blur-md */}
          {/* 这样你可以透过遮罩隐约看到首页的瀑布流内容 */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={() => setSelectedId(null)} />
          
          {/* 🟢 核心修改 2：弹窗主体背景改为 bg-[#121212]/85 + backdrop-blur-2xl */}
          {/* 这样弹窗本身也是一块磨砂玻璃，能透出一点点背后的光影 */}
          <div className="relative w-full max-w-5xl bg-[#121212]/85 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10 rounded-2xl flex flex-col my-auto animate-in zoom-in-95 duration-200 overflow-hidden z-50">
            
            {/* 顶部信息栏 */}
            <div className="flex items-start justify-between p-6 border-b border-white/5 bg-transparent shrink-0 z-10 sticky top-0">
                <div className="flex-1 mr-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight mb-2 drop-shadow-md">{selectedImage.title}</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-[10px] font-bold text-indigo-200 uppercase tracking-wider backdrop-blur-sm">
                            AI Generated
                        </span>
                        {selectedImage.tags?.map((tag: string) => (
                            <span key={tag} className="px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[10px] text-gray-300 backdrop-blur-sm">#{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="flex gap-2 shrink-0">
                   <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 text-gray-400 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-lg backdrop-blur-md" title="原图"><ExternalLink size={18}/></button>
                   <button onClick={() => setSelectedId(null)} className="p-2 text-gray-400 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-lg backdrop-blur-md" title="关闭"><X size={18}/></button>
                </div>
            </div>

            {/* 滚动区域 */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                
                {/* 图片展示区 (使用更透明的背景) */}
                <div className="relative w-full bg-black/20 flex items-center justify-center min-h-[300px] p-6 group/nav border-b border-white/5">
                    <img 
                        src={selectedImage.url} 
                        className="w-auto h-auto max-h-[60vh] max-w-full object-contain shadow-2xl rounded-lg" 
                        alt="Detail" 
                    />
                    {/* 导航 */}
                    {selectedIndex > 0 && (
                        <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/10 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-md"><ChevronLeft size={24} /></button>
                    )}
                    {selectedIndex < images.length - 1 && (
                        <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/10 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-md"><ChevronRight size={24} /></button>
                    )}
                </div>

                {/* 提示词区域 (背景全透明，让弹窗主体的毛玻璃生效) */}
                <div className="p-6 sm:p-8 bg-transparent">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {selectedImage.promptCn && (
                            <PromptBox title="中文提示词" content={selectedImage.promptCn} isCopied={copiedCn} onCopy={(t: string) => copyToClipboard(t, 'cn')} icon={Languages} />
                        )}
                        {selectedImage.promptEn && (
                            <PromptBox title="英文提示词" content={selectedImage.promptEn} isCopied={copiedEn} onCopy={(t: string) => copyToClipboard(t, 'en')} icon={Terminal} />
                        )}
                        {!selectedImage.promptCn && !selectedImage.promptEn && (
                            <PromptBox title="提示词" content={selectedImage.prompt || "No prompt available."} isCopied={copiedDefault} onCopy={(t: string) => copyToClipboard(t, 'default')} icon={Terminal} />
                        )}
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
