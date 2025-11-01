import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle, History } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('contactSubmissions');
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new submission
    const newSubmission: ContactSubmission = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString()
    };

    // Update submissions array
    const updatedSubmissions = [newSubmission, ...submissions];
    setSubmissions(updatedSubmissions);

    // Save to localStorage
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));

    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const clearHistory = () => {
    localStorage.removeItem('contactSubmissions');
    setSubmissions([]);
    setShowHistory(false);
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-500'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'City, Country',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            or just having a conversation about physics and data science.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                  Send Me a Message
                </h3>
                {submissions.length > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowHistory(!showHistory)}
                    className="text-slate-600 dark:text-slate-400"
                  >
                    <History className="w-4 h-4 mr-2" />
                    History ({submissions.length})
                  </Button>
                )}
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-green-700 dark:text-green-300">
                    Message sent successfully! Saved to your local storage.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 focus:border-cyan-500 dark:focus:border-cyan-400"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 focus:border-cyan-500 dark:focus:border-cyan-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 focus:border-cyan-500 dark:focus:border-cyan-400 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 py-3 group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </motion.div>
              </form>

              {/* Message History */}
              {showHistory && submissions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-slate-800 dark:text-white">
                      Message History
                    </h4>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearHistory}
                      className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
                    >
                      Clear All
                    </Button>
                  </div>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {submissions.map((submission) => (
                      <div
                        key={submission.id}
                        className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-slate-800 dark:text-white text-sm">
                            {submission.name}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {formatDate(submission.timestamp)}
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                          {submission.email}
                        </div>
                        <div className="text-sm text-slate-700 dark:text-slate-300 line-clamp-2">
                          {submission.message}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg p-2 group-hover:scale-110 transition-transform">
                      <info.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {info.label}
                      </div>
                      <div className="text-slate-700 dark:text-slate-300 font-medium">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                Connect With Me
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 ${social.color} transition-all duration-300 group`}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm mt-6">
                Feel free to reach out through any of these platforms. I typically respond within 24 hours.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};