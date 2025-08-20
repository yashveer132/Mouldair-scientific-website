import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const technicalSections = [
  {
    title: "Introduction to Vacuum Technology",
    content:
      "Vacuum technology creates environments below atmospheric pressure for processes that require reduced gas density, contamination control or thermal isolation. Engineers classify vacuum by pressure ranges (rough, medium, high, ultra-high) because flow regime and pump choice depend on absolute pressure. Typical industrial uses include packaging, freeze-drying, coatings and semiconductor processing; each application defines different cleanliness, leak-tightness and pumping-speed requirements.",
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum",
      "https://www.leybold.com/en/downloads/download-documents/brochures/",
    ],
  },
  {
    title: "Pump Mechanics",
    content:
      "Different pump families work by different physical principles: positive-displacement pumps (rotary vane, diaphragm, liquid-ring) capture and move fixed gas volumes; momentum-transfer pumps (turbomolecular, diffusion) impart momentum to molecules to carry them toward the exhaust; entrapment pumps (cryopumps, ion pumps, getters) remove species by condensing or chemically binding them. Real systems commonly combine types in stages: a backing pump for roughing and a high-vacuum pump for final pressure.",
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum_pump",
      "https://www.schmalz.com/en/vacuum-knowledge/",
    ],
  },
  {
    title: "Efficiency Optimization",
    content:
      "Maximizing efficiency means matching pump capacity to process gas load and minimizing wasteful losses. Key levers are: right-sizing (avoid oversized constant-speed pumps), variable-speed drives (VSD) for load-following, correct piping and valve sizing to reduce pressure drops, and minimizing backstreaming and leaks. Energy recovery (heat from motor or discharge) and scheduled preventative maintenance also improve lifetime energy profile.",
    sources: [
      "https://www.atlascopco.com/en-us/vacuum-solutions",
      "https://www.edwardsvacuum.com/en/insights/knowledge",
    ],
  },
  {
    title: "Maintenance Procedures",
    content:
      "A practical maintenance program blends daily checks, periodic services and condition-based interventions. Daily: monitor inlet/outlet pressures, oil level/quality (for oil-sealed pumps), and unusual vibration or noise. Weekly/monthly: inspect seals, filters and coupling alignments. Yearly: replace wear parts (seals, bearings), perform oil analysis, leak checks (helium or pressure-rise tests) and calibrate gauges. Keep clear service logs to correlate symptoms and failures.",
    sources: [
      "https://www.welchvacuum.com/learning-center/maintenance/",
      "https://www.edwardsvacuum.com/",
    ],
  },
  {
    title: "Performance Monitoring",
    content:
      "Modern systems use integrated telematics and local instrumentation to detect drift early. Useful signals include inlet pressure, discharge pressure, motor current, vibration spectra, bearing temperature and oil-particulate counts. Trending and thresholding these parameters enables predictive maintenance — for example, rising motor current with stable load often points to mechanical binding or bearing wear.",
    sources: [
      "https://www.edwardsvacuum.com/en/insights/knowledge",
      "https://www.atlascopco.com/",
    ],
  },
  {
    title: "Advanced Materials",
    content:
      "Material choice controls corrosion resistance, outgassing and wear. Stainless steels (304/316), aluminum alloys, and special coatings (hard anodize, PTFE, ceramic coatings) are common. In high or ultra-high vacuum, metal seals, bakeable components and low-outgassing finishes are essential. Selecting elastomers (Viton, Buna, PTFE) requires checking vapor pressure and chemical compatibility with process gases.",
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum",
      "https://www.leybold.com/",
    ],
  },
  {
    title: "Troubleshooting Common Issues",
    content:
      "Common faults include air leaks, oil contamination, reduced pumping speed and abnormal vibration. A systematic approach: verify gauge accuracy, trace leaks (soap, pressure-rise or helium leak detector), inspect oil for water/emulsification, check for blocked valves/filters and confirm proper backing pump operation. Use vibration and thermal readings to locate bearing or alignment failures before catastrophic breakdown.",
    sources: [
      "https://www.welchvacuum.com/learning-center/maintenance/",
      "https://en.wikipedia.org/wiki/Vacuum_pump",
    ],
  },
  {
    title: "Energy Conservation Techniques",
    content:
      "Energy savings come from right-sizing, implementing VSDs, reducing leak rates and improving system sequencing (only run pumps required for a given process step). Recoverable waste heat from motors and exhaust can be used for facility heating or process preheating. Periodic audits, metering and control algorithm tuning typically produce the fastest ROI.",
    sources: ["https://www.atlascopco.com/", "https://www.edwardsvacuum.com/"],
  },
  {
    title: "Safety Protocols",
    content:
      "Vacuum systems can present chemical, mechanical and decompression hazards. Follow safe handling of pump oils (watch for legacy PCBs), ensure correct venting for process gases, lock out and tag out rotating equipment during service, and follow PPE guidance. For systems exposed to toxic gases or volatile organics, integrate scrubbers or abatement and ensure emergency venting lines are routed safely.",
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum_pump",
      "https://www.atlascopco.com/",
    ],
  },
  {
    title: "Innovations in Vacuum Pump Designs",
    content:
      "Recent trends include oil-free and dry pumps that reduce contamination risk, magnetic-bearing turbomolecular pumps for longer maintenance intervals, intelligent controls with remote telemetry for predictive service, and modular pumps for quick replacements. These innovations reduce downtime and make vacuum easier to integrate into automated processes.",
    sources: [
      "https://www.atlascopco.com/",
      "https://en.wikipedia.org/wiki/Turbomolecular_pump",
    ],
  },
];

