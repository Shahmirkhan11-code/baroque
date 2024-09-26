import React from 'react'
import  {useState} from 'react'
import { FaPlus } from "react-icons/fa6";
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaMinus } from "react-icons/fa";
import {useNavigate } from 'react-router-dom';

function Cart() {
    const [show, setShow] = useState(false);
    const [add, setAdd]=useState(1)
    const navigate = useNavigate();
  const handleItem=(path)=>{navigate(path)}
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='flex justify-center mt-5 border-solid border-b-[1px] border-grey '> 
    <Button variant="primary" onClick={handleShow} className="bg-black text-white mb-5 h-[40px]  w-[90%]">
    Add To Cart
  </Button>
  <Offcanvas placement="end" show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>CART</Offcanvas.Title>
    </Offcanvas.Header>
      <hr/>
    <Offcanvas.Body  >
      <div className="mb-3">
      <h1  className="text-sm text-slate-600">You are eligible for free shipping</h1>
      </div>
      <hr/>
      <div className="mt-4 mb-36 flex ">
      <img className="h-40"
      src='https://cdn.shopify.com/s/files/1/2277/5269/files/06_3945eed1-0259-4076-9ea1-d717ed0fb1a3.jpg?v=1727073689&width=210'
      alt=""/>
      <div className="ml-4">
        <h1 className="text-sm ">UNSTITCHED</h1>
        <h1 className="text-base mt-1">EMBROIDERED VISCOSE UF-725</h1>
        <h1 className="text-sm font-semibold mt-1">PKR 6,990.00</h1>
        <h1 className="text-base mt-1">UNSTITCHED / DEFAULT</h1>
        <div 
    style={{
      padding: '10px 20px',
      border: `1px solid grey `,
      margin: '10px',
      display: 'flex',
      
    }} className='w-[40%] mt-2 h-[25%]'>
          <h1 style={{cursor: 'pointer'}} className='mr-2' onClick={()=>setAdd(add-1)}><FaMinus className='mt-1' /></h1>
          <h1 className=''>{add}</h1>
          <h1 style={{cursor: 'pointer'}} className='ml-2' onClick={()=>setAdd(add+1)}><FaPlus className='mt-1' /></h1>
    </div>
      </div>
      </div>          
      <hr/>
      <div>
        <h1 className="text-base mt-4">Taxes and shipping calculated at checkout</h1>
        <button onClick={()=>handleItem('/Formdetail')}  className='bg-black text-white mt-3 mb-2 h-[40px]  w-[100%]'>Checkout PKR 6,990.00</button>
      </div>
    </Offcanvas.Body>
  </Offcanvas>
  </div>

  )
}

export default Cart
