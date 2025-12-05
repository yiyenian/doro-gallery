import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

// 强制动态渲染
export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    // 🔴 移除 min-h-screen 上的 padding，确保 Gallery 可以直接吸顶
    <main className="min-h-screen bg-[#121212] selection:bg-indigo-500/30 text-white relative">
      
      {/* 全局背景光效 */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[120px] opacity-30 animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px] opacity-30 animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[120px] opacity-25 animate-blob animation-delay-4000 mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* 🔴 核心：没有任何 Header，直接渲染 Gallery */}
      <Gallery images={images} />
      
    </main>
  );
}
