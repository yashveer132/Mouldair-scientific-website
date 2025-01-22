export const categories = [
  {
    id: "watson-marlow",
    name: "Watson Marlow Pumps",
    description: "Fluid handling pumps from Watson Marlow.",
    imageUrl: "/pump2.png",
    link: "/categories/watson-marlow",
  },
  {
    id: "leybold",
    name: "Leybold Vacuum Pumps",
    description: "Leading vacuum solutions from Leybold.",
    imageUrl: "/pump3.png",
    link: "/categories/leybold",
  },
  {
    id: "welch",
    name: "Welch Vacuum Pumps",
    description: "Trusted vacuum pumps from Welch.",
    imageUrl: "/pump4.png",
    link: "/categories/welch",
  },
];

export const features = [
  {
    title: "High Performance",
    description: "Unmatched pumping solutions as per your requirements",
  },
  {
    title: "Energy Efficient",
    description: "Reduce your carbon footprint and energy costs",
  },
  {
    title: "Modular Design",
    description: "Easily customizable for various applications",
  },
  {
    title: "Quiet Operation",
    description: "Minimal noise disruption",
  },
];

export const testimonials = [
  {
    name: "Mr. Rahul D Narkhede",
    feedback:
      "Mouldair Scientific's pumps have revolutionized our lab operations with their powerful and quiet performance.",
    role: "Production manager, DSSLLP",
  },
  {
    name: "Mr. Sanjay Divedia",
    feedback:
      "The energy efficiency and modular design of Mouldair products are game changers for our industry needs.",
    role: "Senior Manager, JDM Scientific Research",
  },
  {
    name: "Mr. Devendrakumar Gurjar",
    feedback:
      "Mouldair Scientific pumps are incredibly reliable, and the customer support is top-notch. Highly recommended!",
    role: "Manager, Process Development, Solenis Chemicals",
  },
];

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export const heroContent = {
  title: "Elevate Your Pump Research with Mouldair Scientific",
  subtitle:
    "Discover our cutting-edge technical sales and after-services that combine power, efficiency, and reliability for all your industrial pump requirements",
  buttonText: "Explore Our Products",
};

export const innovateSection = {
  title: "Innovate with Confidence",
  content:
    "Our technology empowers you to reach new heights in your research and operations.",
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  imageUrl: "/pump4.jpg",
};

export const ctaSection = {
  title: "Ready to Elevate Your Research?",
  content: "Contact our team of experts for personalized solutions.",
  buttonText: "Get in Touch",
  buttonLink: "/contact",
};
