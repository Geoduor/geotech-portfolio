import PortfolioScene from './components/PortfolioScene';

export default function Home() {
  return (
    <main className="relative min-h-[300vh] bg-[#0A192F] text-white">
      {/* The full-screen background 3D scene. */}
      <PortfolioScene />
      
      {/* HTML UI Overlays & Content Sections */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between p-6">
        <h1 className="text-xl font-mono text-[#4FD1C5]">DEVELOPER.BUILDER</h1>
      </nav>

      {/* Hero Section (mapped to top of scroll) */}
      <section id="hero-section" className="relative z-10 flex h-screen flex-col items-center justify-center p-10 text-center">
        <h2 className="text-6xl font-extrabold tracking-tighter sm:text-8xl">CREATING<br/>INTERACTIVE<br/>EXPERIENCES.</h2>
        <p className="mt-4 text-xl text-gray-300">Inspired by 3D assets. Built with AI.</p>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portfolio-section" className="relative z-10 flex h-screen items-center justify-center p-10">
        <div className="grid h-[70vh] w-full grid-cols-2 gap-4 rounded-3xl bg-white/5 p-6 backdrop-blur-md">
           <div className="flex items-center justify-center rounded-2xl bg-white/5">Project A</div>
           <div className="flex items-center justify-center rounded-2xl bg-white/5">Project B</div>
        </div>
      </section>
      
      {/* Contact Footer */}
      <footer className="relative z-10 flex h-screen items-center justify-center bg-transparent">
          FOOTER / CONTACT
      </footer>
    </main>
  );
}
