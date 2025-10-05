import React from "react";
import Layout from "../components/Layout/Layout";
import { FaLinkedinIn } from "react-icons/fa";

const linkedinUrl =
  "https://www.linkedin.com/in/santosh-singh-65290431?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
              Get in <span className="text-indigo-600">Touch</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have a question about our
              products, pricing, or just want to say hello, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start sm:items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-semibold text-sm sm:text-base">
                        📍 Address
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        44, Happy Residency B/H Narmada Hotel, Zadeshwar,
                        Bharuch, Gujarat 392011, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-semibold text-sm sm:text-base">
                        📞 Phone
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        7698660715
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-semibold text-sm sm:text-base">
                        📧 Email
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        mouldairscientific@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <div className="p-6 sm:p-8 flex-1 flex flex-col items-center justify-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                  Follow Us
                </h2>
                <div className="flex justify-center space-x-3 sm:space-x-4 mb-6">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white p-2 sm:p-3 rounded-full cursor-pointer"
                  >
                    <FaLinkedinIn className="text-lg sm:text-xl" />
                  </a>
                </div>
                <img
                  src="/Black on Transparent.png"
                  alt="ModuVac Logo"
                  className="max-h-40 w-full object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <div className="flex-1 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14825.231225323734!2d73.0288011!3d21.7295895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f8b428ea21a85%3A0xb6a14a7dfb8db901!2sMouldAir%20Scientific%20%26%20Lab%20Equipments!5e0!3m2!1sen!2sin!4v1684659417317!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px", display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
