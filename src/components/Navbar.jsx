import React from 'react'
import { IoCart } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className='bg-slate-900 text-white py-2'>
        <div className='flex justify-between w-8/12 mx-auto'>
            <div>
                <NavLink to='/' ><img src={logo} alt="" className='h-14'/></NavLink>
            </div>
            <div className='flex items-center leading-[24px] gap-6'>
                <NavLink to='/' className='text-[20px]'><p>Home</p></NavLink>
                <NavLink to='/cart' className='text-[24px]'>
                  <div className='relative'>
                    <span className='absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full text-white'>{cart.length}</span>
                    <IoCart />
                  </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar