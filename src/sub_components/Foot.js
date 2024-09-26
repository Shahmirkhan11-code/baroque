import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fb from './fb.png';
import insta from './insta.png';
import twi from './twi.png';
import pint from './pintr.png';
import linkdin from './linkd.png';
import you from './youtu.png';

function Footer() {
  return (

<Container className='mt-[12%] mb-3'>
      <Row>

        <Col md='4' lg='4' xl='4' xxl='4' sm='12'>
          <h5 className='text-l font-bold'>About</h5>
          <h5 className='text-base mt-4'>Who We Are</h5>
          <h5 className='text-base'>Our Responsibility</h5>
          <h5 className='text-base'>Service We Provide</h5>
          <h5 className='text-base'>Careers</h5>
          <h5 className='text-base'>Legal</h5>
          <div className='d-flex mt-4'>
            <img className='h-8 w-8 mr-4' src={fb} alt='Facebook'/>
            <img className='h-8 w-8 mr-4' src={insta} alt='Instagram'/>
            <img className='h-8 w-8 mr-4' src={you} alt='YouTube'/>
            <img className='h-8 w-8 mr-4' src={twi} alt='Twitter'/>
            <img className='h-8 w-8 mr-4' src={pint} alt='Pinterest'/>
            <img className='h-8 w-8 mr-4' src={linkdin} alt='LinkedIn'/>
          </div>
          <select className='w-[25%] mt-5 border-none'>
            <option>Pakistan</option>
            <option>United Kingdom</option>
            <option>America</option>
            <option>Australia</option>
            <option>Srilanka</option>
            <option>India</option>
            <option>Poland</option>
          </select>
        </Col>
        <Col md='4' lg='4' xl='4' xxl='4' sm='12'>
          <h5 className='text-xl font-bold'>Customer Service</h5>
          <h5 className='text-base mt-4'>Contact Us</h5>
          <h5 className='text-base'>Dispatch Timeline</h5>
          <h5 className='text-base'>Email: info@baroque.pk</h5>
          <h5 className='text-base'>Call: +92 325 700 1111</h5>
          <h5 className='text-base'>WhatsApp: +92 325 7001111</h5>
          {/* <h5 className='text-base'>Track My Order</h5>
          <h5 className='text-base mb-10'>Payment Guide</h5> */}
        </Col>
        <Col md='4' lg='4' xl='4' xxl='4' sm='12'>
          <h5 className='text-xl font-bold'>Policies</h5>
          <h5 className='text-base mt-4'>Privacy Policy</h5>
          <h5 className='text-base'>Refund Policy</h5>
          <h5 className='text-base'>Shipping Policy</h5>
          <h5 className='text-base'>Terms of Service</h5>
          <h5 className='text-base'>Exchange Information</h5>
          {/* <h5 className='text-base'>Track My Order</h5>
          <h5 className='text-base mb-10'>Payment Guide</h5> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
