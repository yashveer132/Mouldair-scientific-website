import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/Layout";
import { technicalSections } from "../data/technicalData";

const articles = [
  {
    title: "Advanced Vacuum Technology in Semiconductor Manufacturing",
    content: "Explore how cutting-edge vacuum pumps are revolutionizing the semiconductor industry. This article delves into the latest advancements in vacuum technology and their impact on chip production. Learn about the challenges faced in creating ultra-high vacuums and how new pump designs are overcoming these obstacles.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Optimizing Vacuum Systems for Pharmaceutical Freeze Drying",
    content: "Discover the critical role of vacuum systems in pharmaceutical freeze-drying processes. This comprehensive guide covers the principles of lyophilization, the importance of precise vacuum control, and strategies for optimizing freeze-drying cycles. Case studies demonstrate how advanced vacuum technology is improving drug stability and reducing production times.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Sustainable Vacuum Solutions for Green Manufacturing",
    content: "Uncover the latest trends in eco-friendly vacuum technologies shaping the future of sustainable manufacturing. This article examines energy-efficient pump designs, the use of smart controls to reduce power consumption, and innovative recycling methods for vacuum system components. Learn how companies are reducing their carbon footprint while maintaining high-performance vacuum operations.",
    image: "/pump3.jpg?height=300&width=400",
  },
];

const caseStudies = [
  {
    title: "Improving Efficiency in Large-Scale Food Packaging",
    content: "Global Foods Inc. faced challenges with their vacuum sealing process for packaged foods. By implementing our advanced vacuum pump system, they achieved a 30% increase in packaging speed and a 15% reduction in energy consumption. The case study details the selection process, installation challenges, and the long-term benefits realized over a 12-month period.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Enhancing Precision in Aerospace Component Manufacturing",
    content: "AeroTech Solutions required ultra-high vacuum conditions for their electron beam welding processes. Our customized vacuum solution resulted in a 50% reduction in defect rates and a 20% improvement in surface finish quality. This case study explores the unique requirements of aerospace manufacturing and how specialized vacuum technology can drive significant quality improvements.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Optimizing Vacuum Distillation in Petrochemical Processing",
    content: "PetroMax Industries sought to improve their vacuum distillation process for better product yield and reduced downtime. By integrating our smart vacuum control system, they achieved a 25% increase in product yield and a 40% reduction in maintenance downtime. The study details the challenges of maintaining stable vacuums in harsh petrochemical environments and the innovative solutions employed.",
    image: "/pump3.jpg?height=300&width=400",
  },
];

const TechnicalCorner = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeArticle, setActiveArticle] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

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

          

          <section className="mt-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
              Latest Articles
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center mb-6 sm:mb-8"
            >
              {articles.map((article, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveArticle(index)}
                  className={`px-3 sm:px-4 py-2 m-1 sm:m-2 rounded-md text-sm sm:text-base lg:text-lg font-medium transition-colors duration-300 ${
                    activeArticle === index
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-indigo-600 hover:bg-indigo-100"
                  }`}
                >
                  {article.title}
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeArticle}
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
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {articles[activeArticle].title}
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                      {articles[activeArticle].content}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden"
                  >
                    <motion.img
                      src={articles[activeArticle].image}
                      alt={articles[activeArticle].title}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
              Case Studies
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center mb-6 sm:mb-8"
            >
              {caseStudies.map((study, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCaseStudy(index)}
                  className={`px-3 sm:px-4 py-2 m-1 sm:m-2 rounded-md text-sm sm:text-base lg:text-lg font-medium transition-colors duration-300 ${
                    activeCaseStudy === index
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-indigo-600 hover:bg-indigo-100"
                  }`}
                >
                  {study.title}
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCaseStudy}
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
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {caseStudies[activeCaseStudy].title}
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                      {caseStudies[activeCaseStudy].content}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden"
                  >
                    <motion.img
                      src={caseStudies[activeCaseStudy].image}
                      alt={caseStudies[activeCaseStudy].title}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicalCorner;