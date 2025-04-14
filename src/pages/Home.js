import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Layout from "../components/Layout/Layout";
import AnimatedSection from "../components/AnimatedSection";
import {
  FaArrowRight,
  FaIndustry,
  FaFlask,
  FaCog,
  FaChartLine,
} from "react-icons/fa";
import {
  categories,
  testimonials,
  staggerContainer,
  fadeInUp,
  heroContent,
  ctaSection,
  features,
} from "../data/homeData";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const { hash } = useLocation();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (hash === "#categories" && categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scaleSpring = useSpring(scale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const handleScrollToCategories = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = "/original.png";
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        <section
          ref={heroRef}
          className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white overflow-hidden min-h-[90vh] flex items-center"
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <motion.div
            style={{ opacity, scale: scaleSpring, y }}
            className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="lg:w-1/2"
              >
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
                  variants={fadeInUp}
                >
                  {heroContent.title}
                </motion.h1>
                <motion.p
                  className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-100"
                  variants={fadeInUp}
                >
                  {heroContent.subtitle}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <button
                    onClick={handleScrollToCategories}
                    className="group inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    {heroContent.buttonText}
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              </motion.div>
              <motion.div
                className="lg:w-1/2 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/original.png"
                    alt="ModuVac Vacuum Pump"
                    className="w-full aspect-[4/3] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <div ref={categoriesRef} id="categories" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white opacity-50"></div>
          <AnimatedSection className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="text-center mb-12 sm:mb-16"
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-extrabold text-gray-900"
                variants={fadeInUp}
              >
                Our Pump Categories
              </motion.h2>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-8"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">
                      {cat.name}
                    </h3>
                    <p className="text-gray-500 mb-4 text-center">
                      {cat.description}
                    </p>
                    <a
                      href={cat.link}
                      className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition duration-300"
                    >
                      View {cat.name}
                      <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
        <AnimatedSection className="bg-gray-900 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              style={{ paddingBottom: "56.25%", height: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.youtube.com/embed/8OpkLSdy7ms"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="ModuVac Video"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </motion.div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              style={{ paddingBottom: "56.25%", height: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.youtube.com/embed/vrJlsgag26M"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Additional Video"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </AnimatedSection>
        <AnimatedSection className="bg-gray-100 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12">
              Why Choose Mouldair Scientific?
            </h2>
            <motion.div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  variants={fadeInUp}
                >
                  <div className="flex items-center justify-center mb-4">
                    {index === 0 && (
                      <FaIndustry className="text-4xl text-indigo-600" />
                    )}
                    {index === 1 && (
                      <FaFlask className="text-4xl text-indigo-600" />
                    )}
                    {index === 2 && (
                      <FaCog className="text-4xl text-indigo-600" />
                    )}
                    {index === 3 && (
                      <FaChartLine className="text-4xl text-indigo-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 text-center">
              What Our Clients Say
            </h2>
            <motion.div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  variants={fadeInUp}
                >
                  <p className="italic text-gray-700 mb-4">
                    "{testimonial.feedback}"
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-indigo-600">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-indigo-700 text-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              {ctaSection.title}
            </h2>
            <p className="text-lg sm:text-xl mb-8">{ctaSection.content}</p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <a
                href={ctaSection.buttonLink}
                className="inline-flex items-center bg-white text-indigo-700 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-indigo-50 transition duration-300"
              >
                {ctaSection.buttonText}
                <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Home;
