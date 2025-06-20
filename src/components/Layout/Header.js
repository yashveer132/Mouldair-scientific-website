import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import { productData } from "../../data/productData";
import { pumpTypeLabels } from "../../data/pumpTypeLabels";

const otherNav = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialMedia = [
  { icon: FaFacebook, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaLinkedin, href: "#" },
  { icon: FaInstagram, href: "#" },
];

const brandOrder = ["watson-marlow", "leybold", "welch"];
const brandLabels = {
  "watson-marlow": "Watson Marlow",
  leybold: "Leybold",
  welch: "Welch",
};

const brandMap = productData.reduce((acc, product) => {
  const { brand, pumpType } = product;
  if (!acc[brand]) {
    acc[brand] = {};
  }
  if (!acc[brand][pumpType]) {
    acc[brand][pumpType] = [];
  }
  acc[brand][pumpType].push(product);
  return acc;
}, {});

const Header = () => {
  const location = useLocation();

  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [hoveredPumpType, setHoveredPumpType] = useState(null);

  const [isTechnicalOpen, setIsTechnicalOpen] = useState(false);

  useEffect(() => {
    setIsProductsOpen(false);
    setHoveredBrand(null);
    setHoveredPumpType(null);
    setIsTechnicalOpen(false);

    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleProductsEnter = () => {
    setIsProductsOpen(true);
  };

  const handleProductsLeave = () => {
    setIsProductsOpen(false);
    setHoveredBrand(null);
    setHoveredPumpType(null);
  };

  const handleBrandEnter = (brand) => {
    setHoveredBrand(brand);
    setHoveredPumpType(null);
  };

  const handlePumpTypeEnter = (pumpType) => {
    setHoveredPumpType(pumpType);
  };

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

      <Disclosure>
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
                        src="/logo3.png"
                        alt="Mouldair Logo"
                        className="h-8 w-auto sm:h-10 lg:h-12 rounded"
                      />
                      <span className="text-gray-700 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                        Mouldair Scientific
                      </span>
                    </motion.div>
                  </Link>
                </div>

                <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6 xl:space-x-8 mr-32">
                  <motion.div className="transition duration-300">
                    <Link
                      to="/"
                      className={`${
                        location.pathname === "/"
                          ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                          : "text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                      } text-sm lg:text-base xl:text-lg font-medium`}
                    >
                      Home
                    </Link>
                  </motion.div>

                  <div
                    className="relative"
                    onMouseEnter={handleProductsEnter}
                    onMouseLeave={handleProductsLeave}
                  >
                    <motion.div className="transition duration-300 cursor-pointer flex items-center text-lg font-medium">
                      <Link
                        to="/#categories"
                        className={`${
                          isProductsOpen
                            ? "text-indigo-600 font-semibold"
                            : "text-gray-600 hover:text-indigo-600"
                        } flex items-center text-center`}
                      >
                        Products
                        <ChevronDownIcon className="ml-1 h-5 w-5" />
                      </Link>
                    </motion.div>

                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute text-center left-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-40"
                        >
                          <motion.ul
                            className="py-4"
                            initial="closed"
                            animate="open"
                            variants={{
                              open: {
                                transition: {
                                  staggerChildren: 0.07,
                                  delayChildren: 0.1,
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
                            {brandOrder.map((brand) => (
                              <motion.li
                                key={brand}
                                onMouseEnter={() => handleBrandEnter(brand)}
                                onMouseLeave={() => setHoveredBrand(null)}
                                className="relative"
                                variants={{
                                  open: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                      y: { stiffness: 1000, velocity: -100 },
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
                                  to={`/categories/${brand}`}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                >
                                  {brandLabels[brand]}
                                </Link>

                                <AnimatePresence>
                                  {hoveredBrand === brand && (
                                    <motion.div
                                      initial={{ opacity: 0, x: "100%" }}
                                      animate={{ opacity: 1, x: "100%" }}
                                      exit={{ opacity: 0, x: "110%" }}
                                      transition={{ duration: 0.2 }}
                                      className="absolute top-0 left-100 w-56 bg-white shadow-lg rounded-lg z-50"
                                    >
                                      <motion.ul
                                        className="py-3"
                                        initial="closed"
                                        animate="open"
                                        variants={{
                                          open: {
                                            transition: {
                                              staggerChildren: 0.05,
                                              delayChildren: 0.1,
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
                                        {Object.keys(brandMap[brand]).map(
                                          (pumpType) => (
                                            <motion.li
                                              key={pumpType}
                                              onMouseEnter={() =>
                                                handlePumpTypeEnter(pumpType)
                                              }
                                              onMouseLeave={() =>
                                                setHoveredPumpType(null)
                                              }
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
                                              className="relative"
                                            >
                                              <Link
                                                to={`/categories/${brand}/${pumpType}`}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors whitespace-nowrap"
                                              >
                                                {pumpTypeLabels[pumpType] ||
                                                  pumpType}
                                              </Link>

                                              <AnimatePresence>
                                                {hoveredPumpType ===
                                                  pumpType && (
                                                  <motion.div
                                                    initial={{
                                                      opacity: 0,
                                                      x: "100%",
                                                    }}
                                                    animate={{
                                                      opacity: 1,
                                                      x: "100%",
                                                    }}
                                                    exit={{
                                                      opacity: 0,
                                                      x: "110%",
                                                    }}
                                                    transition={{
                                                      duration: 0.2,
                                                    }}
                                                    className="absolute top-0 left-100 w-48 bg-white shadow-lg rounded-lg z-50  max-h-64 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-indigo-600 hover:scrollbar-thumb-indigo-700 "
                                                  >
                                                    <motion.ul
                                                      className="py-3"
                                                      initial="closed"
                                                      animate="open"
                                                      variants={{
                                                        open: {
                                                          transition: {
                                                            staggerChildren: 0.05,
                                                            delayChildren: 0.1,
                                                          },
                                                        },
                                                        closed: {
                                                          transition: {
                                                            staggerChildren: 0.05,
                                                            staggerDirection:
                                                              -1,
                                                          },
                                                        },
                                                      }}
                                                    >
                                                      {brandMap[brand][
                                                        pumpType
                                                      ].map((prod) => (
                                                        <motion.li
                                                          key={prod.id}
                                                          variants={{
                                                            open: {
                                                              y: 0,
                                                              opacity: 1,
                                                              transition: {
                                                                y: {
                                                                  stiffness: 1000,
                                                                  velocity:
                                                                    -100,
                                                                },
                                                              },
                                                            },
                                                            closed: {
                                                              y: 50,
                                                              opacity: 0,
                                                              transition: {
                                                                y: {
                                                                  stiffness: 1000,
                                                                },
                                                              },
                                                            },
                                                          }}
                                                        >
                                                          <Link
                                                            to={`/products/${prod.id}`}
                                                            className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors whitespace-nowrap"
                                                          >
                                                            {prod.name}
                                                          </Link>
                                                        </motion.li>
                                                      ))}
                                                    </motion.ul>
                                                  </motion.div>
                                                )}
                                              </AnimatePresence>
                                            </motion.li>
                                          )
                                        )}
                                      </motion.ul>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div
                    className="relative"
                    onMouseEnter={() => setIsTechnicalOpen(true)}
                    onMouseLeave={() => setIsTechnicalOpen(false)}
                  >
                    <motion.div className="transition duration-300 cursor-pointer flex items-center text-lg font-medium">
                      <Link
                        to="/technical"
                        className={`${
                          isTechnicalOpen
                            ? "text-indigo-600 font-semibold"
                            : "text-gray-600 hover:text-indigo-600"
                        } flex items-center text-center`}
                      >
                        Technical Corner
                        <ChevronDownIcon className="ml-1 h-5 w-5" />
                      </Link>
                    </motion.div>

                    <AnimatePresence>
                      {isTechnicalOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 text-center bg-white shadow-lg rounded-lg z-40"
                        >
                          <motion.ul className="py-4">
                            <motion.li>
                              <Link
                                to="/technical#articles"
                                className="block px-6 py-3 text-base text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                              >
                                Latest Articles
                              </Link>
                            </motion.li>
                            <motion.li>
                              <Link
                                to="/technical#case-studies"
                                className="block px-6 py-3 text-base text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                              >
                                Case Studies
                              </Link>
                            </motion.li>
                          </motion.ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {otherNav.map((item) => (
                    <motion.div
                      key={item.name}
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
                  ))}
                </div>

                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none">
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

            <AnimatePresence>
              {open && (
                <Disclosure.Panel
                  static
                  as={motion.div}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden bg-indigo-50 overflow-hidden"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                      to="/"
                      className={`${
                        location.pathname === "/"
                          ? "bg-indigo-100 text-indigo-700"
                          : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                      } block px-3 py-2 rounded-md text-base font-medium`}
                    >
                      Home
                    </Link>

                    <Disclosure>
                      {({ open: productsOpen }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-3 rounded-md text-lg font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 text-center">
                            Products
                            <ChevronDownIcon
                              className={`${
                                productsOpen ? "transform rotate-180" : ""
                              } w-5 h-5 text-gray-500`}
                            />
                          </Disclosure.Button>

                          <AnimatePresence>
                            {productsOpen && (
                              <Disclosure.Panel
                                static
                                as={motion.div}
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 pt-2 pb-3 space-y-2 bg-indigo-50 rounded-md overflow-y-auto max-h-64 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-indigo-600 hover:scrollbar-thumb-indigo-700"
                              >
                                {brandOrder.map((brand) => (
                                  <Disclosure key={brand}>
                                    {({ open: brandOpen }) => (
                                      <>
                                        <Disclosure.Button className="flex justify-between w-full px-4 py-3 rounded-md text-base text-gray-700 hover:bg-indigo-100 hover:text-indigo-600">
                                          <Link
                                            to={`/categories/${brand}`}
                                            className="flex-1"
                                          >
                                            {brandLabels[brand]}
                                          </Link>
                                          <ChevronDownIcon
                                            className={`${
                                              brandOpen
                                                ? "transform rotate-180"
                                                : ""
                                            } w-5 h-5 text-gray-500 ml-2`}
                                          />
                                        </Disclosure.Button>

                                        <AnimatePresence>
                                          {brandOpen && (
                                            <Disclosure.Panel
                                              static
                                              as={motion.div}
                                              initial={{ height: 0 }}
                                              animate={{ height: "auto" }}
                                              exit={{ height: 0 }}
                                              transition={{ duration: 0.3 }}
                                              className="pl-6 pr-3 pt-1 pb-2 space-y-2 bg-white rounded-md overflow-y-auto max-h-64 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-indigo-600 hover:scrollbar-thumb-indigo-700"
                                            >
                                              {Object.keys(brandMap[brand]).map(
                                                (pumpType) => (
                                                  <Disclosure key={pumpType}>
                                                    {({
                                                      open: pumpTypeOpen,
                                                    }) => (
                                                      <>
                                                        <Disclosure.Button className="flex justify-between w-full px-4 py-3 rounded-md text-base text-gray-700 hover:bg-indigo-100 hover:text-indigo-600">
                                                          <Link
                                                            to={`/categories/${brand}/${pumpType}`}
                                                            className="flex-1"
                                                          >
                                                            {pumpTypeLabels[
                                                              pumpType
                                                            ] || pumpType}
                                                          </Link>
                                                          <ChevronDownIcon
                                                            className={`${
                                                              pumpTypeOpen
                                                                ? "transform rotate-180"
                                                                : ""
                                                            } w-5 h-5 text-gray-500 ml-2`}
                                                          />
                                                        </Disclosure.Button>

                                                        <AnimatePresence>
                                                          {pumpTypeOpen && (
                                                            <Disclosure.Panel
                                                              static
                                                              as={motion.div}
                                                              initial={{
                                                                height: 0,
                                                              }}
                                                              animate={{
                                                                height: "auto",
                                                              }}
                                                              exit={{
                                                                height: 0,
                                                              }}
                                                              transition={{
                                                                duration: 0.3,
                                                              }}
                                                              className="pl-6 pr-3 pt-1 pb-2 space-y-2 bg-indigo-50 rounded-md"
                                                            >
                                                              {brandMap[brand][
                                                                pumpType
                                                              ].map((prod) => (
                                                                <Link
                                                                  key={prod.id}
                                                                  to={`/products/${prod.id}`}
                                                                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors whitespace-nowrap"
                                                                >
                                                                  {prod.name}
                                                                </Link>
                                                              ))}
                                                            </Disclosure.Panel>
                                                          )}
                                                        </AnimatePresence>
                                                      </>
                                                    )}
                                                  </Disclosure>
                                                )
                                              )}
                                            </Disclosure.Panel>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    )}
                                  </Disclosure>
                                ))}
                              </Disclosure.Panel>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </Disclosure>

                    <Disclosure>
                      {({ open: technicalOpen }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-3 rounded-md text-lg font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-600">
                            Technical Corner
                            <ChevronDownIcon
                              className={`${
                                technicalOpen ? "transform rotate-180" : ""
                              } w-5 h-5 text-gray-500`}
                            />
                          </Disclosure.Button>

                          <AnimatePresence>
                            {technicalOpen && (
                              <Disclosure.Panel
                                static
                                as={motion.div}
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="px-4 pt-2 pb-3 space-y-2 bg-indigo-50 rounded-md text-center"
                              >
                                <Link
                                  to="/technical#articles"
                                  className="block px-4 py-2 rounded-md text-base text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                                >
                                  Latest Articles
                                </Link>
                                <Link
                                  to="/technical#case-studies"
                                  className="block px-4 py-2 rounded-md text-base text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                                >
                                  Case Studies
                                </Link>
                              </Disclosure.Panel>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </Disclosure>

                    {otherNav.map((item) => (
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
                  </div>
                </Disclosure.Panel>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
