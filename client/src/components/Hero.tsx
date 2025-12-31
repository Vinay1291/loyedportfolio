import { motion } from 'framer-motion';
import { ArrowDown, Hammer, Smartphone, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-primary rounded-full" />
        <div className="absolute bottom-40 right-20 w-96 h-96 border-4 border-secondary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-dashed border-primary/30 rounded-full animate-spin-slow" />
      </div>

      <div className="container px-4 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground border border-secondary/20 mb-6"
        >
          <Hammer className="w-4 h-4 text-secondary" />
          <span className="text-sm font-bold uppercase tracking-wider">Under Construction Since 2020</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-primary mb-6 leading-tight drop-shadow-sm"
        >
          The Greatest <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-600">
            Flutter Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-sans leading-relaxed"
        >
          Welcome to my digital estate. I architect pixel-perfect mobile experiences with the precision of a master builder and the creativity of a visionary noble.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105">
            <Smartphone className="mr-2 w-5 h-5" /> View My Estates
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-primary/20 text-primary hover:bg-primary/5 text-lg px-8 h-14 rounded-xl transition-all hover:scale-105">
            <Code2 className="mr-2 w-5 h-5" /> Inspect Blueprint
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
