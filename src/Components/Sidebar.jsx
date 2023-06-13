import React from 'react'

function Sidebar() {
  return (
  
    <div className="side-bar">
     <h3 className='filter_heading'>Sort Products by Price</h3>
     
     <div className='checbox_container'>
     <div className='highprice'>
        <input type='checkbox' className='checkbox'/>
        <label>High Price</label>
     </div>
     <div>
        <input type='checkbox' className='checkbox'/>
        <label>Low Price</label>
     </div>
     </div>

    </div>
  )
}

export default Sidebar