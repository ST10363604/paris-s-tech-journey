import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 overflow-hidden bg-background particles-bg">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines" />

      {/* Center content - Glass container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative"
        >
          {/* Glow ring behind glass */}
          <motion.div 
            className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary opacity-50 blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Glass container */}
          <div className="relative glass-strong rounded-3xl p-12 md:p-16 max-w-2xl mx-auto glow-border">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/50 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/50 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/50 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/50 rounded-br-3xl" />

            {/* Content */}
            <div className="text-center space-y-8">
              {/* Welcome text with typing animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.span 
                  className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  [ SYSTEM INITIALIZED ]
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="text-gradient-animated">Welcome</span>
                <br />
                <span className="text-foreground">to my Portfolio</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto"
              >
                Step into the world of innovation and creativity
              </motion.p>

              {/* Animated divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
              />

              {/* Profile button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <Button
                  onClick={() => navigate("/home")}
                  size="lg"
                  className="group relative overflow-hidden bg-primary/10 hover:bg-primary/20 border border-primary/50 hover:border-primary text-primary px-10 py-6 text-lg font-display font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center gap-3">
                    <User className="w-5 h-5" />
                    Profile
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Welcome;
