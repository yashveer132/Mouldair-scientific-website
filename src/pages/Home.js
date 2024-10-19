import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import Layout from "../components/Layout/Layout";
import ProductCard from "../components/Layout/ProductCard";
import AnimatedSection from "../components/AnimatedSection";
import {
  FaArrowRight,
  FaIndustry,
  FaFlask,
  FaCog,
  FaChartLine,
} from "react-icons/fa";

import {
  products,
  features,
  testimonials,
  staggerContainer,
  fadeInUp,
  heroContent,
  innovateSection,
  ctaSection,
} from "../data/homeData";

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
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

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <section
          ref={targetRef}
          className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white overflow-hidden"
        >
          <motion.div
            style={{ opacity, scale: scaleSpring, y }}
            className="max-w-7xl mx-auto py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="lg:w-1/2 mb-8 lg:mb-0"
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6"
                  variants={fadeInUp}
                >
                  {heroContent.title}
                </motion.h1>
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  {heroContent.subtitle}
                </motion.p>
                <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
                  <Link
                    to={heroContent.buttonLink}
                    className="inline-flex items-center bg-white text-indigo-600 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-indigo-50 transition duration-300 shadow-lg"
                  >
                    {heroContent.buttonText}
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="lg:w-1/2 mt-8 lg:mt-0"
              >
                <img
                  src="/pump2.png"
                  alt="ModuVac Vacuum Pump"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-auto"
            >
              <path
                fill="#f3f4f6"
                fillOpacity="1"
                d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,160C672,171,768,181,864,176C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </motion.div>
        </section>

        <AnimatedSection className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
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
              Our Top Products
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-indigo-700 transition duration-300"
            >
              Explore All Products
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-gray-900 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Experience Mouldair Scientific in Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Watch our video to see how Mouldair Scientific can transform your workflow.
            </p>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              style={{ paddingBottom: "56.25%", height: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.youtube.com/embed/pnqXEnn3DNk"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="ModuVac Video"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
            <motion.div
              className="relative w-full lg:w-1/2 mb-8 lg:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={innovateSection.imageUrl}
                alt="Innovate with Confidence"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
            </motion.div>

            <div className="w-full lg:w-1/2 lg:pl-12 xl:pl-16 text-center lg:text-left">
              <motion.h2
                className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {innovateSection.title}
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {innovateSection.content}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={innovateSection.buttonLink}
                  className="inline-flex items-center bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-indigo-700 transition duration-300"
                >
                  {innovateSection.buttonText}
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
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
                  <div className="flex items-center">
                    <img
                      src={`https://i.pravatar.cc/60?img=${index + 1}`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
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
              <Link
                to={ctaSection.buttonLink}
                className="inline-flex items-center bg-white text-indigo-700 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-indigo-50 transition duration-300"
              >
                {ctaSection.buttonText}
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Home;
