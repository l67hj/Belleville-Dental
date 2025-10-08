import React from "react";

import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { BsUniversalAccessCircle } from "react-icons/bs";




function Why() {
  return (
    <div className="why py-5">
      <div className="container whyContainer">
        <h1 className="display-6 fw-bold text-black mb-5 text-center">
          Why our Consultants are the best
        </h1>

        <div className="row justify-content-center text-center g-4 py-5">
          
          {/*  first card */}
          <div className="col-lg-4 col-md-6">
            <div className="whycard h-100 border-0 p-4 rounded-4">
              <div className="mb-3">
               <FaHandsHoldingChild  className="h-50 w-50"/>
              </div>
              <h5 className="fw-bold">Holistic approach</h5>
              <p className="">
                Our consultants bring years of experience and industry knowledge
                to provide you with the best solutions.
              </p>
            </div>
          </div>

          {/* second card */}
          <div className="col-lg-4 col-md-6 ">
            <div className="whycard h-100 border-0  p-4 active rounded-4">
              <div className="mb-3 ">
              <FaUserGear  className="h-50 w-50" />
              </div>
              <h5 className="fw-bold">Expertise Team</h5>
              <p className="">
                We focus on understanding your unique needs and deliver tailored
                guidance every step of the way.
              </p>
            </div>
          </div>

          {/* third card*/}
          <div className="col-lg-4 col-md-6">
            <div className="whycard h-100 border-0  p-4 rounded-4">
              <div className="mb-3">
                <BsUniversalAccessCircle className="h-50 w-50" />
              </div>
              <h5 className="fw-bold ">Accessibility</h5>
              <p className="">
                We pride ourselves on delivering outstanding service with a
                smile, ensuring long-term partnerships.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Why;
