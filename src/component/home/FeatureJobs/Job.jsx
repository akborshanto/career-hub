import React from 'react'
import { Link } from 'react-router-dom';


const Job = ({job}) => {
    const {id,logo,job_title,salary,location,company_name,remote_or_onsite,job_type}=job;
  return (
    <div className="card w-96 bg-orange-200 shadow-xl text-white font-semibold">
    <figure><img src={logo} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{job_title}</h2>
      <p>{company_name}</p>
      <div className="card-actions justify-start">
        <button className="btn btn-primary">{remote_or_onsite}</button>
        <button className="btn btn-primary">{job_type}</button>
      </div>

      <div className="flex justify-between">
      <h2>{location}</h2>
<h2>{salary}</h2>
      </div>

    </div>
    <Link to={`/job/${id}`}>
    
    <button className='btn btn-warning'>Show Detail</button>

    </Link>

  </div>
  )
}

export default Job
