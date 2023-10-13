import { useState } from 'react'

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate, nextPage, previousPage }) => {
  const pages = Math.ceil(totalPosts / postsPerPage)
  const [pageNumbers] = useState(Array(pages).fill().map((_, i) => i+1))

  return (
    <ul className="flex gap-1 w-fit mx-auto my-10 p-2">
      <li 
        onClick={previousPage}
        className={'leading-[40px] w-[40px] h-[40px] rounded-full border border-slate-300 select-none cursor-pointer' + (currentPage==1 ? ' pointer-events-none opacity-0' : '' )}> 
        {'<'} 
      </li>

      {pageNumbers.map((number) => (
        <li 
          key={number} 
          onClick={() => paginate(number)}
          className={'leading-[40px] w-[40px] h-[40px] rounded-full border border-slate-300 cursor-pointer' + (number == currentPage ? ' text-white bg-darker-green' : '' )}
        >
          {number}
        </li>
      ))}

      <li 
        onClick={nextPage}
        className={'leading-[40px] w-[40px] h-[40px] rounded-full border border-slate-300 select-none cursor-pointer' + (currentPage==pages ? ' pointer-events-none opacity-0' : '')}> 
        {'>'} 
      </li>
    </ul>
  )
}

export default Pagination
