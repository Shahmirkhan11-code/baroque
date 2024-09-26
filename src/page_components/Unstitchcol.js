import React from 'react'
import Gridu from '../sub_components/Gridu'

function Unstitchcol() {
  return (
    <>
      <h1 className=' text-4xl text-center mt-20 mb-20'>UNSTITCHED</h1>
      <div className='flex sticky top-14 bg-white z-50 border-solid border-t-[1px] border-b-[1px] border-zinc-700'>
        <h1 className='mx-auto pt-3 pb-3'>207 PRODUCTS</h1>
       <div className='border-solid border-l-[1px] border-zinc-700 pt-3 pb-3 w-[7%]'>
        <select className='w-[100%]'>
          <option>Sort by</option>
          <option>Featured</option>
          <option>Best selling</option>
          <option>Alphabeically A-Z</option>
          <option>Alphabeically Z-A</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
          <option>Date, old to new</option>
          <option>Date, new to old</option>
        </select>
        </div>
      </div>
          <Gridu/>

    </>
  )
}

export default Unstitchcol
