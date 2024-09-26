import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiSewingMachine } from "react-icons/gi";
import { CiStopwatch } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";
function Signup() {
  return (
    <div className='	mx-auto h-56 place-content-center w-[90%] mt-5'>
       <div className=''>
        <p className=' text-center'>SUBSCRIBE FOR NEWSLETTER</p>
        <div className='d-flex justify-content-center'>
        <input type='email' className=' mt-4 h-12  border-2 border-solid  border-black w-1/4  pl-2' placeholder='Enter your email address'></input>
        <button className='text-white border-solid border-black bg-black  border-2 h-12 mt-4 ml-3 w-[20%] '>SUBSCRIBE</button>
        </div>
        </div>
        <Container className='mt-5 '>
    <Row className="mb-5">
      <Col  className='d-none d-sm-block' md="3" xl="3" xxl="3" lg="3" sm="0">
      <div className='h-100 w-100 text-center'>
     {/* <h5 className='text-xl font-bold'>Need Help?</h5>              */}
     <CiStopwatch className='h-8 w-8 mx-auto'/>
            <h5 className='text-base mt-4'>Priority Stitching</h5>
            <h5 className='text-base mt-2'>Receive your stitched orders more quickly in a timeline of 2 weeks</h5>
      </div>
      </Col>
      <Col  className='d-none d-sm-block' md="3" xl="3" xxl="3" lg="3" xs="12">
      <div className='h-100 w-100 text-center'>
      {/* <h5 className='text-xl font-bold'>Customer Service</h5>              */}
      <GiSewingMachine className='h-8 w-8 mx-auto' />
            <h5 className='text-base mt-4'>Custom Size</h5>
            <h5 className='text-base mt-2'>Get your outfit tailored to perfection as per your desired measurements</h5>
        </div>
      </Col>
      <Col className='d-none d-sm-block'  md="3" xl="3" xxl="3" lg="3" xs="12">
      <div className='h-100 w-100 text-center'>
     <CiDeliveryTruck  className='h-8 w-8 mx-auto'/>
      {/* <h5 className='text-xl font-bold'>COMPANY</h5>              */}
      <h5 className='text-base mt-4'>Free Shipping</h5>
            <h5 className='text-base mt-2'>We provide free shipping all across Pakistan on all of our orders</h5>
            {/* <h5 className='text-base '>Store Addresses</h5> */}
      </div>
      </Col>
      <Col className='d-none d-sm-block'  md="3" xl="3" xxl="3" lg="3" xs="12">
      <div className='h-100 w-100 text-center'>
      <MdOutlineSupportAgent className='h-8 w-8 mx-auto'/>
            <h5 className='text-base mt-4'>ORDER EXCHANGE</h5>             
            <h5 className='text-base mt-2'>For a hassle free exchange service, fill out the exchange form</h5>             
          
      </div>
      </Col>
    </Row>
    <hr/>
  </Container>
    </div>
    
  )
}

export default Signup