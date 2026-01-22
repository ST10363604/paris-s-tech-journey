import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, FolderOpen, Award, Mail, User } from "lucide-react";

const navItems = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Qualifications", path: "/qualifications", icon: Award },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Footer = () => {
  const location = useLocation();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="glass-strong border-t border-primary/20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center py-4">
            <ul className="flex items-center gap-1 md:gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`
                        relative flex items-center gap-2 px-3 md:px-5 py-2.5 rounded-lg
                        font-display text-sm md:text-base font-medium
                        transition-all duration-300
                        ${isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        }
                      `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-lg border border-primary/50 bg-primary/10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <Icon className="relative z-10 w-4 h-4" />
                      <span className="relative z-10 hidden sm:inline">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
