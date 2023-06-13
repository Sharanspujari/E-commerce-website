import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Products() {
const [products,setProduct] =useState([]);
const URL= 'https://fakestoreapi.com/products'

const fetchApiData=async()=>{
    try{
        const response=await axios.get(URL)
        // console.log(response.data)
        setProduct(response.data)
    }
    catch(error)
    {
        console.log(error)
    }

}

useEffect(()=>{
    fetchApiData()
},[])
console.log(products)
  return (
    <div className='products_container'>
    {
        products.map(product=>{
            return(
               <>
               <div className='card_container'>
                <div key={product.id} className='card'>
                    <img className='' src={product.image} alt={product.name} />
                    <h3>{product.title}</h3>
                  
                    <p>Price : ₹{product.price}</p>
                </div>
                </div>
                </>
            )
        })
    }
    <div className='card'>
     
    </div>
   
    </div>
  )
}

export default Products