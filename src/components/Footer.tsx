import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    { title: 'Home', href: '#' },
    { title: 'DSSA', href: '/dssa' },
    { title: 'Team', href: '/team' },
    { title: 'Resources', href: '/resources' },
    { title: 'Faculty', href: '/faculty' },
    { title: 'Community', href: '/adminpage' }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LTCoE Data Science
            </h3>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of data scientists through innovative education, cutting-edge research, and industry collaboration.
            </p>
            <motion.div className="flex space-x-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {[
                { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
                { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} className="text-gray-400 hover:text-purple-400 transition-colors">
                  <a href={item.href}>{item.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:contact@ltcoe.edu"
                className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                contact@ltcoe.edu
              </motion.a>
              <p className="text-gray-400">
                LTCoE (Data Science)<br />
                Sector 4, Vikas Nagar<br />
                Koparkhairane, Navi Mumbai-400709<br />
                Maharashtra, INDIA<br />
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <p>© {new Date().getFullYear()} LTCoE Data Science. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
