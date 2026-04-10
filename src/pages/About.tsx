import { motion } from "framer-motion";
import { User, Code, Briefcase, Heart, Languages, Target } from "lucide-react";
import Footer from "@/components/Footer";
import JarisAssistant from "@/components/JarisAssistant";

const skills = {
  technical: [
    "Python", "Java", "C#", "HTML/CSS", "JavaScript", "TypeScript",
    "MySQL", "Microsoft Access", "React", "Node.js",
    "Git", "Azure", "Google Cloud", "Linux"
  ],
  business: [
    "Business Process Analysis", "Project Management", 
    "Agile & Waterfall", "CRM Systems", "ERP Systems",
    "Strategic Thinking", "Report Writing"
  ],
  soft: [
    "Communication", "Problem Solving", "Team Leadership",
    "Time Management", "Adaptability", "Attention to Detail"
  ]
};

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Sepedi", level: "Native" },
  { name: "Tshivenda", level: "Native" },
  { name: "Setswana", level: "Conversational" },
  { name: "Afrikaans", level: "Basic" },
  { name: "isiZulu", level: "Basic" },
  { name: "isiXhosa", level: "Basic" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background particles-bg">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      
      {/* Gradient orbs */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

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
            Who I Am
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            <span className="text-gradient">About Me</span>
          </h1>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-strong rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                Paris Maanda Netili
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a 20-year-old South African technology enthusiast currently in my final year 
                  pursuing a Bachelor of Information Technology in Business Systems at IIE Rosebank College. 
                  Standing at 6'2", I bring both physical and intellectual presence to every 
                  endeavor I undertake.
                </p>
                <p>
                  My passion lies in building software solutions that improve business processes 
                  and organizational performance. I believe in the power of continuous learning 
                  and innovation.
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Having completed my Higher Certificate in IT Support Services with Distinction, 
                  I've built a solid foundation in computer systems, networking, and software 
                  development. I've developed practical projects including a real-time weather app, 
                  booking system, CRM solution, financial budgeting tracker, cloud-based document 
                  management system, and an AI-powered chatbot for business support.
                </p>
                <p>
                  I speak 7 languages and I'm constantly expanding my skill set through practical 
                  projects and professional certifications.
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              {[
                { label: "Age", value: "20 (April 26)" },
                { label: "Height", value: "6'2\" (188cm)" },
                { label: "Status", value: "Student" },
                { label: "Goal", value: "Big Tech" },
              ].map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/5"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    {fact.label}
                  </p>
                  <p className="font-display font-semibold text-foreground">{fact.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
              <Code className="w-6 h-6 text-primary" />
              Technical Skills
            </h2>
            
            <div className="glass-strong rounded-2xl p-6 border border-white/10">
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.03 }}
                    className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Business Skills */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Business & Management Skills
            </h2>
            
            <div className="glass-strong rounded-2xl p-6 border border-white/10">
              <div className="flex flex-wrap gap-2">
                {skills.business.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.03 }}
                    className="px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm hover:bg-secondary/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Languages */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
              <Languages className="w-6 h-6 text-primary" />
              Languages
            </h2>
            
            <div className="glass-strong rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {languages.map((lang, i) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.05 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <p className="font-medium text-foreground">{lang.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{lang.level}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Career Objective */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-strong rounded-2xl p-8 border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                Career Objective
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm seeking an internship or entry-level opportunity to apply my technical knowledge, 
              problem-solving abilities, and business insight in a dynamic environment. My goal is 
              to contribute to innovative projects at leading technology companies while continuing 
              to grow as a developer and business systems analyst.
            </p>
          </motion.section>
        </div>
      </main>

      <JarisAssistant />
      <Footer />
    </div>
  );
};

export default About;
