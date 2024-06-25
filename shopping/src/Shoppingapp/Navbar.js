import React from 'react'
import { TbShoppingCartFilled } from "react-icons/tb";
import { NavLink } from 'react-router-dom'
import axios from 'react-dom'
const Navbar = () => {
    
  return (
    <div className=' bg-slate-700 h-14 flex justify-around '>
   <div>
    <NavLink to= "/">
    <img className=' h-14 w-28' src="https://tse3.mm.bing.net/th?id=OIP.SxoPxQZdlONuOUInUWfOPQHaKX&pid=Api&P=0&h=220" alt="" />
    </NavLink>
   </div>
   <div className=' flex justify-center  items-center gap-5' >
    <NavLink to="/">
        <button className=' rounded-2xl bg-zinc-50 w-20 h-12 '>Home</button>
        
    </NavLink>
    <div className=' '>
    <NavLink to="/cart"  >
       <button className='rounded-2xl bg-zinc-50  h-12 w-10  pl-3'>
       <TbShoppingCartFilled />
       </button>
       
   </NavLink>
    </div>
    
   </div>
    </div>
  )
}

export default Navbar
