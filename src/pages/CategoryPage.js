import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AnimatedSection from "../components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { productData } from "../data/productData";
import { pumpTypeLabels } from "../data/pumpTypeLabels";
import { pumpTypeImages } from "../data/pumpTypeImages";

const welchApplications = [
  {
    title: "Rotary Evaporator",
    content:
      "Rotary evaporators are essential in chemical laboratories for efficient and gentle removal of solvents from samples by evaporation.",
  },
  {
    title: "Vacuum Concentrator",
    content:
      "Vacuum concentrators are used to remove solvents from multiple samples simultaneously through centrifugal force and vacuum, ideal for preparing samples in life sciences.",
  },
  {
    title: "Freeze Dryer",
    content:
      "Freeze dryers, or lyophilizers, are utilized to preserve perishable materials by removing water content through sublimation, extending shelf life and stability.",
  },
  {
    title: "Vacuum Oven",
    content:
      "Vacuum ovens provide a controlled environment for delicate drying processes, removing moisture without oxidation or thermal degradation, suitable for heat-sensitive materials.",
  },
  {
    title: "Vacuum Filtration",
    content:
      "Vacuum filtration accelerates the separation of solids from liquids using reduced pressure, commonly employed in microbiology and analytical chemistry.",
  },
  {
    title: "Degassing / Desiccator",
    content:
      "Degassing involves removing dissolved gases from liquids, while desiccators are used to preserve moisture-sensitive items by maintaining a low-humidity environment.",
  },
  {
    title: "Aspiration (Cell Culture)",
    content:
      "Aspiration systems are used in cell culture laboratories to safely and efficiently remove media from culture vessels, ensuring sterility and preventing cross-contamination.",
  },
  {
    title: "Glove Box",
    content:
      "Glove boxes provide an isolated environment for handling sensitive materials under controlled atmospheres, protecting both the user and the materials from contamination.",
  },
  {
    title: "Gel Dryer",
    content:
      "Gel dryers are used to remove water or solvents from gels, such as polyacrylamide or agarose, typically after electrophoresis, for preservation and analysis.",
  },
  {
    title: "Vacuum Measurement & Control",
    content:
      "Accurate vacuum measurement and control are crucial for processes that require specific pressure conditions, ensuring optimal performance and reproducibility.",
  },
  {
    title: "Vacuum Network",
    content:
      "Vacuum networks distribute vacuum from a central source to multiple points of use, providing efficient and centralized vacuum supply in laboratory or industrial settings.",
  },
  {
    title: "Leak Testing",
    content:
      "Leak testing detects and locates leaks in sealed systems or components, ensuring integrity and performance in applications like packaging, automotive, and aerospace industries.",
  },
  {
    title: "Pick & Place",
    content:
      "Pick and place systems use vacuum to handle and move objects precisely, commonly used in automated manufacturing and assembly processes.",
  },
  {
    title: "Vacuum Workholding",
    content:
      "Vacuum workholding secures workpieces during machining or processing, providing uniform holding force without mechanical clamps, ideal for delicate or irregularly shaped items.",
  },
  {
    title: "Vacuum Manifold",
    content:
      "Vacuum manifolds allow simultaneous filtration or processing of multiple samples under vacuum, increasing efficiency in laboratory workflows.",
  },
  {
    title: "Botanicals Processing",
    content:
      "Vacuum systems are used in botanicals processing to extract essential oils and active compounds efficiently, preserving their quality and potency.",
  },
  {
    title: "Mass Spectrometry",
    content:
      "Mass spectrometry relies on high vacuum conditions to analyze the mass-to-charge ratio of ions, essential for identifying and quantifying compounds in various samples.",
  },
];

