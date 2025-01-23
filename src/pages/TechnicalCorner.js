import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const technicalSections = [
  {
    title: "Introduction to Vacuum Technology",
    content:
      "Learn the fundamentals of vacuum pumps and how they create low-pressure environments crucial for many industrial processes. This section covers basic definitions, common applications, and the core principles of vacuum generation.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Pump Mechanics",
    content:
      "Vacuum pumps operate on the principle of creating a pressure differential to remove gas molecules from sealed chambers. The mechanics involve precise engineering of components such as rotors, stators, and valves.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Efficiency Optimization",
    content:
      "Improving pump efficiency involves careful consideration of factors such as motor design, impeller geometry, and system integration. Advanced computational simulations help in optimizing these parameters for maximum performance.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Maintenance Procedures",
    content:
      "Regular maintenance is crucial for ensuring the longevity and reliability of vacuum pumps. This includes routine inspections, oil changes, seal replacements, and calibration of control systems.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Performance Monitoring",
    content:
      "Monitoring pump performance is essential to ensure smooth operation. Real-time data collection, pressure monitoring, and diagnostics tools can detect anomalies before they cause significant downtime.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Advanced Materials",
    content:
      "The use of advanced materials such as ceramics, composites, and specialized coatings enhances the durability of pumps, especially in extreme conditions where corrosion and wear can degrade efficiency.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Troubleshooting Common Issues",
    content:
      "From air leaks to unusual noises, learn how to quickly identify and resolve common pump problems. This section includes a handy checklist for diagnosing issues and tips on when to seek professional help.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Energy Conservation Techniques",
    content:
      "Vacuum pump systems can be significant energy consumers. Discover strategies such as variable speed drives and improved sealing methods to reduce energy usage and operational costs.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Safety Protocols",
    content:
      "Working with vacuum systems involves high-speed rotating parts and potential exposure to chemicals. Learn about the critical safety protocols, including proper handling, protective gear, and emergency procedures.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Innovations in Vacuum Pump Designs",
    content:
      "Explore the latest trends and emerging technologies in vacuum pump design, such as smart pumps with IoT capabilities for predictive maintenance and integrated control systems.",
    image: "/pump3.jpg?height=300&width=400",
  },
];

const articles = [
  {
    title: "Article 1: High-Vacuum Applications in Nanotechnology",
    content:
      "Dive into how ultra-high vacuum environments enable precise manipulation of materials at the atomic scale. This article highlights recent breakthroughs in nanodevice fabrication methods and the role of advanced vacuum technology.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Article 2: Sustainable Manufacturing and Vacuum Pumps",
    content:
      "Explore how eco-friendly materials, energy-efficient designs, and greener processes are being integrated into modern vacuum pump manufacturing to reduce carbon footprints.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Article 3: Vacuum Solutions for Lab-Scale Research",
    content:
      "Learn how small yet powerful vacuum pumps are revolutionizing research labs by enabling more complex experiments within confined spaces, while maintaining precise pressure controls.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Article 4: Breaking the Pressure Barrier",
    content:
      "An in-depth look at the engineering challenges of achieving near-perfect vacuums and the new breakthroughs that push the limits of low-pressure technology.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Article 5: 3D Printing Meets Vacuum Environments",
    content:
      "Discover how vacuum technology is integrated into additive manufacturing processes, preventing oxidation and improving the quality of advanced 3D printed components.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Article 6: Advances in Oil-Free Pump Technology",
    content:
      "Oil-free pumps reduce contamination risks and lower maintenance costs. This article covers the latest designs that enhance performance and reliability without the need for lubricants.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Article 7: Medical Device Sterilization Using Vacuum",
    content:
      "Vacuum technology is critical for sterilizing medical equipment. This piece delves into how controlled vacuum conditions ensure the highest standards of cleanliness and patient safety.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Article 8: Electronic Packaging and Hermetic Sealing",
    content:
      "Learn about how vacuum processes are used for hermetic sealing in electronic packaging, preventing moisture ingress and protecting sensitive electronic components.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Article 9: Future of Space Missions and Vacuum Tech",
    content:
      "Space exploration heavily relies on vacuum technology. This article highlights recent projects that use vacuum systems in spacecraft testing and environmental simulations.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Article 10: The Role of Vacuum Pumps in Food Safety",
    content:
      "Modern vacuum packaging techniques extend shelf life and ensure food safety. Understand the science behind vacuum sealing and how new pumps improve efficiency.",
    image: "/pump3.jpg?height=300&width=400",
  },
];

const caseStudies = [
  {
    title: "Case Study 1: Refinery Optimization",
    content:
      "An oil refinery faced frequent breakdowns due to contaminated pump oil. By switching to a new filtration system and advanced seal technology, they saw a 40% drop in downtime.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Case Study 2: Vacuum-Assisted Resin Infusion",
    content:
      "A composites manufacturer implemented vacuum-assisted resin infusion for large-scale wind turbine blades, improving fiber saturation and reducing production time.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Case Study 3: Pharma Freeze-Drying Overhaul",
    content:
      "A pharmaceutical plant upgraded its vacuum freeze-drying lines, leading to a 25% reduction in energy usage and improved temperature uniformity across product batches.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Case Study 4: Semiconductor Fabrication Upgrade",
    content:
      "By integrating a robust vacuum system with real-time monitoring, a chip manufacturer decreased contamination incidents by 35% and increased wafer yields.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Case Study 5: Energy-Saving Retrofits",
    content:
      "A metal coating facility replaced outdated pumps with new high-efficiency models, saving an estimated 20% in annual energy costs and qualifying for green incentives.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Case Study 6: Aerospace Component Quality Boost",
    content:
      "An aerospace firm invested in advanced vacuum systems for electron beam welding, resulting in a 15% increase in weld integrity and a 10% cut in rework rates.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Case Study 7: High-Altitude Simulation Success",
    content:
      "A defense contractor used specialized vacuum chambers to simulate high-altitude conditions, helping them perfect drone technology and cut prototyping costs by 30%.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Case Study 8: Vacuum Furnace Efficiency",
    content:
      "A tool manufacturer replaced traditional heating methods with vacuum furnaces, reducing oxidation and scaling, which extended tool life by 25%.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Case Study 9: Lab Scale Testing for Startups",
    content:
      "A startup incubation center installed modular vacuum stations for innovators. This approach saved each startup an average of $10,000 in setup costs.",
    image: "/pump3.jpg?height=300&width=400",
  },
  {
    title: "Case Study 10: Reducing Emissions in Chemical Plants",
    content:
      "A chemical company tackled greenhouse gas emissions by integrating leak-proof pumps and real-time gas monitoring, lowering emissions by 18%.",
    image: "/pump3.jpg?height=300&width=400",
  },
];

const TechnicalCorner = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(0);
  const [activeArticle, setActiveArticle] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
              className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 min-h-[500px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center h-full">
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

          <section id="articles" className="mt-16">
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
                className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 min-h-[500px]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center h-full">
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

          <section id="case-studies" className="mt-16">
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
                className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 min-h-[500px]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center h-full">
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
