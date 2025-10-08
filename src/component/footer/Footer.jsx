import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from 'react-icons/fa';
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <>
      <footer className="text-white py-5 " style={{ backgroundColor: '#1381ec' }}>
        <div className="container mx-auto ">
          <div className="row text-start text-md-start">
            
            
            <div className="col-lg-4 col-md-4 col-12 mb-4 py-2 ">
              <img src="/Group 5844.png" alt="Belleville Dental logo" className="img-fluid mb-3" style={{ width: '150px' }} />
              <p>We Your oral health is the gateway to your<br/> overall well-being, we provide the knowledge,<br/> care, and products you need for a brighter<br/> smile sure you leave smiling</p>
              
              {/* <p>
                You can contact us at<br /> info@itssng.com or follow our socials
              </p> */}
              <div className="d-flex justify-content-start justify-content-md-start gap-2 fs-1 mt-3">
               
            <FaFacebook />
            <FaInstagramSquare />
              <FaSquareTwitter />
              <FaLinkedin />

              </div>
            </div>

          
            <div className="col-lg-4 col-md-4 col-12 mb-4 py-2 ">
              <h3 className="text-light fw-bold">Navigation</h3>
              <Link to="/" className="d-block text-white text-decoration-none py-2">Home</Link>
              <Link to="/about" className="d-block text-white text-decoration-none py-2">About Us</Link>
              <Link to="/products" className="d-block text-white text-decoration-none py-2">Products</Link>
              <Link to="/contact" className="d-block text-white text-decoration-none py-2">Contact Us</Link>
            </div>

            
            <div className="col-lg-4 col-md-4 col-12 mb-4  ">
              <h3 className="text-light fw-bold">Education</h3>
              <p className="py-2 mb-1">Related courses</p>
              <p className="py-2 mb-1">Faculty courses</p>
              <p className="py-2 mb-1">Research</p>
              <p className="py-2 mb-1">Case studies</p>
            </div>
          </div>
        </div>
      </footer>

      
      <div className=" text-light py-2 " style={{ backgroundColor: '#000921' }}>
          <p className="mb-0 fs-6 text-center">
            Copyright <FaRegCopyright /> 2025 Belleville Dental  Design by CPISM3
          </p>
      </div>
    </>
  );
}

export default Footer;

// import React from 'react';
// import { FaRegCopyright } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import './footer.css';

// function Footer() {
//   return (
//     <>
//       <footer className="d-flex align-item-center justifie-content-space text-white py-5" style={{ backgroundColor: '#1381ec' }}>
//         <div className="container px-2 px-md-5">
//           <div className="row text-start text-md-start">
            
            
//             <div className="col-lg-4 col-md-6 col-12 mb-4 py-2 px-5">
//               <img src="/Group 5844.png" alt="Belleville Dental logo" className="img-fluid mb-3" style={{ width: '200px' }} />
//               <p>We make sure you leave smiling</p>
//               <p>
//                 You can contact us at<br /> info@itssng.com or follow our socials
//               </p>
//               <div className="d-flex justify-content-start justify-content-md-start gap-1 fs-1 mt-3">
//                 <img src="/Facebook.svg" style={{ width: "50px" }} />
//             <img src="/Instagram.svg" style={{ width: "50px" }}/>
//           <img src="/X.svg" style={{ width: "50px" }}/>
//             <img src="/LinkedIn.svg" style={{ width: "50px" }}/>
                
//               </div>
//             </div>

          
//             <div className="col-lg-4 col-md-6 col-12 mb-4 py-2 px-5">
//               <h3 className="text-light fw-bold">Navigation</h3>
//               <Link to="/" className="d-block text-white text-decoration-none py-2">Home</Link>
//               <Link to="/about" className="d-block text-white text-decoration-none py-2">About Us</Link>
//               <Link to="/products" className="d-block text-white text-decoration-none py-2">Products</Link>
//               <Link to="/contact" className="d-block text-white text-decoration-none py-2">Contact Us</Link>
//             </div>

            
//             <div className="col-lg-4 col-md-6 col-12 mb-4  px-5">
//               <h3 className="text-light fw-bold ">Education</h3>
//               <p className="py-2 mb-1">Related courses</p>
//               <p className="py-2 mb-1">Faculty courses</p>
//               <p className="py-2 mb-1">Research</p>
//               <p className="py-2 mb-1">Case studies</p>
//             </div>
//           </div>
//         </div>
//       </footer>

      
//       <div className=" text-light py-2 " style={{ backgroundColor: '#000921' }}>
//         <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
//           <p className="mb-0">
//             Copyright <FaRegCopyright /> 2025 Belleville Dental  Design by CPISM3
//           </p>
//           <p className="mb-0">
//             Terms of Use <span className="mx-2 text-white-50">|</span> Privacy Policy
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;