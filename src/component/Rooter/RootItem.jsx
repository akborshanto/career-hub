import React from 'react'
import Home from '../home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './../footer/Footer';
import Header from '../header/Header';

const RootItem = () => {
  return (
    <div className='container mx-auto'>
    <Header></Header>
<Outlet></Outlet>
<Footer></Footer>
    
    </div>
  )
}

export default RootItem
