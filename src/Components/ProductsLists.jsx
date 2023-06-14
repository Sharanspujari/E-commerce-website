import React,{useContext, useState,useEffect} from 'react'
import Header from './Header'
// import { ProductContext } from './Products';
function ProductsLists({product,setCurrentPage,currentProducts,currentPage}) {
    // const { filteredProducts } = useContext(ProductContext);

const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
console.log('Products:',product)


const handleFilter = (e) => {
  setSearchTerm(e.target.value)
  setCurrentPage(currentPage)
}




useEffect(() => {
  const filtered = product.filter((products) =>
    products.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredProducts(filtered);
}, [searchTerm, product]);
  return (
  <>
   <Header value={searchTerm}  onChange={handleFilter}/>
    {
      filteredProducts.map((item, index) => {
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