import React from 'react'
// import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServicesDetail from '../components/ServiceDetail';
import { useLocation } from 'react-router-dom';
import { useTitle } from 'react-use';


function Otherpages() {
  
  const location = useLocation();
  const locString = location.split("/")[-1];
  useTitle(`Jo2Jos | ${locString}`);

  return (
    <>
        <Navbar />
        <ServicesDetail /> 
        <Footer />
    </>
  )
}

export default Otherpages