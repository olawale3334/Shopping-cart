import {useState} from 'react'
import { HiChevronDown } from "react-icons/hi";
import { FiSearch,FiUser, FiShoppingCart,FiX  } from "react-icons/fi";

import logo from '/ultimate-log.png'
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false)

    function handleSearchToggle() {
        setSearchToggle(!searchToggle)
    }
    
  return (
    <div>
         <div className={searchToggle ? "md:hidden flex items-center justify-between px-4 py-2 bg-white shadow-sm " : "hidden"}>
      <form action="" className="w-full">
        <div className="flex items-center relative w-full">
          <input
            type="text"
            placeholder="Search items..."
            className="w-full p-2 pl-4 pr-12 text-sm rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-lg"
          >
             <FiSearch className="w-5 h-5"    /> 
          </button>
        </div>
      </form>

      <button className="ml-2 text-gray-600 hover:text-black">
        <FiX className="w-6 h-6" onClick={() => handleSearchToggle(false)} />
      </button>
    </div>


      <header className='bg-blue-300 fixed right-0 left-0  '>
        <nav className='flex justify-between items-center p-3'>
            <div className='flex items-center gap-3'>
                <img className='w-16 hidden  md:block' src={logo} alt="" />
                <span className=' text-3xl font-serif font-bold'>ULTIMATE</span>
            </div>
            <div className='hidden md:block'>
            <div className=' flex items-center gap-5  '>
                <div className="relative inline-block text-left">
                <div
                    className="flex items-center gap-1 cursor-pointer group "
                    onClick={() => setOpen(!open)}
                >
                    <span>Categories</span>
                    <HiChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                    />
                </div>

                {open && (
                    <ul className="absolute z-10 mt-2 w-40 bg-white border rounded shadow-md text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Furniture</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shoes</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bag</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Clothes</li>
                    </ul>
                )}
             </div>
             <p>What's new</p>
             <p>Delivery</p>
            </div>
              </div>
            <div className='hidden md:block'>
                <form action="">
                    <div className="flex items-center w-[16rem] relative bg-gray-200 rounded-lg shadow-sm border focus-within:ring-2 focus-within:ring-gray-400 transition">
                    <input
                        type="text"
                        placeholder="Search items..."
                        className="w-full p-2 pl-4 pr-12 text-sm rounded-lg outline-none bg-transparent"
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-lg transition"
                    >
                        <FiSearch className="w-5 h-5" />
                    </button>
                    </div>
                </form>
            </div>
            <div className='flex  gap-3 items-center'>
                <div className='flex items-center gap-2'>
                <FiUser  className='w-8 h-8'/>
                <span className='hidden md:block'>Account</span>
            </div>
            <div className='flex items-center gap-2'>
                <FiShoppingCart className='w-8 h-8' />
                <span className='hidden md:block'>Cart</span>
            </div>
            <div>
               <FiSearch className="w-8 h-8" onClick={handleSearchToggle} /> 
            </div>
            </div>
            
            <div>
               <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl lg:hidden" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M4 6h16">
                </path><path d="M7 12h13">
                </path><path d="M10 18h10"> 
                </path>
               </svg>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
