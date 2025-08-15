import React from "react";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";
import {
  companyInfo,
  videoIds,
  heroContent,
  ctaSection,
} from "../data/aboutData";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <section className="relative flex items-center justify-center px-4 py-2 pb-10 sm:py-4 sm:pb-16 md:py-6 md:pb-20 lg:py-8 lg:pb-28 overflow-hidden min-h-[20vh] sm:min-h-[25vh] md:min-h-[30vh] lg:min-h-[35vh]">
          <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6"
              style={{ fontWeight: 800 }}
            >
              {heroContent.title}
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              style={{ fontWeight: 400 }}
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

        <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-12 sm:mb-14 lg:mb-20 text-gray-900"
              style={{ fontWeight: 800 }}
            >
              Our Authorised Principals{" "}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
              {companyInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center border border-indigo-100 hover:shadow-indigo-200 transition-shadow duration-300"
                  style={{
                    boxShadow:
                      "0 8px 32px 0 rgba(80, 72, 229, 0.10), 0 1.5px 6px 0 rgba(80, 72, 229, 0.08)",
                  }}
                >
                  <div className="flex flex-col items-center p-8 flex-grow w-full">
                    <div className="w-44 h-44 flex items-center justify-center rounded-2xl overflow-hidden bg-white shadow-md mb-6">
                      <img
                        src={info.image}
                        alt={info.title}
                        className="object-contain w-full h-full"
                        style={{ maxHeight: "160px", maxWidth: "160px" }}
                      />
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center"
                      style={{ fontWeight: 800 }}
                    >
                      {info.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg text-gray-700 text-center font-bold"
                      style={{ fontWeight: 400 }}
                    >
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-14 mb-12 sm:mb-16 lg:mb-20 max-w-7xl mt-12 sm:mt-16 lg:mt-20 mx-4 sm:mx-6 lg:mx-8"
        >
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 text-center"
            style={{ fontWeight: 800 }}
          >
            Experience Mouldair Scientific
          </h3>
          <p
            className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 text-gray-700 text-center font-semibold"
            style={{ fontWeight: 600 }}
          >
            Watch our corporate videos to learn more about our innovative
            solutions and global impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videoIds.map((id, idx) => (
              <div
                key={id}
                className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-100 via-white to-purple-50 border border-indigo-100 flex flex-col"
              >
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Corporate Video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 px-4 sm:px-6 lg:px-8"
        >
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6"
            style={{ fontWeight: 400 }}
          >
            {ctaSection.title}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto font-semibold"
            style={{ fontWeight: 600 }}
          >
            {ctaSection.content}
          </p>
          <div className="flex justify-center">
            <motion.a
              href={ctaSection.buttonLink}
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              style={{ fontWeight: 700 }}
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
