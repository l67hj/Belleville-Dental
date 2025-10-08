import React, { useEffect, useState } from "react";

function PatientEducation() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/Data/education.json")
      .then((res) => res.json())
      .then((data) => setTips(data.patientEducation))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      {/* Patien education Hero Section */}
      <div className="educationHero vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
        <div className="container">
          <h1 className="fw-bold display-5">Patient Education</h1>
          <p className="">
            Whole body health starts with your mouth. Explore simple tips and
            guides to keep your smile healthy and bright!
          </p>
        </div>
      </div>

     

      {/*Health tips section */}
      <div className="container my-5 px-lg-0 px-4">
        <h2 className="fw-bold mb-4 text-center text-black">Dental Health Tips</h2>
        <div className="row justify-content-start text-start ">
          <div className="col-lg-12 col-md-10">
            {tips.map((tip) => (
              <div className="mb-3 border-bottom pb-4 text-start" key={tip.id}>
                <h4 className="fw-bold text-black">{tip.question}</h4>
                <p className="text-muted lh-lg">{tip.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* YouTube Video Section */}
      <div className="container my-5">
        <h2 className="fw-bold mb-4 text-center">Educational Video</h2>
        <div className="ratio ratio-16x9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fHXOPun1cOs?si=4ZrMKM6xkKU64YFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}

export default PatientEducation;
