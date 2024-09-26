// import { useState } from 'react'
import React, {useState} from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
// import { MdCheckBox } from 'react-icons/md'
import { FaPlus } from "react-icons/fa6";
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart'
import { FaMinus } from "react-icons/fa";
function Gridp() {
    const [selected, setSelected] = useState('unstitched');
    const[size, setSize]=useState('def')
    const [add, setAdd]=useState(1)


    // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    
    <Container fluid>
      
      <Row className='mb-24'>
        <Col
          className="d-none d-sm-block sticky top-0 h-[60%] "
          md="2"
          lg="2"
          xl="2"
          xxl="2"
        >
          <img
            className="h-20 mt-5 mx-auto"
            src="https://baroque.pk/cdn/shop/files/06_3945eed1-0259-4076-9ea1-d717ed0fb1a3.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="h-20 mt-3 mx-auto"
            src="https://baroque.pk/cdn/shop/files/07_bef04f33-49c0-4057-bdbe-057cfc6ff121.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="mx-auto h-20 mt-3"
            src="https://baroque.pk/cdn/shop/files/05_a4d854f9-9347-4aa1-b72a-4f301a6a7688.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="h-20 mx-auto mt-3"
            src="https://baroque.pk/cdn/shop/files/04_9c4520bc-e2a8-4323-a999-6413fa707e2f.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="h-20 mt-3 mx-auto"
            src="https://baroque.pk/cdn/shop/files/01_9738900a-096d-40eb-8056-a449be7bd0b3.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="h-20 mt-3  mx-auto"
            src="https://baroque.pk/cdn/shop/files/02_a0647527-1b7a-45df-ac8f-e5deb8c9a2f2.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="h-20 mt-3 mx-auto"
            src="https://baroque.pk/cdn/shop/files/03_e63226cb-ffb6-4d05-a65f-e813d9f2d688.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="h-20 mt-3 mx-auto "
            src="https://baroque.pk/cdn/shop/files/08_e6b14e7a-4892-4cb7-a68b-96ebfe4ea11c.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="h-20 mt-3 mx-auto"
            src="https://baroque.pk/cdn/shop/files/09_06fc5e72-d1ea-4d63-be63-88f8f6c178d3.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="h-20 mt-3 mx-auto"
            src="https://baroque.pk/cdn/shop/files/10_2338c95c-166c-45f7-b425-df36842a99bb.jpg?v=1727073689&width=112"
            alt=""
          />
          <img
            className="h-20 mt-3 mx-auto"
            src="https://baroque.pk/cdn/shop/files/11_b1c0edda-031e-46f4-9e41-9cacde903352.jpg?v=1727073689&width=112"
            alt=""
          />
        </Col>
        <Col className="mt-4" md="5" lg="5" xl="5" xxl="5" sm="12">
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/06_3945eed1-0259-4076-9ea1-d717ed0fb1a3.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-2"
            src="https://baroque.pk/cdn/shop/files/07_bef04f33-49c0-4057-bdbe-057cfc6ff121.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/05_a4d854f9-9347-4aa1-b72a-4f301a6a7688.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/04_9c4520bc-e2a8-4323-a999-6413fa707e2f.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/01_9738900a-096d-40eb-8056-a449be7bd0b3.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/02_a0647527-1b7a-45df-ac8f-e5deb8c9a2f2.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/03_e63226cb-ffb6-4d05-a65f-e813d9f2d688.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/08_e6b14e7a-4892-4cb7-a68b-96ebfe4ea11c.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/09_06fc5e72-d1ea-4d63-be63-88f8f6c178d3.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/10_2338c95c-166c-45f7-b425-df36842a99bb.jpg?v=1727073689&width=1000"
            alt=""
          />
          <img
            className="mt-4"
            src="https://baroque.pk/cdn/shop/files/11_b1c0edda-031e-46f4-9e41-9cacde903352.jpg?v=1727073689&width=1000"
            alt=""
          />
        </Col>

        <Col className=" sticky top-0 h-[60%] " md="5" lg="5" xl="5" xxl="5" sm="12">
        <div className='mt-5 border-solid border-b-[1px] border-grey'>
        <h1 className='text-slate-400 text-xl mb-3'>EMBROIDERED VISCOSE UF-725</h1>
        <h1 className='text-lg font-semibold mb-3' >PKR 6,990.00</h1>
        <h1 className='text-slate-400 text-lg mb-3' >SKU: BQU-UF-D725-00</h1>
        <h1 className='text-slate-400 text-lg mb-3'>3 PIECE</h1>
        </div>
        <div>
          <h1 className='mt-3 mb-2'>Type:</h1>
          <label
              style={{
                padding: '10px 20px',
                border: `1px solid ${selected === 'unstitched' ? 'black' : 'grey'}`,
                margin: '10px',
                display: 'inline-block',
                cursor: 'pointer',
                backgroundColor: selected === 'unstitched' ? '#f0f0f0' : '#fff',
              }}
              onClick={() => setSelected('unstitched')}
            >
              <input
                id='unstitched'
                name='item'
                type='radio'
                checked={selected === 'unstitched'}
                onChange={() => setSelected('unstitched')}
                style={{ display: 'none' }}
              />
              UNSTITCHED
            </label>
            <label
              style={{
                padding: '10px 20px',
                border: `1px solid ${selected === 'stitched' ? 'black' : 'grey'}`,
                margin: '10px',
                display: 'inline-block',
                cursor: 'pointer',
                backgroundColor: selected === 'stitched' ? '#f0f0f0' : '#fff',
              }}
              onClick={() => setSelected('stitched')}
            >
              <input
                id='stitched'
                name='item'
                type='radio'
                checked={selected === 'stitched'}
                onChange={() => setSelected('stitched')}
                style={{ display: 'none' }}
              />
              STITCHED
            </label>
        </div>
        <div>
              <h1 className='mt-1 mb-2'>SIZE:</h1>
              <label
              style={{
                padding: '10px 20px',
                border: `1px solid ${size === 'defa' ? 'black' : 'grey'}`,
                margin: '10px',
                display: 'inline-block',
                cursor: 'pointer',
                backgroundColor: size === 'defa' ? '#f0f0f0' : '#fff',
              }}
              onClick={() => setSize('defa')}
            >
              <input
                id='defa'
                name='Size'
                type='radio'
                checked={size === 'defa'}
                onChange={() => setSize('defa')}
                style={{ display: 'none' }}
              />
              Default
            </label>
        </div>
        <div 
        style={{
          padding: '10px 20px',
          border: `1px solid grey `,
          margin: '10px',
          display: 'flex',
          
        }} className='w-[22%] mt-4 h-[0.5%]'>
              <h1 style={{cursor: 'pointer'}} className='mr-4' onClick={()=>setAdd(add-1)}><FaMinus className='mt-1' /></h1>
              <h1 className='mr-4'>{add}</h1>
              <h1 style={{cursor: 'pointer'}} className='' onClick={()=>setAdd(add+1)}><FaPlus className='mt-1' /></h1>
        </div>
        
             
        {/* <button className='bg-black text-white mb-5 h-[40px]  w-[90%]'>Add To Cart</button> */}
       



       

       
       
       
       
        <Cart/>
        <div>
        <div className='border-b-[1px] border-solid border-grey'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>DESCRIPTION</DropdownToggle>
                <DropdownMenu 
                style={{
                  width: '400px',  
                  maxHeight: '300px',
                  overflowY: 'auto',
                }}>
                  <DropdownItem> This Embroidered Viscose stunning outfit is featuring a digitally printed shirt and trouser crafted from silky viscose fabric. </DropdownItem>
      <DropdownItem> The ensemble is elegantly enhanced with an embroidered neckline and a beautifully embroidered front border. </DropdownItem>
      <DropdownItem> Delicate motifs adorn the front and sleeves. </DropdownItem>
      <DropdownItem> The outfit is completed with a digital printed viscose silk dupatta, featuring an embroidered border for an extra touch of elegance. </DropdownItem>
      <DropdownItem> *Accessories showcased in images are exclusively available in stitching option.* </DropdownItem>
      <DropdownItem> Fashion Tip: </DropdownItem>
      <DropdownItem> Pair this outfit with strappy sandals and minimalistic jewellery for a soft daytime look. </DropdownItem>
      <DropdownItem> Add a light shawl for cooler evenings, making it versatile for both casual outings and family gatherings. </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
        <div className='border-b-[1px] border-solid border-grey'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>PRODUCT DETAILS</DropdownToggle>
                <DropdownMenu
                style={{
                  width: '400px',  
                  maxHeight: '300px',
                  overflowY: 'auto',
                }}>
                  <DropdownItem className=''>
                    Digital printed viscose silk shirt & trouser (4.10 yard)
</DropdownItem>

<DropdownItem> Embroidered organza neckline patch & front border (2.5 yard)</DropdownItem>

<DropdownItem> Embroidered organza front motifs (2 pcs)</DropdownItem>

<DropdownItem>Embroidered organza sleeves motifs (2 pcs)</DropdownItem>

<DropdownItem>Embroidered organza dupatta border (10 yard)</DropdownItem>

<DropdownItem>Digital printed viscose silk dupatta (2.70 yard)</DropdownItem>

                </DropdownMenu>
              </Dropdown>
              </div>
        <div className='border-b-[1px] border-solid border-grey'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>DELIVERY</DropdownToggle>
                <DropdownMenu
                style={{
                  width: '400px',  
                  maxHeight: '300px',
                  overflowY: 'auto',
                }}>
                  <DropdownItem>
                  Dispatch time for unstitched : Within 1 week
                  <DropdownItem>
                  </DropdownItem>
Dispatch time for stitched : Within 3 weeks
                  </DropdownItem>

                  <DropdownItem>
*Customize stitching : 1 week extra
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
        <div className='border-b-[1px] border-solid border-grey'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>RETURN AND SAVE</DropdownToggle>
                <DropdownMenu style={{
        width: '400px',  
        maxHeight: '300px',
        overflowY: 'auto',
      }}>
                  
      <DropdownItem> This Embroidered Viscose stunning outfit is featuring a digitally printed shirt and trouser crafted from silky viscose fabric. </DropdownItem>
      <DropdownItem> The ensemble is elegantly enhanced with an embroidered neckline and a beautifully embroidered front border. </DropdownItem>
      <DropdownItem> Delicate motifs adorn the front and sleeves. </DropdownItem>
      <DropdownItem> The outfit is completed with a digital printed viscose silk dupatta, featuring an embroidered border for an extra touch of elegance. </DropdownItem>
      <DropdownItem> *Accessories showcased in images are exclusively available in stitching option.* </DropdownItem>
      <DropdownItem> Fashion Tip: </DropdownItem>
      <DropdownItem> Pair this outfit with strappy sandals and minimalistic jewellery for a soft daytime look. </DropdownItem>
      <DropdownItem> Add a light shawl for cooler evenings, making it versatile for both casual outings and family gatherings. </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
        <div className='border-b-[1px] border-solid border-grey'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>CARE INSTRUCTION</DropdownToggle>
                <DropdownMenu   style={{
        width: '400px',  
        maxHeight: '300px',
        overflowY: 'auto',
      }}>
                 <DropdownItem> This Embroidered Viscose stunning outfit is featuring a digitally printed shirt and trouser crafted from silky viscose fabric. </DropdownItem>
      <DropdownItem> The ensemble is elegantly enhanced with an embroidered neckline and a beautifully embroidered front border. </DropdownItem>
      <DropdownItem> Delicate motifs adorn the front and sleeves. </DropdownItem>
      <DropdownItem> The outfit is completed with a digital printed viscose silk dupatta, featuring an embroidered border for an extra touch of elegance. </DropdownItem>
      <DropdownItem> *Accessories showcased in images are exclusively available in stitching option.* </DropdownItem>
      <DropdownItem> Fashion Tip: </DropdownItem>
      <DropdownItem> Pair this outfit with strappy sandals and minimalistic jewellery for a soft daytime look. </DropdownItem>
      <DropdownItem> Add a light shawl for cooler evenings, making it versatile for both casual outings and family gatherings. </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
        </div>
        </Col>
      </Row>
      <hr/>
    </Container>
  )
}

export default Gridp