const leyboldApplications = [
  {
    title: "Analytical Instruments",
    content:
      "Leybold's vacuum solutions power advanced analytical instruments with specialized products like TURBOVAC i/iX turbomolecular pumps and SCROLLVAC plus scroll pumps. These systems deliver ultimate pressures from 10^-3 to 10^-11 mbar with hydrocarbon-free operation and <45 dBA noise levels. The PHOENIX 3 helium leak detectors offer detection limits down to 5 × 10^-12 mbar l/s, while the GRAPHIX vacuum gauges provide precise pressure measurement from 1000 to 5 × 10^-10 mbar. Applications include mass spectrometers, electron microscopes, surface analyzers, and leak detection systems, with special configurations available for high magnetic field environments.",
  },
  {
    title: "Research & Development",
    content:
      "Leybold's research solutions include MAGINTEGRA magnetic bearing turbomolecular pumps achieving 10^-11 mbar and TURBOVAC MAGiNTEGRA with pumping speeds up to 3000 l/s. The DRYVAC backing pump systems feature advanced temperature management and smart interfaces for Industry 4.0 integration. Specialized solutions support particle accelerators with TURBOVAC T variants resistant to radiation up to 107 Gy. For fusion research, custom-engineered systems handle tritium with leak rates below 10^-9 mbar l/s. Space simulation chambers utilize cryopumps and titanium sublimation pumps achieving pressures below 10^-12 mbar with hydrogen pumping speeds exceeding 50,000 l/s.",
  },
  {
    title: "Medical Applications",
    content:
      "Leybold's medical vacuum systems include ISO 13485 certified SCROLLVAC plus pumps for mass spectrometry diagnostics achieving 10^-7 mbar. The ECODRY plus series offers <48 dBA operation for quiet hospital environments. Radiotherapy solutions feature specialized RUVAC Roots pumps maintaining 10^-7 mbar in proton beam lines with 99.99% uptime. Clean room compatible systems include NOVADRY pumps with FDA-compliant materials and IP54 protection. Sterilization applications utilize VARODRY pumps with oxygen compatibility and rapid cycle times. All systems feature real-time monitoring through LEYBONOL Connect for preventive maintenance.",
  },
  {
    title: "Furnace and Metallurgy",
    content:
      "Leybold's metallurgical solutions support temperatures up to 2400°C with pressures from 10^-2 to 10^-6 mbar. The RUVAC WH/WS series provides pumping speeds up to 15,000 m³/h with advanced thermal management. Vacuum brazing applications utilize SOGEVAC NEO pumps with integrated oxygen monitoring. Heat treatment systems feature DRYVAC DV series with corrosion-resistant rotors and intelligent partial pressure control. Special options include controlled atmosphere systems for reactive processes, water-cooled roots pumps for continuous operation, and advanced thermal shields using molybdenum and tungsten construction. Systems comply with AMS 2750F standards for aerospace applications.",
  },
  {
    title: "Coating Applications",
    content:
      "Leybold's coating technology includes DRYVAC PowerBoost systems achieving 10^-8 mbar with ±2% coating uniformity. The TURBOVAC iX series provides hydrocarbon-free environments for optical coating with speeds up to 1650 l/s. PVD/CVD solutions feature SCREWLINE SP pumps handling high gas loads in metallization processes. Specialized configurations support diamond-like carbon coating using NOWAG pump technology. Advanced process control through GRAPHIX gauges enables precise layer thickness monitoring. Systems include options for reactive gas handling with LEYSPEC mass spectrometers for process analysis. All solutions meet ISO 14644-1 Class 5 clean room standards.",
  },
  {
    title: "Plastics and Composites",
    content:
      "Leybold's plastics processing solutions center on VACUBE intelligent vacuum systems with capacities up to 2,000 m³/h. Variable speed VARODRY pumps reduce energy consumption by 50% compared to conventional systems. Thermoforming applications utilize DRYVAC systems with advanced vapor handling capabilities. Composite manufacturing benefits from CLAWVAC pumps with integrated dust filters and moisture separators. Systems feature precise vacuum control from atmospheric pressure to 0.1 mbar through GRAPHIX controllers. Special packages include thermal management for high-temperature degassing and optional heat recovery systems reducing operational costs.",
  },
  {
    title: "Solar Industry",
    content:
      "Leybold's solar manufacturing solutions maintain 10^-3 to 10^-8 mbar clean vacuum with SCREWLINE dry compressing pumps. PECVD coating systems utilize DRYVAC FP pumps handling silane and NF3 process gases. Crystal pulling applications feature RUVAC WH roots pumps with 5,000 m³/h capacity. Lamination processes use oil-free SCROLLVAC plus pumps ensuring contamination-free operation. All systems integrate Industry 4.0 ready controllers with LEYBONOL Connect monitoring. Specialized configurations include fluorine-resistant materials, advanced abatement systems, and smart pressure control through CASCADE technology.",
  },
  {
    title: "Semiconductor and Electronics",
    content:
      "Leybold's semiconductor solutions achieve 10^-9 mbar with particle counts <0.1µm using TURBOVAC MAGiNTEGRA pumps. Ion implantation utilizes SCREWLINE SP pumps with enhanced corrosion resistance. CVD processes benefit from DRYVAC intelligent systems handling complex process gases. The LEYSPEC RGA ensures process monitoring with mass range up to 200 amu. Systems feature advanced abatement through LEYCOLD cryopumps with regeneration management. Clean room compatibility meets ISO 14644-1 Class 1 standards. Special options include heated pump inlets, smart pressure control, and advanced monitoring through EtherCAT interfaces.",
  },
  {
    title: "Food and Packaging",
    content:
      "Leybold's food industry solutions feature NOVADRY pumps with FDA-compliant materials achieving 0.5 mbar. MAP packaging utilizes VARODRY systems with rapid cycle times under 15 seconds. Freeze-drying applications employ RUVAC WH roots pumps with 1,600 m³/h capacity. All systems meet EHEDG hygienic design standards with IP65 protection. Specialized features include oxygen-free packaging capabilities, smart vacuum control through GRAPHIX interfaces, and optional heat recovery reducing energy costs by 40%. Systems comply with EC 1935/2004 for food contact materials and feature CIP-compatible designs.",
  },
  {
    title: "Vacuum Networks",
    content:
      "Leybold's centralized vacuum networks utilize TURBOLINK monitoring supporting 32 simultaneous connections. Systems maintain 10^-3 mbar with VACUBE smart pump technology. The DRYVAC PowerBoost provides demand-based control reducing energy consumption by 40%. Networks feature advanced manifold design with minimal pressure drop using computational fluid dynamics optimization. Integration options include Building Management System (BMS) connectivity, predictive maintenance through AI algorithms, and remote monitoring via LEYBONOL Connect. Special packages include redundant pumping systems and automatic switchover for critical processes.",
  },
];

