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
        <div className="container">
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