import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredJobApplication } from '../../utility/LocalStorage'

const AppliedJob = () => {

const jobs=useLoaderData()

/* state */
const [appliedJobs,setAppliedJobs]=useState([])
const  [displayJobs,setDisplayJobs]=useState([])
const handleJobsFilter=(filter)=>{

if(filter === 'all'){
  setDisplayJobs(appliedJobs)
}else if(filter ==='remote'){

const remoteJobs=appliedJobs.filter(job =>job.remote_or_onsite=== 'Remote')
setDisplayJobs(remoteJobs)
}
else if(filter === 'oniste'){

  const onsiteJobs=appliedJobs.filter(job => job.remote_or_onsite ==='onsite')
  setDisplayJobs(onsiteJobs)
}

}



console.log


useEffect(()=>{

const storedJobId=getStoredJobApplication()
console.log(storedJobId)
if(jobs.length >0){
const jobsApplied=[]

for(const id of storedJobId){



const job=jobs.find(job=> job.id === id)

if(job){
  jobsApplied.push(job)
}



}
setAppliedJobs(jobsApplied)

}

},[])

  return (
    <div>
      Applied
      <details className="dropdown">
      <summary className="m-1 btn btn-warning">open or close</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li><a onClick={()=>handleJobsFilter('all')}>Item 1</a></li>
        <li><a onClick={()=>handleJobsFilter('Remote')}>Item 2</a></li>
        <li><a onClick={()=>handleJobsFilter('onsite')}>Item 2</a></li>
      </ul>
    </details>
<ul>

{
  appliedJobs.map(job => <li key={Math.random()}>{job.job_title}</li>)
}
</ul>


    </div>
  )
}

export default AppliedJob
