import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./contact.css";

function Contact() {
  // const [userName, setUserName] = useState("");

      const [formData, setFormData] = useState({
  firstname: "",
  lastname: "",
  email: "",
  phoneNo: "",
  message: "",
});
    const [status, setStatus] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  useEffect(() => {
  const savedUser = localStorage.getItem("contactUser");
  if (savedUser) {
    const userData = JSON.parse(savedUser);
    setFormData(userData); 
  }
}, []);

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name too long")
      .required("First name is required"),
       lastname: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name too long")
      .required("last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNo: Yup.string()
      .matches(/^[0-9]+$/, "Phone must be digits only")
      .min(7, "Phone number too short")
      .required("Phone number is required"),
    message: Yup.string()
      .min(10, "Message should be at least 10 characters")
      .required("Message is required"),
  });

    const handleSubmit = (values, actions) => {
    localStorage.setItem("contactUser", JSON.stringify(values));
     setStatus("✅Thank you for contacting Belleville Dental!");

    actions.resetForm();

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <>
    <div className=" heading">

      {/* contact hero section */}
      <div className=" container">
        <h1 className="fw-bold display-5">Contact Us</h1>
        <p>
          At Belleville Dental, your comfort and confidence are our top
          priorities. Whether you’re visiting for a routine check-up, cosmetic
          enhancement, or a complete smile transformation, we’re here to make
          every step of your dental journey easy and reassuring.
        </p>
      </div>
      </div>

      <div className="container py-5">
        <div className="row">

        <div className="contact-info col-lg-6 col-md-12">
          <h2 className="fw-bold display-5">
            Contact Us Today for Personalized Support and Assistance
          </h2>
          <p className="text-muted">
            Our team is happy to answer your questions, discuss treatment
            options, or help you schedule an appointment that fits your busy
            life.
          </p>

          <h3 className="fw-bold ">Visit Us</h3>
          <p>123 Agodi Street, Ibadan, Nigeria</p>

          <h3 className="fw-bold">Call Us</h3>
          <p>+234 800 123 4567</p>

          <h3 className="fw-bold">Email</h3>
          <p>info@itssng.com</p>
        </div>

      
        <div className="form-container col-lg-6 col-md-12">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              phoneNo: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="contact-form shadow-sm bg-white px-3 py-5">
                <div className="label-container">
                   <div className="label">
                <label>First Name</label>
               <Field name="firstname" type="text" placeholder="Enter your First Name" className="field"/>
                <ErrorMessage name="firstname" component="p" className="error"/>
               </div>
                 <div className="label">
               <label>Last Name</label>
               <Field name="lastname" type="text" placeholder="Enter your last Name" className="field"/>
               <ErrorMessage name="lastname" component="p"  className="error"/>
               </div>
               </div>
                
                    <div className="label-container">
                      <div className="label">
                <label>Email</label>
                <Field name="email" type="email" placeholder="Email Address" className="field" />
                <ErrorMessage name="email" component="p" className="error" />
                </div>
                
                <div className="label">
                <label>Phone Number</label>
                 
                <Field name="phoneNo" type="text" placeholder="Phone Number" className="field"/>
                <ErrorMessage name="phoneNo" component="p" className="error" />
                </div>
               </div>
                    <div className="label">
                <label>Message</label>
                <Field  as="textarea" name="message"  placeholder="Your Message" className="text-context"/>
                 <ErrorMessage name="message" component="p" className="error" />
                 </div>
                {status && <p className="status-message">{status}</p>}

                  
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
        </div>
      </div>



        {/* Google map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Belleville Dental Location"
      ></iframe>
      
    </>
  );
}

export default Contact;
