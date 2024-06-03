import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { add, remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const Products = ({item}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeFromCart()  {
    dispatch(remove(item.id))
    toast.error("Item removed from cart!")
  }
  function addToCart() {
    dispatch(add(item))
    toast.success("Item added to cart!")
  }
  return (
    <div  className='group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl'>
      <h2 className='truncate w-40 mt-1 text-gray-700 font-semibold text-lg text-left'>{item.title}</h2>
      <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{`${item.description.substring(0, 100)}...`}</p>
      <img src={item.image} alt={item.title} className='h-[180px] w-full object-contain'/>
      <div className='flex justify-between w-full '>
        <p className='text-green-600 font-semibold text-[16px]'>{`$${item.price}`}</p>
        <div className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'>
          {
            cart.find((product) => product.id === item.id) ? <button onClick={removeFromCart}>REMOVE ITEM</button> : <button onClick={addToCart}>ADD TO CART</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Products