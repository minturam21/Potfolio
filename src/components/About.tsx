import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, BookOpen, Target } from 'lucide-react';

export const About = () => {
  const milestones = [
    { year: '2023', event: 'Started B.Sc. Physics', icon: BookOpen },
    { year: '2024', event: 'Completed Data Science with Python', icon: Target },
    { year: '2025', event: 'JLPT Japanese Prep', icon: User },
  ];

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'C++', level: 75 },
    { name: 'NumPy', level: 85 },
    { name: 'Pandas', level: 80 },
    { name: 'Jupyter', level: 85 },
    { name: 'Git', level: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile and Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex justify-center lg:justify-start mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1"
              >
                <img
               src="./profile.jpg"
               className="w-full h-full rounded-full object-cover"
               style={{
                      imageRendering: 'auto',
                      filter: 'none',
                    }}
              />
              </motion.div>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm currently a Physics undergraduate with a passion for data-driven insights, 
              scientific research, and intelligent systems. I enjoy solving problems that 
              connect science, computation, and real-world understanding.
            </p>

            {/* Academic Milestones */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                Academic Journey
              </h3>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <Badge variant="outline" className="text-cyan-600 border-cyan-600">
                    {milestone.year}
                  </Badge>
                  <milestone.icon className="w-5 h-5 text-purple-500" />
                  <span className="text-slate-600 dark:text-slate-300">
                    {milestone.event}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-white/20">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white/30 w-1/3"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};