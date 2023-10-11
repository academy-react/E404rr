import { useState } from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pages = Math.ceil(totalPosts / postsPerPage)
  const [pageNumbers] = useState(Array(pages).fill().map((_, i) => i+1))

  return (
    <ul className="flex gap-1 w-fit mx-auto my-10 p-2">
      {pageNumbers.map((number) => (
        <li 
          key={number} 
          onClick={() => paginate(number)}
          className='leading-[40px] w-[40px] h-[40px] border border-slate-300 cursor-pointer'
        >
          {number}
        </li>
      ))}
    </ul>
  )
}

export default Pagination
