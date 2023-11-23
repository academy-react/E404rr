import React from 'react'
import { useState } from 'react';
import { ReplayComentNews } from './ReplayComentNews';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { GetNewsReplay } from '../../../core/services/api/NewsReplay';

const CommentNews = ({title , describe , id}) => {

    
  const [showReplies, setShowReplies] = useState(false);

  
  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const [data, setData] = useState([]);
//   const UserId = useParams().id;
  const GetCourseApiById = async () => {
    const items = await GetNewsReplay(id);
    setData(items);
    console.log("data 3: " , data);
  };
  useEffect(() => {
    GetCourseApiById();
  }, [id]);

  return (
    <div className="rounded-3xl border-2 border-[#ccc] px-6 py-8 mt-8 ">
    <div className="rounded-3xl border-2 border-[#ccc] px-14 py-4 mt-3 text-black flex justify-between items-stretch">
      <div className="w-[15%] border-l flex flex-col justify-center items-center pl-14">
        {/* <p className="text-xl mb-3">علی</p> */}
             <p className="text-xl mb-3">{title}</p>
        <p className="text-xl mb-3">
          {/* {title} */}
          {/* {title} */}
          </p>
        <button className="bg-[#1c543b] text-center text-white px-6 py-3 rounded-2xl">
          پاسخ
        </button>


        <p className="text-xl mt-12">
          {/* {author} */}
          </p>

      </div>
      <div className="w-[80%]">
        {/* <p className=" leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
          می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
          شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
          استفاده قرار گیرد.
        </p> */}

        <p className=" leading-8">
            {/* {describe} */}
            {/* {describe} */}
            {describe}
        </p>
        <div className="rounded-3xl border-2 border-[#ccc] px-14 py-4 mt-3 text-black flex justify-between items-stretch">
          پاسخ
        </div>

        <button className="absolute" onClick={toggleReplies}>
        {showReplies ? 'مخفی کردن پاسخ‌ها' : 'نمایش پاسخ‌ها'}
      </button>

      </div>
  
    </div>

    {showReplies && (
          <>


        {data.map((item , index) => {
           return(
            <> 
                  <ReplayComentNews author={item.author} describe={item.describe} key={index} title={item.title}  id={item.id}/>
            </>
           )
        })}
          
        
          </>
      )}

  </div>
  )
}

export  {CommentNews}