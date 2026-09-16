import PortfolioScene from '@/app/components/PortfolioScene';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-0">
      <PortfolioScene />
      <section className="relative z-10 flex h-[calc(100vh-4rem)] flex-col items-center justify-center p-10 text-center">
        <h2 className="text-6xl font-extrabold tracking-tighter sm:text-8xl text-text-primary">
          CREATING<br/>INTERACTIVE<br/>EXPERIENCES.
        </h2>
        <p className="mt-4 text-xl text-text-secondary">Welcome to Geodr.</p>
      </section>
    </main>
  );
}
