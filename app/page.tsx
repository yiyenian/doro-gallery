import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    // 🟢 修改：背景透明，透出 globals.css 的渐变
    <main className="min-h-screen bg-transparent selection:bg-indigo-500/30 text-white relative overflow-x-hidden">
      
      {/* 背景光效 */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* 左上紫光 */}
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/30 blur-[120px] animate-blob mix-blend-screen" />
        {/* 右上蓝光 */}
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
        {/* 底部青光 */}
        <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] rounded-full bg-cyan-600/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
        {/* 网格纹理 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-14 max-w-[1960px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/30 group hover:scale-105 transition-transform duration-300">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow-md">
                 <path d="M15 12H9V16H15C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8H9V12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M6 4V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
            <span className="text-base font-bold tracking-tight text-slate-100 font-sans">Doro Gallery</span>
          </div>
          <div></div>
        </div>
      </header>

      <Gallery images={images} />
      
    </main>
  );
}
