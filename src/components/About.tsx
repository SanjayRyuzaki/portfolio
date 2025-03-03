import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "NLP Intern",
      company: "Infosys",
      location: "Remote, India",
      period: "Jul 2024",
      description: "Developed natural language processing solutions and contributed to AI-driven projects for enterprise clients.",
      skills: ["NLP", "Python", "Machine Learning", "AI"],
    },
    {
      title: "Cybersecurity Intern",
      company: "IBM",
      location: "Remote",
      period: "Summer 2024",
      description: "Worked on cybersecurity protocols and threat analysis, gaining hands-on experience with enterprise security solutions.",
      skills: ["Cybersecurity", "Threat Analysis", "Security Protocols"],
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer with a strong foundation in full-stack development 
              and a vision to create technology that makes a meaningful impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    As an aspiring Software Development Engineer, I'm driven by 
                    <span className="text-blue-600 dark:text-blue-400 font-medium"> curiosity</span> and a passion for 
                    <span className="text-purple-600 dark:text-purple-400 font-medium"> innovation</span>. 
                    My journey began with a fascination for how technology can solve 
                    complex real-world problems.
                  </p>
                  <p>
                    I thrive in collaborative environments where 
                    <span className="text-green-600 dark:text-green-400 font-medium"> creativity</span> meets 
                    <span className="text-blue-600 dark:text-blue-400 font-medium"> technical excellence</span>. 
                    My goal is to contribute to impactful projects at leading tech companies 
                    where I can grow and make a difference.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open-source projects, or learning about the latest 
                    developments in AI and machine learning.
                  </p>
                </div>

                {/* Key Traits */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Traits</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Creative', 'Hardworking', 'Adaptive', 'Curious', 'Collaborative'].map((trait) => (
                      <span
                        key={trait}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
                Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                    className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;