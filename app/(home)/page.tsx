import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import HomeHeader from "@/components/home/HomeHeader";
import LiveNow from "@/components/home/LiveNow";
import More from "@/components/home/More";
import Process from "@/components/home/Process";
import Stage from "@/components/home/Stage";
import WhatIDo from "@/components/home/WhatIDo";
import Work from "@/components/home/Work";

/**
 * Home: one long scrolling page. The fixed background, 3D ring and loading
 * intro live in <Stage>; each section sets its own colours through data
 * attributes (see Stage.tsx). Inner pages use the (site) layout instead.
 */
export default function Home() {
  return (
    <Stage>
      <HomeHeader />
      <main id="main-content">
        <Hero />
        <WhatIDo />
        <LiveNow />
        <Work />
        <About />
        <Experience />
        <Process />
        <More />
        <Contact />
      </main>
    </Stage>
  );
}
