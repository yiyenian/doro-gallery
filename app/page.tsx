import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    <main className="min-h-screen bg-[#121212] selection:bg-indigo-500/30">
      
      {/* 全局背景光效 */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[120px] opacity-30" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px] opacity-30" />
      </div>

      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 z-40 w-full border-b border-white/5 bg-[#121212]/80 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-[1960px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                 <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.001c-3.7 2.881-8.199 5.264-13.254 5.264a.75.75 0 01-.75-.75c0-5.055 2.383-9.554 6.084-12.435zm.895 13.045c.62.316 1.256.616 1.906.897.66.286 1.332.553 2.016.797.675.24 1.36.46 2.052.656a.75.75 0 00.932-.871c-.24-.877-.52-1.742-.84-2.593a28.27 28.27 0 00-1.12-2.613c-.41-.853-.86-1.686-1.347-2.493a26.634 26.634 0 00-4.6-5.698A26.657 26.657 0 003.513 4.29c-.808.487-1.64.938-2.493 1.348-.87.419-1.745.794-2.613 1.12-.851.32-1.716.6-2.593.84a.75.75 0 00-.87.932c.195.692.416 1.377.656 2.052.244.684.51 1.356.796 2.016.281.65.581 1.286.898 1.906z" clipRule="evenodd" />
               </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white/90 font-sans">Doro Gallery</span>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full">BETA</span>
          </div>
        </div>
      </header>

      {/* 🔴 此处移除了静态的 Hero 标题，交给 Gallery 组件渲染 */}
      <Gallery images={images} />
      
      <footer className="mt-20 border-t border-white/5 bg-[#121212] p-12 text-center text-gray-600 text-sm">
        <p>&copy; 2025 Doro Gallery. Powered by Vercel.</p>
      </footer>
    </main>
  );
}
