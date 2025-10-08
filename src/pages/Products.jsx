import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import FilterSection from '../component/Filter';

function Products() {
  const [product, setProduct] = useState([]);
  const [rating, setRating] = useState([]);
  const [filters, setFilters] = useState({
    productName: "",
    category: "",
  });

  const handleRating = (id, rating) => {
    setRating((prev) => ({...prev, [id] : rating}))
  }

  useEffect(() => {
    fetch("/Data/product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err.message))
  }, [])

   const filteredProducts = product.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(filters.productName.toLowerCase());
    const matchesCategory = filters.category ? item.category === filters.category : true;
    return matchesName && matchesCategory;
  });

  return (
    <>
      {/* Product Page Hero Section */}
     <div className='productHero vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
  <div className='container'>
    <h1 className='fw-bold display-5'>Shop Our Dental Care Products</h1>
    <p>Personal care kits for your teeth</p>
  </div>
</div>

{/* filter by products */}
    <FilterSection onFilter={setFilters} />


      {/* Products Cards */}
     <div className="productContainer container py-5">
  <div className="row g-4 justify-content-between flex-wrap d-flex">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((item) => (
        <div className="col-lg-4 col-md-6 col-12" key={item.id}>
          <div className="productCard p-3 h-100 text-center">
            <img 
              src={item.image} 
              alt={item.name} 
              className='img-fluid mb-3' 
            />
            <div className='productDetails d-flex flex-column justify-content-center align-items-center'>
              <h5 className='fw-bold mb-2 mt-2'>{item.name}</h5>
              <p className='text-muted'>{item.description}</p> 
              <h6 className='fw-semibold text-black'>{`$${item.price}`}</h6>

              {/* Ratings */}
              <div className='mt-2 d-flex flex-row'>
                {[1,2,3,4,5].map((rate) => (
                  <FaStar
                    key={rate}
                    style={{
                      cursor: "pointer",
                      color: rate <= (rating[item.id] || 0) ? "#FFD700" : "#808080",
                      marginRight: "4px"
                    }}
                    onClick={() => handleRating(item.id, rate)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div> 
      ))
    ) : (
      <p className='text-center text-muted'>😟Product not available at the moment!.</p>
    )}
  </div>
</div>
    </>
  )
}

export default Products;
