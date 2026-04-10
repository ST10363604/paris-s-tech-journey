import { motion } from "framer-motion";
import { Download, MapPin, Mail, Github, Code, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import JarisAssistant from "@/components/JarisAssistant";

const HomePage = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Paris_Netili_CV.docx";
    link.download = "Paris_Netili_CV.docx";
    link.click();
  };

  const skills = [
    "Python", "Java", "C#", "HTML/CSS", "JavaScript", 
    "MySQL", "Azure", "React", "Node.js", "Git",
    "Google Cloud", "Linux", "TypeScript"
  ];

  return (
    <div className="min-h-screen bg-background particles-bg">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      
      {/* Gradient orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-40 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <main className="relative z-10 container mx-auto px-4 pt-8 pb-32">
        <div className="min-h-[calc(100vh-10rem)] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </motion.div>

              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl text-muted-foreground font-display">Hi, I'm</h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mt-2">
                  <span className="text-gradient">Paris</span>
                </h1>
                <p className="text-2xl md:text-3xl text-foreground font-display mt-3">
                  Software Developer
                </p>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-lg leading-relaxed max-w-lg"
              >
                IT and Business Systems student at IIE Rosebank College, passionate about 
                building software solutions that improve business processes and organizational 
                performance. Strong foundation in software development, systems analysis, 
                databases, and IT support. Experienced in developing practical projects 
                including real-time web apps, booking systems, CRM solutions, and AI-powered chatbots.
              </motion.p>

              {/* Location & Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Rangeview, Krugersdorp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:parrynetili@gmail.com" className="hover:text-primary transition-colors">
                    parrynetili@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Skills tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  onClick={handleDownloadCV}
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold px-6 gap-2 rounded-xl shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </Button>
                <a
                  href="https://github.com/ST10363604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right content - Code display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
              </motion.div>

              {/* Code terminal */}
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute -inset-3 rounded-3xl border-2 border-dashed border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative w-80 md:w-96 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl glow-border glass-strong">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-primary/10 border-b border-primary/20">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">paris@dev</span>
                  </div>
                  
                  {/* Terminal content */}
                  <div className="p-4 font-mono text-sm space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Terminal className="w-4 h-4 text-primary" />
                      <span className="text-primary">$</span>
                      <span>whoami</span>
                    </div>
                    <p className="text-foreground pl-6">Paris Netili</p>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mt-3">
                      <Code className="w-4 h-4 text-primary" />
                      <span className="text-primary">$</span>
                      <span>cat skills.txt</span>
                    </div>
                    <div className="pl-6 text-foreground">
                      <p>Python, Java, C#</p>
                      <p>React, Node.js</p>
                      <p>MySQL, Azure</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mt-3">
                      <span className="text-primary">$</span>
                      <span className="text-primary animate-pulse">_</span>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 backdrop-blur-sm flex items-center justify-center"
                  animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-6 w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/40 backdrop-blur-sm flex items-center justify-center"
                  animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-xl">🚀</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <JarisAssistant />
      <Footer />
    </div>
  );
};

export default HomePage;
