import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AnimatedSection from "../components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { productData } from "../data/productData";
import { pumpTypeLabels } from "../data/pumpTypeLabels";
import ProductCard from "../components/Layout/ProductCard";

const CategoryPage = () => {
  const { brand } = useParams();
  const brandProducts = productData.filter(
    (product) => product.brand === brand
  );

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

  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
        <AnimatedSection className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center capitalize"
          >
            {brand.replace("-", " ")} Pumps
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          >
            <AnimatePresence>
              {pumpTypes.map((type) => (
                <motion.div
                  key={type}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to={`/categories/${brand}/${type}`}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6">
                      <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        {pumpTypeLabels[type] || type}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Explore {pumpTypeLabels[type] || type} Pumps
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default CategoryPage;
