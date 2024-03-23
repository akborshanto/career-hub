import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
/* tostyfy */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../../../utility/LocalStorage';

const JobTItle = () => {
const jobs=useLoaderData()
// console.log(loader)
const {id}=useParams()
const idInt=parseInt(id)

const job=jobs.find(job => job.id === idInt)

/* tostyfy */
const handleApply=()=>{

saveJobApplication(idInt)

  toast('Hurray  !! you have successfully applied the job.')

}
  return (
    <div>
      JOB   {id}
<h1 className='font-bold text-center'>JOB DETAILS</h1>   
<div className="details-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
<div className="details-left lg:p-4 border-2">



<p>

<span className='font-semibold'>Job Description:</span> {job.job_description
}
</p>
<p>

<span className='font-semibold'>Job Responsibility:{job.job_responsibility}</span>
</p>

</div>
<div className="details-right  lg:p-4 border-2">

<h3>Job Detalis</h3>
<button className='btn btn-warning' onClick={handleApply}>Apply Now</button>
<ToastContainer />
</div>

</div>







      
<Link to='/'>      <button className='btn btn-warning'>GO BACK</button>
</Link>
      </div>
  )
}

export default JobTItle
