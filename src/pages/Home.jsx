import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/heroimg.png";
import aboutImg from "../assets/about.png"
import Why from "../component/Why";
import FAQ from "../component/Faq";

function Home() {
  return (
    <>
    <div className="heroSection container-fluid vh-100">
      <div className="row h-100 align-items-center">
        
        {/* Left Section */}
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start h-100">
          <h1 className="display-3 fw-bold text-black w-100 mx-lg-5 px-lg-5 mt-5 pt-5">
            Healthy Teeth, Happy Smiles
          </h1>
          <p className="fw-normal text-black mt-3 mx-lg-5 px-lg-5 lh-base mt-4">
            Your oral health is the gateway to your overall well-being, 
            We provide the knowledge, care, and products you need for a brighter smile.
          </p>

          <Link to="/about" className="mx-lg-5 mt-3 px-lg-5">
            <button className="fw-bold">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 p-0 h-100">
          <div className="h-100 w-100">
            <img
              src={heroImg}
              alt="Dental Care"
              className="w-100 h-100 d-none d-lg-block d-md-none "
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

      </div>
    </div>

{/* about us section */}
    <div className="about">
    <div className="container">
    <div className="row align-items-center gy-4 ">
    <div className="col-lg-6 col-md-12">
      <img src={aboutImg} alt="" className="h-100 w-100 " />
    </div>

    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start h-100">
      <h1 className="display-6 fw-bold text-black ">About Belleville Dental</h1>
      <p className="lh-lg mt-2">We believe that everyone deserves access to reliable dental knowledge and quality oral care products. 
Our mission is to bridge the gap between patients, professionals, and the latest innovations in dentistry. 
From education to research and trusted products, Belleville Dental is here for healthier smiles.</p>
<Link to="/about">
  <button>Read More</button>
</Link>
    </div>

    

    </div>

    </div>

    </div>

    <Why/>
    <FAQ/>
    
    </>
  );
}

export default Home;
