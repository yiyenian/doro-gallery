'use client';

import { useState, useEffect, useMemo } from 'react';
import { X, Copy, Check, Search, Sparkles, Terminal, ExternalLink, ChevronLeft, ChevronRight, Hash, Languages, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// --- 独立的提示词组件 ---
const PromptBox = ({ title, content, icon: Icon }: { title: string, content: string, icon: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="mb-6 last:mb-0 w-full">
      {/* 标题栏 */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
            <Icon size={16} className="text-indigo-400" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">{title}</h3>
        </div>
        <button 
          onClick={handleCopy} 
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all border ${isCopied ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20'}`}
        >
          {isCopied ? <Check size={14}/> : <Copy size={14}/>} {isCopied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* 内容框 */}
      <div className="relative group w-full">
        {/* 🟢 核心修改：增强毛玻璃特效 (backdrop-blur-xl + bg-black/30) */}
        <div className="w-full rounded-xl bg-black/30 backdrop-blur-xl border border-white/10 p-5 shadow-xl transition-colors hover:border-white/20">
            <div className="text-sm leading-7 text-gray-200 font-mono select-text whitespace-pre-wrap break-words max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-2">
                <ReactMarkdown components={{ p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} /> }}>
                    {content.replace(/\n/g, '  \n')}
                </ReactMarkdown>
            </div>
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
      {/* --- 首页 Hero 区域 --- */}
      {/* 🔴 核心修改：pt-16 (64px)，紧贴顶部导航栏下沿，消除多余留白 */}
      <div className="relative pt-16 pb-4 px-4 w-full bg-transparent border-b border-white/5">
         
         {/* 背景光效 */}
         <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-blob"></div>
            <div className="absolute top-[-10%] right-[10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-[1960px] mx-auto relative z-10">
            
            {/* 第一行：工具栏布局 */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                
                {/* 左侧：标题组 */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left overflow-hidden">
                    <div className="flex items-center gap-2 shrink-0">
                        <Sparkles size={18} className="text-indigo-400" />
                        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap">
                          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Imagination</span>
                        </h1>
                    </div>

                    <div className="hidden sm:block w-px h-6 bg-white/20"></div>

                    <p className="text-gray-400 text-xs sm:text-sm font-light opacity-80 whitespace-nowrap overflow-hidden text-ellipsis max-w-2xl">
                      High-quality AI generated imagery & prompts database. Create your masterpiece.
                    </p>
                </div>

                {/* 右侧：搜索框 */}
                <div className="w-full sm:w-auto lg:w-[300px] relative group z-10 shrink-0">
                    <div className="relative flex items-center bg-[#121212]/90 backdrop-blur-xl rounded-lg p-1 ring-1 ring-white/10 focus-within:ring-indigo-500/50 focus-within:ring-2 transition-all shadow-lg">
                        <div className="pl-3 text-gray-500"><Search className="w-3.5 h-3.5" /></div>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-full bg-transparent px-2 py-1.5 text-white placeholder-gray-600 focus:outline-none text-xs sm:text-sm"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {search && <button onClick={() => setSearch("")} className="p-1 rounded-full hover:bg-white/10 text-gray-400 transition mr-1"><X size={12} /></button>}
                        <div className="hidden sm:flex items-center pr-3 pl-2 border-l border-white/10 h-4">
                            <span className="text-[10px] font-mono text-gray-500 whitespace-nowrap group-focus-within:text-indigo-400 transition-colors"><span className="font-bold mr-0.5">{images.length}</span></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 第二行：Tags */}
            <div className="border-t border-white/5 pt-3 flex items-start gap-2">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider py-1.5 shrink-0">Tags</div>
                
                <div className={`flex flex-wrap justify-start gap-1.5 transition-all duration-300 overflow-hidden w-full ${isTagsExpanded ? 'max-h-[500px]' : 'max-h-[28px]'}`}>
                    {displayTags.map((tag) => (
                        <button 
                            key={tag} 
                            onClick={() => setSearch(tag === search ? "" : tag)} 
                            className={`px-2.5 py-0.5 rounded-md border text-[10px] font-medium transition-all duration-200 backdrop-blur-md whitespace-nowrap
                                ${search === tag ? 'bg-white text-black border-white' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30'}
                            `}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <button 
                    onClick={() => setIsTagsExpanded(!isTagsExpanded)}
                    className="p-1 rounded-md bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 mt-0"
                    title={isTagsExpanded ? "Collapse" : "Expand"}
                >
                    {isTagsExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                </button>
            </div>

        </div>
      </div>

      {/* --- 瀑布流列表 --- */}
      <div className="max-w-[1960px] mx-auto px-4 pb-20 pt-6 min-h-[400px]">
        {filteredImages.length > 0 ? (
            <div className="columns-1 gap-6 sm:columns-2 xl:columns-3 2xl:columns-4">
            {filteredImages.map((image) => (
                <div 
                key={image.id}
                onClick={() => setSelectedId(image.id)}
                className="group relative mb-6 block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[#1e1e20] border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/20 hover:border-white/20 backdrop-blur-sm break-inside-avoid"
                >
                <img 
                    src={image.url} 
                    alt={image.title || "AI Art"} 
                    className="w-full h-auto object-cover transform transition will-change-auto"
                    loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-12 pb-4 px-4">
                    <h3 className="font-bold text-gray-100 text-xs sm:text-sm line-clamp-1 tracking-wide">
                        {image.title}
                    </h3>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center h-48 text-gray-500 border border-dashed border-white/10 rounded-xl bg-white/5">
                <Search size={32} className="mb-2 opacity-20" />
                <p>No results found</p>
                <button onClick={() => setSearch("")} className="mt-2 text-indigo-400 text-xs underline">Clear search</button>
            </div>
        )}
      </div>

      {/* --- 弹窗 (保持垂直布局) --- */}
      {selectedId !== null && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-black/90 backdrop-blur-lg transition-opacity" onClick={() => setSelectedId(null)} />
          
          <div className="relative w-full max-w-4xl bg-[#18181b] shadow-2xl ring-1 ring-white/10 rounded-2xl flex flex-col my-auto animate-in zoom-in-95 duration-200 overflow-hidden z-50 max-h-[95vh]">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#18181b]/95 backdrop-blur-md shrink-0 z-20 sticky top-0">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
                    <span className="text-indigo-400">Doro Gallery</span> / Preview
                </div>
                <div className="flex gap-2 shrink-0">
                   <button onClick={() => window.open(selectedImage.url, '_blank')} className="p-2 text-gray-400 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-lg" title="View Original"><ExternalLink size={18}/></button>
                   <button onClick={() => setSelectedId(null)} className="p-2 text-gray-400 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-lg" title="Close"><X size={18}/></button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                <div className="max-w-3xl mx-auto w-full pb-12">
                    
                    <div className="px-6 pt-8 pb-6">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300 uppercase tracking-wider">AI Generated</span>
                            {selectedImage.tags?.map((tag: string) => (
                                <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-400">#{tag}</span>
                            ))}
                        </div>
                        <h2 className="text-3xl font-bold text-white leading-tight tracking-tight">{selectedImage.title}</h2>
                    </div>

                    <div className="relative w-full flex items-center justify-center group/nav mb-8 px-6">
                        <img src={selectedImage.url} className="w-full h-auto rounded-lg shadow-2xl border border-white/5" alt="Detail" />
                        {selectedIndex > 0 && <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex - 1].id); }} className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/10 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-md"><ChevronLeft size={24} /></button>}
                        {selectedIndex < images.length - 1 && <button onClick={(e) => { e.stopPropagation(); setSelectedId(images[selectedIndex + 1].id); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 border border-white/10 transition opacity-0 group-hover/nav:opacity-100 backdrop-blur-md"><ChevronRight size={24} /></button>}
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
