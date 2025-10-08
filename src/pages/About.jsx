// import React, { useState } from 'react'
import './about.css'
import Why from '../component/Why';

function About() {
//   const [email, setEmail] = useState("")
// const [successMessage, setSuccessMessage] = useState("");
// const [errorMessage, setErrorMessage] = useState("");

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!email.includes('@')) {
//     setErrorMessage('Please enter a valid email address.');
//     return;
//   }
//   console.log('Subscribed with:', email);
//   setSuccessMessage('Thank you for subscribing!👍');
//   setEmail("")
//   setTimeout(() => {
//     setSuccessMessage("");
//   }, 500);
// };
  return (
    <>
    {/* About us hero*/}

      <div className='hero-text vh-100 container-fluid'>
        <div className='container'>
        <h1 className='fw-bold display-6 mb-1'>About Us</h1>
        <p className=''>Your oral health is the gateway to your overall well-being,
        we provide the knowledge, care, and products you need for a brighter smile</p>
        </div>
      </div>


    {/* About Us text */}
      <div className='container py-5'>
      <div className='hero-para row align-items-center'>

        <div className="col-lg-6 col-md-12">
              <img src='/Frame 80 (1).png'/>
        </div>
        
        <div className='para col-lg-6 col-md-12'>
          <h4 className='mt-5 fw-semibold'>About Us</h4>
          <h4 className='display-6 fw-bold text-black '>Discover more about us </h4>
          <p className='lh-lg'>At Belleville Dental, our mission is to provide exceptional oral health care while building lasting relationships with our patients. We understand that visiting the dentist can be stressful for some, which is why we focus on comfort and communication as much as clinical excellence. Every treatment plan is personalized to fit your specific needs, lifestyle, and budget. We take the time to explain each procedure in detail, answer your questions honestly, and empower you to make informed decisions about your dental health.</p>

          <p className='mt-3 lh-lg'>Our promise to you is simple: we will always strive to deliver quality care, clear communication, and a comfortable experience in a safe and friendly environment. We don't just treat teeth—we care for people.</p>
        </div>
      </div>
      </div>

      {/* why choose us */}

      <Why />
     

       {/* team that worked on the project */}
        <div className='team-container py-5'>

          <h2 className='display-6 fw-bold text-black  text-center py-5'>Meet the Team</h2>

          <div className='container'>
          <div className='row g-3'>

            <div  className='team-img col-lg-4 col-md-12'>
              <img src='/rose.png' alt='team-one'/>
              <h4 className='fw-bold mt-2'>Rose Marvelous Akorede</h4>
            <h6 className='fw-semibold '>marvelousrhose@gmail.com </h6>
            <p className='text-black'>+2347068778571</p>
            </div>
          
            <div  className='team-img col-lg-4 col-md-12'>
              <img src='/bako1.png' alt='team-two'/>
            <h4 className='fw-bold mt-2'>Abdulganiyu Rukayat Bako</h4>
            <h6 className='fw-semibold'>abdulganiurukayat0808@gmail.com</h6>
            <p className='text-black'>+2348130658164</p>
            </div>

            <div  className='team-img col-lg-4 col-md-12'>
             <img src='/david.png' alt='team-three' />
             <h4 className='fw-bold mt-2'>David Mofiyinfoluwa Aluko</h4>
             <h6 className='fw-semibold'>davvidggg@gmail.com</h6>
             <p className='text-black'>+2349155165566</p>
            </div>
             
              <div  className='team-img col-lg-4 col-md-12'>
                <img src='/slick.png' alt='team-four'/>
                <h4 className='fw-bold mt-2'>Odunayo Samuel Agbona</h4>
                <h6 className='fw-semibold'>agbonaodunayosamuel@gmail.com</h6>
                <p className='text-black'>+2349058978289</p>
              </div>
        
        
            <div className='team-img col-lg-4 col-md-12'>
            <img src='/mr jj.png' alt='team-four'/>
            <h4 className='fw-bold mt-2' >James Garba John</h4>
            <h6 className='fw-semibold' >bigjamesjohn.119@gmail.com</h6>
            <p className='text-black' > +2347085034015</p>
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


