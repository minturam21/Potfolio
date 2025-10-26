import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const Blog = () => {
  const blogPosts = [
    {
      title: 'How I Learned NumPy: A Physics Student\'s Journey',
      excerpt: 'Discovering the power of numerical computing through physics problems and data analysis projects.',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Data Science',
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Python', 'NumPy', 'Physics']
    },
    {
      title: 'Exploring Quantum Data: Bridging Physics and Computing',
      excerpt: 'Understanding quantum mechanics through computational methods and data visualization techniques.',
      date: '2024-12-10',
      readTime: '8 min read',
      category: 'Physics',
      gradient: 'from-purple-500 to-pink-500',
      tags: ['Quantum', 'Computing', 'Research']
    },
    {
      title: 'Building My First Physics Simulation in C++',
      excerpt: 'Creating interactive thermodynamics simulations and the lessons learned along the way.',
      date: '2024-12-05',
      readTime: '6 min read',
      category: 'Programming',
      gradient: 'from-green-500 to-teal-500',
      tags: ['C++', 'Simulation', 'Physics']
    },
    {
      title: 'The Art of Scientific Data Visualization',
      excerpt: 'Techniques for creating compelling visualizations that tell the story hidden in scientific data.',
      date: '2024-11-28',
      readTime: '7 min read',
      category: 'Visualization',
      gradient: 'from-orange-500 to-red-500',
      tags: ['Matplotlib', 'Visualization', 'Science']
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Blog & Notes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            Thoughts, insights, and discoveries from my journey in physics and data science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="p-6 h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.gradient}`} />
                
                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-5 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Category badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <Badge 
                      className={`bg-gradient-to-r ${post.gradient} text-white border-0`}
                    >
                      {post.category}
                    </Badge>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta information */}
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read more button */}
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white group/btn"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Animated particles on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${post.gradient} rounded-full`}
                      animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 15}%`,
                      }}
                    />
                  ))}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View all posts button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="!bg-transparent !hover:bg-transparent border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 px-8 py-3 group"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};