import React,{useState,useEffect,useContext} from 'react'
// import {AiOutlineSearch,MdAddShoppingCart} from 'react-icons/ti'
// import { ProductContext } from './Products';
import {FaShoppingCart} from 'react-icons/fa'
function Header({value,onChange}) {
    // const { searchProduct, setSearchProduct } = useContext(ProductContext);
    // const {filteredProducts}=useContext(ProductContext)
 
    return (
    <div className='main_container'>
    <div className='header_conatiner'>

   <div className='left_header'>
    <span className='logo'>E-CART APP</span> 
  </div>

  <div className="searchheader">
          <input className="searchinput"  value={value} onChange={onChange.bind(this)}  
       placeholder="Search Products..." type="text" />
          <span>
            {" "}
            {/* <AiOutlineSearch className="headersearch" /> */}
           
          </span>
        </div>

        <div className='right_header'>
         <div className="carticon_container">
            {/* <MdAddShoppingCart className="icon" onClick={onclick} /> */}
            <FaShoppingCart className='cart_icon'/>
            <span className="total-notifications">{4}</span>
          </div> 

        </div>
    </div>
    </div>
  )
}

export default Header;