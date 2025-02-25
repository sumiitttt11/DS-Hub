import  { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Bell, Rocket, Code, Users, Brain, ChevronDown, Globe, Award, BookOpen, Laptop, Menu, X } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const menuItems = [
    { title: 'Home', href: '#' },
    { title: 'Programs', href: '/dssa' },
    { title: 'Team', href: '/team' },
    { title: 'Events', href: '/resources' },
    { title: 'Resources', href: '/faculty' },
    { title: 'Contact', href: '/community' }
  ];

  return (
    <div className="bg-black text-white">
      {/* Mobile Navigation Menu */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-white/10 rounded-lg backdrop-blur-lg border border-white/20"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
      >
        <motion.nav
          initial={false}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          className="flex flex-col items-center justify-center h-full"
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-semibold py-4 text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>

      {/* Hero Section with Parallax */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Background with Particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
          <motion.div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80')] bg-cover bg-center"
            style={{ scale }}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 0.1 }}
          />
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 md:mt-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-4xl md:text-7xl lg:text-8xl font-bold px-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                LTCoE Data Science 
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Empowering future data scientists with cutting-edge resources, community collaboration, and innovative learning experiences.
            </motion.p>
          </motion.div>

          {/* Quick Access Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Cards with hover effects */}
            {[
              {
                icon: <Calendar className="w-8 h-8 text-purple-400" />,
                title: "Upcoming Events",
                description: "Stay updated with workshops, seminars, and tech talks",
                color: "purple",
                link: "/team"
              },
              {
                icon: <Bell className="w-8 h-8 text-pink-400" />,
                title: "Announcements",
                description: "Important updates and notifications from the department",
                color: "pink",
                link: "/dssa"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-blue-400" />,
                title: "Featured Resources",
                description: "Access curated learning materials and tools",
                color: "blue",
                link: "/resources"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className={`backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10 hover:border-${card.color}-500/50 transition-all group cursor-pointer`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="mb-4"
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 mb-4">{card.description}</p>
                <motion.button 
                  className={`flex items-center text-${card.color}-400 group-hover:text-${card.color}-300`}
                  whileHover={{ x: 5 }}
                >
                  <a href={card.link}>Learn More </a><ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </div>
      </motion.section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <br></br>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Why Choose LTCoE Data Science?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-400">
              Discover the advantages of being part of our data science community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Innovation First",
                description: "Stay ahead with cutting-edge technologies and methodologies"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Hands-on Learning",
                description: "Practice with real-world projects and industry datasets"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Strong Community",
                description: "Connect with peers, alumni, and industry experts"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Research Focus",
                description: "Engage in groundbreaking research opportunities"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <motion.div 
                  className="text-purple-400 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section with Parallax */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Students Enrolled", icon: <Users /> },
              { number: "50+", label: "Research Papers", icon: <BookOpen /> },
              { number: "100%", label: "Placement Rate", icon: <Award /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10"
              >
                <motion.div
                  className="text-purple-400 w-12 h-12 mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  transition={{ duration: 0.8 }}
                >
                  {stat.number}
                </motion.div>
                <div className="mt-2 text-xl text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Our Programs
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-400">
              Comprehensive learning paths for every aspiring data scientist
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Laptop className="w-8 h-8" />,
                title: "Data Science Fundamentals",
                description: "Master the basics of data analysis, statistics, and programming",
                features: ["Python Programming", "Statistical Analysis", "Data Visualization"]
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Advanced Machine Learning",
                description: "Deep dive into AI and machine learning algorithms",
                features: ["Neural Networks", "Deep Learning", "Natural Language Processing"]
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Big Data Analytics",
                description: "Learn to handle and analyze large-scale datasets",
                features: ["Hadoop", "Spark", "Data Warehousing"]
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Applied Data Science",
                description: "Real-world projects and industry applications",
                features: ["Industry Projects", "Case Studies", "Capstone Project"]
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/5 p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <motion.div 
                  className="text-purple-400 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {program.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: fIndex * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;