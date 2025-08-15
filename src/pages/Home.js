import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  heroContent,
  ctaSection,
  features,
} from "../data/homeData";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#categories" && categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

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
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 lg:-mt-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                  {heroContent.title}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-100">
                  {heroContent.subtitle}
                </p>
                <div>
                  <button
                    onClick={handleScrollToCategories}
                    className="group flex sm:inline-flex justify-center items-center mx-auto sm:mx-0 lg:ml-20 bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    {heroContent.buttonText}
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative lg:-mt-28">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/original.png"
                    alt="ModuVac Vacuum Pump"
                    className="w-full aspect-[4/3] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div ref={categoriesRef} id="categories" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white opacity-50"></div>
          <AnimatedSection className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Our Pump Categories
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-8">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
                >
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
              ))}
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection className="bg-gray-900 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-2xl pb-[75%] sm:pb-[56.25%] h-0 hover:scale-102 transition-transform duration-300">
              <iframe
                src="https://www.youtube.com/embed/8OpkLSdy7ms"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="ModuVac Video"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl pb-[75%] sm:pb-[56.25%] h-0 hover:scale-102 transition-transform duration-300">
              <iframe
                src="https://www.youtube.com/embed/vrJlsgag26M"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Additional Video"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection className="bg-gray-100 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12">
              Why Choose Mouldair Scientific?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
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
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
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
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-indigo-700 text-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              {ctaSection.title}
            </h2>
            <p className="text-lg sm:text-xl mb-8">{ctaSection.content}</p>
            <div className="inline-block hover:scale-105 transition-transform duration-300">
              <a
                href={ctaSection.buttonLink}
                className="inline-flex items-center bg-white text-indigo-700 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-indigo-50 transition duration-300"
              >
                {ctaSection.buttonText}
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Home;