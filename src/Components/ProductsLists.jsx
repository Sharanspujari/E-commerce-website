import React,{useContext} from 'react'
// import { ProductContext } from './Products';
function ProductsLists({product}) {
    // const { filteredProducts } = useContext(ProductContext);

  return (
  <>
    {
        product.map((item, index) => {
          return (
            <div className='card'>
              
              <img className='' src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            
              <p>Price : ₹{item.price}</p>
              <button className='cartbtn'>Add </button>
        
          </div> 
          )
        })
    }
  </>
  )
}

export default ProductsLists