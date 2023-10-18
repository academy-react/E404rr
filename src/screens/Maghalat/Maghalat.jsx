import { useState } from 'react'

import Pagination from '../../components/Maghalat/Pagination'
import TextInput from '../../components/common/TextInput'

import maghaleImg from '../../assets/img/maghaleImg.png'
import searchImg from '../../assets/img/search.svg'

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
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPage = () => {
    if (currentPage !== Math.ceil(items.length / postsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className='container font-vazir mx-auto px-10 text-center'>
      <div className='flex flex-col md:flex-row gap-5 justify-between items-center my-6 px-8 py-2 rounded-lg bg-lighter-green/10'>
        <div className='relative w-full md:w-[450px]'>
          <TextInput type="text" placeholder='جستجو مقاله های مختلف...' />
          <img src={searchImg} onClick={(v) => console.log(v)} className='absolute left-0 top-1/2 w-[20px] ml-4 -translate-y-1/2 rounded-md cursor-pointer' />
        </div>
        <select className='bg-white shadow-md shadow-gray-200 outline-none w-full md:w-fit px-6 py-2 rounded-md'>
          <option value="">مرتب سازی براساس تاریخ</option>
          <option value="">مرتب سازی بر اساس محبوبیت</option>
        </select>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto my-10 px-28'>
        {currentPosts.map((v, i) => (
            <div key={i} className='text-start py-2 shadow-lg shadow-green-200/30 rounded-md cursor-pointer hover:scale-110 transition-all'>
            <div><img src={maghaleImg} alt="Image not found." className='w-full rounded-xl' /></div>
            <h3 className="text-lg py-2">{v.title}</h3>
            <span className='text-slate-800'>{v.date}</span>
          </div>
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        postsPerPage={postsPerPage} 
        totalPosts={items.length} 
        paginate={paginate} 
        previousPage={previousPage} 
        nextPage={nextPage} 
      />
    </div>
  )
}

export default Maghalat
