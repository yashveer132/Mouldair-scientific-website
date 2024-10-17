import React from "react";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";
import {
  companyInfo,
  stats,
  videoId,
  heroContent,
  contentSection,
  ctaSection,
} from "../data/aboutData";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <section className="relative flex items-center justify-center px-4 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen">
          <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6"
            >
              {heroContent.title}
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              {heroContent.subtitle}
            </motion.p>
          </div>

          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-2xl"
              style={{ width: "20vw", height: "20vw", top: "10%", left: "15%" }}
              animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-30 blur-2xl"
              style={{
                width: "30vw",
                height: "30vw",
                bottom: "5%",
                right: "10%",
              }}
              animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-30 blur-2xl"
              style={{ width: "25vw", height: "25vw", top: "40%", left: "50%" }}
              animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </section>

        <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
            >
              {contentSection.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 mb-8"
            >
              {contentSection.content}
            </motion.p>

            <motion.div
              className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ transformOrigin: "left center" }}
            ></motion.div>
          </div>
        </section>

        <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {["/pump3.jpg", "/pump3.jpg", "/pump3.jpg"].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9"
                >
                  <motion.img
                    src={src}
                    alt={`Company Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-lg font-semibold">
                      Learn More
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 sm:mb-12 lg:mb-16 text-gray-900"
            >
              Our Company
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {companyInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
                  >
                    <div className="p-6 flex-grow">
                      <div className="flex items-center mb-4">
                        <IconComponent className="text-2xl sm:text-3xl text-indigo-600 mr-3" />
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {info.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700">
                        {info.content}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-w-16 aspect-h-9"
                    >
                      <img
                        src={info.image}
                        alt={info.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-indigo-700 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-12 sm:mb-16"
            >
              Mouldair Scientific by the Numbers
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <IconComponent className="mx-auto text-3xl sm:text-4xl md:text-5xl mb-4" />
                    <motion.div
                      className="text-2xl sm:text-3xl md:text-4xl font-bold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2 + 0.3,
                        duration: 0.5,
                        type: "spring",
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-base sm:text-lg md:text-xl">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <motion.div
            className="absolute inset-0 bg-indigo-600 opacity-50"
            initial={{ scale: 0, borderRadius: "100%" }}
            whileInView={{ scale: 2, borderRadius: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
        </section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 lg:mb-20 max-w-7xl  mt-12 sm:mt-16 lg:mt-20 mx-4 sm:mx-6 lg:mx-8"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Experience Mouldair Scientific
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 lg:mb-12 text-gray-700 text-center">
            Watch our corporate video to learn more about our innovative
            solutions and global impact.
          </p>
          <div
            className="w-full h-0 relative rounded-lg overflow-hidden"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Corporate Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {ctaSection.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {ctaSection.content}
          </p>
          <div className="flex justify-center">
            <motion.a
              href={ctaSection.buttonLink}
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              {ctaSection.buttonText}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
