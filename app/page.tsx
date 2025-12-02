import { getImages } from '../utils/cloudinary';
import Gallery from '../components/Gallery';

export const revalidate = 0; 

export default async function Page() {
  const images = await getImages();

  return (
    <main className="min-h-screen bg-[#050505]">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[100px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-900/10 blur-[100px] opacity-50" />
      </div>

      <header className="fixed top-0 left-0 z-40 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1960px] items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/20" />
            <span className="text-lg font-bold tracking-tight text-white">Doro</span>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-xs font-medium text-gray-500 uppercase tracking-widest px-2 py-1 rounded border border-white/10">Beta</span>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-16 text-center px-4">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
            Infinite
          </span> Imagination
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          High-quality AI generated imagery archive. <br/>
          Copy prompts, remix styles, and create.
        </p>
      </div>

      <Gallery images={images} />
      
      <footer className="mt-20 border-t border-white/5 bg-[#0a0a0a] p-8 text-center text-gray-600 text-sm">
        <p>&copy; 2025 Doro Gallery.</p>
      </footer>
    </main>
  );
}
