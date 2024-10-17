import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/Layout";
import { technicalSections } from "../data/technicalData";

const TechnicalCorner = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-8 sm:mb-12"
        >
          Technical Corner
        </motion.h1>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center mb-6 sm:mb-8"
          >
            {technicalSections.map((section, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(index)}
                className={`px-3 sm:px-4 py-2 m-1 sm:m-2 rounded-md text-sm sm:text-base lg:text-lg font-medium transition-colors duration-300 ${
                  activeSection === index
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-indigo-600 hover:bg-indigo-100"
                }`}
              >
                {section.title}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {technicalSections[activeSection].title}
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                    {technicalSections[activeSection].content}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden"
                >
                  <motion.img
                    src={technicalSections[activeSection].image}
                    alt={technicalSections[activeSection].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Need more technical information?
            </h3>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
              Our team of experts is ready to assist you with any technical
              questions you may have.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg lg:text-xl hover:bg-indigo-700 transition-colors duration-300"
            >
              Contact Our Technical Team
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicalCorner;
