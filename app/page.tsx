import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    // 移除背景色 class，使用 globals.css 里的渐变
    <main className="min-h-screen text-white relative">
      
      {/* ✨ 1. 多彩流动背景 (颜色更丰富) ✨ */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* 左上：明亮的青色光晕 */}
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        
        {/* 右上：鲜艳的洋红色光晕 */}
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        
        {/* 底部：温暖的琥珀色/紫色光晕 */}
        <div className="absolute -bottom-32 left-[20%] w-[40rem] h-[40rem] bg-violet-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        
        {/* 叠加噪点纹理，增加质感 */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 2. 顶部导航栏 (更通透的毛玻璃) */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-white/5 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-[1960px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-purple-500/30">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                 <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.001c-3.7 2.881-8.199 5.264-13.254 5.264a.75.75 0 01-.75-.75c0-5.055 2.383-9.554 6.084-12.435zm.895 13.045c.62.316 1.256.616 1.906.897.66.286 1.332.553 2.016.797.675.24 1.36.46 2.052.656a.75.75 0 00.932-.871c-.24-.877-.52-1.742-.84-2.593a28.27 28.27 0 00-1.12-2.613c-.41-.853-.86-1.686-1.347-2.493a26.634 26.634 0 00-4.6-5.698A26.657 26.657 0 003.513 4.29c-.808.487-1.64.938-2.493 1.348-.87.419-1.745.794-2.613 1.12-.851.32-1.716.6-2.593.84a.75.75 0 00-.87.932c.195.692.416 1.377.656 2.052.244.684.51 1.356.796 2.016.281.65.581 1.286.898 1.906z" clipRule="evenodd" />
               </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white drop-shadow-md font-sans">Doro Gallery</span>
          </div>
        </div>
      </header>

      {/* 3. 核心交互区域 */}
      <Gallery images={images} />
      
      {/* 4. 底部版权 */}
      <footer className="mt-24 border-t border-white/10 bg-black/20 backdrop-blur-sm p-12">
        <div className="max-w-[1960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500" />
                    <span className="font-bold text-white/90 text-sm">Doro Gallery</span>
                </div>
                <p className="text-white/60 text-xs max-w-xs">
                    汇聚全网高质量 AI 绘画提示词，激发无限创作灵感。
                </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1">
                <p className="text-white/50 text-xs">
                    &copy; 2025 Doro Gallery. All rights reserved.
                </p>
            </div>
        </div>
      </footer>
    </main>
  );
}
