import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <Link
              to="/"
              className="flex items-center justify-center lg:justify-start space-x-2"
            >
              <motion.span
                className="text-4xl font-bold text-indigo-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Mouldair Scientific
              </motion.span>
            </Link>
            <p className="text-gray-400 text-base">
              Innovative modular scientific vacuum pumps for cutting-edge
              research and industry solutions.
            </p>

            <div className="flex justify-center lg:justify-start space-x-6">
              <motion.a
                href="https://facebook.com"
                className="text-gray-400 hover:text-indigo-500 transition"
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                <FaFacebookF className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                className="text-gray-400 hover:text-indigo-500 transition"
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                <FaTwitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-indigo-500 transition"
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                <FaLinkedinIn className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                className="text-gray-400 hover:text-indigo-500 transition"
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                <FaInstagram className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 sm:mt-0"
          >
            <h3 className="text-lg font-semibold text-gray-300 tracking-wider uppercase mb-4 text-center lg:text-left">
              Quick Links
            </h3>
            <ul className="space-y-4 text-center lg:text-left">
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="text-base text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/#categories"
                  onClick={scrollToTop}
                  className="text-base text-gray-400 hover:text-white transition duration-300"
                >
                  Products
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/technical"
                  onClick={scrollToTop}
                  className="text-base text-gray-400 hover:text-white transition duration-300"
                >
                  Technical Corner
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="text-base text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-base text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-0"
          >
            <h3 className="text-lg font-semibold text-gray-300 tracking-wider uppercase mb-4 text-center lg:text-left">
              Address
            </h3>
            <p className="text-base text-gray-400 mb-4 text-center lg:text-left">
              44 Happy Residency B/H Narmada Hotel, Zadeshwar, Bharuch, Gujarat
              392011, India
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14825.231225323734!2d73.0288011!3d21.7295895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f8b428ea21a85%3A0xb6a14a7dfb8db901!2sMouldAir%20Scientific%20%26%20Lab%20Equipments!5e0!3m2!1sen!2sin!4v1684659417317!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ModuVac Location"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 sm:mt-0"
          >
            <h3 className="text-lg font-semibold text-gray-300 tracking-wider uppercase mb-4 text-center lg:text-left">
              Opening Hours
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <ul className="space-y-4 text-base">
                <li className="flex justify-between items-center">
                  <span className="text-indigo-500 font-semibold">
                    Week Days
                  </span>
                  <span className="text-gray-300">09:00 - 17:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-indigo-500 font-semibold">
                    Saturday
                  </span>
                  <span className="text-gray-300">09:00 - 17:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-red-500 font-semibold">Sunday</span>
                  <span className="text-gray-300">Day Off</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Mouldair Scientific, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
