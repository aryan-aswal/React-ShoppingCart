import React from 'react'
import { MdDelete } from "react-icons/md";
import { remove } from '../redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    function removeFromCart() {
        dispatch(remove(item.id));
        toast.error("Item removed from cart!")
    }

    return (
        <div className='flex items-center p-3 gap-10'>
            <div className='w-[30%]'>
                <img src={item.image} alt={item.title} className='object-cover'/>
            </div>
            <div className='w-[70%] space-y-5'>
                <h2 className='text-xl text-slate-700 font-semibold'>{item.title}</h2>
                <p className='text-base text-slate-700 font-medium'>{`${item.description.substring(0, 100)}...`}</p>
                <div className='flex justify-between'>
                    <p className='font-bold text-lg text-green-600'>{`$${item.price}`}</p>
                    <button onClick={removeFromCart} className='bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'><MdDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default CartItem