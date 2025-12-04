import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';
import BackgroundEffect from '../components/BackgroundEffect';

export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    <main className="min-h-screen bg-[#121212] selection:bg-indigo-500/30 text-white">
      
      {/* 背景动效 */}
      <BackgroundEffect />

      {/* 顶部导航栏 (高度减小 h-16 -> h-14) */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#121212]/80 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-14 max-w-[1960px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            {/* 新设计的 Doro Logo (简约几何 D) */}
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white font-bold">
                 <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h7.5a7.5 7.5 0 000-15H5zm0 2h7.5a5.5 5.5 0 010 11H5V5z" />
               </svg>
            </div>
            <span className="text-base font-bold tracking-tight text-white/90 font-sans">Doro Gallery</span>
          </div>
          
          {/* 右侧留空，移除 Beta 标签 */}
          <div></div>
        </div>
      </header>

      {/* 交互区域 */}
      <Gallery images={images} />
      
      {/* 页脚 */}
      <footer className="mt-16 border-t border-white/5 bg-[#121212] p-8">
        <div className="max-w-[1960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <div className="h-3 w-3 rounded bg-gradient-to-tr from-indigo-600 to-purple-600" />
                    <span className="font-bold text-white/80 text-xs">Doro Gallery</span>
                </div>
                <p className="text-gray-600 text-[10px]">
                    汇聚全网高质量 AI 绘画提示词。
                </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
                <p className="text-gray-600 text-xs">
                    &copy; 2025 Doro Gallery.
                </p>
            </div>
        </div>
      </footer>
    </main>
  );
}
