import React,{useState,useEffect,useContext} from 'react'
// import {AiOutlineSearch,MdAddShoppingCart} from 'react-icons/ti'
// import { ProductContext } from './Products';
function Header() {
    // const { searchProduct, setSearchProduct } = useContext(ProductContext);
    // const {filteredProducts}=useContext(ProductContext)
  return (
    <div className='main_container'>
    <div className='header_conatiner'>

   <div className='left_header'>
    <span className='logo'>E-CART APP</span> 
  </div>

  <div className="searchheader">
          <input className="searchinput"   
       placeholder="Search Products..." type="text" />
          <span>
            {" "}
            {/* <AiOutlineSearch className="headersearch" /> */}
            <button className='search_btn' >Search </button>
          </span>
        </div>

        <div className='right_header'>
         <div className="carticon_container">
            {/* <MdAddShoppingCart className="icon" onClick={onclick} /> */}
            <button className='search_btn'>Cart</button>
            <span className="total-notifications">{}</span>
          </div> 

        </div>
    </div>
    </div>
  )
}

export default Header;