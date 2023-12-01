import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams } from "react-router-dom";
import { GetCoursesReplay } from "../../core/services/api/GetReplayCommentForCoursesDetails";
import { ReplayComent } from "../ArticleDetails/detailskid/ReplayComent";
import { Field, Formik ,Form } from "formik";
import { PostCommentUser } from "../../core/services/api/PostCommentUser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostAddMyCommentForCourses } from "../../core/services/api/PostAddMyComment";


const CourseOpinions = ({title , author , describe , CommentID , courseId}) => {


  const [showReplies, setShowReplies] = useState(false);

  
  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  
  const [data, setData] = useState([]);
  const UserId = useParams().id;
  const GetCourseApiById = async () => {
    const items = await GetCoursesReplay(UserId , CommentID);
    setData(items);
    console.log("data 3: " , data);
  };
  useEffect(() => {
    GetCourseApiById();
  }, [UserId]);



  // const loginUser = async (values) => {
  //   console.log(values);
  //   const userObj = {
  //       comment:values.comment
  //   };

  
  //   const user = await PostCommentUser(userObj);


  //   if (user === 200) {
  //     toast.success(' در انتظار تایید ! ثبت موفق آمیز ', { position: toast.POSITION.TOP_RIGHT });

  //   }
  //   else{
  //       // alert("وارد نشدین")
  //       toast.error('!  ثبت نشد ', { position: toast.POSITION.TOP_RIGHT });
  //   }
  // };



  const AddComment = async (values) => {
    console.log(values);
    const userObj = {
      CourseId: courseId ,
      Title: values.Title,
      Describe: values.Describe,
    };

  
    const user = await PostAddMyCommentForCourses(userObj);
  }


  return (
    <>
     <ToastContainer />  
    <Formik initialValues={{Title : "" ,Describe: ""}} onSubmit={AddComment}>
      <Form>
      <div className="rounded-3xl border-2 border-[#ccc] px-6 py-8 mt-8 ">
      <div className="rounded-3xl border-2 border-[#ccc] px-14 py-4 mt-3 text-black flex justify-between items-stretch">
        <div className="w-[15%] border-l flex flex-col justify-center items-center pl-14">
          {/* <p className="text-xl mb-3">علی</p> */}
          <p className="text-xl mb-3">{title}</p>
          <button type="submit" className="bg-[#1c543b] text-center text-white px-6 py-3 rounded-2xl">
            ثبت
          </button>


          <p className="text-xl mt-12">{author}</p>

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
              {describe}
          </p>
          {/* <div className="rounded-3xl border-2 border-[#ccc] px-14 py-4 mt-3 text-black flex justify-between items-stretch">
          <Field
            name="phoneOrGmail"
            type="text"
            placeholder="ایمیل"
            // component={FormInput}
            // value={Formik.value.phoneOrGmail}
            className=" placeholder-darker-green w-full h-[100%]"

          />
            
          </div> */}


<Field className="rounded-3xl border-2 border-[#ccc] px-14 w-[90%] outline-green-600 caret-green-600  mb-3 focus:placeholder:opacity-0 py-4 mt-3 text-black flex justify-between items-stretch"
            name={`Title`}
            
            type="text"
            placeholder="پاسخ"
            // component={FormInput}
            // value={Formik.value.phoneOrGmail}
     >

            
          </Field>

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
                  <ReplayComent author={author} describe={item.describe} index={index} title={item.title}  id={item.id}/>
            </>
           )
        })}
          
          </>
      )}

    </div>

      </Form>
    </Formik>



    </>


  );
};

export default CourseOpinions;
