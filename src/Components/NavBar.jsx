
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { FiSearch, FiUser, FiShoppingCart, FiX } from 'react-icons/fi';

import logo from '/ultimate-log.png';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  function handleSearchToggle(val) {
    setSearchToggle(typeof val === 'boolean' ? val : !searchToggle);
  }
  function handleMenu(val) {
    setMenuToggle(typeof val === 'boolean' ? val : !menuToggle);
  }

  return (
    <div>
      {/* nav Bar */}
      <header className="shadow fixed right-0 left-0 top-0">
        <nav className="flex justify-between items-center p-4">
          <div>
            <span className="text-3xl font-serif font-bold">ULTIMATE</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-5">
              <div className="relative inline-block text-left">
                <div
                  className="flex items-center gap-1 cursor-pointer group"
                  onClick={() => setOpen(!open)}
                >
                  <span>Categories</span>
                  <HiChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
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
          <div className="hidden md:block">
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
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-2">
              <FiUser className="w-8 h-8" />
              <span className="hidden md:block">Account</span>
            </div>
            <div className="flex items-center gap-2">
              <FiShoppingCart className="w-8 h-8" />
              <span className="hidden md:block">Cart</span>
            </div>
            <div>
              <FiSearch className="w-8 h-8 md:hidden" onClick={handleSearchToggle} />
            </div>
          </div>
          <div onClick={handleMenu}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-3xl lg:hidden"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16" />
              <path d="M7 12h13" />
              <path d="M10 18h10" />
            </svg>
          </div>
          {/* mobile search bar  */}
          {/* mobile menu */}
          <div
            className={`md:hidden bg-white min-h-screen fixed z-50 w-full h-full top-0 left-0 right-0 transition-transform duration-1000 ease-in-out ${menuToggle ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="m-8">
              <div className="flex justify-between items-center mb-10">
                <span className="text-3xl font-serif font-bold">ULTIMATE</span>
                <FiX className="w-10 h-10" onClick={() => handleMenu(false)} />
              </div>
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-gray-700 font-medium">
                  Categories
                  <HiChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="mt-2 block pl-4 space-y-2 text-sm text-gray-600">
                  <p>
                    <a href="#">Furniture</a>
                  </p>
                  <p>
                    <a href="#">Shoes</a>
                  </p>
                  <p>
                    <a href="#">Bag</a>
                  </p>
                  <p>
                    <a href="#">Clothes</a>
                  </p>
                </div>
              </details>
              <p className="mt-3">What's new</p>
              <p className="mt-3">Delivery</p>
            </div>
          </div>
        </nav>
        {/* mobile search bar */}
        <div
          className={
            searchToggle
              ? 'md:hidden flex items-center justify-between px-4 py-2  shadow '
              : 'hidden'
          }
        >
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
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </form>
          <button className="ml-2 text-gray-600 hover:text-black">
            <FiX className="w-6 h-6" onClick={() => handleSearchToggle(false)} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
