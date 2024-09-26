import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Grid3() {
  return (
    <Container>
        <h1 className='text-4xl  text-center mt-5'>Be inspired</h1>
      <Row className='mt-5 mb-5'>
        <Col md="4" lg="4" xl="4" sm="12" className="relative mb-3">
          <video
            autoPlay
            muted
            loop
            className='w-full'
            src='https://baroque.pk/cdn/shop/videos/c/vp/0bf46de8408d43f2a95a61ce1db9cf76/0bf46de8408d43f2a95a61ce1db9cf76.HD-720p-1.6Mbps-34838812.mp4?v=0'
          />
          <button 
            className='absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[50px] w-[31%] md:w-[50%] sm:w-full bg-black border-none text-white text-center'>
            SHOP NOW
          </button>
        </Col>
        <Col md="4" lg="4" xl="4" sm="12" className="relative mb-3">
          <video
            autoPlay
            muted
            className='w-full'
            src='https://baroque.pk/cdn/shop/videos/c/vp/8fc59a5cb22a4beb84cae8305256b751/8fc59a5cb22a4beb84cae8305256b751.HD-1080p-2.5Mbps-28444638.mp4?v=0'
          />
          <button 
            className='absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[50px] w-[31%] md:w-[50%] sm:w-full bg-black border-none text-white text-center'>
            SHOP NOW
          </button>
        </Col>
        <Col md="4"  lg="4" xl="4" sm="12" className="relative mb-3">
          <video
            autoPlay
            muted
            className='w-full'
            src='https://baroque.pk/cdn/shop/videos/c/vp/c4f8512cecd141088ba3cdfe059a0c55/c4f8512cecd141088ba3cdfe059a0c55.HD-1080p-7.2Mbps-34838829.mp4?v=0'
          />
          <button 
            className='absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[50px] w-[31%] md:w-[50%] sm:w-full bg-black border-none text-white text-center'>
            SHOP NOW
          </button>
        </Col>
      </Row>
      <hr/>
    </Container>
  )
}

export default Grid3
