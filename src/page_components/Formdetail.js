import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaCcMastercard } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
function Formdetail() {
    return (
        <>
            <Container>
                <Row className='mt-5'>
                    <Col md="6" lg='6' xl='6' xxl='6' sm='12'>
                        {/* Col md="8" lg='8' xl='8' xxl='8' sm='12'> */}
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-bold'>Contact</h1>
                            <h1 className='text-sm'>Login</h1>
                        </div>
                        <form>
                            <input className='border-solid rounded-s rounded-e border-[1px] border-gray-500 h-12 p-3 w-[100%]' type='email' placeholder='Email' />
                            <div className="flex mt-2 items-center space-x-2">
                                <input type="checkbox" className=" h-4 w-4  border-gray-500 rounded" />
                                <label className="text-sm">Email me with news and offers</label>
                            </div>
                            <div className='mt-3 bg-gray-300'>
                            <div className='flex p-2'>
                            <IoAlertCircleOutline className='mt-1' />
                            <h1 className='ml-2 text-xl font-bold'>International Website</h1>
                            </div>
                            <h1 className='p-2 ml-5 mt-1'>To deliver products outside of Pakistan visit our International Website:</h1>
                            <h1 className='pl-2 pb-2 ml-5'>https://baroque.com.pk</h1>
                            </div>
                            <h1  className='text-2xl mt-4 font-bold'>Delivery</h1>
                            <select className='h-12 mt-2 w-[100%] border-solid rounded-s rounded-e border-[1px] border-gray-500' placeholder='region'>
                                <option>Country/Region</option>
                                <option>Pakistan</option>
                                <option>India</option>
                                <option>Sirilanka</option>
                                <option>USA</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                            </select>
                            <div className='flex'>
                                <input type='text' placeholder='First name ' className='border-solid rounded-s rounded-e mt-3 border-[1px] border-gray-500 h-12 p-3 w-[49%]'/>
                                <input type='text' placeholder='Last name ' className='border-solid rounded-s rounded-e mt-3 border-[1px] ml-3 border-gray-500 h-12 p-3 w-[49%]'/>
                            </div>
                            <input className='border-solid rounded-s rounded-e border-[1px] border-gray-500 h-12 mt-3 p-3 w-[100%]' type='text' placeholder='Address' />
                            <input className='border-solid rounded-s rounded-e border-[1px] border-gray-500 h-12 mt-3 p-3 w-[100%]' type='text' placeholder='Address,suite,etc' />
                            <div className='flex'>
                                <input type='text' placeholder='City' className='border-solid rounded-s rounded-e mt-3 border-[1px] border-gray-500 h-12 p-3 w-[49%]'/>
                                <input type='number' placeholder='Postal code' className='border-solid rounded-s rounded-e mt-3 border-[1px] ml-3 border-gray-500 h-12 p-3 w-[49%]'/>
                            </div>
                            <input className='border-solid rounded-s rounded-e border-[1px] border-gray-500 h-12 mt-3 p-3 w-[100%]' type='phone' placeholder='Phone' />
                            <h1 className='text-2xl mt-4 font-bold'>Select your city</h1>
                            <select className='border-solid rounded-s rounded-e border-[1px] border-gray-500 h-12 mt-2  w-[100%]'>
                                <option>City</option>
                                <option>Lahore</option>
                                <option>Islambad</option>
                                <option>Karachi</option>
                                <option>Chishtian</option>
                                <option>Bahawanagar</option>
                                <option>Haroonabad</option>
                                <option>Sahiwal</option>
                                <option>Arafwala</option>
                            </select>
                            <h1 className='text-2xl mt-4 font-bold'>Shipping method</h1>
                            <select className='border-solid rounded-s rounded-e border-[1px] border-gray-500 h-12 mt-2  w-[100%]'>
                                <option>Shipping</option>
                                <option>Local</option>
                                <option>International</option>    
                            </select>
                            <h1 className='text-2xl mt-4 font-bold mb-1'>Payment</h1>
                            <h1 className='text-sm text-gray-500 mt-1  mb-2'>All transactions are secure and encrypted.</h1>
                            <div className="flex flex-col space-y-2">
  <div className="flex items-center space-x-2   border-solid rounded-s rounded-e border-[1px] p-3 border-gray-500 h-12  w-[100%] ">
    <input type="radio" name="option" className="h-4 w-4 text-black border-gray-300 focus:ring-black checked:bg-black checked:border-black" />
    <label className="text-sm">Cash on delivery (COD)</label>
  </div>
  <div className="border-solid rounded-s mt-0 rounded-e border-[1px] border-gray-500 h-12 p-3 w-[100%] flex items-center space-x-2">
    <input type="radio" name="option" className="h-4 w-4 text-black border-gray-300 focus:ring-black checked:bg-black checked:border-black" />
    <label className="text-sm flex">Safepay Checkout - pay with debit & credit cards <FaCcMastercard className='ml-28'/> <FaCcVisa className='ml-3' /><BsBank2 className='ml-3' /></label>
  </div>
</div>




<h1 className='text-2xl mt-4 font-bold mb-1'>Billing address</h1>
                            <div className="flex flex-col space-y-2">
  <div className="flex items-center space-x-2   border-solid rounded-s rounded-e border-[1px] p-3 border-gray-500 h-12  w-[100%] ">
    <input type="radio" name="billing" className="h-4 w-4 text-black border-gray-300 focus:ring-black checked:bg-black checked:border-black" />
    <label className="text-sm">Same as shipping address</label>
  </div>
  <div className="border-solid rounded-s mt-0 rounded-e border-[1px] border-gray-500 h-12 p-3 w-[100%] flex items-center space-x-2">
    <input type="radio" name="billing" className="h-4 w-4 text-black border-gray-300 focus:ring-black checked:bg-black checked:border-black" />
    <label className="text-sm flex">Use a different billing address</label>
  </div>
</div>
                    <button type='submit' className='bg-black mt-5 rounded-s rounded-e text-white text-xl font-bold mb-5 h-[50px] w-[100%]'>Complete Order</button>
                        </form>
                    </Col>
                    <Col className="bg-gray-300 h-4/5 sticky top-12 h-[60%]" md="6" lg='6' xl='6' xxl='6' sm='12'>
                    <div className='flex m-4'>
                        <img className='w-[10%]'
                        src='https://cdn.shopify.com/s/files/1/2277/5269/files/06_3945eed1-0259-4076-9ea1-d717ed0fb1a3_128x128.jpg?v=1727073689'
                        alt=''/>
                        <div className='mt-[3%] '>
                        <h1>EMBROIDERED VISCOSE UF-725</h1>
                        <div className='flex'>
                        <h1>UNSTITCHED / DEFAULT</h1>
                        <h1 className='ml-32'>Rs 55,920.00</h1>
                        </div>
                        </div>
                    </div>
                    <div>
                        <input className='border-solid border-[1px] ml-4 bg-inherit rounded-md border-black h-[40px] p-2 w-[60%]' placeholder='Discount code or gift card'/>
                        <button className='border-solid border-[1px] h-10 rounded-md ml-4 w-16 border-black'>Apply</button>
                        </div>
                        <div className='mt-5 font-semibold ml-6 flex'>
                            <h1>Subtotal</h1>
                            <h1 className='ml-[55%]'>Rs 55,920.00</h1>
                        </div>
                        <div className='mt-2 font-semibold ml-6 flex'>
                            <h1>Shipping</h1>
                            <h1 className='ml-[55%]'>FREE</h1>
                        </div>
                        <div className='mt-2 mb-60 ml-6 flex'>
                            <h1 className='text-2xl font-bold'>Total</h1>
                            <h1 className='ml-[57%] text-2xl font-bold'>Rs 55,920.00</h1>
                        </div>
                    </Col>
                </Row>
                <hr/>
            </Container>
        </>
    )
}

export default Formdetail
