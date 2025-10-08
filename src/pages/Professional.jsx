import React, { useEffect, useState } from "react";

function Professional() {
  const [courses, setCourses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetch("/Data/education.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.professionalEducation);
        setFiltered(data.professionalEducation);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // Filter by category
  const handleFilter = (category) => {
    setActiveTab(category);
    if (category === "all") {
      setFiltered(courses);
    } else {
      setFiltered(courses.filter((item) => item.category === category));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="educationHero vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
        <div className="container">
          <h1 className="fw-bold display-5">Professional Education</h1>
          <p>
            Explore courses, guides, and resources designed for dental students,
            practitioners, and faculty members.
          </p>
        </div>
      </div>


      {/* Filter  */}
<div className="container text-center mb-4">
  <div className="row justify-content-center flex-wrap">
    {["all", "courses", "helpDocuments", "faculty", "students", "caseStudies"].map((tab) => (
      <div className="col-auto mb-3 d-flex justify-content-center" key={tab}>
        <button
          className={`filter-bt ${activeTab === tab ? "active" : ""}`}
          onClick={() => handleFilter(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      </div>
    ))}
  </div>
</div>


      {/* Courses Section */}
      <div className="container my-5">
        <h2 className="fw-bold mb-5 text-center text-black">
          Available Professional Resources
        </h2>
        <div className="row g-5">
          {filtered.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="card h-100 shadow-sm border-0 py-3 px-2">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-black">
                    {item.title}
                  </h5>
                  <p className="card-text flex-grow-1">{item.description}</p>
                  <a
                    href="#"
                    className="mt-2 align-self-start fw-semibold fs-6 text-decoration-none"
                  >
                    View Resource
                  </a>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center">No resources available for this category.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Professional;
