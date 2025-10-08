import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Research() {
  const [research, setResearch ]= useState(null)
  // const[showItem,setShowItem]= useState([])
  useEffect(()=>{
    fetch("/Data/research.json")
    .then((res)=>  res.json())
    .then((data)=> setResearch(data.research))
    .catch((err)=> console.log(err.message))
  },[])
  return (
    <>
      <div>
         <div className="researchContainer vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
        <div className="container">
          <h2 className="fw-bold display-5">Research</h2>
          <h4>Advancing Dental Care Through Research</h4>
          <p> At Belleville Dental, we’re committed to innovation and excellence. Our research drives better treatments, smarter technologies, and healthier smiles.  </p>
        </div>
      </div>
       
        <div className="container py-5 px-5">
          <div className="row g-4">

        
        { research?.map((data)=> {
          return(
            <div key={data.id} className='col-lg-4 col-md-12'>
                 <img  src={data.image} className='object-cover w-100  rounded-4'/>
               
                <div> 
               <h4 className='fw-bold  mt-4'>{data.title}</h4>
               <p className='text-muted'>{data.summary}</p>
               
               <a href='https://www.researchgate.net/publication/319919543_Oral_Health_Equals_Total_Health_A_Brief_Review' className='text-decoration-none'> Read More</a>
               </div>
           </div>
          )
           
        })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Research