import React, { useEffect, useState } from 'react'
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { additem } from './CartSlice';
const Home = () => {
    useEffect(()=>{
        getdata()
       
    },[])
    const dispatch = useDispatch()
    const url =  "https://fakestoreapi.com/products"
    const [posts,setposts] = useState([])
    async function getdata(){
        try{
            const res = await fetch(url)
            const findata =await res.json()
            setposts(findata)
        }
    catch(err){
        console.log("ERROR");
    }
   
    }




  return (
    <div className='pl-12 pt-4 pr-3 rounded-lg grid grid-cols-4 w-4/6 m-auto bg-zinc-200  mt-2 gap-3'>
     
     {
        posts.length>0 ?(

            posts.map((data)=>{

               return <Product data={data} key = {data.id} />
          })
        ):(
           <h1>No data</h1>
        )
        
     }
     

    </div>
  )
}

export default Home
