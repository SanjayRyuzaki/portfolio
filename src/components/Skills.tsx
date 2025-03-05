import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  GitBranch,
  Server,
  Cpu,
  Layers,
  Palette
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 88 },
        { name: "Django", level: 75 },
        { name: "Flask", level: 78 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Supabase", level: 72 },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 88 },
        { name: "TypeScript", level: 85 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Deep Learning", level: 65, learning: true },
        { name: "NLP", level: 70 },
        { name: "TensorFlow", level: 60, learning: true },
        { name: "PyTorch", level: 55, learning: true },
        { name: "OpenAI API", level: 80 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Layers,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "Webpack", level: 72 },
        { name: "Vite", level: 85 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit built through hands-on experience, continuous learning, 
              and real-world project development.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + categoryIndex * 0.1, duration: 0.6 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.5 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 dark:text-gray-200 font-medium flex items-center gap-2">
                          {skill.name}
                          {skill.learning && (
                            <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-0.5 rounded-full">
                              Learning
                            </span>
                          )}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Currently Exploring
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm passionate about staying current with emerging technologies and 
                continuously expanding my skill set.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Deep Learning",
                  "Computer Vision",
                  "GraphQL",
                  "Kubernetes",
                  "Rust",
                  "Web3",
                  "Blockchain",
                  "Microservices"
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;