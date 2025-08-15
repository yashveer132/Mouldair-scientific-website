import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaCog,
  FaTools,
  FaShieldAlt,
  FaFileExcel,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { productData } from "../data/productData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center">
            Product not found
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 min-h-screen py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 text-center tracking-tight leading-tight"
            >
              {product.name}
            </motion.h1>
            {product.datasheetUrl && (
              <motion.a
                href={product.datasheetUrl}
                download={!product.datasheetUrl.startsWith("https:")}
                target={
                  product.datasheetUrl.startsWith("https:")
                    ? "_blank"
                    : undefined
                }
                rel={
                  product.datasheetUrl.startsWith("https:")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {product.datasheetUrl.startsWith("https:") ? (
                  <FaExternalLinkAlt className="mr-2" />
                ) : (
                  <FaFileExcel className="mr-2" />
                )}
                {product.datasheetUrl.startsWith("https:")
                  ? "Visit Website"
                  : "Download Document"}
              </motion.a>
            )}
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-6 lg:gap-12 mb-12 lg:mb-16">
            {product.imageUrl.map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                className="rounded-lg overflow-hidden shadow-lg w-full lg:w-1/2"
              >
                <img
                  src={url}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-lg shadow-xl p-6 lg:p-8 mb-12 lg:mb-16"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">
              Product Overview
            </h2>
            <p className="text-gray-700 text-lg mb-6 text-center">
              {product.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-lg shadow-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FaCog className="text-indigo-600 mr-2" />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Key Features
                </h3>
              </div>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center space-x-2"
                  >
                    <FaShieldAlt className="text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-white rounded-lg shadow-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FaIndustry className="text-indigo-600 mr-2" />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Applications
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.applications.map((application, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center space-x-2 bg-indigo-50 p-2 rounded"
                  >
                    <FaIndustry className="text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">{application}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white rounded-lg shadow-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FaTools className="text-indigo-600 mr-2" />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Technical Specifications
                </h3>
              </div>
              <ul className="space-y-2">
                {Object.entries(product.technicalSpecs).map(
                  ([key, value], index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between"
                    >
                      <span className="font-semibold text-indigo-600">
                        {key}:
                      </span>
                      <span className="text-gray-700">{value}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          </div>

          {product.additionalFeatures && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-white rounded-lg shadow-xl p-6 lg:p-8 mb-12 lg:mb-16"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Additional Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.additionalFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center space-x-2 bg-indigo-50 p-3 rounded-lg"
                  >
                    <FaCog className="text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {product.videoId && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-white rounded-lg shadow-xl p-6 lg:p-8 mb-12 lg:mb-16 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Product Demo Video
              </h3>
              <div className="relative rounded-lg overflow-hidden shadow-lg h-60 sm:aspect-video sm:h-auto">
                <iframe
                  src={`https://www.youtube.com/embed/${product.videoId}`}
                  title="Product Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Elevate Your Operations?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Experience the power and efficiency of the {product.name}. Our
              team of experts is ready to assist you with any questions and help
              you find the perfect solution for your needs.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="/contact"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
