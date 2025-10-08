import React from "react";

function FAQ() {
  return (
    <div className="faq-section pb-5 ">
      <div className="container w-100  px-lg-0 px-4">
        <h2 className="display-6 fw-bold text-center mb-2 text-black">Frequently Asked Questions</h2>
        <p className="text-center text-muted mb-5">
          Have questions? We’ve got answers! Here are some of the most common ones.
        </p>

        <div className="accordion" id="faqAccordion">
          {/* FAQ Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What services do your consultants provide?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Our consultants provide expert guidance in dental health,
                preventive care, and personalized treatment options tailored to
                your needs.
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How do I book an appointment?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can easily book an appointment through our online booking
                system, or by giving us a call at our office.
              </div>
            </div>
          </div>
          

          {/* FAQ Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Do you accept insurance?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, we work with most major insurance providers. Please check
                with our team for details about your specific coverage.
              </div>
            </div>
          </div>

          
           {/* FAQ Item 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How do I book an appointment?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can easily book an appointment through our online booking
                system, or by giving us a call at our office.
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default FAQ;
