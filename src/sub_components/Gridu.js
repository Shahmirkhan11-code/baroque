import React from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
function Gridu() {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
  };
  return (
    <Container fluid>
        <Row className='mb-5'>
            <Col className=' text-start p-2 d-none sticky top-28 h-screen overflow-y-auto  d-sm-block' md="2" lg="2" xl="2" xxl="2" sm="0">
              <div className='border-b-[1px] border-solid border-black'>
              <Dropdown className='ml-0 mt-0 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>Availability</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
              <div className='border-b-[1px] border-solid border-black'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>PRICE</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
              <div className='border-b-[1px] border-solid border-black'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>PRODUCT TYPE</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
              <div className='border-b-[1px] border-solid border-black'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>TYPE</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
              <div className='border-b-[1px] border-solid border-black'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>FABRIC</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
              <div className='border-b-[1px] border-solid border-black'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>SIZE</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
              <div className='border-b-[1px] border-solid border-black'>
              <Dropdown className='ml-0 mt-3 mb-3 '>
                <DropdownToggle className='bg-inherit tracking-widest hover:bg-inherit text-black border-none'>PIECES</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </div>
            </Col>
            <Col md="5" lg="5" xl="5" xxl="5" sm="10">
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/06_3945eed1-0259-4076-9ea1-d717ed0fb1a3.jpg?v=1727073689&width=1000"
                alt="" 
                className="w-100"
              />
              <div className='text-center' onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/86_058777f4-4b39-46a1-9b3d-dd45ae0c57fd.jpg?v=1727076185&width=600"
                alt=""
                className="w-100"
              />
              <div className='text-center' onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/27_f8fb430d-c397-4f92-9f0c-c5e376d05a31.jpg?v=1727074425&width=600"
                alt=""
                className="w-100"
              />
              <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/46_317c74ca-e2a0-4536-9d8e-18ce06919760.jpg?v=1727075008&width=600"
                alt=""
                className="w-100"
              />
              <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/63_e11f5232-9ea9-4c8c-b98f-82c973f9c118.jpg?v=1727075243&width=600"
                alt=""
                className="w-100"
              />
              <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/77_5111a9d5-2d11-4993-80d6-513fb7b34f05.jpg?v=1727075687&width=600"
                alt=""
                className="w-100"
              />
              <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/126_0d9a3c70-1ded-4eaf-ae13-2eb1cc983a1d.jpg?v=1726813941&width=600"
                alt=""
                className="w-100"
              />
              <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
            </Col>
            <Col md="5" lg="5" xl="5" xxl="5" sm="10">
                <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/112_720dbe0f-5cac-490c-ba60-a3ede34c368c.jpg?v=1726814065&width=600"
                alt=""
                className="w-100"
              />
               <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/93_18ef0c31-5bb9-4f6c-8285-883cd347cb34.jpg?v=1727160771&width=600"
                alt=""
                className="w-100"
              />
               <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/products/22_45302670-798a-429d-aff1-7fdcbab3eccc.jpg?v=1666852302&width=600"
                alt=""
                className="w-100"
              />
               <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/51_2060cd7e-f858-4b0f-9f6f-8c0f3cc18b82.jpg?v=1725532777&width=600"
                alt=""
                className="w-100"
              />
               <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/04_c75d5adf-c51d-42b9-b221-da358476a835.jpg?v=1699794694&width=600"
                alt=""
                className="w-100"
              />
               <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/37_66210034-54d2-4dcd-a397-668dde513090.jpg?v=1724058116&width=600"
                alt=""
                className="w-100"
              />
               <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
              <img onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }}
                src="https://baroque.pk/cdn/shop/files/119_d8be38fa-08cf-4e37-b84b-0de3b7f79d3f.jpg?v=1726304166&width=600"
                alt=""
                className="w-100"
              />
               <div onClick={() => handleItemClick('/Productdetail')} style={{ cursor: 'pointer' }} className='text-center'>
              <h1 className='text-base '>EMBROIDERED VISCOSE UF-725</h1>
              <h1 className='text-lg font-bold '>PKR 6,990.00</h1>
              <h1 className='text-sm '>Unstitched | Stitched</h1>
              </div>
            </Col>
        </Row>
        <hr/>
    </Container>
  )
}

export default Gridu;
