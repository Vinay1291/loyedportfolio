import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import lloydBlueprint from '@assets/generated_images/anime_character_lloyd_holding_blueprints_looking_ambitious.png';

const projects = [
  {
    title: "The Royal Ledger",
    category: "FinTech App",
    description: "A comprehensive expense tracking application worthy of a kingdom's treasury. Features real-time graphs, budget planning, and gold coin conversion.",
    tech: ["Flutter", "Firebase", "Charts"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Estate Manager Pro",
    category: "Productivity",
    description: "Manage your construction workers, schedule builds, and track resources. Essential for any aspiring estate developer.",
    tech: ["Flutter", "Riverpod", "Supabase"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Dragon Post",
    category: "Social Media",
    description: "A messaging app faster than a dragon's flight. Secure, encrypted, and fire-proof.",
    tech: ["Flutter", "WebSockets", "Node.js"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              My Completed Estates
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Behold! These are the projects I have personally overseen from blueprint to grand opening. Each one is built with the finest code and sturdiest architecture.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <motion.img 
              src={lloydBlueprint}
              alt="Lloyd Planning"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-h-[300px] drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden group border-2 border-muted hover:border-primary/50 transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">{project.category}</div>
                  <CardTitle className="font-display text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2 border-t bg-muted/20 p-4">
                  <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
