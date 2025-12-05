import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    // 🟢 移除 overflow-x-hidden，防止干扰 sticky 吸顶效果
    <main className="min-h-screen bg-slate-50/50 selection:bg-indigo-100 text-slate-900 relative">
      
      {/* 背景光效 (Fixed 定位，不占空间，不干扰布局) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* 左上：粉紫 */}
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-200/40 blur-[100px] animate-blob" />
        
        {/* 右上：天蓝 */}
        <div className="absolute top-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-200/40 blur-[100px] animate-blob animation-delay-2000" />
        
        {/* 底部：粉红 */}
        <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] rounded-full bg-pink-200/40 blur-[100px] animate-blob animation-delay-4000" />
        
        {/* 纹理 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* 核心交互区域 */}
      <Gallery images={images} />
      
    </main>
  );
}
