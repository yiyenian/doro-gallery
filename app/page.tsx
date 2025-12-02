import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

// 强制动态渲染，保证上传图片后刷新能看到
export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    <main className="min-h-screen">
      {/* 极光背景 */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      {/* 顶部导航 */}
      <header className="fixed top-0 left-0 z-40 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1960px] items-center justify-between px-6">
          <span className="text-lg font-bold tracking-tight">Doro</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Gallery Beta</span>
        </div>
      </header>

      {/* Hero 标题区 */}
      <div className="pt-32 pb-20 text-center px-4">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Infinite
          </span> Imagination
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          High-quality AI generated imagery and their prompts.
        </p>
      </div>

      {/* 瀑布流组件 */}
      <Gallery images={images} />
    </main>
  );
}
