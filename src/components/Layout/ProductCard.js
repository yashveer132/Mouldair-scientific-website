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
