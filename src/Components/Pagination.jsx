import React from 'react'

function Pagination({totolPages,productsPerPage,setCurrentPage,currentPage}) {
    const pageNumber=[];

  for(let i =1; i<=Math.ceil(totolPages/productsPerPage); i++){
    pageNumber.push(i)
    console.log(pageNumber);
  }
  
  return (
    <div className="pagination_div">
   {
    pageNumber.map(number => {
          return (
             
            
            <button className='btnpagi' key={number}   onClick={()=>setCurrentPage(number)}>
              {number}
            </button>
         
          )
        })
   }
    </div>
  )
}

export default Pagination