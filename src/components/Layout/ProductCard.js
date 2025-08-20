import React from "react";

const ProductCard = ({ id, name, description, imageUrl }) => {
  const displayImage = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="w-full h-48 sm:h-56 md:h-64 flex-shrink-0">
        <img
          src={displayImage}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">{name}</h2>
        <p className="text-gray-600 text-sm flex-1">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
