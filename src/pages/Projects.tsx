import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import JarisAssistant from "@/components/JarisAssistant";

const projects: { title: string; description: string; tech: string[]; liveUrl: string; image: string; featured: boolean }[] = [];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background particles-bg">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      
      {/* Gradient orbs */}
      <div className="fixed top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-40 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <main className="relative z-10 container mx-auto px-4 pt-12 pb-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4"
          >
            My Work
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A showcase of my development work, featuring web applications and digital experiences
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="glass-strong rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                    Featured
                  </span>
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Project icon/preview */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center text-4xl shrink-0"
                  >
                    {project.image}
                  </motion.div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-xl"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-white/10">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background flex items-center justify-center text-lg">
                🔨
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary/30 border-2 border-background flex items-center justify-center text-lg">
                ⚡
              </div>
            </div>
            <span className="text-muted-foreground">More projects coming soon...</span>
          </div>
        </motion.div>
      </main>

      <JarisAssistant />
      <Footer />
    </div>
  );
};

export default Projects;
