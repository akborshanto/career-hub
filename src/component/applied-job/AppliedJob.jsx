import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredJobApplication } from '../../utility/LocalStorage'

const AppliedJob = () => {
const jobs=useLoaderData()
const [applidJobs,setAppliedJobs]=useState([])
useEffect(()=>{

  const storedJobIds=getStoredJobApplication()

if(jobs.length >0){

const jobSApplied=[]
for(const id of storedJobIds){

const job=jobs.find(job => job.id === id)

if(job){
  jobSApplied.push(job)
}

}

setAppliedJobs(jobSApplied)
}

},[])

console.log(applidJobs)



  return (
    <div>
      Applied{applidJobs.length}
      <details className="dropdown">
      <summary className="m-1 btn">open or close</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </details>

    <ul>
    
  {
    applidJobs.map(job=> <li key={job.id}><span>{job.job_title}{job.company_name}</span></li>)
  }
    </ul>

    </div>
  )
}

export default AppliedJob
