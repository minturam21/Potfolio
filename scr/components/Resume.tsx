import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, FileText, Eye } from 'lucide-react';

export const Resume = () => {
  const downloadCV = () => {
    // Replace with actual CV link
    window.open('https://drive.google.com/file/d/your-cv-link', '_blank');
  };

  const previewCV = () => {
    // Replace with actual CV preview link
    window.open('https://drive.google.com/file/d/your-cv-preview-link', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full p-6"
              >
                <FileText className="w-full h-full text-white" />
              </motion.div>

              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Download My Resume
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Get a comprehensive overview of my academic background, technical skills, 
                projects, and experience in physics and data science.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={downloadCV}
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg group"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download CV (PDF)
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={previewCV}
                    variant="outline"
                    size="lg"
                    className="!bg-transparent !hover:bg-transparent border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 px-8 py-3 text-lg group"
                  >
                    <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Preview Online
                  </Button>
                </motion.div>
              </div>

              {/* Resume highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 grid md:grid-cols-3 gap-6"
              >
                {[
                  { label: 'Academic Focus', value: 'Physics & Data Science' },
                  { label: 'Programming', value: 'Python, C++, C' },
                  { label: 'Experience', value: 'Research & Projects' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
                    animate={{
                      x: [0, 50, 0],
                      y: [0, -50, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${20 + (i % 3) * 20}%`,
                    }}
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};