import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AnimatedSection from "../components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { productData } from "../data/productData";
import { pumpTypeLabels } from "../data/pumpTypeLabels";

const SubCategoryPage = () => {
  const { brand, pumpType } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productData.filter(
    (product) => product.brand === brand && product.pumpType === pumpType
  );

  const filteredProductsBySearch = filteredProducts.filter((product) =>
    searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  if (filteredProducts.length === 0) {
    return (
      <Layout>
        <AnimatedSection className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            No Products Found
          </h1>
          <p className="text-center text-gray-600">
            We couldn&apos;t find products for {brand} - {pumpType}.
          </p>
        </AnimatedSection>
      </Layout>
    );
  }

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
            {pumpTypeLabels[pumpType] || pumpType}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <input
              type="text"
              placeholder="Search pumps..."
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
              {filteredProductsBySearch.length === 0 ? (
                <div className="col-span-full text-center text-gray-700 font-semibold">
                  No matching pumps found.
                </div>
              ) : (
                filteredProductsBySearch.map((product) => (
                  <motion.div
                    key={product.id}
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
                    <Link to={`/products/${product.id}`}>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <div className="relative w-full h-56 sm:h-64 md:h-72">
                          <img
                            src={
                              product.imageUrl && product.imageUrl.length > 0
                                ? product.imageUrl[0]
                                : "https://via.placeholder.com/400x200/eee/ccc?text=Pump+Image"
                            }
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                        <div className="p-5 text-center">
                          <h2 className="text-lg font-semibold text-gray-700 mb-2">
                            {product.name}
                          </h2>
                          <p className="text-gray-600 text-sm">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default SubCategoryPage;
