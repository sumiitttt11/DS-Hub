import React from "react";
import { motion } from "framer-motion";
import { Book, Video, Database, Wrench } from "lucide-react";

// Resources Data
const resources = [
  {
    category: "Books",
    icon: <Book className="w-8 h-8 text-blue-400" />,
    items: [
      {
        title: "Python for Data Analysis",
        description: "A great resource for learning data manipulation using pandas.",
        link: "https://www.oreilly.com/library/view/python-for-data/9781491957653/",
      },
      {
        title: "Hands-On Machine Learning",
        description: "Covers ML techniques using Scikit-Learn and TensorFlow.",
        link: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
      },
    ],
  },
  {
    category: "Online Courses",
    icon: <Video className="w-8 h-8 text-green-400" />,
    items: [
      {
        title: "Machine Learning by Andrew Ng",
        description: "A beginner-friendly course covering ML fundamentals.",
        link: "https://www.coursera.org/learn/machine-learning",
      },
      {
        title: "Deep Learning Specialization",
        description: "A detailed series of courses on deep learning.",
        link: "https://www.coursera.org/specializations/deep-learning",
      },
    ],
  },
  {
    category: "Datasets",
    icon: <Database className="w-8 h-8 text-yellow-400" />,
    items: [
      {
        title: "Kaggle Datasets",
        description: "A huge collection of datasets for ML and analytics.",
        link: "https://www.kaggle.com/datasets",
      },
      {
        title: "Google Dataset Search",
        description: "Helps find datasets across the web.",
        link: "https://datasetsearch.research.google.com/",
      },
    ],
  },
  {
    category: "Tools & Libraries",
    icon: <Wrench className="w-8 h-8 text-red-400" />,
    items: [
      {
        title: "Scikit-Learn",
        description: "A powerful ML library for Python.",
        link: "https://scikit-learn.org/",
      },
      {
        title: "TensorFlow",
        description: "An open-source framework for deep learning.",
        link: "https://www.tensorflow.org/",
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
            Explore Data Science Resources
          </h1>
          <p className="text-xl text-gray-400">
            A curated list of books, courses, datasets, and tools to enhance your learning.
          </p>
        </motion.div>

        {/* Resources List */}
        <div className="grid md:grid-cols-2 gap-10">
          {resources.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-lg bg-white/5 p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-center space-x-4 mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold text-white">{section.category}</h2>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="border-b border-gray-700 pb-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-lg font-medium"
                    >
                      {item.title}
                    </a>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
