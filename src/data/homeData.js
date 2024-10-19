export const products = [
  {
    id: "1",
    name: "VacuPro 1000",
    description: "High-performance modular vacuum pump",
    imageUrl: "/pump3.jpg",
    price: 1999.99,
  },
  {
    id: "2",
    name: "VacuPro 2000",
    description: "Ultra-quiet modular vacuum pump",
    imageUrl: "/pump3.jpg",
    price: 2499.99,
  },
  {
    id: "3",
    name: "VacuPro 3000",
    description: "Energy-efficient modular vacuum pump",
    imageUrl: "/pump3.jpg",
    price: 2999.99,
  },
];

export const features = [
  {
    title: "High Performance",
    description: "Unmatched vacuum power for your research needs",
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
    description: "Minimal noise disruption in your lab environment",
  },
];

export const testimonials = [
  {
    name: "Dr. Jane Doe",
    feedback:
      "Mouldair Scientific's pumps have revolutionized our lab operations with their powerful and quiet performance.",
    role: "Lead Scientist, XYZ Lab",
  },
  {
    name: "John Smith",
    feedback:
      "The energy efficiency and modular design of the VacuPro series are game changers for our industry needs.",
    role: "Operations Manager, ABC Corp",
  },
  {
    name: "Dr. Sarah Lee",
    feedback:
      "Mouldair Scientific pumps are incredibly reliable, and the customer support is top-notch. Highly recommended!",
    role: "Head of Research, LMN Innovations",
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
  title: "Elevate Your Research with Mouldair Scientific",
  subtitle:
    "Discover our cutting-edge modular vacuum pumps that combine power, efficiency, and reliability for all your scientific and industrial needs.",
  buttonText: "Explore Our Products",
  buttonLink: "/products",
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
