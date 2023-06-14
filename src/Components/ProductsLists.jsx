import React, { useContext, useState, useEffect } from "react";
import Header from "./Header";
// import { ProductContext } from './Products';
function ProductsLists({ product, setCurrentPage, currentPage, dsyncData }) {
  // const { filteredProducts } = useContext(ProductContext);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
console.log(cartItems)
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("Products:", product);

  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(currentPage);
  };

  useEffect(() => {
    const filtered = product.filter((products) =>
      products.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, product]);
  return (
    <>
      <Header value={searchTerm} onChange={handleFilter} />
      {dsyncData &&
        filteredProducts.map((item, index) => {
          return (
            <div className="card">
              <img className="" src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <div style={{ display: "flex", width:'100%', justifyContent: "space-between" }}>
                <p>Price : ₹{item.price}</p>
                <button className="cartbtn" onClick={addToCart}>Add </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ProductsLists;
