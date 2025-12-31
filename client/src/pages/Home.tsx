import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LloydGuide from "@/components/LloydGuide";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <LloydGuide />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="bg-slate-900 text-slate-400 py-8 text-center font-mono text-sm">
        <p>© 2025 The Greatest Estate Developer Inc. All rights reserved.</p>
        <p className="mt-2 opacity-50">Built with React, Tailwind, and a lot of shovels.</p>
      </footer>
    </div>
  );
}
