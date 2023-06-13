import React from 'react'

function ProductsLists({product}) {

  return (
  <>
    {
        product.map((item, index) => {
          return (
            <div className='card'>
              
              <img className='' src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            
              <p>Price : ₹{item.price}</p>
              <button className='cartbtn'>Add to cart</button>
        
          </div> 
          )
        })
    }
  </>
  )
}

export default ProductsLists