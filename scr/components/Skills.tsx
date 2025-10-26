import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  Terminal, 
  GitBranch, 
  FileCode, 
  BarChart3,
  Brain,
  Cpu
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'C', 'C++'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data Science',
      icon: BarChart3,
      skills: ['NumPy', 'Pandas', 'Matplotlib'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Others',
      icon: Terminal,
      skills: ['Git', 'Jupyter', 'VS Code', 'Linux'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Physics & Math',
      icon: Brain,
      skills: ['Quantum Mechanics', 'Thermodynamics', 'Statistics'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="p-6 h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} p-3 mb-4 mx-auto`}
                >
                  <category.icon className="w-full h-full text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white text-center mb-4">
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-lg pointer-events-none"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional animated elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Continuously learning and exploring new technologies to solve complex problems 
            at the intersection of physics, data science, and software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};