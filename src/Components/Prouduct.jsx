import React, { useState } from 'react'
import { FiSearch,FiPlus, FiShoppingCart } from 'react-icons/fi'
import { useCart } from './CartContext'
const Prouduct = ({product}) => {
  
    const {addToCart} = useCart()
    
  return (
    <div className='mt-10 px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:justify-center md:justify-center lg:justify-center z-10 '>
            {product.map((product)=>(
                <div className=' mb-5' >
                    <div className='md:w-[19rem]  relative  group transition bg-white  shadow-2xl  rounded-xl px-6 py-4  '>
            <div className=''>
                 <img className=' ' src={product.image} alt="" />
            </div>
            <div className=' flex justify-between mb-3 mt-3'>
                <p className='font-sans text-gray-500 cursor-pointer hover:text-blue-400'>{product.name}</p>
                <span className='font-semibold'>${(product.price/ 100).toFixed(2)}</span>
            </div>
            <div  className=' absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  hidden group-hover:block z-20 '>
                <button onClick={() => addToCart(product)} className='flex bg-black items-center text-[0.80rem] gap-2 hover:bg-blue-400 text-white py-2 px-6 '>
                    ADD TO CART
                    <FiShoppingCart className='w-3 h-3' />
                </button>
            </div>
        </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Prouduct