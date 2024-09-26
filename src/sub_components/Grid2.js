import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Grid2() {
  return (
    <Container>
        <h1 className='text-4xl underline text-center mt-5'>Shop the look</h1>
        <Row className='mt-4 mb-4'>
            <Col md="8" lg="8" xl="8" xxl="8" sm="12" className='' >
            <img className='w-[80%]  mx-auto'
            src='https://baroque.pk/cdn/shop/files/Shop_The_Look77.jpg?v=1725975311&width=800'
            alt=''
            />
            </Col>
            <Col md="4" lg="4" xl="4" xxl="4" sm="12"  className="flex flex-col items-center">
            <img className='mt-20 mx-auto w-[90%]'
            src='https://baroque.pk/cdn/shop/files/178_fc8eea09-c1f7-4993-ae49-139fbb3f2459.jpg?v=1726814477&width=600'
            alt=''
            />
            <h1 className='text-l text-center mt-3'>EMBROIDERED PRINTED LAWN UF-717</h1>
            <h1 className='text-xl text-center'>PKR 5,990.00</h1>
          <button className='h-[50px] w-[31%] md:w-[50%] sm:w-full bg-black border-none text-white justify-center mt-4'>
            SHOP NOW
          </button>
            </Col>
        </Row>
        <hr/>
    </Container>
  )
}

export default Grid2
