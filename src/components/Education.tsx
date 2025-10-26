import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: 'B.Sc. Physics',
      institution: 'ADP Collage / Gauhati University',
      period: '2023 - 2026',
      status: 'Ongoing',
      location: 'Nogaon, Assam, India',
      description: 'Focusing on theoretical physics, quantum mechanics, and computational methods. Maintaining strong academic performance while developing research skills.',
      highlights: ['Quantum Mechanics', 'Thermodynamics',' Condensed Matter Physics ', 'Mathematical Physics','Calculus', 'Research Methods'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Data Science with Python',
      institution: 'AISECT',
      period: '2024',
      status: 'Completed',
      location: 'Online',
      description: 'Comprehensive program covering data analysis, machine learning, and statistical methods using Python ecosystem.',
      highlights: ['Python Programming', 'Machine Learning', 'Data Visualization', 'Statistical Analysis','Data Cleaning'],
      color: 'from-purple-500 to-pink-500'
    },
        {
      degree: " CS50's Introduction to Programming with Python (Audit Track)",
      institution: 'HarvardX CS50P by edX',
      period: '2025',
      status: 'Completed',
      location: 'Online',
      description: 'CS50’s Introduction to Programming with Python is a beginner-friendly course offered by Harvard University that teaches programming fundamentals using Python. It’s designed for learners with or without prior coding experience and emphasizes hands-on practice through real-world inspired exercises.',
      highlights: ['Core programming concepts', 'Debugging and testing', 'Advanced tools', 'Object-oriented programming'],
      color: 'from-red-500 to-yellow-500'
    },
    {
      degree: 'JLPT Japanese Preparation',
      institution: 'Self Study',
      period: '2025',
      status: 'In Progress',
      location: 'Online',
      description: 'Preparing for Japanese Language Proficiency Test to enhance international communication skills and cultural understanding.',
      highlights: ['Japanese Grammar', 'Kanji', 'Listening Skills', 'Cultural Studies'],
      color: 'from-green-500 to-teal-500'
    }

  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 hidden md:block" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${edu.color} rounded-full border-4 border-white dark:border-slate-900 hidden md:block z-10`}
                  />

                  <div className="md:ml-20">
                    <Card className="p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <motion.div
                              whileHover={{ rotate: 15 }}
                              className={`w-10 h-10 rounded-lg bg-gradient-to-r ${edu.color} p-2`}
                            >
                              <GraduationCap className="w-full h-full text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                                {edu.degree}
                              </h3>
                              <p className="text-slate-600 dark:text-slate-400 font-medium">
                                {edu.institution}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {edu.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {edu.location}
                            </div>
                          </div>
                        </div>

                        <Badge
                          variant={edu.status === 'Completed' ? 'default' : 'secondary'}
                          className={`${
                            edu.status === 'Completed'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          } mb-4 lg:mb-0`}
                        >
                          {edu.status}
                        </Badge>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-slate-500" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Key Areas:
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <motion.div
                              key={highlight}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.2 + highlightIndex * 0.1, duration: 0.3 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge
                                variant="outline"
                                className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-600"
                              >
                                {highlight}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Hover effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-5 rounded-lg pointer-events-none`}
                      />
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};