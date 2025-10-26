import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Zap } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Exoplanet Data Visualization',
      description: 'Interactive visualization of exoplanet discovery data using Python and Matplotlib. Analyzes trends in planetary characteristics and discovery methods.',
      tech: ['Python', 'Matplotlib', 'NumPy', 'Pandas'],
      github: '#',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Thermodynamics Simulation',
      description: 'C++ simulation modeling heat transfer and thermodynamic processes. Features real-time visualization of temperature distributions.',
      tech: ['C++', 'OpenGL', 'Physics'],
      github: '#',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Student Performance Predictor',
      description: 'Machine learning model predicting student academic performance using various demographic and academic factors.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Quantum State Analyzer',
      description: 'Tool for analyzing quantum mechanical systems and visualizing wave functions using computational physics methods.',
      tech: ['Python', 'SciPy', 'Matplotlib', 'Physics'],
      github: '#',
      demo: '#',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Science Portfolio',
      description: 'Collection of data analysis projects showcasing statistical methods and data visualization techniques.',
      tech: ['Python', 'Jupyter', 'Seaborn', 'Statistics'],
      github: '#',
      demo: '#',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Physics Lab Simulator',
      description: 'Virtual physics laboratory for conducting experiments in mechanics, optics, and electromagnetism.',
      tech: ['C++', 'Physics Engine', 'OpenGL'],
      github: '#',
      demo: '#',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            A showcase of my work in physics simulation, data analysis, and scientific computing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="p-6 h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Gradient header */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />
                
                {/* Animated background glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Project icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} p-2 mb-4`}
                  >
                    <Zap className="w-full h-full text-white" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0 group/btn`}
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Demo
                    </Button>
                  </div>
                </div>

                {/* Hover effect particles */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full`}
                      animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                      }}
                    />
                  ))}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};