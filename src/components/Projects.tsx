import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Database, Brain, Search, Briefcase, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "AI Scribe Smart App",
      description: "Advanced AI-powered transcription and note-taking application with smart summarization, speaker identification, and real-time collaboration features for professionals.",
      tech: ["React Native", "Python", "OpenAI API", "Node.js", "MongoDB"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      featured: true,
      image: "/scribe-smart.png",
      githubUrl: "https://github.com/SanjayRyuzaki/scribe-smart",
      demoUrl: "https://scribe-smart.onrender.com",
      category: "ai"
    },
    {
      title: "ATS Resume Scoring Website",
      description: "Intelligent resume analysis system using AI to help job seekers optimize their resumes for Applicant Tracking Systems. Features real-time scoring, keyword analysis, and improvement suggestions.",
      tech: ["React", "Python", "NLP", "Flask", "Machine Learning"],
      icon: Search,
      gradient: "from-blue-500 to-cyan-500",
      featured: true,
      image: "/ats.png",
      githubUrl: "https://github.com/yourusername/ats-resume-scoring",
      demoUrl: "https://ats-resume-scoring.vercel.app",
      category: "ai"
    },
    {
      title: "Invention Management System",
      description: "Comprehensive platform for managing intellectual property, patent applications, and innovation workflows with document management and collaboration tools.",
      tech: ["Vue.js", "Django", "PostgreSQL", "Redis", "Docker"],
      icon: Code,
      gradient: "from-orange-500 to-red-500",
      featured: false,
      image: "/placeholder.svg",
      githubUrl: "https://github.com/yourusername/invention-management",
      demoUrl: "https://invention-management.vercel.app",
      category: "web"
    },
    {
      title: "YouTube Data Analysis",
      description: "Big data analytics platform built with Hadoop ecosystem for processing and analyzing YouTube video metadata, trends, and user engagement patterns.",
      tech: ["Hadoop", "Spark", "Python", "Kafka", "Tableau"],
      icon: Video,
      gradient: "from-indigo-500 to-purple-500",
      featured: false,
      image: "/placeholder.svg",
      githubUrl: "https://github.com/yourusername/youtube-analysis",
      demoUrl: "https://youtube-analysis.vercel.app",
      category: "data"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time updates, custom chart types, and export capabilities for business intelligence.",
      tech: ["D3.js", "React", "Node.js", "MongoDB", "WebSocket"],
      icon: Database,
      gradient: "from-yellow-500 to-orange-500",
      featured: false,
      image: "/placeholder.svg",
      githubUrl: "https://github.com/yourusername/data-viz-dashboard",
      demoUrl: "https://data-viz-dashboard.vercel.app",
      category: "data"
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my technical skills and problem-solving approach through 
              diverse projects spanning web development, AI, and data analytics.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All' },
                { key: 'ai', label: 'AI/ML' },
                { key: 'web', label: 'Web Dev' },
                { key: 'data', label: 'Data' },
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === filterOption.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 text-center">
              Highlighted Work
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Project Image */}
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl mb-4 flex items-center justify-center">
                      <project.icon className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>

                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                      onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Project Image */}
                  <div className="mb-4">
                    <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                      <project.icon className="h-8 w-8 text-gray-400" />
                    </div>
                  </div>

                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-2"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-2"
                      onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => window.open("https://github.com/SanjayRyuzaki", '_blank', 'noopener,noreferrer')}
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
