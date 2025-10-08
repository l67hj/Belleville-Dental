import React, { useState } from 'react'
import './about.css'

function About() {
  const [email, setEmail] = useState("")
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if (!email.includes('@')) {
    setErrorMessage('Please enter a valid email address.');
    return;
  }
  console.log('Subscribed with:', email);
  setSuccessMessage('Thank you for subscribing!👍');
  setEmail("")
  setTimeout(() => {
    setSuccessMessage("");
  }, 500);
};
  return (
    <>
    {/* About us hero*/}

      <div className='hero-text vh-100 container-fluid'>
        <div className='container'>
        <h1 className='fw-bold display-5 mb-1'>About Us</h1>
        <p>Your oral health is the gateway to your overall well-being,
        we provide the knowledge, care, and products you need for a brighter smile</p>
        </div>
      </div>


    {/* About Us text */}
      <div className='container'>
      <div className='hero-para row'>

        <div className="col-lg-6 col-md-12">
              <img src='/Frame 80 (1).png'/>
        </div>
        
        <div className='para col-lg-6 col-md-12'>
          <h4 className='mt-5'>About Us</h4>
          <h2>Discover more about our dental consultancy</h2>
          <p className='lh-lg'>At Belleville Dental, our mission is to provide exceptional oral health care while building lasting relationships with our patients. We understand that visiting the dentist can be stressful for some, which is why we focus on comfort and communication as much as clinical excellence. Every treatment plan is personalized to fit your specific needs, lifestyle, and budget. We take the time to explain each procedure in detail, answer your questions honestly, and empower you to make informed decisions about your dental health.</p>

          <p className='mt-3 lh-lg'>Our promise to you is simple: we will always strive to deliver quality care, clear communication, and a comfortable experience in a safe and friendly environment. We don't just treat teeth—we care for people.

      Thank you for choosing Belleville Dental. Whether you're visiting for a checkup, seeking to enhance your smile simply want to learn more about maintaining good oral health, we're here to support you every step of the way. Together, let's make your smile one you're proud to share.</p>

        </div>
      </div>
      </div>
     

       {/* team that worked on the project */}
        <div className='team-container py-5'>

          <h2 className='text-center mb-1 fw-bold'>Meet the Team</h2>

          <div className='container'>
          <div className='row'>

            <div  className='team-img col-lg-4 col-md-12'>
              <img src='/rose.png' alt='team-one'/>
              <h3 className='fw-semibold fs-4 py-1'>Rose Marvelous Akorede</h3>
            <h4 className='fw-bold fs-5 '>marvelousrhose@gmail.com</h4>
            <p>+2347068778571</p>
            </div>
          
            <div  className='team-img col-lg-4 col-md-12'>
              <img src='/bako1.png' alt='team-two'/>
            <h3 className='fw-semibold fs-4 py-1'>Abdulganiyu Rukayat Bako</h3>
            <h4 className='fw-bold fs-5 '>abdulganiurukayat0808@gmail.com</h4>
            <p>+2348130658164</p>
            </div>

            <div  className='team-img col-lg-4 col-md-12'>
             <img src='/david.png' alt='team-three' />
             <h3 className='fw-semibold fs-4 py-1'>David Mofiyinfoluwa Aluko</h3>
             <h4 className='fw-bold fs-5 '>davvidggg@gmail.com</h4>
             <p>+2349155165566</p>
            </div>
             
              <div  className='team-img col-lg-4 col-md-12'>
                <img src='/slick.png' alt='team-four'/>
                <h3 className='fw-semibold fs-4 py-1'>Odunayo Samuel Agbona</h3>
                <h4 className='fw-bold fs-5 '>agbonaodunayosamuel@gmail.com</h4>
                <p>+2349058978289</p>
              </div>
        
        
            <div className='team-img col-lg-4 col-md-12'>
            <img src='/mr jj.png' alt='team-four'/>
            <h3 className='fw-semibold fs-4 py-1 '>James Garba John</h3>
            <h4 className='fw-bold fs-5 '>bigjamesjohn.119@gmail.com</h4>
            <p>+2347085034015</p>
            </div>

            </div>
          </div>
          </div>
        
      {/* <div className='subscribe-field'>
        <h1>Stay with us</h1>
        <p>We see ourselves as part of the Belleville community. Our aim is to improve not<br/>  just individual smiles, butcommunity oral health, through outreach,<br/>  education, and service.</p>
        <form onSubmit={handleSubmit} className='form-one'>
              <div className='message'>
                {successMessage && <p> {successMessage}</p>}
             
              </div>
              <div  classNameName="message-error"> {errorMessage && <p>{errorMessage}</p>}</div>
               
              <input type="email" placeholder="Enter your emial" 
               value={email}
                onChange={(e) => {
    setEmail(e.target.value)
    setMessage("")
  }}
  
  />
              <button type="submit">Subscribe</button>
             

            </form>
      </div> */}


    {/* </div> */}
    </>
  )
}

export default About


