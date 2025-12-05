'use client';

import { useState, useEffect, useMemo } from 'react';
import { X, Copy, Check, Search, Sparkles, Terminal, ExternalLink, ChevronLeft, ChevronRight, Hash, Languages, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const PromptBox = ({ title, content, icon: Icon }: { title: string, content: string, icon: any }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="mb-6 last:mb-0 w-full">
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
            <Icon size={16} className="text-indigo-600" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{title}</h3>
        </div>
        <button 
          onClick={handleCopy} 
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all border shadow-sm ${isCopied ? 'bg-green-50 border-green-200 text-green-600' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
        >
          {isCopied ? <Check size={14}/> : <Copy size={14}/>} {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="relative group w-full rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden hover:border-indigo-200 transition-colors">
        <div className="px-4 py-4 text-sm leading-7 text-slate-700 font-mono select-text whitespace-pre-wrap break-words max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
            <ReactMarkdown components={{ p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} /> }}>
                {content.replace(/\n/g, '  \n')}
            </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default function Gallery({ images }: { images: any[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copiedCn, setCopiedCn] = useState(false);
  const [copiedEn, setCopiedEn] = useState(false);
  const [copiedDefault, setCopiedDefault] = useState(false);
  const [search, setSearch] = useState("");
  const [isTagsExpanded, setIsTagsExpanded] = useState(false);

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

  const defaultTags = ['Portrait', 'Cyberpunk', 'Anime', '3D Render', 'Logo Design', 'Chinese Style', 'Architecture', 'Sci-Fi'];
  const displayTags = allTags.length > 0 ? allTags : defaultTags;

  return (
    <>
      {/* --- Hero 区域 (浅色吸顶) --- */}
      <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm transition-all">
         
         {/* 背景光效 */}
         <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-0 left-[20%] w-96 h-96 bg-purple-200/50 rounded-full blur-[100px]"></div>
            <div className="absolute top-0 right-[20%] w-96 h-96 bg-cyan-200/50 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-[1960px] mx-auto px-4 sm:px-6 pt-4 pb-3">
            
            {/* 第一行：全能通栏 (Flex Row) */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                
                {/* 左侧组合：Logo | 标题 | 描述 */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-left overflow-hidden">
                    
                    {/* Logo */}
                    <div className="flex items-center gap-2 shrink-0 select-none group cursor-pointer">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-md shadow-indigo-200">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                             <path d="M15 12H9V16H15C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8H9V12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                             <path d="M6 4V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-slate-900 font-sans">Doro Gallery</span>
                    </div>

                    {/* 分割线 1 */}
                    <div className="hidden sm:block w-px h-5 bg-slate-300 shrink-0"></div>

                    {/* 标题 & 描述 (同一行，字体加粗) */}
                    <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
                        {/* 标题 */}
                        <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-slate-800 shrink-0">
                          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Imagination</span>
                        </h1>

                        {/* 分割线 2 */}
                        <span className="text-slate-300 text-lg font-light hidden md:block">|</span>

                        {/* 🔴 核心修改：描述文字样式升级 (加粗、变大、黑色) */}
                        <p className="text-sm sm:text-base font-bold text-slate-700 truncate hidden md:block">
                          High-quality AI generated imagery & prompts database.
                        </p>
                    </div>
                </div>

                {/* 右侧：搜索框 */}
                <div className="w-full sm:w-auto lg:w-[280px] relative group shrink-0">
                    <div className="relative flex items-center bg-white rounded-lg border border-slate-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all h-9 shadow-sm">
                        <div className="pl-2.5 text-slate-400"><Search className="w-3.5 h-3.5" /></div>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-full bg-transparent px-2 py-1 text-slate-700 placeholder-slate-400 focus:outline-none text-xs h-full"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {search && <button onClick={() => setSearch("")} className="p-1 text-slate-400 hover:text-slate-600 transition mr-1"><X size={12} /></button>}
                        <div className="hidden sm:flex items-center pr-2.5 pl-2 border-l border-slate-100 h-4">
                            <span className="text-[9px] font-mono text-slate-400 whitespace-nowrap"><span className="font-bold text-indigo-600 mr-0.5">{images.length}</span> CASES</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 第二行：Tags */}
            <div className="border-t border-slate-100 pt-3 flex items-start gap-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider py-1 shrink-0 mt-px">Tags</div>
                <div className={`flex flex-wrap justify-start gap-1.5 transition-all duration-300 overflow-hidden w-full ${isTagsExpanded ? 'max-h-[500px]' : 'max-h-[28px]'}`}>
                    {displayTags.map((tag) => (
                        <button 
                            key={tag} 
                            onClick={() => setSearch(tag === search ? "" : tag)} 
                            className={`px-2.5 py-0.5 rounded-md border text-[10px] font-medium transition-all duration-200 whitespace-nowrap h-[26px] flex items-center shadow-sm
                                ${search === tag 
                                    ? 'bg-slate-900 text-white border-slate-900' 
                                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300'}
                            `}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <button 
                    onClick={() => setIsTagsExpanded(!isTagsExpanded)}
                    className="p-1 rounded-md bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors shrink-0 mt-0 h-[24px] w-[24px] flex items-center justify-center shadow-sm"
                >
                    {isTagsExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                </button>
            </div>
        </div>
      </div>

      {/* --- 瀑布流列表 --- */}
      <div className="max-w-[1960px] mx-auto px-4 pb-20 pt-6 min-h-[100vh]">
        {filteredImages.length > 0 ? (
            <div className="columns-1 gap-6 sm:columns-2 xl:columns-3 2xl:columns-4">
            {filteredImages.map((image) => (
                <div 
                key={image.id}
                onClick={() => setSelectedId(image.id)}
                className="group relative mb-6 block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-100 hover:border-indigo-200 break-inside-avoid shadow-sm"
                >
                <img 
                    src={image.url} 
                    alt={image.title || "AI Art"} 
                    className="w-full h-auto object-cover transform transition will-change-auto"
                    loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent pt-12 pb-4 px-4">
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm line-clamp-1 tracking-wide">
                        {image.title}
                    </h3>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center h-48 text-slate-400 border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                <Search size={32} className="mb-2 opacity-20" />
                <p>No results found</p>
                <button onClick={() => setSearch("")} className="mt-2 text-indigo-500 text-xs underline font-medium">Clear search</button>
            </div>
        )}
      </div>

      {/* --- 弹窗 (浅色版) --- */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" onClick={() => setSelectedId(null)} />
          
          <div className="relative w-full max-w-4xl bg-white shadow-2xl shadow-slate-200/50 ring-1 ring-slate-900/5 rounded-2xl flex flex-col my-auto animate-in zoom-in-95 duration-200 overflow-hidden z-50 max-h-[95vh]">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/90 backdrop-blur-md shrink-0 z-20 sticky top-0">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <span className="text-indigo-600">Doro Gallery</span> / Preview
                </div>
                <div className="flex gap-2 shrink-0">
                   <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 text-slate-400 hover:text-slate-700 transition bg-slate-100 hover:bg-slate-200 rounded-lg" title="Original"><ExternalLink size={18}/></button>
                   <button onClick={() => setSelectedId(null)} className="p-2 text-slate-400 hover:text-slate-700 transition bg-slate-100 hover:bg-slate-200 rounded-lg" title="Close"><X size={18}/></button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                <div className="max-w-3xl mx-auto w-full pb-12">
                    
                    <div className="px-6 pt-8 pb-6">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-600 uppercase tracking-wider">AI Generated</span>
                            {selectedImage.tags?.map((tag: string) => (
                                <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] text-slate-600">#{tag}</span>
                            ))}
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 leading-tight tracking-tight">{selectedImage.title}</h2>
                    </div>

                    <div className="relative w-full flex items-center justify-center group/nav mb-8 px-6">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                        <img src={selectedImage.url} className="w-full h-auto rounded-lg shadow-2xl shadow-slate-300/50 border border-slate-200/50 z-10" alt="Detail" />
                        
                        {selectedIndex > 0 && <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 text-slate-700 hover:text-slate-900 hover:bg-white shadow-lg border border-slate-200 transition z-20 backdrop-blur-md"><ChevronLeft size={24} /></button>}
                        {selectedIndex < images.length - 1 && <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 text-slate-700 hover:text-slate-900 hover:bg-white shadow-lg border border-slate-200 transition z-20 backdrop-blur-md"><ChevronRight size={24} /></button>}
                    </div>

                    <div className="px-6 w-full">
                        <div className="w-full space-y-6">
                            {selectedImage.promptCn && <PromptBox title="Chinese Prompt" content={selectedImage.promptCn} icon={Languages} />}
                            {selectedImage.promptEn && <PromptBox title="English Prompt" content={selectedImage.promptEn} icon={Terminal} />}
                            {!selectedImage.promptCn && !selectedImage.promptEn && <PromptBox title="Prompt" content={selectedImage.prompt || "No prompt available."} icon={Terminal} />}
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
