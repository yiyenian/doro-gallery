import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    <main className="min-h-screen bg-[#121212] selection:bg-indigo-500/30 text-white relative">
      
      {/* 全局背景光效 */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[120px] opacity-30 animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px] opacity-30 animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[120px] opacity-25 animate-blob animation-delay-4000 mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#121212]/80 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-[1960px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* Doro 专属 Logo (几何 D) */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20 group hover:scale-105 transition-transform duration-300">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow-md">
                 <path d="M15 12H9V16H15C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8H9V12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M6 4V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white/95 font-sans">Doro Gallery</span>
          </div>
          
          {/* 右侧清空，不留任何标签 */}
          <div></div>
        </div>
      </header>

      {/* 核心交互区域 */}
      <Gallery images={images} />
      
      {/* 底部页脚已移除 */}
    </main>
  );
}