const watsonMarlowCaseStudies = [
  {
    title: "Case Study 1: Optimizing Fluid Transfer",
    content:
      "A major pharmaceutical company optimized fluid transfer during production, reducing downtime by 25% using Watson-Marlow’s peristaltic pumps, ensuring reliable and consistent output.",
  },
  {
    title: "Case Study 2: Enhanced Chemical Processing",
    content:
      "A chemical plant saw a 30% increase in production efficiency after implementing Watson-Marlow pumps, thanks to superior resistance to corrosion and reliable flow control.",
  },
  {
    title: "Case Study 3: Dairy Industry Efficiency",
    content:
      "In the dairy industry, Watson-Marlow pumps improved product consistency and hygiene, leading to a 20% decrease in maintenance costs and increased production reliability.",
  },
  // More case studies here...
];
const watsonMarlowSectors = [
  {
    title: "Pharmaceutical and Biotechnology",
    content:
      "Supporting critical fluid transfer in pharmaceutical production, drug manufacturing, and biotechnology processes with precision and sterility.",
  },
  {
    title: "Medical and Diagnostic Devices",
    content:
      "Reliable fluid handling solutions for diagnostic equipment and medical devices, ensuring safe and precise liquid transport.",
  },
  {
    title: "Food and Beverage",
    content:
      "Hygienic and contamination-free fluid handling for the production of dairy, beverages, sauces, and processed food products.",
  },
  {
    title: "Industrial Applications",
    content:
      "Robust pump solutions for manufacturing processes such as chemical production, adhesives, and polymer applications.",
  },
  {
    title: "Water and Wastewater",
    content:
      "Efficient fluid control systems for dosing chemicals, water treatment, and sludge transfer in municipal and industrial applications.",
  },
  {
    title: "Mining",
    content:
      "Pumps designed to handle abrasive slurries, mine water, and chemical dosing in mineral extraction processes.",
  },
  {
    title: "Automotive",
    content:
      "Fluid handling solutions for the precise application of paints, coatings, and chemical fluids in automotive manufacturing.",
  },
  {
    title: "OEM (Original Equipment Manufacturer)",
    content:
      "Custom-engineered fluid transfer solutions integrated into specialized equipment across various industries.",
  },
];

