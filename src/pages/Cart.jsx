import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector(state => state);
  const [ amount, setAmount ] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price;
    });
    setAmount(total.toFixed(2));
  }, [cart]);

  return (
    <div className='w-[1200px] mx-auto flex'>
      <div className={ cart.length === 0 ? "w-full" : "w-[60%]"}>
      {
        cart.length === 0 ?
          (
            <div className='h-[85vh] w-full flex flex-col justify-center items-center'>
              <h2 className='text-gray-700 font-semibold text-xl mb-2'>Your cart is empty!</h2>
              <NavLink to='/'><button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider'>SHOP NOW</button></NavLink>
            </div>
          )
          :
          (
            <div className='w-[100%] flex flex-col p-2'>
              <div className='flex flex-col p-0 md:p-3 gap-5 items-center'>
              {
                cart.map((item) => {
                  return (
                    <CartItem item={item} key={item.id}></CartItem>
                  )
                })
              }
              </div>
            </div>
          )
      }
      </div>
      {
        cart.length == 0 ? 
        null 
        : 
        (
        <div className='w-[40%] mt-10 flex flex-col justify-between'>
          <div>
            <p className='font-semibold text-xl text-green-800'>YOUR CART</p>
            <h1 className='font-bold text-5xl text-green-700'>SUMMARY</h1>
          </div>
          <div>
            <p className='text-gray-700 font-semibold text-xl'>Total Items: <span className='font-bold text-black'>{cart.length}</span></p>
            <p className='text-gray-700 font-semibold text-xl'>Total Amount : <span className='font-bold text-black'>{`$${amount}`}</span></p>
            <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl w-full mb-10'>Checkout Now</button>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Cart