const articles = [
  {
    title: "High-Vacuum Applications in Nanotechnology",
    content: `Nanotechnology manufacturing and research routinely require pressures well below atmospheric to control contamination, reduce scattering and enable controlled deposition. In processes such as physical vapor deposition (PVD), atomic layer deposition (ALD) and electron-beam lithography, a stable high or ultra-high vacuum minimizes reactive molecules and water vapor that would otherwise degrade films or cause defects.

Careful pump selection and vacuum technique are central: a common shop configuration uses a roughing (backing) pump plus a turbomolecular or cryopump to reach the required molecular-flow regime. Attention to materials (low-outgassing stainless steels, metal seals), rigorous bake-out and controlled venting dramatically improve reproducibility and yield for nanoscale devices.

Because process sensitivity increases as device dimensions shrink, instrumentation (ion gauges, residual gas analyzers) and routine leak/outgassing control become standard practice in nanofabrication environments.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum",
      "https://en.wikipedia.org/wiki/Vacuum_pump",
      "https://en.wikipedia.org/wiki/Physical_vapor_deposition",
    ],
  },
  {
    title: "Sustainable Manufacturing and Vacuum Pumps",
    content: `Vacuum systems can be significant energy users in industry; sustainable operation therefore focuses on right-sizing, process-matched control and loss reduction. Variable speed drives (VSDs) and setpoint control allow pumps to track actual process demand rather than run full speed continuously, which often cuts energy use dramatically without compromising process throughput.

Beyond drives, simple operational changes like closing unused branches, repairing leaks, and staging pumps for different process steps reduce runtime and waste. Manufacturers also recover waste heat from motors and exhaust where feasible and specify dry or low-emission pumps to reduce environmental impact from oil carryover and disposal.`,
    sources: [
      "https://www.atlascopco.com/en-us/vacuum-solutions/vacuum-fundamentals",
      "https://en.wikipedia.org/wiki/Vacuum",
    ],
  },
  {
    title: "Vacuum Solutions for Lab-Scale Research",
    content: `Laboratory vacuum systems prioritize flexibility and cleanliness: modular bench pumps, compact dry scroll pumps, and small turbomolecular setups are common. Researchers choose configurations that are quick to reconfigure and minimize cross-contamination between disparate experiments.

Good lab practice emphasizes documentation, instrument calibration and simple preventive actions: trap cold traps where condensable vapours are used, use proper foreline filtration on oil-sealed pumps, and standardize vent and purge procedures. These measures reduce downtime and the risk of costly contamination in sensitive analytical experiments.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum_pump",
      "https://www.welchvacuum.com/learning-center/maintenance/",
    ],
  },
  {
    title: "Breaking the Pressure Barrier",
    content: `Achieving very low pressures requires not only the right pumps but also attention to system design. As pressure decreases into the high and ultra-high vacuum regimes the mean free path of molecules increases and traditional viscous-flow assumptions fail; molecular flow, surface outgassing and permeation dominate the achievable base pressure.

Engineers address these limits by using staged pumping (roughing plus molecular pumps), choosing low-outgassing materials, employing metal seals and baking equipment to desorb water and volatiles. Measurement and gauge choice are equally important: a McLeod or ionization gauge and calibrated transfer standards remain reference points for accurate pressure assessment.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum",
      "https://en.wikipedia.org/wiki/McLeod_gauge",
    ],
  },
  {
    title: "3D Printing Meets Vacuum Environments",
    content: `Vacuum-assisted additive manufacturing enables improved material properties and reduced porosity for certain metal and polymer processes. Removing air during layer deposition or cure steps reduces oxidation and trapped gases, improving mechanical performance and surface finish for high-reliability parts.

Integrating vacuum into 3D printing requires compact pumping solutions, careful material selection to avoid outgassing during thermal cycles, and process controls to ensure repeatable chamber conditions. For labs and small production volumes, modular vacuum chambers that adapt to different printers offer a practical path to adoption.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum",
      "https://en.wikipedia.org/wiki/Additive_manufacturing",
    ],
  },
  {
    title: "Advances in Oil-Free Pump Technology",
    content: `Oil-free (dry) vacuum pumps have matured and are now a preferred choice where contamination or oil carryover is unacceptable. Modern dry screw and claw designs deliver robust roughing performance without oil management overhead, while magnetic-bearing turbopumps extend maintenance intervals in high vacuum stages.

These oil-free technologies simplify integration in sensitive environments (semiconductor, pharmaceutical) and eliminate oil disposal and backstreaming concerns. The trade-offs are capital cost and, in some cases, a requirement for more precise filtration or gas-handling upstream to protect pump internals.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum_pump",
      "https://www.atlascopco.com/",
    ],
  },
  {
    title: "Medical Device Sterilization Using Vacuum",
    content: `Vacuum plays a central role in sterilization technologies such as low-temperature steam, vaporized hydrogen peroxide (VHP) cycles and certain drying-based sterilizers. Reduced pressure enables lower-temperature sterilization cycles that preserve sensitive polymers and electronics used in modern medical devices.

Process control, validated cycle parameters and reliable monitoring are essential to provide demonstrable sterility assurance levels. For healthcare manufacturers, integrating vacuum systems with precise controls and reporting is necessary to meet regulatory traceability and validation requirements.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum_pump",
      "https://en.wikipedia.org/wiki/Sterilization_(microbiology)",
    ],
  },
  {
    title: "Electronic Packaging and Hermetic Sealing",
    content: `Hermetic sealing under vacuum prevents moisture and corrosive gases from degrading sensitive electronics and MEMS packages. Vacuum-assisted packaging and getter materials are used to maintain an inert internal atmosphere and prolong device life, critical for aerospace, medical implants and high-reliability sensors.

Best practice combines careful material choice, controlled pump-down procedures and in-line leak testing (e.g., helium mass spectrometry) to ensure long-term hermeticity.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum",
      "https://en.wikipedia.org/wiki/Leak_testing",
    ],
  },
  {
    title: "Future of Space Missions and Vacuum Tech",
    content: `Space systems both operate in and simulate vacuum: thermal/vacuum chambers, outgassing tests and space-qualification facilities rely on high-performance vacuum pumps and strict contamination control. As missions push to longer durations and more complex payloads, vacuum engineering helps validate materials, coatings and subsystems for reliability in orbit.

Emerging trends include more compact test cells, improved cryopumping for volatile capture and tighter integration between vacuum control and telemetry for remote, automated test campaigns.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum",
      "https://en.wikipedia.org/wiki/Outer_space",
    ],
  },
  {
    title: "The Role of Vacuum Pumps in Food Safety",
    content: `Vacuum technology underpins many food-safety processes including vacuum packaging, freeze-drying and controlled-atmosphere handling. Removing oxygen and other reactive gases extends shelf life, reduces oxidative degradation and enables dehydration at lower temperatures for sensitive products.

In food plants, vacuum system design must consider hygiene, easy-to-clean pump choices (oil-free where possible), and regulatory requirements for contact materials. Properly sized and maintained vacuum systems contribute directly to product quality and reduced waste.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum",
      "https://en.wikipedia.org/wiki/Vacuum_packing",
    ],
  },
];

const caseStudies = [
  {
    title: "Refinery Pump Reliability Upgrade",
    content: `Problem: An oil refinery suffered recurring downtime from aging rotary vane pumps used in vacuum distillation steps; oil degradation and frequent seal failures reduced availability.

Solution: The plant replaced the oldest pumps with modern oil-sealed rotary vane units paired with VSD-backed central systems, improved filtration and an instituted oil-analysis program to detect early contamination.

Outcome: Measured results included lower unplanned maintenance events, a 20-35% reduction in energy consumption during partial-load operation due to VSD control, and clearer failure trends enabling proactive part replacement.`,
    sources: [
      "https://www.atlascopco.com/en-us/vacuum-solutions/vacuum-news-and-customer-stories",
    ],
  },
  {
    title: "Vacuum-Assisted Resin Infusion for Composites",
    content: `Problem: A composites manufacturer saw inconsistent resin distribution and porosity in large infusions, leading to part rejects.

Solution: Engineers introduced a controlled vacuum-infused mold with optimized venting channels and an oil-free backing pump to eliminate hydrocarbon contamination. The team standardized pump-down and resin-flow timing, and added pressure monitoring at multiple points.

Outcome: Part quality improved, porosity rates fell significantly, and cycle yields rose — enabling the shop to take on higher-value aerospace contracts.`,
    sources: ["https://en.wikipedia.org/wiki/Vacuum"],
  },
  {
    title: "Pharmaceutical Freeze-Drying Line Retrofit",
    content: `Problem: A pharmaceutical production line used legacy pumps with poor condensation control, lengthening cycle times for lyophilization and increasing energy costs.

Solution: The retrofit replaced the foreline pumps with a dedicated liquid-nitrogen-cooled trap upstream of a modern dry backing pump and added automated sequencing to maintain optimal condenser temperature and pressure profiles.

Outcome: Cycle times shortened, product throughput increased, and energy per batch fell; the facility also reduced contamination risk and simplified validation for regulators.`,
    sources: [
      "https://en.wikipedia.org/wiki/Freeze-drying",
      "https://en.wikipedia.org/wiki/Vacuum",
    ],
  },
  {
    title: "Semiconductor Contamination Control Project",
    content: `Problem: A fab experienced particle excursions traced to oil backstreaming from roughing pumps used on multiple process chambers.

Solution: The fab migrated to dry primary pumps and installed coordinated purge and trapping strategies, plus in-situ RGA monitoring that alerted operators to early contamination events.

Outcome: Particle-related yield losses dropped, time between chamber cleans increased, and overall process stability improved — validating the capital investment in oil-free technology.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum_pump",
      "https://www.atlascopco.com/",
    ],
  },
  {
    title: "Energy-Saving Pump Retrofits for Coating Facility",
    content: `Problem: A coating line operator had high energy bills due to oversized constant-speed pumps running for long dwell steps.

Solution: An energy audit recommended right-sizing and implementing VSD vacuum pumps, improved piping and optimized staging so pumps only served live process islands as needed.

Outcome: The facility reported a substantial drop in electrical consumption (typical audits report 20-50% savings depending on baseline), a lower maintenance burden and improved process repeatability.`,
    sources: [
      "https://www.atlascopco.com/en-us/vacuum-solutions/vacuum-news-and-customer-stories",
    ],
  },
  {
    title: "Electron Beam Welding: Aerospace Quality Improvements",
    content: `Problem: An aerospace supplier needed more consistent welds in electron-beam processes and shorter pump-down times to increase throughput.

Solution: The site upgraded vacuum hardware with a two-stage approach: a fast roughing pump for pump-down speed and a high-capacity diffusion/turbo stage for the welding vacuum. They also improved chamber sealing and introduced better vent sequencing.

Outcome: Pump-down times fell, weld consistency improved, and production capacity increased while maintaining the strict cleanliness demanded by aerospace standards.`,
    sources: [
      "https://en.wikipedia.org/wiki/Electron_beam_welding",
      "https://en.wikipedia.org/wiki/Vacuum",
    ],
  },
  {
    title: "High-Altitude Simulation for UAV Development",
    content: `Problem: A UAV developer required reliable environmental testing at low pressures to validate avionics and materials for high-altitude flight.

Solution: The company invested in a thermal-vacuum chamber with dedicated cryopumping and modular pumping trains sized to the test volumes, plus integrated data acquisition for pressure and temperature profiling.

Outcome: Test repeatability improved, failures were found earlier in development, and certification timelines shortened due to higher-fidelity test data.`,
    sources: [
      "https://en.wikipedia.org/wiki/Outer_space",
      "https://en.wikipedia.org/wiki/Vacuum",
    ],
  },
  {
    title: "Vacuum Furnace Adoption for Tool Manufacturing",
    content: `Problem: Toolmakers needed cleaner heat-treat cycles to eliminate oxidation and scaling on critical dies and cutting tools.

Solution: Adoption of vacuum furnaces with controlled backfilling and staged pumping removed oxygen during heat treatment, producing oxide-free surfaces and more uniform metallurgical results.

Outcome: Tool life extended, secondary finishing dropped, and downstream machining tolerances improved, producing clear cost savings over replacement cycles.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum_furnace",
      "https://en.wikipedia.org/wiki/Vacuum",
    ],
  },
  {
    title: "Modular Lab Vacuum Stations for Startups",
    content: `Problem: Small R&D startups lacked space and capital to build dedicated vacuum infrastructure for multiple teams.

Solution: A modular vacuum-station concept (shared cabinets with dedicated valves and metering) allowed multiple groups to use a small central system with simple isolation and billing.

Outcome: Startups gained reliable access to vacuum services, reduced redundant equipment purchases and improved lab safety by consolidating maintenance and monitoring.`,
    sources: [
      "https://en.wikipedia.org/wiki/Vacuum",
      "https://www.welchvacuum.com/learning-center/maintenance/",
    ],
  },
  {
    title: "Emission Reduction through Leak-Proof Vacuum Systems",
    content: `Problem: A chemical plant faced fugitive emissions through leaky vacuum piping and flange connections that contributed to regulatory non-compliance.

Solution: The plant invested in helium-leak surveys, upgraded flange technologies, and converted to sealed, welded sections where possible; they also added gas capture and abatement on exhaust lines.

Outcome: Fugitive emissions dropped, permitting compliance improved, and the company avoided fines while demonstrating meaningful environmental gains.`,
    sources: [
      "https://en.wikipedia.org/wiki/Leak_testing",
      "https://en.wikipedia.org/wiki/Vacuum",
    ],
  },
];

const TechnicalCorner = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(0);
  const [activeArticle, setActiveArticle] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const sectionContentRef = useRef(null);
  const articleContentRef = useRef(null);
  const caseStudyContentRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSelectSection = (index) => {
    setActiveSection(index);
    // ensure the content panel is visible on both desktop and mobile
    setTimeout(() => scrollToRef(sectionContentRef), 50);
  };

  const handleSelectArticle = (index) => {
    setActiveArticle(index);
    setTimeout(() => scrollToRef(articleContentRef), 50);
  };

  const handleSelectCaseStudy = (index) => {
    setActiveCaseStudy(index);
    setTimeout(() => scrollToRef(caseStudyContentRef), 50);
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-8 sm:mb-12">
          Technical Corner
        </h1>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6 sm:mb-8 justify-center">
            {technicalSections.map((section, index) => (
              <button
                key={index}
                onClick={() => handleSelectSection(index)}
                className={`px-3 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-base font-semibold flex items-center justify-center text-center shadow-sm border overflow-hidden transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${
                  activeSection === index
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white ring-2 ring-indigo-300 shadow-lg"
                    : "bg-white text-gray-800"
                }`}
              >
                <div className="text-center break-words whitespace-normal px-1 leading-tight">
                  {section.title}
                </div>
              </button>
            ))}
          </div>

          <div
            ref={sectionContentRef}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-indigo-50 mx-auto max-w-4xl transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
          >
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                {technicalSections[activeSection].title}
              </h2>
              <div className="h-1 w-28 bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 mb-4 rounded-full mx-auto" />
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 max-w-prose">
                {technicalSections[activeSection].content}
              </p>
              {technicalSections[activeSection].sources && (
                <div className="mt-2 w-full">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Sources
                  </h4>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {technicalSections[activeSection].sources.map((s, i) => (
                      <li key={i}>
                        <a
                          href={s}
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          {s}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <section id="articles" className="mt-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
              Articles
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6 sm:mb-8">
              {articles.map((article, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectArticle(index)}
                  className={`px-3 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-base font-semibold flex items-center justify-center text-center shadow-sm border overflow-hidden transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${
                    activeArticle === index
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white ring-2 ring-indigo-300 shadow-lg"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <div className="text-center break-words whitespace-normal px-1 leading-tight">
                    {article.title}
                  </div>
                </button>
              ))}
            </div>

            <div
              ref={articleContentRef}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-indigo-50 mx-auto max-w-4xl transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                  {articles[activeArticle].title}
                </h3>
                <div className="h-1 w-28 bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 mb-4 rounded-full mx-auto" />
                <div className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 whitespace-pre-line max-w-prose">
                  {articles[activeArticle].content}
                </div>
                {articles[activeArticle].sources && (
                  <div className="mt-2 w-full">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                      Sources
                    </h4>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {articles[activeArticle].sources.map((s, i) => (
                        <li key={i}>
                          <a
                            href={s}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section id="case-studies" className="mt-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
              Case Studies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6 sm:mb-8">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectCaseStudy(index)}
                  className={`px-3 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-base font-semibold flex items-center justify-center text-center shadow-sm border overflow-hidden transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${
                    activeCaseStudy === index
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white ring-2 ring-indigo-300 shadow-lg"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <div className="text-center break-words whitespace-normal px-1 leading-tight">
                    {study.title}
                  </div>
                </button>
              ))}
            </div>

            <div
              ref={caseStudyContentRef}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-indigo-50 mx-auto max-w-4xl transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                  {caseStudies[activeCaseStudy].title}
                </h3>
                <div className="h-1 w-28 bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 mb-4 rounded-full mx-auto" />
                <div className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 whitespace-pre-line max-w-prose">
                  {caseStudies[activeCaseStudy].content}
                </div>
                {caseStudies[activeCaseStudy].sources && (
                  <div className="mt-2 w-full">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                      Sources
                    </h4>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {caseStudies[activeCaseStudy].sources.map((s, i) => (
                        <li key={i}>
                          <a
                            href={s}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicalCorner;
