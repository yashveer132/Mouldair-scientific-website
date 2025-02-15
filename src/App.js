import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TechnicalCorner from "./pages/TechnicalCorner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:brand" element={<CategoryPage />} />
        <Route
          path="/categories/:brand/:pumpType"
          element={<SubCategoryPage />}
        />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/technical" element={<TechnicalCorner />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
