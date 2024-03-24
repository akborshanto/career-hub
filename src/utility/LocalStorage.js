



const getStoredJobApplication=()=>{

const storedJObApplication=localStorage.getItem('job-applications')//empty arraay
if(storedJObApplication){
    return JSON.parse(storedJObApplication)
}
return [];
}

const saveJobApplicaton=id=>{

    const storedJobApplications=getStoredJobApplication()
    const exists=storedJobApplications.find(jobId=>jobId == id)
if(!exists){
    storedJobApplications.push(id)
    localStorage.setItem('job-applications',JSON.stringify(storedJobApplications))
}



}
export {getStoredJobApplication,saveJobApplicaton}