const brandDescriptions = {
  "watson-marlow": {
    aboutTitle: "About Watson-Marlow Pumps",
    description: (
      <div>
        <p className="mb-4">
          Watson-Marlow Fluid Technology Solutions is the world leader in
          peristaltic pumps and associated fluid path technologies for the life
          science and process industries.
        </p>
        <p className="mt-4 font-bold">
          We, Mouldair Scientific, work closely with Watson Marlow’s Engineering
          Team to help our customers find the right solutions.
        </p>
      </div>
    ),
  },
  leybold: {
    aboutTitle: "About Leybold Pumps",
    description:
      "Leybold is a leading global provider of vacuum solutions, specializing in innovative technologies for industrial, scientific, and research applications. With expertise spanning across sectors such as semiconductors, metallurgy, coating technologies, and medical applications, Leybold delivers high-efficiency vacuum systems, ensuring performance and reliability. Their solutions focus on sustainability, precision, and cutting-edge engineering to support processes like thin-film deposition, space simulations, and advanced material processing. Leybold’s commitment to innovation makes it a trusted partner for complex industrial processes.",
  },
  welch: {
    aboutTitle: "About Welch Pumps",
    description: (
      <div>
        <p>
          Welch delivers robust vacuum solutions, including rotary vane,
          diaphragm, and scroll pumps, designed to meet the stringent needs of
          laboratory and industrial environments.
        </p>
      </div>
    ),
  },
};

