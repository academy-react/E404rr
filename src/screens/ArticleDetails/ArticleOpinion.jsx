import { useParams } from "react-router-dom";
import python from "../../assets/img/python.png";
import { PostAddMyCommentForCourses, PostAddMyCommentForNews } from "../../core/services/api/PostAddMyComment";
import { Formik, Form, Field } from "formik";

const ArticleOpinion = () => {
  const courseId = useParams().id;

  const AddComment = async (values) => {
    console.log(values);
    var formData = new FormData();
    formData.append("CourseId", courseId);
    formData.append("Title", values.Title);
    formData.append("Describe", values.Describe);

    const user = await PostAddMyCommentForNews(formData);
    console.log("send", user);
  };

  return (
    <div className="px-10 mt-10 text-[#323E73] mb-10" data-aos="fade-up">
      <Formik onSubmit={AddComment} initialValues={{ Describe: "", Title: "" }}>
        <Form>
          <div className="flex items-center" data-aos="fade-up">
            <img className="w-[60px]" src={python} alt="" />
            <p className="text-3xl mx-3 font-black">دیدگاه شما</p>
          </div>
          <p className="mt-5">پذیرای نظرات و پیشنهادات شما عزیزان هستیم.</p>
          <div
            className="border-2 border-[#ccc] rounded-3xl px-8 py-8 mt-10"
            data-aos="fade-up"
          >
            <Field
              placeholder="عنوان مورد نظر خود را وارد کنید"
              className="mb-2 bg-[#f7f6f6] w-full py-5 px-3 rounded-2xl focus:outline-none  focus:placeholder:opacity-0"
              name="Title"
              type=""
              rows="5"
            ></Field>
            <Field
              className="bg-[#f7f6f6] min-h-[200px] max-h-[200px]  w-full py-5 px-3 rounded-2xl focus:outline-none  focus:placeholder:opacity-0"
              name="Describe"
              as="textarea"
              cols="30"
              rows="10"
              placeholder="دیدگاه شما ..."
            ></Field>

            <button
              type="submit"
              className="flex bg-[#23A455] px-8 py-4 mt-5 cursor-pointer rounded-3xl w-[200px] text-white h-16 text-lg items-center "
            >
              <svg
                className="w-5 ml-2"
                fill="#fff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M15,9H13V7a1,1,0,0,0-2,0V9H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V11h2a1,1,0,0,0,0-2Zm4-7H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path>
                </g>
              </svg>
              ثبت دیدگاه
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ArticleOpinion ;
