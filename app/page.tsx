import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

// 强制动态渲染，保证上传图片后刷新能看到
export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    // 背景色改为 #121212，视觉更柔和
    <main className="min-h-screen bg-[#121212] selection:bg-indigo-500/30">
      
      {/* 1. 背景氛围光效 */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[120px] opacity-30" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px] opacity-30" />
      </div>

      {/* 2. 顶部导航栏 */}
      <header className="fixed top-0 left-0 z-40 w-full border-b border-white/5 bg-[#121212]/80 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-[1960px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                 <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.001c-3.7 2.881-8.199 5.264-13.254 5.264a.75.75 0 01-.75-.75c0-5.055 2.383-9.554 6.084-12.435zm.895 13.045c.62.316 1.256.616 1.906.897.66.286 1.332.553 2.016.797.675.24 1.36.46 2.052.656a.75.75 0 00.932-.871c-.24-.877-.52-1.742-.84-2.593a28.27 28.27 0 00-1.12-2.613c-.41-.853-.86-1.686-1.347-2.493a26.634 26.634 0 00-4.6-5.698A26.657 26.657 0 003.513 4.29c-.808.487-1.64.938-2.493 1.348-.87.419-1.745.794-2.613 1.12-.851.32-1.716.6-2.593.84a.75.75 0 00-.87.932c.195.692.416 1.377.656 2.052.244.684.51 1.356.796 2.016.281.65.581 1.286.898 1.906z" clipRule="evenodd" />
               </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white/90">Doro Gallery</span>
          </div>
          <div className="flex items-center gap-4">
             <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
                <span className="hover:text-white cursor-pointer transition-colors">Explore</span>
                <span className="hover:text-white cursor-pointer transition-colors">Prompts</span>
             </nav>
             <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
             <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full">BETA</span>
          </div>
        </div>
      </header>

      {/* 3. Hero 核心区域 */}
      <div className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 text-center px-4 max-w-5xl mx-auto">
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
          Discover the Art of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
            AI Generation
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl mb-10 leading-relaxed">
          The largest library of AI-generated imagery and prompts. <br className="hidden sm:block"/>
          Find inspiration, copy prompts, and create your own masterpieces.
        </p>

        {/* 拟态搜索框 */}
        <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-50 blur transition duration-1000"></div>
            <div className="relative flex items-center bg-[#18181b] rounded-full p-2 ring-1 ring-white/10 focus-within:ring-indigo-500/50 transition-all shadow-2xl">
                <div className="pl-4 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                </div>
                <input 
                    type="text" 
                    placeholder="Search for 'Cyberpunk', 'Portrait', 'Anime'..." 
                    className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none text-base"
                    disabled
                />
                <div className="hidden sm:flex pr-2">
                    <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-gray-400">
                        <span className="text-[10px]">⌘</span>K
                    </kbd>
                </div>
            </div>
        </div>

        {/* 热门标签 */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['Portrait', 'Landscape', 'Cyberpunk', 'Anime', '3D Render', 'Logo', 'Architecture'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all cursor-default">
                    {tag}
                </span>
            ))}
        </div>
      </div>

      {/* 4. 瀑布流组件 (Client Side) */}
      <Gallery images={images} />
      
      {/* 5. 底部版权 */}
      <footer className="mt-20 border-t border-white/5 bg-[#121212] p-12">
        <div className="max-w-[1960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-gradient-to-tr from-indigo-600 to-purple-600" />
                <span className="font-bold text-white/80">Doro Gallery</span>
            </div>
            <p className="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Doro Gallery. All rights reserved.
            </p>
        </div>
      </footer>
    </main>
  );
}
