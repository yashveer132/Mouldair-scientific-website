// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const ProductCard = ({ id, name, description, imageUrl, category }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
//       whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
//       transition={{ duration: 0.3 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <Link to={`/products/${id}`} className="flex flex-col h-full">
//         <div className="relative aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3">
//           <motion.img
//             src={imageUrl}
//             alt={name}
//             className="w-full h-full object-cover"
//             initial={{ scale: 1 }}
//             animate={{ scale: isHovered ? 1.05 : 1 }}
//             transition={{ duration: 0.3 }}
//           />
//           <motion.div
//             className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isHovered ? 1 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <span className="text-white text-sm sm:text-base font-semibold px-2 py-1 bg-indigo-600 rounded-md">
//               View Details
//             </span>
//           </motion.div>
//         </div>
//         <div className="p-4 flex-grow flex flex-col justify-between">
//           <div>
//             <div className="flex justify-between items-start mb-2">
//               <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
//                 {name}
//               </h3>
//               <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
//                 {category}
//               </span>
//             </div>
//             <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// export default ProductCard;

// src/components/Layout/ProductCard.js

import React from "react";

const ProductCard = ({ id, name, description, imageUrl }) => {
  const displayImage = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={displayImage}
        alt={name}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
