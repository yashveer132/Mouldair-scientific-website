import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
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
      <div className="bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 min-h-screen py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight leading-tight max-w-4xl w-full truncate">
              {product.name}
            </h1>
            {product.datasheetUrl && (
              <a
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 mb-8 sm:mb-10 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                {product.datasheetUrl.startsWith("https:") ? (
                  <FaExternalLinkAlt className="mr-2" />
                ) : (
                  <FaFileExcel className="mr-2" />
                )}
                {product.datasheetUrl.startsWith("https:")
                  ? "Visit Website"
                  : "Download Document"}
              </a>
            )}
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center gap-6 mb-6 lg:mb-10 lg:-mt-4">
            <div className="bg-white rounded-lg p-4 lg:p-6 mb-8 lg:mb-0 lg:w-1/2 lg:h-full flex flex-col lg:justify-center lg:pb-6 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">
                Product Overview
              </h2>
              <p className="text-gray-700 text-base mb-4 text-left">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end lg:w-1/2 lg:h-full">
              <div className="flex flex-col items-center lg:items-end gap-6 w-full h-full justify-center">
                {product.imageUrl.map((url, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg w-full max-w-md lg:w-full flex items-center justify-center bg-white mx-auto lg:mx-0 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  >
                    <img
                      src={url}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-contain mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 mb-8 lg:mb-10">
            <div className="bg-white rounded-lg p-4 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <FaCog className="text-indigo-600 mr-2" />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Key Features
                </h3>
              </div>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaShieldAlt className="text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <FaIndustry className="text-indigo-600 mr-2" />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Applications
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.applications.map((application, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center text-center bg-indigo-50 p-2 rounded"
                  >
                    <span className="text-gray-700 w-full">{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <FaTools className="text-indigo-600 mr-2" />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Technical Specifications
                </h3>
              </div>
              <div className="space-y-2">
                {Object.entries(product.technicalSpecs).map(
                  ([key, value], index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 gap-4 items-start"
                    >
                      <span className="font-semibold text-indigo-600 break-words">
                        {key}:
                      </span>
                      <span className="text-gray-700 break-words">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {product.additionalFeatures && (
            <div className="bg-white rounded-lg shadow-xl p-6 lg:p-8 mb-12 lg:mb-16 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Additional Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.additionalFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 bg-indigo-50 p-3 rounded-lg"
                  >
                    <FaCog className="text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.videoId && (
            <div className="bg-white rounded-lg shadow-xl p-6 lg:p-8 mb-12 lg:mb-16 max-w-4xl mx-auto transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Product Demo Video
              </h3>
              <div className="flex justify-center items-center">
                <div className="relative rounded-lg overflow-hidden shadow-lg h-72 md:h-64 lg:h-72 xl:h-80 sm:aspect-video w-full max-w-2xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${product.videoId}`}
                    title="Product Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Elevate Your Operations?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Experience the power and efficiency of the {product.name}. Our
              team of experts is ready to assist you with any questions and help
              you find the perfect solution for your needs.
            </p>
            <div className="flex justify-center gap-4">
              <div className="transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <Link
                  to="/contact"
                  className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