const CategoryPage = () => {
  const { brand } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLeyboldApplication, setActiveLeyboldApplication] = useState(0);
  const [activeApplication, setActiveApplication] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const leyboldApplicationsRef = useRef(null);
  const applicationContentRef = useRef(null);

  const scrollToElement = (ref, forceScroll = false) => {
    if (ref.current && (forceScroll || window.innerWidth < 768)) {
      const yOffset = -20;
      const element = ref.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const scrollToApplications = () => {
    scrollToElement(leyboldApplicationsRef, true); // Force scroll for all screen sizes
  };

  const brandProducts = productData.filter(
    (product) => product.brand === brand
  );
  const brandInfo = brandDescriptions[brand];

  if (brandProducts.length === 0) {
    return (
      <Layout>
        <AnimatedSection className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            No Products Found
          </h1>
          <p className="text-center text-gray-600">
            We couldn&apos;t find products for the brand: <b>{brand}</b>
          </p>
        </AnimatedSection>
      </Layout>
    );
  }

  const pumpTypesSet = new Set(brandProducts.map((p) => p.pumpType));
  const pumpTypes = Array.from(pumpTypesSet);

  const filteredPumpTypes = pumpTypes.filter((type) =>
    type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
        {brandInfo && (
          <AnimatedSection className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex flex-col items-center space-y-4 mb-6">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                  {brandInfo.aboutTitle}
                </h2>
                {brand === "leybold" && (
                  <motion.button
                    onClick={scrollToApplications}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>View Applications</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                )}
              </div>
              <div className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                {brandInfo.description}
              </div>
            </motion.div>
          </AnimatedSection>
        )}

        <AnimatedSection className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-8 px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center capitalize"
          >
            {brand.replace("-", " ")} Vacuum Pumps
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <input
              type="text"
              placeholder="Search pump types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          >
            <AnimatePresence>
              {filteredPumpTypes.length === 0 ? (
                <div className="col-span-full text-center text-gray-700 font-semibold">
                  No matching pump types found.
                </div>
              ) : (
                filteredPumpTypes.map((type) => {
                  const pumpTypeImage = pumpTypeImages[type]
                    ? pumpTypeImages[type]
                    : "https://via.placeholder.com/400x200/eee/ccc?text=Pump+Type";

                  const productCount = brandProducts.filter(
                    (p) => p.pumpType === type
                  ).length;

                  return (
                    <motion.div
                      key={type}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to={`/categories/${brand}/${type}`}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                          <div className="relative w-full h-56 sm:h-64 md:h-72">
                            <img
                              src={pumpTypeImage}
                              alt={pumpTypeLabels[type] || type}
                              className="absolute inset-0 w-full h-full object-contain"
                            />
                          </div>
                          <div className="p-5 text-center">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">
                              {pumpTypeLabels[type] || type}
                            </h2>
                            <p className="text-gray-600 text-sm">
                              {productCount} product{productCount !== 1 && "s"}{" "}
                              available
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatedSection>

        {brand === "welch" && (
          <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
              Applications of Welch Vacuum Pumps
            </h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center mb-6 sm:mb-8"
            >
              {welchApplications.map((app, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveApplication(index)}
                  className={`px-4 py-2 m-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                    activeApplication === index
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-indigo-600 hover:bg-indigo-100"
                  }`}
                >
                  {app.title}
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeApplication}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-xl p-6 min-h-[200px]"
              >
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  {welchApplications[activeApplication].title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {welchApplications[activeApplication].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </section>
        )}
        {brand === "leybold" && (
          <section
            ref={leyboldApplicationsRef}
            className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
              Applications of Leybold Vacuum Pumps
            </h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center mb-6 sm:mb-8"
            >
              {leyboldApplications.map((app, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveLeyboldApplication(index);
                    // Mobile-only scroll for individual applications
                    setTimeout(
                      () => scrollToElement(applicationContentRef),
                      100
                    );
                  }}
                  className={`px-4 py-2 m-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                    activeLeyboldApplication === index
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-indigo-600 hover:bg-indigo-100"
                  }`}
                >
                  {app.title}
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                ref={applicationContentRef}
                key={activeLeyboldApplication}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-xl p-6 min-h-[200px]"
              >
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  {leyboldApplications[activeLeyboldApplication]?.title ||
                    "No Title Available"}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {leyboldApplications[activeLeyboldApplication]?.content ||
                    "No content available."}
                </p>
              </motion.div>
            </AnimatePresence>
          </section>
        )}

        {brand === "watson-marlow" && (
          <>
            {/* Sectors and Products Section */}
            <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
                Sectors and Products
              </h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-wrap justify-center mb-6 sm:mb-8"
              >
                {watsonMarlowSectors.map((sector, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveApplication(index)}
                    className={`px-4 py-2 m-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                      activeApplication === index
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-indigo-600 hover:bg-indigo-100"
                    }`}
                  >
                    {sector.title}
                  </motion.button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeApplication}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-xl p-6 min-h-[200px]"
                >
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                    {watsonMarlowSectors[activeApplication].title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {watsonMarlowSectors[activeApplication].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </section>

            {/* Existing Case Studies Section */}
            <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
                Watson-Marlow Case Studies
              </h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-wrap justify-center mb-6 sm:mb-8"
              >
                {watsonMarlowCaseStudies.map((caseStudy, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCaseStudy(index)}
                    className={`px-4 py-2 m-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                      activeCaseStudy === index
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-indigo-600 hover:bg-indigo-100"
                    }`}
                  >
                    {caseStudy.title}
                  </motion.button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCaseStudy}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-xl p-6 min-h-[200px]"
                >
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                    {watsonMarlowCaseStudies[activeCaseStudy].title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {watsonMarlowCaseStudies[activeCaseStudy].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
