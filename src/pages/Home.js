import React, { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
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
              <div className="lg:w-1/2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                  {heroContent.title}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-100">
                  {heroContent.subtitle}
                </p>
                <div>
                  <button
                    onClick={handleScrollToCategories}
                    className="flex sm:inline-flex justify-center items-center mx-auto sm:mx-0 lg:ml-20 bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  >
                    {heroContent.buttonText}
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <img
                    src="/original.png"
                    alt="ModuVac Vacuum Pump"
                    className="w-full aspect-[4/3] object-cover rounded-2xl"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div ref={categoriesRef} id="categories" className="relative">
          <div className="max-w-7xl mx-auto pt-12 pb-20 px-4 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="-mt-6 sm:-mt-8 mb-6 sm:mb-8 text-3xl sm:text-4xl font-extrabold text-gray-900">
                Our Pump Categories
              </h2>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 xl:gap-x-8 items-stretch justify-center">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white rounded-lg p-4 sm:p-6 lg:p-4 flex flex-col items-center h-full w-full max-w-[320px] md:max-w-[360px] mx-auto transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
                >
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="w-full h-36 sm:h-48 lg:h-40 object-contain sm:object-cover object-top mb-4 rounded bg-white"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 mb-4 text-center">
                    {cat.description}
                  </p>
                  <Link
                    to={cat.link}
                    className="inline-flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-md font-medium w-full max-w-[220px] text-center mb-6 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                  >
                    <span className="inline-block">View {cat.name}</span>
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-900 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 -mt-8 lg:-mt-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden pb-[66%] sm:pb-[50%] h-0 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <iframe
                src="https://www.youtube.com/embed/8OpkLSdy7ms"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="ModuVac Video"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <div className="relative rounded-lg overflow-hidden pb-[66%] sm:pb-[50%] h-0 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
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
        </div>
        <div className="bg-gray-100 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12">
              Why Choose Mouldair Scientific?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
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
        </div>

        <div className="bg-white py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
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
        </div>

        <div className="bg-indigo-700 text-white py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              {ctaSection.title}
            </h2>
            <p className="text-lg sm:text-xl mb-8">{ctaSection.content}</p>
            <div className="inline-block">
              <Link
                to={ctaSection.buttonLink}
                className="inline-flex items-center bg-white text-indigo-700 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-indigo-50 transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
              >
                {ctaSection.buttonText}
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
