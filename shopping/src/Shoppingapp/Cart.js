import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cartitem from './Cartitem'
const Cart = () => {
 const {cart} = useSelector((state)=>state)
const [totalamount,setamount] =useState(0);
const [totalitems ,settotalitems] = useState(0)
useEffect(()=>{
 let amount=0;
 let items=0;
 cart.map((item)=>{
   amount += item.price
   items++;
 })
 settotalitems(items)
 setamount(amount)
},[cart])
  return (

    <div className=' gap-6 bg-orange-500 flex justify-center '>
      <div className='w-5/6'>
     {
      cart.length >0 ? (
        <div>
       <div>
{
  cart.map((item,index)=>{
       return <Cartitem item ={item} key={index} />
  })
}

       </div>
       
       </div>
      ):(
       <div className=' grid grid-rows-2 place-content-center place-items-center  h-5/6 '>
        <h1 className=' text-3xl  '>Your Cart is Empty </h1>
        
        <div>
        <button className=' rounded-xl h-40 text-3xl bg-slate-600 w-60'><Link to="/">Shop Now</Link></button>
        </div>
        
       </div>
       
      )
     }
     </div>
     <div className='rounded-xl w-2/3 m-2 p-3  bg-red-300  '>
          <h1 className=' text-3xl text-center '>Your Shopping Cart</h1>
          <p className='text-center'>Thank You For Shopping !!!!</p>
          <p className='text-center'>Continue shopping here 🛒🛒🛒🛒🛒</p>
         
          <h1 className=' text-center text-2xl '>Total Items: {totalitems}</h1>
          <div className=' flex justify-center'>
            <img className=' h-96 rounded-xl shadow-2xl shadow-black' src="https://tse1.mm.bing.net/th?id=OIP.XUs8shF5E0o2H_s01YoUqwHaFq&pid=Api&P=0&h=220" alt="" />
          </div>
          <br />
          <div>
            <h1 className=' text-2xl text-center'>Your Total Amount</h1>
          <h1 className=' text-green-800 font-bold text-3xl text-center'>${totalamount}</h1>
          </div>
          
          <div className=' mt-2 flex justify-center'>
          <button className=' w-64 h-16 rounded-xl text-2xl shadow-gray-500 shadow-xl bg-gray-600'><Link to='/'>Proceed</Link></button>
          </div>
          
          
       </div>
    </div>
  )
}

export default Cart
