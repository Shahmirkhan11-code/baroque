import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Grid1() {
  return (
    <Container>
      <Row className='mb-5'>
        <Col md="4" lg="4" xl="4" xxl="4" sm="12" className="flex flex-col items-center">
          <img
            src='https://baroque.pk/cdn/shop/files/02_Banner182.jpg?v=1726828421&width=600'
            alt=''
            className="w-full"
          />
          <h1 className='text-3xl text-center'>SHAWLS</h1>
          <button className='h-[50px] w-[31%] md:w-[50%] sm:w-full bg-black border-none text-white justify-center mt-4'>
            SHOP NOW
          </button>
        </Col>

        
        <Col md="4" lg="4" xl="4" xxl="4" sm="12" className="flex flex-col items-center">
          <img
            src='https://baroque.pk/cdn/shop/files/02_Banner192.jpg?v=1726834863&width=600'
            alt=''
            className="w-full"
          />
          <h1 className='text-3xl text-center'>READY TO WEAR</h1>
          <button className='h-[50px] w-[31%] md:w-[50%] sm:w-full bg-black border-none text-white justify-center mt-4'>
            SHOP NOW
          </button>
        </Col>

        <Col md="4" lg="4" xl="4" xxl="4" sm="12" className="flex flex-col items-center">
          <img
            src='https://baroque.pk/cdn/shop/files/02_Banner191.jpg?v=1726830824&width=600'
            alt=''
            className="w-full"
          />
          <h1 className='text-3xl text-center'>CHANTELLE</h1>
          <button className='h-[50px] w-[31%] md:w-[50%] sm:w-full bg-black border-none text-white justify-center mt-4'>
            SHOP NOW
          </button>
        </Col>
      </Row>
      <hr />
    </Container>
  )
}

export default Grid1
