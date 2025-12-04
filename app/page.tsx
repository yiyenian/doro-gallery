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

      {/* 🔴 删除了 fixed header，只保留 Gallery 组件 */}
      <Gallery images={images} />
      
      <footer className="mt-24 border-t border-white/10 bg-black/20 backdrop-blur-sm p-12">
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
                    Designed for Creators
                </p>
            </div>
        </div>
      </footer>
    </main>
  );
}
