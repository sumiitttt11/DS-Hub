import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const teamMembers = [
  {
    name: "Sumit Kumawat",
    role: "Lead Developer",
    github: "sumiitttt11",
    linkedin: "#",
    email: "contact@example.com",
    website: "#"
  },
];

const dssa = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-400">
            The brilliant minds behind LTCoE Data Science Hub
          </p>
        </motion.div>

        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-10"
          >
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors">
                  <img
                    src={`https://github.com/${member.github}.png`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                  <p className="text-xl text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6 max-w-2xl">
                    A passionate developer dedicated to creating innovative solutions in the field of data science. 
                    Leading the technical development of LTCoE Data Science Hub with expertise in modern web technologies 
                    and data visualization.
                  </p>
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                    <a
                      href={member.website}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Globe className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default dssa;
