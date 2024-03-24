import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Home from './component/home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootItem from './component/Rooter/RootItem';
import Error from './component/Error/Error';
import AppliedJob from './component/applied-job/AppliedJob';
import JobTItle from './component/home/FeatureJobs/jobtitle/JobTItle';


const router = createBrowserRouter([
  {
    path: "/",
    element:<RootItem></RootItem>,
errorElement:<Error></Error>
    ,children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        loader:()=>fetch('../public/jobs.json'),//do not load unit not all thge data.
        element:<AppliedJob></AppliedJob>
      },
   {
    path:'/job/:id',
    element:<JobTItle></JobTItle>,
    loader:()=>fetch('../public/jobs.json')
   }
      
    ]

  },



]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
