import React, { useState, useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ProductCard from "../components/Layout/ProductCard";

import { productData } from "../data/productData";
import { FaSearch } from "react-icons/fa";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return productData.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center">
            Discover All Our Products
          </h1>

          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                aria-label="Search products"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="h-full transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  imageUrl={product.imageUrl[0]}
                />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-600 mt-8 text-sm sm:text-base">
              No products found. Try adjusting your search.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
