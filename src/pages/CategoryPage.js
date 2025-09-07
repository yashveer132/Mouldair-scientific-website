import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import { productData } from "../data/productData";
import { pumpTypeLabels } from "../data/pumpTypeLabels";
import { pumpTypeImages } from "../data/pumpTypeImages";

const welchApplications = [
  {
    title: "Rotary Evaporator",
    content:
      "Welch vacuum pumps are essential for rotary evaporators, providing precise vacuum control from 1-400 Torr. Welch chemical-duty pumps feature solvent recovery and excellent chemical resistance, with options like the RC 6 achieving deep vacuum levels needed for high boiling point solvents. The ChemStar series delivers ultimate vacuum of 2 x 10⁻³ Torr with PTFE-coated wetted surfaces for maximum chemical resistance. Features include electronic vacuum control, automatic vapor detection, and integrated solvent recovery systems. Oil-free options available for sensitive applications, with flow rates up to 40 L/min. Includes RS-232 interface for process documentation and programmable vacuum control for reproducible results.",
  },
  {
    title: "Vacuum Concentrator",
    content:
      "Welch's solutions for vacuum concentration include specialized pumps with superior vapor handling capabilities and precise vacuum control. Welch pumps achieve ultimate vacuum levels down to 2 x 10⁻³ Torr, with integrated cold traps and solvent recovery systems. The ChemStar series features PTFE-coated components for handling aggressive chemicals, while the oil-free scroll pumps provide clean vacuum for sensitive samples. Integrated vacuum control systems offer programmable methods with automatic vacuum adjustment based on vapor pressure curves. Systems include electronic vacuum control, process monitoring, and data logging capabilities. Compatible with multiple concentrator brands, supporting throughput from small samples to production volumes.",
  },
  {
    title: "Freeze Dryer",
    content:
      "Welch vacuum pumps support lyophilization processes with high pumping speeds and deep vacuum capabilities. The CRVpro series achieves pressures below 3 x 10⁻³ Torr with excellent ice and water vapor handling up to 20 kg/day. Features include temperature monitoring, gas ballast control, and oil filtration systems designed for continuous freeze-drying operation. Advanced models offer USB connectivity for process monitoring and validation documentation. Available in direct-drive and belt-drive configurations, with pumping speeds from 40 to 747 L/min. Specialized options include explosion-proof motors, oxygen service preparation, and custom inlet configurations for specific freeze dryer interfaces. All models feature thermal protection and hour meters for maintenance tracking.",
  },
  {
    title: "Vacuum Oven",
    content:
      "Welch pumps deliver stable vacuum for thermal processing applications from atmosphere to 10⁻³ Torr. The Direct-Drive series offers excellent ultimate vacuum with reliable temperature stability up to 40°C. Enhanced oil filtration and gas ballast systems handle moisture and solvent vapors effectively during vacuum oven processes. Pumping speeds range from 20 to 200 L/min, supporting oven volumes up to 960L. Features include inlet filters to protect pump, exhaust filters for oil mist elimination, and KF/NW vacuum connections. Digital vacuum gauges provide accurate pressure monitoring, while programmable controllers enable automated cycle operation. Chemical-duty versions available for aggressive environments.",
  },
  {
    title: "Vacuum Filtration",
    content:
      'From basic filtration to advanced separations, welch pumps provide adjustable vacuum levels from atmosphere to 27" Hg. The WOB-L piston pumps offer oil-free operation ideal for filtration, while chemical-duty models handle corrosive filtrates. Multi-user vacuum systems support simultaneous filtration operations with independent vacuum control. Flow rates range from 18 to 400 L/min with ultimate vacuum to 10 Torr. Features include moisture-tolerant operation, chemical-resistant components, and safety overflow protection. Systems available with electronic vacuum control, multiple ports for simultaneous operations, and specialized glassware adapters. Suitable for applications from routine filtration to complex separations requiring precise vacuum control.',
  },
  {
    title: "Degassing / Desiccator",
    content:
      "Welch's degassing solutions achieve vacuum levels from 1-100 Torr with precise control. Welch oil-free pumps maintain clean, stable vacuum for HPLC mobile phase degassing and sample preparation. Desiccator applications benefit from deep vacuum capabilities and moisture-tolerant operation. Pumping speeds from 20 to 100 L/min support vessel sizes from benchtop to production scale. Features electronic vacuum control with automatic pressure regulation, multiple inlet ports for simultaneous operations, and specialized fittings for common desiccator sizes. Chemical-resistant construction ensures long service life with aggressive solvents. Systems include vacuum gauges, adjustable vacuum control, and optional data logging capabilities.",
  },
  {
    title: "Aspiration (Cell Culture)",
    content:
      "The BioVac series offers precise aspiration control with adjustable vacuum levels and collection volumes up to 4L. Features include autoclavable components, overflow protection, and multi-user capability. Chemical-resistant construction ensures compatibility with cell culture media and cleaning solutions. Systems include handheld controllers with adjustable suction levels, quick-connect bottle systems, and specialized adapters for different vessel types. Available with collection bottles from 1-4L capacity, hydrophobic filters to prevent contamination, and various aspiration tools for different applications. Suitable for BSL-1 through BSL-3 laboratories with appropriate filtration options.",
  },
  {
    title: "Glove Box",
    content:
      "Welch vacuum pumps support glove box operations requiring 10⁻³ Torr vacuum levels. The SCROLLVAC series provides oil-free operation ideal for sensitive materials, while dual-stage rotary vane pumps offer deeper vacuum capabilities. Systems achieve vacuum levels from atmosphere to 10⁻⁴ Torr with excellent stability. Features include automated purge cycles, integrated vacuum control, and specialized interfaces for common glove box manufacturers. Available with optional moisture traps and oxygen sensors for atmosphere control. Pumping speeds from 40 to 300 L/min support boxes up to 900L volume. Chemical-resistant models available for aggressive environments.",
  },
  {
    title: "Gel Dryer",
    content:
      "Welch pumps support gel drying applications with vacuum levels from 1-100 Torr. Chemical-duty models handle vapors from acetic acid and methanol solutions. Ultimate vacuum capability to 10⁻³ Torr ensures rapid, efficient drying cycles. Features programmable vacuum control with automatic vapor pressure sensing. Flow rates from 20 to 100 L/min match common gel dryer sizes. Systems include inlet filters, solvent traps, and digital vacuum monitoring. Optional temperature control interfaces support heated gel dryers. Chemical-resistant construction ensures long service life with typical gel drying solvents.",
  },
  {
    title: "Vacuum Measurement & Control",
    content:
      "Digital vacuum gauges and controllers offer precise measurement from atmosphere to 10⁻⁴ Torr. Features include programmable control points, data logging, and network connectivity. Multiple sensor technologies available including capacitance manometers and Pirani gauges. Control accuracy to ±1% of reading with rapid response time. Systems support up to 8 channels of simultaneous measurement and control. Optional features include RS-232/485 interfaces, analog outputs, and specialized software for process automation. Compatible with all major vacuum pump types and common laboratory equipment interfaces.",
  },
  {
    title: "Vacuum Network",
    content:
      "Centralized vacuum systems support multiple users with independently controlled vacuum levels. Pumping speeds from 100 to 1000 L/min with vacuum to 10⁻³ Torr. Features demand-based operation saving up to 70% in energy costs. Smart monitoring includes predictive maintenance alerts and usage tracking. Systems include central controls, point-of-use regulators, and automated shut-off valves. Optional features include filtration packages, moisture separators, and specialized control interfaces. Networks can be configured for specific laboratory layouts with minimal pressure drop.",
  },
  {
    title: "Leak Testing",
    content:
      "Welch vacuum systems support leak detection with sensitivity to 10⁻³ Torr-L/sec. Systems include digital vacuum gauges, programmable controllers, and data logging capabilities. Suitable for package integrity testing, system qualification, and process validation. Features automated test sequences with pass/fail indication. Pumping speeds from 20 to 200 L/min match common test chamber sizes. Options include barcode scanning, batch testing programs, and network connectivity for data collection. Specialized fixtures available for specific product testing requirements.",
  },
  {
    title: "Pick & Place",
    content:
      'Oil-free vacuum generators support automated pick and place operations with response times under 100ms. The WOB-L piston pumps provide reliable vacuum for continuous duty applications. Systems achieve vacuum levels from atmosphere to 27" Hg with flow rates to 100 L/min. Features include adjustable vacuum levels, quick-release venturi nozzles, and automated vacuum break. Optional sensors monitor system performance and part presence. Available with specialized end effectors for different materials and surfaces. Maintenance-free operation ideal for production environments.',
  },
  {
    title: "Vacuum Workholding",
    content:
      "High-flow vacuum pumps provide stable holding force up to 500 kg/m². Oil-free operation ensures clean machining environments with flow rates to 400 L/min. Systems include vacuum reservoirs, automated controls, and quick-connect ports. Features programmable vacuum levels, leak detection, and part presence sensing. Compatible with standard and custom fixture designs. Options include multiple zone control, remote monitoring, and energy-saving modes. Ideal for CNC machining, automated assembly, and precision manufacturing.",
  },
  {
    title: "Vacuum Manifold",
    content:
      "Multi-port vacuum systems support 4 to 24 simultaneous users with independent vacuum control. Chemical-duty models handle aggressive solvents with PTFE-coated components. Achieves vacuum levels from atmosphere to 10⁻³ Torr with flow rates to 200 L/min. Features include individual port shutoff, digital vacuum monitoring, and adjustable control points. Systems available with optional solvent traps, inlet filters, and specialized glassware adapters. Programmable controllers support automated protocols with data logging capabilities.",
  },
  {
    title: "Botanicals Processing",
    content:
      "Vacuum systems support efficient extraction with pressures from atmosphere to 10⁻³ Torr. Chemical-resistant pumps handle organic solvents with PTFE-coated components. Features include programmable cycle control, solvent recovery, and process monitoring. Flow rates from 40 to 300 L/min support vessel sizes to 100L. Systems include temperature monitoring, automated pressure control, and data logging. Optional features include explosion-proof motors, specialized seals for organic solvents, and custom process controls.",
  },
  {
    title: "Mass Spectrometry",
    content:
      "High-vacuum pumps achieve 10⁻⁴ Torr or better with pumping speeds from 100 to 500 L/min. Oil-free scroll pumps provide hydrocarbon-free vacuum ideal for analytical instruments. Dual-stage rotary vane models offer economical high vacuum performance. Features include water-cooled options, integrated isolation valves, and electronic monitoring. Systems support both GC/MS and LC/MS applications with specialized interfaces. Options include corrosion-resistant components, advanced vacuum control, and custom mounting configurations.",
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

const watsonMarlowSectors = [
  {
    title: "Pharmaceutical and Biotechnology",
    content:
      "Watson-Marlow's solutions for pharma and biotech include Quantum peristaltic pump for aseptic filling with ±0.5% accuracy, 400/600 series pumps for powder transfer, and 700 series for sterile fluid path operations. The 800 series bioprocessing pumps handle flows up to 8000 L/hr for vaccine production and cell culture. Key applications include: vaccine manufacturing, cell culture media transfer, buffer preparation, sterile filling, and harvest collection. Features include single-use technology integration, validation packages per BPOG/BPSA/ASME-BPE standards, and USP Class VI compliance.",
  },
  {
    title: "Food and Beverage Processing",
    content:
      "For food and beverage production, Watson-Marlow offers PROFINET-enabled 530 series for precise ingredient dosing, Qdos series for pH control and CIP chemical metering, and MasoSine sinusoidal pumps for high-viscosity products up to 1,000,000 cP. Applications include: dairy processing with 3A-certified pumps, beverage additive dosing, confectionery manufacturing, and bakery ingredient transfer. MasoSine pumps handle delicate products with minimal shear and maintain product integrity. All pumps meet FDA, EC 1935/2004, and 3-A sanitary standards.",
  },
  {
    title: "Industrial Process",
    content:
      "Industrial solutions include 530 industrial pumps for chemical dosing, Bredel heavy-duty hose pumps for abrasive slurries, and 701 series for high-pressure applications up to 7 bar. The Bredel APEX series handles particulate-laden fluids with hose life monitoring. Applications cover: mining process reagents, wastewater treatment, ceramic slip transfer, and pigment dosing. Features include SCADA integration, remote operation via PROFIBUS/PROFINET, and chemical-resistant materials like Marprene and Gore.",
  },
  {
    title: "Environmental and Water Treatment",
    content:
      "Watson-Marlow's water treatment solutions feature Qdos chemical metering pumps with ReNu single-use fluid paths, 620 series for polymer dosing achieving 99.5% accuracy, and 720 pumps for lime slurry transfer. Applications include: municipal water treatment, pH adjustment, flocculation, chlorine dioxide dosing, and phosphate removal. Systems offer flow rates from 0.1 to 4000 mL/min with integration into SCADA/PLC systems and remote monitoring capabilities.",
  },
  {
    title: "Biofuel Production",
    content:
      "For biofuel processes, Watson-Marlow provides 700 series pumps for enzyme dosing, Bredel APEX for spent grain transfer, and 530 series for precise chemical addition. Applications include: cellulosic ethanol production, biodiesel catalyst dosing, and biomass transfer. Pumps handle high-viscosity materials and abrasive slurries with flow rates up to 80m³/hr. Features include explosion-proof options meeting ATEX requirements and chemical-resistant hose materials.",
  },
  {
    title: "Chemical Processing",
    content:
      "Chemical processing solutions include Qdos 60 for acid/alkali dosing, 630 series for solvent transfer, and Bredel APEX for corrosive chemical handling. Flow rates range from microliters to 80m³/hr. Applications include: polymer production, chlor-alkali processing, and specialty chemical manufacturing. All pumps feature chemical-resistant materials, seal-less designs for safety, and options for hazardous area operation meeting IECEx standards.",
  },
  {
    title: "Mining and Minerals",
    content:
      "Mining solutions feature Bredel heavy-duty hose pumps handling slurries up to 80% solids content, APEX hose pumps for reagent dosing, and 530 industrial pumps for precise chemical metering. Applications include: thickener dosing, flotation reagents, cyanide transfer, and tailings treatment. Pumps offer abrasion resistance with hose materials like NR Endurance and NBR, with flow monitoring and predictive maintenance capabilities.",
  },
  {
    title: "Print and Packaging",
    content:
      "The print sector utilizes 520 series pumps for ink transfer, 620 series for coating applications, and Qdos for chemical dosing in plate processing. Flow rates from 0.001 to 3,500 mL/min with ±0.5% accuracy. Applications include: flexographic printing, coating delivery, ink dispensing, and fountain solution circulation. Features include pulsation-free flow, rapid color changing capabilities, and integration with printing machine controls.",
  },
  {
    title: "Agricultural Processing",
    content:
      "Agricultural solutions include 520 series for pesticide dosing, Bredel pumps for fertilizer transfer, and 701 series for irrigation chemical injection. Applications cover: hydroponics nutrient dosing, pesticide application, and fertilizer concentrate metering. Systems feature weather-resistant enclosures, solar power compatibility for remote operation, and precision dosing for nutrient management with flow rates from 0.1 μL/min to 80m³/hr.",
  },
];

const brandDescriptions = {
  "watson-marlow": {
    aboutTitle: "About Watson-Marlow Pumps",
    description: (
      <div className="space-y-6">
        <p className="mb-4 text-lg text-gray-800">
          <span className="font-semibold text-indigo-700">
            Watson-Marlow Fluid Technology Solutions
          </span>{" "}
          is the world leader in peristaltic pumps and associated fluid path
          technologies for the life science and process industries.
          Watson-Marlow's peristaltic pumps, which fall under the positive
          displacement pump category, are designed to provide exceptional value,
          low cost of ownership, outstanding reliability, ease of maintenance,
          and proven after-sales service.
        </p>
        <p className="text-lg text-gray-800">
          We work closely with our customers to demonstrate how our PD pumps
          ensure accurate metering, transfer, and filling, delivering
          significant process efficiency over the lifetime of the equipment.
        </p>
        <div className="bg-indigo-50 rounded-xl p-6 shadow-inner flex flex-col items-center">
          <h4 className="font-semibold text-indigo-800 mb-2 text-lg">
            Key Factors to Consider When Choosing a Pump:
          </h4>
          <ul className="space-y-2 text-base text-gray-700 w-64">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              Flow rate
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              System pressure
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              Fluid viscosity
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              Abrasiveness of the fluid
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              Operating temperature
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              Suction conditions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              Size of any particulates
            </li>
          </ul>
        </div>
        <p className="mt-6 font-bold text-indigo-900 text-xl text-center">
          We, <span className="text-indigo-700">Mouldair Scientific</span>,
          collaborate closely with Watson-Marlow's Engineering Team to help our
          customers find the right solutions.
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
          Welch is a leading pump manufacturer of high quality, durable, vacuum
          products, which includes diaphragm pumps, rotary vane pumps, and
          vacuum systems. Welch pumps are designed for a wide range of
          applications, including laboratory, industrial, and medical uses. With
          a focus on reliability and performance, Welch provides innovative
          solutions for various industries, ensuring efficient and effective
          vacuum processes.
        </p>
      </div>
    ),
  },
  cintex: {
    aboutTitle: "About Cintex",
    description:
      "Cintex manufactures laboratory and pharma equipment such as ovens, furnaces, incubators, stability chambers, baths, shakers and allied instruments. Their systems feature microprocessor PID control, robust stainless-steel construction, CFC‑free cooling kits, and optional 21 CFR Part 11 compliant data logging and HMI controls to meet ICH, WHO and US‑FDA requirements.",
  },
};

const CategoryPage = () => {
  const { brand } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLeyboldApplication, setActiveLeyboldApplication] = useState(0);
  const [activeApplication, setActiveApplication] = useState(0);
  const leyboldApplicationsRef = useRef(null);
  const welchApplicationsRef = useRef(null);
  const watsonMarlowSectorsRef = useRef(null);
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
    if (brand === "leybold") {
      scrollToElement(leyboldApplicationsRef, true);
    } else if (brand === "welch") {
      scrollToElement(welchApplicationsRef, true);
    } else if (brand === "watson-marlow") {
      scrollToElement(watsonMarlowSectorsRef, true);
    }
  };

  const brandProducts = productData.filter(
    (product) => product.brand === brand
  );
  const brandInfo = brandDescriptions[brand];

  if (brandProducts.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            No Products Found
          </h1>
          <p className="text-center text-gray-600">
            We couldn&apos;t find products for the brand: <b>{brand}</b>
          </p>
        </div>
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
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex flex-col items-center space-y-4 mb-6">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                  {brandInfo.aboutTitle}
                </h2>
              </div>
              <div className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                {brandInfo.description}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center capitalize">
            {brand === "cintex"
              ? "Cintex Laboratory Equipment"
              : `${brand.replace("-", " ")} Vacuum Pumps`}
          </h1>

          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search pump types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
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
                  <div key={type}>
                    <Link to={`/categories/${brand}/${type}`}>
                      <div className="bg-white rounded-lg overflow-hidden relative transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
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
                  </div>
                );
              })
            )}
          </div>
        </div>

        {brand === "welch" && (
          <section
            ref={welchApplicationsRef}
            className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
              Applications of Welch Vacuum Pumps
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6 sm:mb-8 justify-center">
              {welchApplications.map((app, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveApplication(index);
                    setTimeout(
                      () => scrollToElement(applicationContentRef, true),
                      100
                    );
                  }}
                  className={`px-3 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-base font-semibold flex items-center justify-center text-center shadow-sm border overflow-hidden transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${
                    activeApplication === index
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white ring-2 ring-indigo-300 shadow-lg"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <div className="text-center break-words whitespace-normal px-1 leading-tight">
                    {app.title}
                  </div>
                </button>
              ))}
            </div>

            <div
              ref={applicationContentRef}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-indigo-50 mx-auto max-w-4xl transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                  {welchApplications[activeApplication].title}
                </h3>
                <div className="h-1 w-28 bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 mb-4 rounded-full mx-auto" />
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 max-w-prose">
                  {welchApplications[activeApplication].content}
                </p>
              </div>
            </div>
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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6 sm:mb-8 justify-center">
              {leyboldApplications.map((app, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveLeyboldApplication(index);
                    setTimeout(
                      () => scrollToElement(applicationContentRef, true),
                      100
                    );
                  }}
                  className={`px-3 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-base font-semibold flex items-center justify-center text-center shadow-sm border overflow-hidden transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${
                    activeLeyboldApplication === index
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white ring-2 ring-indigo-300 shadow-lg"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <div className="text-center break-words whitespace-normal px-1 leading-tight">
                    {app.title}
                  </div>
                </button>
              ))}
            </div>

            <div
              ref={applicationContentRef}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-indigo-50 mx-auto max-w-4xl transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                  {leyboldApplications[activeLeyboldApplication]?.title ||
                    "No Title Available"}
                </h3>
                <div className="h-1 w-28 bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 mb-4 rounded-full mx-auto" />
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 max-w-prose">
                  {leyboldApplications[activeLeyboldApplication]?.content ||
                    "No content available."}
                </p>
              </div>
            </div>
          </section>
        )}

        {brand === "watson-marlow" && (
          <section
            ref={watsonMarlowSectorsRef}
            className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
              Sectors and Products
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6 sm:mb-8 justify-center">
              {watsonMarlowSectors.map((sector, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveApplication(index);
                    setTimeout(
                      () => scrollToElement(applicationContentRef, true),
                      100
                    );
                  }}
                  className={`px-3 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-base font-semibold flex items-center justify-center text-center shadow-sm border overflow-hidden transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${
                    activeApplication === index
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white ring-2 ring-indigo-300 shadow-lg"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <div className="text-center break-words whitespace-normal px-1 leading-tight">
                    {sector.title}
                  </div>
                </button>
              ))}
            </div>

            <div
              ref={applicationContentRef}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-indigo-50 mx-auto max-w-4xl transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                  {watsonMarlowSectors[activeApplication].title}
                </h3>
                <div className="h-1 w-28 bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 mb-4 rounded-full mx-auto" />
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 max-w-prose">
                  {watsonMarlowSectors[activeApplication].content}
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
