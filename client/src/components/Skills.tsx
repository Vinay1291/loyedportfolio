import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Layers, Zap, PenTool, Database, Globe } from 'lucide-react';

const skills = [
  {
    title: "Flutter Engineering",
    icon: Smartphone,
    description: "Constructing cross-platform palaces that run smoothly on any terrain (iOS & Android).",
    level: "Grandmaster"
  },
  {
    title: "Dart Architecture",
    icon: Layers,
    description: "Writing robust, type-safe logic that stands the test of time (and users).",
    level: "Expert"
  },
  {
    title: "State Management",
    icon: Zap,
    description: "Controlling the flow of data like a master irrigation system (Riverpod, Bloc, Provider).",
    level: "Master"
  },
  {
    title: "UI/UX Craftsmanship",
    icon: PenTool,
    description: "Designing interfaces so beautiful, even the Queen would be impressed.",
    level: "Artisan"
  },
  {
    title: "Backend Integration",
    icon: Database,
    description: "Connecting to the royal archives (Firebase, Supabase, REST APIs).",
    level: "Expert"
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Expanding the territory beyond mobile borders.",
    level: "Proficient"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section className="py-24 bg-secondary/5 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Tools of the Trade
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A master builder is only as good as his tools. Here is the equipment I use to construct my digital empires.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-2 border-transparent hover:border-secondary transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-display text-xl">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-secondary/20 text-secondary-foreground border border-secondary/30">
                    {skill.level}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
