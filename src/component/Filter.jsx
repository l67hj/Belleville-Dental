import React, { useState } from "react";
import "./Filter.css";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";



const FilterSection = ({ onFilter }) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    onFilter({  productName, category });
  };

  const handleReset = () => {
    setProductName("");
    setCategory("");
    onFilter({  productName: "", category: "" }); 
  };

  return (
    <div className="filter-box">
     

      {/* Product Name */}
      <div className="filter-items">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="filter-items">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Toothpaste">Toothpaste</option>
          <option value="MouthCare">MouthCare</option>
          <option value="Kids">Kids</option>
           <option value="Brush">Toothbrush</option>
          <option value="Electrical">Electrical</option>
        <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* Filter Button */}
      <button className="filter-btn" onClick={handleFilter}>
        <CiFilter className="icon" />
      </button>

      {/* Reset Button */}
      <span className="reset-btn" onClick={handleReset}>
        <GrPowerReset />

      </span>
    </div>
  );
};

export default FilterSection;