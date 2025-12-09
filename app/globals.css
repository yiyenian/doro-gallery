import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    // 🟢 修改：使用 Slate-900 作为主背景，不再是 #121212
    <main className="min-h-screen bg-[#0f172a] selection:bg-indigo-500/30 text-slate-100 relative overflow-x-hidden">
      
      {/* 背景光效 */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* 左上紫光：透明度调高一点 */}
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[120px] opacity-40 animate-blob mix-blend-screen" />
        
        {/* 右上蓝光 */}
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[100px] opacity-40 animate-blob animation-delay-2000 mix-blend-screen" />
        
        {/* 底部青光 */}
        <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] rounded-full bg-cyan-600/20 blur-[120px] opacity-30 animate-blob animation-delay-4000 mix-blend-screen" />
        
        {/* 纹理 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <Gallery images={images} />
      
    </main>
  );
}
