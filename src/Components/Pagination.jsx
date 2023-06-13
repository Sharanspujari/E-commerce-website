import React from 'react'

function Pagination({totolPages,productsPerPage,setCurrentPage}) {
    const pageNumber=[];

  for(let i =1; i<=Math.ceil(totolPages/productsPerPage); i++){
    pageNumber.push(i)
    console.log(pageNumber);
  }

  return (
    <div>
   {
    pageNumber.map(number => {
          return (
            <button key={number} onClick={()=>setCurrentPage(number)}>
              {number}
            </button>
          )
        })
   }
    </div>
  )
}

export default Pagination