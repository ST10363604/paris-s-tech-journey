import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, FileText, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import JarisAssistant from "@/components/JarisAssistant";

const education = [
  {
    institution: "IIE Rosebank College",
    qualification: "Bachelor of Information Technology in Business Systems",
    year: "Expected 2026",
    status: "Current - 2nd Year",
    icon: GraduationCap,
  },
  {
    institution: "IIE Rosebank College",
    qualification: "Higher Certificate in Information Technology in Support Services",
    year: "2023",
    status: "Completed with Distinction",
    icon: Award,
  },
  {
    institution: "West Ridge High School",
    qualification: "National Senior Certificate (Matric)",
    year: "2022",
    status: "Completed",
    icon: GraduationCap,
  },
];

const certificates = [
  {
    title: "Higher Certificate in Information Technology in Support Services",
    issuer: "IIE (The Independent Institute of Education)",
    date: "December 2023",
    achievement: "With Distinction",
    certificateId: "ST10363604",
    downloadUrl: "/certificates/ST10363604_Certificate.pdf",
  },
  {
    title: "Full-Stack Development 101",
    issuer: "Online Course Certification",
    date: "January 2026",
    certificateId: "9749636",
    downloadUrl: "/certificates/Full-Stack_Development_Certificate.pdf",
  },
  {
    title: "Learn Advanced C++ Course",
    issuer: "Ahmad Bazzi - Online Certification",
    date: "January 2026",
    certificateId: "9751575",
    downloadUrl: "/certificates/Advanced_C.pdf",
  },
  {
    title: "TypeScript Basics",
    issuer: "Online Course Certification",
    date: "January 2026",
    certificateId: "9750285",
    downloadUrl: "/certificates/TYPESCRIPT_BASICS.pdf",
  },
];

const Qualifications = () => {
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
            Achievements
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            <span className="text-gradient">Qualifications</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            My educational journey and professional certifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Education Timeline */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-display font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-7 h-7 text-primary" />
              Education
            </motion.h2>

            <div className="relative space-y-6 pl-8 border-l-2 border-primary/30">
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.qualification}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    
                    <div className="glass-strong rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="font-display font-semibold text-foreground">
                              {item.qualification}
                            </h3>
                            {item.status.includes("Distinction") && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                                ⭐ Distinction
                              </span>
                            )}
                          </div>
                          <p className="text-primary text-sm font-medium">{item.institution}</p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{item.year}</span>
                            <span className="text-white/20">•</span>
                            <span>{item.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Certificates */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl font-display font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <Award className="w-7 h-7 text-primary" />
              Certificates
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.certificateId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="group glass-strong rounded-xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    {cert.achievement && (
                      <span className="px-2 py-1 rounded-lg text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        {cert.achievement}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary mt-1">{cert.issuer}</p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </span>
                      <span className="text-xs text-muted-foreground/70 mt-1 block">
                        ID: {cert.certificateId}
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary/10"
                    >
                      <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <JarisAssistant />
      <Footer />
    </div>
  );
};

export default Qualifications;
