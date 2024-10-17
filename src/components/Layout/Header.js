import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { products } from "../../data/productsData";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Technical Corner", href: "/technical" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialMedia = [
  { icon: FaFacebook, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaLinkedin, href: "#" },
  { icon: FaInstagram, href: "#" },
];

const Header = () => {
  const location = useLocation();
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);

  const handleDropdownOpen = () => setProductDropdownOpen(true);
  const handleDropdownClose = () => setProductDropdownOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow-md z-50 sticky top-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-indigo-600 text-white py-2 sm:py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
              <a
                href="mailto:info@mouldairscientific.com"
                className="flex items-center text-sm sm:text-base lg:text-lg hover:text-indigo-200 transition-colors duration-300"
              >
                <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                <span className="hidden sm:inline">
                  info@mouldairscientific.com
                </span>
                <span className="sm:hidden">Email Us</span>
              </a>
              <a
                href="tel:+07698660715"
                className="flex items-center text-sm sm:text-base lg:text-lg hover:text-indigo-200 transition-colors duration-300"
              >
                <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                +076986 60715
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm sm:text-base lg:text-lg mr-2">
                Follow us:
              </span>
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-indigo-200 transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16 sm:h-20">
                <div className="flex flex-1 items-center space-x-2 sm:space-x-3">
                  <Link to="/">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer flex items-center space-x-2"
                    >
                      <img
                        src="/pump.png?height=48&width=48"
                        alt="Mouldair Logo"
                        className="h-8 w-auto sm:h-10 lg:h-12"
                      />
                      <span className="text-gray-700 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                        Mouldair Scientific
                      </span>
                    </motion.div>
                  </Link>
                </div>

                <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6 xl:space-x-8">
                  {navigation.map((item) => {
                    if (item.name === "Products") {
                      return (
                        <div
                          key={item.name}
                          className="relative"
                          onMouseEnter={handleDropdownOpen}
                          onMouseLeave={handleDropdownClose}
                        >
                          <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            className="transition duration-300 cursor-pointer"
                          >
                            <Link
                              to={item.href}
                              className={`${
                                location.pathname === item.href
                                  ? "text-indigo-600 font-semibold"
                                  : "text-gray-600 hover:text-indigo-600"
                              } text-sm lg:text-base xl:text-lg font-medium flex items-center`}
                            >
                              {item.name}
                              <ChevronDownIcon className="ml-1 h-4 w-4 lg:h-5 lg:w-5" />
                            </Link>
                          </motion.div>

                          <AnimatePresence>
                            {isProductDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-0 mt-2 w-48 sm:w-56 lg:w-64 bg-white shadow-lg rounded-lg z-20 overflow-hidden"
                              >
                                <motion.ul
                                  className="py-2"
                                  initial="closed"
                                  animate="open"
                                  variants={{
                                    open: {
                                      transition: {
                                        staggerChildren: 0.07,
                                        delayChildren: 0.2,
                                      },
                                    },
                                    closed: {
                                      transition: {
                                        staggerChildren: 0.05,
                                        staggerDirection: -1,
                                      },
                                    },
                                  }}
                                >
                                  {products.map((product) => (
                                    <motion.li
                                      key={product.id}
                                      variants={{
                                        open: {
                                          y: 0,
                                          opacity: 1,
                                          transition: {
                                            y: {
                                              stiffness: 1000,
                                              velocity: -100,
                                            },
                                          },
                                        },
                                        closed: {
                                          y: 50,
                                          opacity: 0,
                                          transition: {
                                            y: { stiffness: 1000 },
                                          },
                                        },
                                      }}
                                    >
                                      <Link
                                        to={`/products/${product.id}`}
                                        className="block px-4 py-2 text-sm lg:text-base text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-center"
                                      >
                                        {product.name}
                                      </Link>
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        className="transition duration-300"
                      >
                        <Link
                          to={item.href}
                          className={`${
                            location.pathname === item.href
                              ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                              : "text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                          } text-sm lg:text-base xl:text-lg font-medium`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 sm:h-8 sm:w-8"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 sm:h-8 sm:w-8"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-indigo-50 overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${
                        location.pathname === item.href
                          ? "bg-indigo-100 text-indigo-700"
                          : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                      } block px-3 py-2 rounded-md text-base font-medium`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-600">
                          Products
                          <ChevronDownIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } w-5 h-5 sm:w-6 sm:h-6 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-3 pt-1 pb-3 space-y-1 bg-indigo-50 rounded-md">
                          {products.map((product) => (
                            <Link
                              key={product.id}
                              to={`/products/${product.id}`}
                              className="block px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                            >
                              {product.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </motion.div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
