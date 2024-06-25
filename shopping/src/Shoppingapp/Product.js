import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { additem, removeitem } from './CartSlice'
import { toast } from 'react-toastify'
const Product = ({data}) => {
   const dispatch = useDispatch()
   const {cart} = useSelector((state)=>state)
 

  function add(){

  dispatch(additem(data))
  
     
     
 
   }
   function remove(){
    
  dispatch(removeitem(data.id))
    
 
   
 
   }




  return (
    <div className='rounded-2xl border  border-red-800 pb-3'>
      <h1 className=' text-rose-900 text-center'>{data.title}</h1>
      <p  className=' text-center'>{data.description.substr(0,30)}...</p>
     
      <img className=' m-auto  max-h-32 w-32 rounded-2xl ' src={data.image} alt="" />
    
      <div className=' gap-2 mt-3 flex justify-between pr-3 pl-3 pb-0 '>
        <h2 className=' text-green-500 font-bold' >${data.price}</h2>
        { cart.some((p)=>p.id === data.id) ? (
             
             <button onClick={remove} className=' w-32  bg-red-500 border  border-black  rounded-xl' >Remove </button>
        ):(
          <button onClick={add} className=' w-32 bg-sky-500 border  border-black  rounded-xl' >Add to Cart</button>
        )
            
        }
       
      </div>
    </div>
  )
}

export default Product
