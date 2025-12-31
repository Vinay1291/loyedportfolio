import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Send } from 'lucide-react';
import lloydThumbsUp from '@assets/generated_images/anime_character_lloyd_approving_with_thumbs_up.png';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposal Sent!",
      description: "Lloyd has received your request. He smells profit!",
      duration: 5000,
    });
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6 text-secondary">
                Ready to Build <br /> Something Great?
              </h2>
              <p className="text-primary-foreground/80 text-xl mb-8 max-w-lg leading-relaxed">
                Do you have a project that needs the "Greatest Developer" touch? Send me a proposal! I accept gold coins, gems, or standard wire transfers.
              </p>
              
              <div className="hidden lg:block">
                <motion.img 
                  src={lloydThumbsUp} 
                  alt="Lloyd Thumbs Up" 
                  className="w-64 drop-shadow-2xl transform -rotate-12"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6 md:p-8 bg-white text-slate-900 shadow-2xl border-4 border-secondary/50 relative">
              <div className="absolute -top-3 -right-3 bg-accent text-white px-3 py-1 md:px-4 text-xs md:text-sm font-bold transform rotate-12 shadow-lg">
                OPEN FOR WORK
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-6 text-primary">Commission Request</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground">Your Name</label>
                    <Input placeholder="Baron/Baroness..." className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground">Contact Raven (Email)</label>
                    <Input placeholder="noble@estate.com" className="bg-slate-50 border-slate-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground">Project Type</label>
                  <Input placeholder="Mobile App, Dashboard, Kingdom Management System..." className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground">Project Details</label>
                  <Textarea placeholder="Tell me about your grand vision..." className="min-h-[120px] bg-slate-50 border-slate-200" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg">
                  <Send className="w-5 h-5 mr-2" /> Send Proposal
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
