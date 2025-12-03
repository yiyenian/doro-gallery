import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    <main className="min-h-screen bg-[#121212]">
      {/* 背景 */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[120px] opacity-30" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px] opacity-30" />
      </div>

      {/* 导航 */}
      <header className="fixed top-0 left-0 z-40 w-full border-b border-white/5 bg-[#121212]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1960px] items-center px-6">
           <span className="text-lg font-bold text-white tracking-tight">Doro Gallery</span>
        </div>
      </header>

      {/* 标题 */}
      <div className="pt-32 pb-12 text-center px-4">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Infinite</span> Imagination
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">High-quality AI generated imagery and prompts.</p>
      </div>

      <Gallery images={images} />
    </main>
  );
}
