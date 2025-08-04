import {useState} from 'react'
import card1 from '/card-image1.jpg'
import card2 from '/card-image2.jpg'
import card3 from '/card-image3.jpg'
const HeroPage = () => {
    
  return (
    <div >
    <div className="mt-20 flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4">
      <div className="w-full md:w-[50%]">
        <img
          src={card1}
          alt=""
          className="w-full h-[60%] object-cover rounded-xl"
        />
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-10">
        <img
          src={card2}
          alt=""
          className="w-full h-[48%] object-cover rounded-xl"
        />
        <img
          src={card3}
          alt=""
          className="w-full h-[48%] object-cover rounded-xl"
        />
      </div>
    </div>
    <div className='bg-[#d1d5db] mx-3  p-4 md:mx-8 mt-10 rounded-lg'>
      
       <div className='md:flex justify-center items-center gap-7  '>
        <div className='text-center'>
          <p className='text-5xl font-sans font-black'>10% OFF Discount Coupons</p>
          <p className='text-gray-600 text-2xl  mt-3'>Subscribe us to get 10% OFF on all the purchases</p>
       </div>
       <div className='flex items-center justify-center mt-10'>
        <button className='bg-black text-white text-xl font-sans px-10 py-2'>Email Me</button>
       </div>
       </div>
    </div>

    </div>
  )
}

export default HeroPage
