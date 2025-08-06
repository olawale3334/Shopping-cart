import React from 'react'
import hi from '/iphone-item4.jpg'
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <div className=' flex justify-around m-5'>
        <span className=' font-black  font-serif md:text-4xl'>ULTIMATE</span>
        <span className='font-serif md:text-4xl'>checkout(<span className='text-green-400'>0 items</span>)</span>
      </div>
      <div className='px-4'>
        <p>Review your order</p>
        <p>Your cart is empty.</p>
        <div>
            <Link to='/'>
            <button className='bg-blue-500 px-8 py-2 rounded-md hover:bg-blue-300'>View products</button>
            </Link>
         </div>
      </div>
      
      <div className=' flex-col-reverse flex md:flex-row justify-center px-4 mt-4 gap-5'>
      <div>
        

         <div className='bg-white p-5 border border-gray-400 md:w-[40rem] h-fit' >
            <h1>Delivery date: Friday, August 15 </h1>
            <div className='flex'>
            <div>
                <img className='w-20' src={hi} alt="" />
            </div>
            <div className=''>
                <p>ntermediate Size Basketball</p>
                <p className=' text-orange-500'>$20.95</p>
                <p className="font-semibold">Quantity:</p>
                <div className="flex items-center gap-2">
                <button  className="p-1 rounded bg-gray-200 hover:bg-gray-300" >
                <FiMinus className="w-4 h-4" />
                </button>
                <span className="px-3 select-none">1</span>
                <button className="p-1 rounded bg-gray-200 hover:bg-gray-300" >
                <FiPlus className="w-4 h-4" />
                </button>
                </div>
            </div>
            </div>
         </div>
      </div>
      <div className='bg-white shadow-lg md:w-[23rem] border border-gray-500  p-4'>
       <div className='flex justify-between items-center px-4'>
        <p>items</p>
        <p>$3.50</p></div> 
        <div className='flex justify-between items-center mb-3 px-4'>
           <p>Shipping & handling:</p>
           <p>$0.00</p>
        </div>  
        <div className='flex justify-between items-center mb-3 px-4'>
            <p> Total before tax:</p>
             <p>$0.00</p>
       </div>
       <div className='flex justify-between items-center mb-3 px-4'>
            <p>Estimated tax (10%):</p>
             <p>$0.00</p>
       </div>  
        <hr className='mt-4 text-gray-600 mb-3 font-bold' />  
       <div className='flex text-rose-500 font-bold  justify-between items-center mb-4 px-4'>
            <p>Order total:</p>
             <p>$3.50</p>
       </div> 
      
       <div className='flex justify-center'>
         <button className='bg-black text-white px-10 py-2 rounded'>Place Your Order</button>
        </div> 
      </div>
      </div>
    </div>
  )
}

export default Cart
