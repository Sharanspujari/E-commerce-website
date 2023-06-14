import React, { useState, useEffect ,createContext} from "react";

// export const ProductContext = createContext();


import axios from "axios";
import Pagination from "./Pagination";
import ProductsLists from "./ProductsLists";
function Products({children}) {
  const [products, setProduct] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  
  const URL = "https://fakestoreapi.com/products";

  const fetchApiData = async () => {
    try {
      const response = await axios.get(URL);
      // console.log(response.data)
      setProduct(response.data);
      setSearchProduct(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);
  console.log(products);


  // const handleSearch = (term) => {
  //   setSearchProduct(term);
  // };

//   const filteredProducts = products.filter((product) =>
//   product.title.toLowerCase().includes(searchProduct.toString().toLowerCase())
// );
// console.log('filteredProducts:',filteredProducts)
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const pageNumber=[];

  for(let i =1; i<=Math.ceil(products.length/productsPerPage); i++){
    pageNumber.push(i)
    console.log(pageNumber);
  }
  return (
    <>
    
   
      <div className="card_container">
          <div className="products_list">
        <ProductsLists product={currentProducts} currentProducts={currentProducts} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>

        <div > 
       {/* <Pagination className="pagination" totolPages={products.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage}/> */}
       <div className="pagination_div">
   {
    pageNumber.map(number => {
          return (
            <button className='btnpagi' key={number} onClick={()=>setCurrentPage(number)}>
              {number}
            </button>
          )
        })
   }
    </div>
       
       </div>
      </div>
     
    
    </>
  );
}

export default Products;
