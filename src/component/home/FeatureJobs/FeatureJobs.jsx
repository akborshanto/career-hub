import React, { useEffect, useState } from 'react'
import Job from './Job'

const FeatureJobs = () => {
    const [jobs,setjobs]=useState([])

   /* this is the not good way to load data  */ 
   const [showJob,setShowJob]=useState(4)
    useEffect(()=>{

fetch('jobs.json')
.then(res=>res.json())
.then(job=>setjobs(job))

    },[])
  return (
<div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
      

{
    jobs.slice(0,showJob).map(job=> <Job job={job} key={Math.random()}></Job>)
}

    </div>

<div className={ showJob === jobs.length? 'hidden':''}>
<button onClick={()=>setShowJob(jobs.length)} className='btn  btn-info'>Show All Job</button>

</div>
</div>
  )
}

export default FeatureJobs
