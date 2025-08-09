import React, { useState } from 'react'
import hi from '/iphone-item4.jpg'
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = () => {
    const [com,setCom] = useState(false)
    const{ addToCart, totalProduct, handleDelete, reduceFromCart, cart,totalQuantity} =useCart();

      const totalAmount = cart.reduce((acc, item) => {
        return acc + item.quantity * parseFloat(item.price);
        }, 0).toFixed(2);

    


  return (

    <div className='min-h-screen'>
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
            <div key={item.id} className='bg-white p-5 border border-gray-400 md:w-[25rem] h-fit' >
            <h1>Delivery</h1>
            <div className='flex gap-5'>
              
            <div>
                <img className='w-20' src={item.image} alt="" />
            </div>
            <div className=''>
                <p>{item.name}</p>
                <p>{item.totalProduct}</p>
                <p className=' text-orange-500'>${(item.price * item.quantity / 100).toFixed(2)}</p>
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
            <div>
              <button onClick={() => handleDelete(item.id)}>
                <FiX className='h-5 w-5'/>
              </button>
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
         <button 
           onClick={ () => setCom(true)} 
           className='bg-black text-white px-10 py-2 rounded'>
           Place Your Order
          </button>
        </div> 
        {com && (
          <div>
            <div className=' inset-0 fixed bg-white bg-opacity-50 z-50 flex justify-center items-start '>
              <div className=' bg-white w-full max-w-lg mx-auto mt-10 p-6 rounded shadow-lg trasform transition-transform duration-300 translate-y-0 '>
                 <div className='flex justify-between items mb-4'>
                  <h2 className="text-3xl  font-bold">Your Order</h2>
                  <button onClick={() => setCom(false)} >
                    <FiX className=' w-10 h-10'/>
                  </button>
                 </div>
                 <div className='border border-gray-500 z-50'>
                  <div className='bg-gray-300 border border-gray-500 '>
                          <div className='flex justify-between px-4'>
                            <div>
                             <p>order placed :</p>
                             <span>Aug 8 2025</span>
                          </div>
                          <div>
                            <p>Total: </p>
                          <span>${((totalAmount * 1.1 )/ 100).toFixed(2)}</span>
                          </div>
                          </div>
                        </div>
                    <div className='max-h-[30rem] overflow-y-auto '>
                      {cart.map((item) => (
                      <div key={item.id} className=' m-5 font-serif '>
                        
                        <div className='md:flex md:justify-between items-start px-4'>
                          <div className='md:flex gap-5'>
                          <div className=''>
                            <img className='md:w-16 rounded' src={item.image} alt="" />
                          </div>
                            <div className='text-center mt-3 '>
                              <p>{item.name}</p> 
                               <p>Arive in 2weeks</p>
                              <p>Quantity:{item.quantity}</p> 
                              <div className='mt-3'>
                                <button 
                               onClick={ () => addToCart(item)}
                               className='bg-black text-white px-8 py-2 rounded-md'>
                                Buy Again
                               </button>
                              </div>                            
                            </div>
                        </div>
                        <div className='text-center mt-4 z-20'>
                          <button className='bg-white shadow px-8 py-2 rounded '>Track package</button>
                        </div>
                        </div>

                      </div>
                    ))}
                    </div>
                  </div>
              </div>
             

            </div>
          </div>
        )}
      </div>
      
      </div>
    </div>
  )
}

export default Cart
