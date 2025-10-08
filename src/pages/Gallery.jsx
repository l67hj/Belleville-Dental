import React, { useEffect, useState } from 'react'

function Gallery() {

  const [gallery, setGallery] = useState([])

  useEffect(()=> {
    fetch("/Data/gallery.json")
    .then((res) => res.json())
    .then((data) => setGallery(data))
    .catch((err) => console.log(err.Message))
  }, [])

  return (
    <>
    {/* Gallery Page Hero Section */}
        <div className='galleryHero vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
          <div className='container'>
            <h1 className='fw-bold display-5'>Exlore Our Gallery</h1>
            <p>Get a glimpse of activities going on in the dental clinic</p>
          </div>
        </div>

<div className="container py-5">
  <div className="row g-1">
    {gallery.map((item) => (
      <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="galleryCard position-relative overflow-hidden shadow-sm">
          <img
            src={item.image}
            alt={item.title}
            className="w-100"
          />
          {/* Overlay */}
          <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center px-2">
            <h5 className="text-white fw-bold">{item.title}</h5>
            <p className="text-white">{item.description}</p>
            <span className="badge bg-primary">{item.category}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </>
  )
}

export default Gallery