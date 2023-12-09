import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { GetCoursesReplay } from "../../core/services/api/GetReplayCommentForCoursesDetails";
import { ReplayComent } from "../ArticleDetails/detailskid/ReplayComent";
import { Field, Formik, Form } from "formik";
import { PostCommentUser } from "../../core/services/api/PostCommentUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostAddMyCommentForCourses, PostAddRepayMyCommentForCourses } from "../../core/services/api/PostAddMyComment";
import { AddDeleteLikeForCourses, AddDisLikeForCoursesComment, AddLikeForCourses, AddLikeForCoursesComment } from "../../core/services/api/CourseAddCourseLike";

const CourseOpinions = ({ title, author, describe, CommentID, courseId , disslikeCount , likeCount }) => {
  const [showReplies, setShowReplies] = useState(false);
  const UserId = useParams().id;
  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const [data, setData] = useState([]);

  const GetCourseApiById = async () => {
    const items = await GetCoursesReplay(UserId, CommentID);
    setData(items);
    console.log("data 3: ", data);
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

  // const AddComment = async (values) => {
  //   console.log(values);
  //   const userObj = {
  //     CourseId: courseId,
  //     Title: values.Title,
  //     Describe: values.Describe,
  //   };

  //   const user = await PostAddRepayMyCommentForCourses(userObj);
  // };





  const AddComment = async (values) => {
    console.log(values);
    var formData = new FormData();
    formData.append("CourseId", UserId);
    formData.append("Title", values.Title);
    formData.append("Describe", values.Describe);
    formData.append("CommentId", CommentID)

    const user = await PostAddRepayMyCommentForCourses(formData);
    console.log("send", user);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const [selectedSvg, setSelectedSvg] = useState(null);

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // const UserId =  id;
  const handleClick = async () => {
    if (selectedSvg !== 1) {
      setSelectedSvg(1);
      setCount(count + 1);

      if (selectedSvg === 2) {
        setCount2(count2 - 1);
      }
      const user = await AddLikeForCoursesComment(CommentID);
    } else {
      setSelectedSvg(null);
      setCount(count - 1);
      const user2 = await AddDeleteLikeForCourses();
    }
  };

  const handleClick2 = async () => {
    if (selectedSvg !== 2) {
      setSelectedSvg(2);
      setCount2(count2 + 1);

      if (selectedSvg === 1) {
        setCount(count - 1);
      }
      const user = await AddDisLikeForCoursesComment(CommentID);
    } else {
      setSelectedSvg(null);
      setCount2(count2 - 1);
      const user2 = await AddDeleteLikeForCourses();
    }
  };
  return (
    <>
      <ToastContainer />
      <Formik initialValues={{ Title: "title", Describe: "" }} onSubmit={AddComment}>
        <Form>
          <div className="rounded-3xl border-2 border-[#ccc] px-6 py-8 mt-8 ">
            <div className="rounded-3xl border-2 border-[#ccc] px-14 py-4 mt-3 text-black flex justify-between items-stretch">
              <div className="w-[15%] border-l flex flex-col justify-center items-center pl-14">
                {/* <p className="text-xl mb-3">علی</p> */}
                <p className="text-xl mb-3">{title}</p>
                <button
                  type="submit"
                  className="bg-[#1c543b] text-center text-white px-6 py-3 rounded-2xl"
                >
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

                <p className=" leading-8">{describe}</p>
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

                                <Field
                  className="rounded-3xl border-2 border-[#ccc] px-14 w-[90%] outline-green-600 caret-green-600  mb-3 focus:placeholder:opacity-0 py-4 mt-3 text-black flex justify-between items-stretch"
                  name="Describe"
                  type="text"
                  placeholder="پاسخ"
                  // component={FormInput}
                  // value={Formik.value.phoneOrGmail}
                />

                <button className="absolute" onClick={toggleReplies}>
                  {showReplies ? "مخفی کردن پاسخ‌ها" : "نمایش پاسخ‌ها"}
                </button>
              </div>
            </div>

            <div className="border border-transparent mt-3">
              <div className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-black mr-[30px] inline-block "
                  onClick={handleClick}

                >
                  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                </svg>

                <p className="inline-block"> {likeCount + count}</p>
              </div>

              <div className="inline-block mr-[20px]">
                <p className="inline-block">{ disslikeCount +count2}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-black inline-block"
                  onClick={handleClick2}
                >
                  <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                </svg>
              </div>
            </div>

            {showReplies && (
              <>
                {data.map((item, index) => {
                  return (
                    <>
                      <ReplayComent
                        author={author}
                        describe={item.describe}
                        index={index}
                        title={item.title}
                        id={item.id}
                        disslikeCount={item.disslikeCount}
                        likeCount={item.likeCount}
                      />
                    </>
                  );
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
