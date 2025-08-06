import React from 'react'
import hi from '/iphone-item4.jpg'
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = () => {
    const{ addToCart, reduceFromCart, cart,totalQuantity} =useCart()
      const totalAmount = cart.reduce((acc, item) => {
        return acc + item.quantity * parseFloat(item.price);
        }, 0).toFixed(2);


  return (
    <div>
      <div className=' flex justify-around m-5'>
       <Link to='/'> <span className=' font-black  font-serif md:text-4xl'>ULTIMATE</span></Link>
       {totalQuantity >= 0 && (
        <span className='font-serif md:text-4xl'>checkout(<span className='text-green-400'>{totalQuantity} items</span>)</span>

       )}
      </div>
      {cart.length === 0  && (
        <div className='px-4'>
        <p>Review your order</p>
        <p>Your cart is empty.</p>
        <div>
            <Link to='/'>
            <button className='bg-blue-500 px-8 py-2 rounded-md hover:bg-blue-300'>View products</button>
            </Link>
         </div>
      </div>
      )}
      
      
      <div className=' flex-col-reverse flex md:flex-row justify-center px-4 mt-4 gap-5'>
      <div>
        {cart.map((item) => (
            <div className='bg-white p-5 border border-gray-400 md:w-[40rem] h-fit' >
            <h1>Delivery</h1>
            <div className='flex gap-6'>
            <div>
                <img className='w-20' src={item.image} alt="" />
            </div>
            <div className=''>
                <p>{item.name}</p>
                <p className=' text-orange-500'>${(item.price / 100).toFixed(2)}</p>
                <p className="font-semibold">Quantity:</p>
                <div className="flex items-center mt-3 gap-2">
                <button onClick={() => reduceFromCart(item)}  className="p-1 rounded bg-gray-200 hover:bg-gray-300" >
                <FiMinus className="w-4 h-4" />
                </button>
                {totalQuantity > 0 && (
                    <span className="px-3 select-none">{item.quantity}</span>
                )}
                
                <button onClick={() => addToCart(item)} className="p-1 rounded bg-gray-200 hover:bg-gray-300" >
                <FiPlus className="w-4 h-4" />
                </button>
                </div>
            </div>
            </div>
         </div>
        ))}

      </div>
      
      
        <div className='bg-white shadow-lg md:w-[23rem] border h-fit border-gray-500  p-4'>
       <div className='flex justify-between items-center px-4'>
        {totalQuantity > 0 && (
            <p>items({totalQuantity}) </p>
        )}
        
        <p>${(totalAmount / 100).toFixed(2)}</p>
        </div> 
        <div className='flex justify-between items-center mb-3 px-4'>
           <p>Shipping & handling:</p>
           <p>$0.00</p>
        </div>  
        <div className='flex justify-between items-center mb-3 px-4'>
            <p> Total before tax:</p>
             <p>${(totalAmount / 100).toFixed(2)}</p>
       </div>
       <div className='flex justify-between items-center mb-3 px-4'>
            <p>Estimated tax (10%):</p>
             <p>${((totalAmount *0.1)/ 100).toFixed(2)}</p>
       </div>  
        <hr className='mt-4 text-gray-600 mb-3 font-bold' />  
       <div className='flex text-rose-500 font-bold  justify-between items-center mb-4 px-4'>
            <p>Order total:</p>
             <p> ${((totalAmount * 1.1 )/ 100).toFixed(2)}</p>
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
