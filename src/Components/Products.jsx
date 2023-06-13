import React, { useState, useEffect ,createContext} from "react";

export const ProductContext = createContext();


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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);
  console.log(products);


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchProduct.toLowerCase())
);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <ProductContext.Provider
      value={{ products, filteredProducts, searchProduct, handleSearch }}
    >
      {children}
      <div className="card_container">

        <ProductsLists product={currentProducts} />
        <div>  <Pagination totolPages={products.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage}/></div>
      </div>
      </ProductContext.Provider>
    
    </>
  );
}

export default Products;
