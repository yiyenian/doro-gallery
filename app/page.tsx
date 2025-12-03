import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

// 强制动态渲染，确保每次刷新都能获取最新图片
export const revalidate = 0; 

export default async function Page() {
  // 服务端获取数据
  const images = await getImages();

  return (
    <main className="min-h-screen bg-[#121212] selection:bg-indigo-500/30 text-white">
      
      {/* 1. 全局背景光效 (极光氛围) */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[120px] opacity-30" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px] opacity-30" />
      </div>

      {/* 2. 顶部导航栏 (已按要求清理右上角) */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#121212]/80 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-[1960px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* Logo 图标 */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                 <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.001c-3.7 2.881-8.199 5.264-13.254 5.264a.75.75 0 01-.75-.75c0-5.055 2.383-9.554 6.084-12.435zm.895 13.045c.62.316 1.256.616 1.906.897.66.286 1.332.553 2.016.797.675.24 1.36.46 2.052.656a.75.75 0 00.932-.871c-.24-.877-.52-1.742-.84-2.593a28.27 28.27 0 00-1.12-2.613c-.41-.853-.86-1.686-1.347-2.493a26.634 26.634 0 00-4.6-5.698A26.657 26.657 0 003.513 4.29c-.808.487-1.64.938-2.493 1.348-.87.419-1.745.794-2.613 1.12-.851.32-1.716.6-2.593.84a.75.75 0 00-.87.932c.195.692.416 1.377.656 2.052.244.684.51 1.356.796 2.016.281.65.581 1.286.898 1.906z" clipRule="evenodd" />
               </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white/90 font-sans">Doro Gallery</span>
          </div>
          
          {/* 右侧留空 */}
          <div></div>
        </div>
      </header>

      {/* 3. 核心交互区域 (Hero、搜索、瀑布流都在这里) */}
      <Gallery images={images} />
      
      {/* 4. 底部版权 (更新为 2025) */}
      <footer className="mt-20 border-t border-white/5 bg-[#121212] p-12">
        <div className="max-w-[1960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <div className="h-4 w-4 rounded bg-gradient-to-tr from-indigo-600 to-purple-600" />
                    <span className="font-bold text-white/80 text-sm">Doro Gallery</span>
                </div>
                <p className="text-gray-500 text-xs max-w-xs">
                    汇聚全网高质量 AI 绘画提示词，激发无限创作灵感。
                </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1">
                <p className="text-gray-600 text-xs">
                    &copy; 2025 Doro Gallery. All rights reserved.
                </p>
                <p className="text-gray-700 text-[10px] font-mono uppercase tracking-wider">
                    Designed for AI Creators
                </p>
            </div>
        </div>
      </footer>
    </main>
  );
}
