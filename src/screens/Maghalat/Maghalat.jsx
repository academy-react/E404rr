import { useState } from 'react'

import Pagination from '../../components/Maghalat/Pagination'

import maghaleImg from '../../assets/img/maghaleImg.png'

const Maghalat = () => {
  const [items, setItems] = useState([
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
    {title: 'مقاله', date: '1400/03/11'},
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className='container text-center bg-slate-50'>
      <div className='flex justify-between items-center mx-10 my-6 px-8 py-6 rounded-lg bg-lighter-green/10'>
          <input type="text" />
          <span>
              مرتب سازی براساس تاریخ
          </span>
      </div>
      <div className='grid grid-cols-3 gap-6 mx-auto px-10'>
        {currentPosts.map((v, i) => (
          <div key={i} className='text-start'>
            <div className="image"><img src={maghaleImg} alt="Image not found." className='w-full' /></div>
            <h3 className="font-lg">{v.title}</h3>
            <span className='text-slate-800'>{v.date}</span>
          </div>
        ))}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} />
    </div>
  )
}

export default Maghalat
