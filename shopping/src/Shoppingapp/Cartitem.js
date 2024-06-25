import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeitem } from './CartSlice'
import { toast } from 'react-toastify'
const Cartitem = (props) => {
    const item = props.item 
    const {cart}= useSelector((state)=>state)
    const dispatch = useDispatch()
function remove(id){
  
     dispatch(removeitem(id))
}
  return (
    <div className=' p-2 rounded-lg gap-3 m-2 flex justify-center bg-zinc-600 ml-28'>
      <div className=' flex justify-center items-center w-3/6 '>
      <img className='rounded-2xl min-w-40 h-40' src={item.image} alt="" />
      </div>
      <div className=' w-3/4'>
       <h1 className=' text-xl underline'>{item.title}</h1>
       <p className=''>{item.description.substr(0,200)}.........</p>
       <div className=' flex justify-around'>
        <h1 className=' font-bold text-lg text-green-600'>${item.price}</h1>
        <button onClick={()=>remove(item.id)} className=' bg-zinc-100 w-28 rounded-lg p-1 hover:bg-red-600  shadow-lg'>Delete</button>
       </div>
      </div>
    </div>
  )
}

export default Cartitem
