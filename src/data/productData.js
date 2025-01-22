// src/data/productData.js

export const productData = [
  // Watson Marlow
  {
    id: "wm1",
    brand: "watson-marlow",
    pumpType: "peristaltic-lab",
    name: "Watson Marlow 101",
    description:
      "A compact, high-accuracy peristaltic pump for lab and research usage.",
    imageUrl: ["/pump2.png", "/pump2.png"],
    features: [
      "Flow range: 0.1-200 ml/min",
      "Integrated speed control",
      "Removable pump head",
    ],
    applications: [
      "Pharmaceutical sampling",
      "Chemical dosing",
      "Food industry flavor injection",
    ],
    technicalSpecs: {
      dimensions: "250 x 150 x 120 mm",
      weight: "4 kg",
      inputVoltage: "110-240V, 50/60 Hz",
      operatingTemp: "5°C to 40°C",
      maintenanceInterval: "1,000 hours",
    },
    additionalFeatures: [
      "Quick-load pump heads",
      "Digital speed display",
      "Low pulsation design",
    ],
    datasheetUrl: "/WatsonMarlow101_Datasheet.xlsx",
    videoId: "pnqXEnn3DNk",
  },
  {
    id: "wm2",
    brand: "watson-marlow",
    pumpType: "peristaltic-industrial",
    name: "Watson Marlow 205",
    description:
      "High-flow peristaltic pump suitable for industrial fluid handling.",
    imageUrl: ["/pump3.png", "/pump3.png"],
    features: [
      "Flow range: 1-500 ml/min",
      "Heavy-duty tubing",
      "Advanced motor drive",
    ],
    applications: ["Bioprocessing", "Filtration", "Dosing chemicals"],
    technicalSpecs: {
      dimensions: "320 x 180 x 160 mm",
      weight: "7 kg",
      inputVoltage: "110-240V, 50/60 Hz",
      operatingTemp: "5°C to 40°C",
      maintenanceInterval: "2,000 hours",
    },
    additionalFeatures: [
      "User-friendly interface",
      "Longer tubing life",
      "Footswitch compatibility",
    ],
    datasheetUrl: "/WatsonMarlow205_Datasheet.xlsx",
    videoId: "pnqXEnn3DNk",
  },

  // Leybold
  {
    id: "ley1",
    brand: "leybold",
    pumpType: "dry-vac",
    name: "Leybold DryVac 100",
    description:
      "A robust dry vacuum pump designed for reliability in industrial environments.",
    imageUrl: ["/pump2.png", "/pump2.png"],
    features: [
      "Ultimate pressure: 1 x 10^-2 mbar",
      "Pump speed: 100 m³/h",
      "Oil-free design",
    ],
    applications: [
      "Coating processes",
      "Vacuum distillation",
      "Freeze drying",
      "Research labs",
    ],
    technicalSpecs: {
      dimensions: "650 x 450 x 400 mm",
      weight: "55 kg",
      inputVoltage: "380-480V, 50/60 Hz",
      operatingTemp: "10°C to 40°C",
      maintenanceInterval: "8,000 hours",
    },
    additionalFeatures: [
      "Low noise operation",
      "Corrosion-resistant interior",
      "Digital monitoring panel",
    ],
    datasheetUrl: "/LeyboldDryVac100_Datasheet.xlsx",
    videoId: "pnqXEnn3DNk",
  },
  {
    id: "ley2",
    brand: "leybold",
    pumpType: "turbo-vac",
    name: "Leybold Turbovac 300",
    description:
      "High-speed turbomolecular pump ideal for high-vacuum applications.",
    imageUrl: ["/pump3.png", "/pump3.png"],
    features: [
      "Ultimate pressure: 1 x 10^-7 mbar",
      "Compact footprint",
      "High compression ratio",
    ],
    applications: ["Mass spectrometry", "Surface analysis", "R&D labs"],
    technicalSpecs: {
      dimensions: "250 x 200 x 200 mm",
      weight: "12 kg",
      inputVoltage: "220-240V, 50/60 Hz",
      operatingTemp: "5°C to 40°C",
      maintenanceInterval: "10,000 hours",
    },
    additionalFeatures: [
      "Low vibration",
      "Integrated drive electronics",
      "Optional backing pump",
    ],
    datasheetUrl: "/LeyboldTurbovac300_Datasheet.xlsx",
    videoId: "pnqXEnn3DNk",
  },

  // Welch
  {
    id: "wel1",
    brand: "welch",
    pumpType: "rotary-vane",
    name: "Welch CRV Pro 4",
    description:
      "Two-stage rotary vane pump delivering strong vacuum for laboratory applications.",
    imageUrl: ["/pump4.png", "/pump4.png"],
    features: [
      "Ultimate vacuum: 2 x 10^-3 mbar",
      "Pumping speed: 4.6 m³/h",
      "Anti-suckback valve",
    ],
    applications: ["Laboratory vacuum", "Gas analysis", "Vacuum ovens"],
    technicalSpecs: {
      dimensions: "400 x 280 x 220 mm",
      weight: "15 kg",
      inputVoltage: "220-240V, 50/60 Hz",
      operatingTemp: "5°C to 40°C",
      maintenanceInterval: "5,000 hours",
    },
    additionalFeatures: [
      "High chemical resistance",
      "Low operating noise",
      "Compact design",
    ],
    datasheetUrl: "/WelchCRVPro4_Datasheet.xlsx",
    videoId: "pnqXEnn3DNk",
  },
  {
    id: "wel2",
    brand: "welch",
    pumpType: "belt-driven",
    name: "Welch DuoSeal 1400",
    description:
      "A durable belt-driven vacuum pump built for continuous heavy-duty operation.",
    imageUrl: ["/pump5.png", "/pump5.png"],
    features: [
      "Ultimate vacuum: 1 x 10^-2 mbar",
      "Flow rate: 50 L/min",
      "Thermal overload protection",
    ],
    applications: ["Chemical labs", "Degassing", "Vacuum drying"],
    technicalSpecs: {
      dimensions: "500 x 350 x 300 mm",
      weight: "20 kg",
      inputVoltage: "220-240V, 50/60 Hz",
      operatingTemp: "5°C to 45°C",
      maintenanceInterval: "6,000 hours",
    },
    additionalFeatures: [
      "Rugged belt-drive mechanism",
      "Easy-to-change oil filter",
      "Wide range of accessories",
    ],
    datasheetUrl: "/WelchDuoSeal1400_Datasheet.xlsx",
    videoId: "pnqXEnn3DNk",
  },
];
