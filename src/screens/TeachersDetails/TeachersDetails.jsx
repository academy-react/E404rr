import {React , useState , useEffect} from "react";
import TeacherAvatar from "../TeachersPage/TeachersAvatar";
import AboutTeacher from "./AboutTeacher";
import TeachersCourse from "./TeachersCourse";
import Footer from "../../components/common/footer/Footer";
import { GetAllTeacherById } from "../../core/services/api/GetTeacherAllByID";
import { useParams } from "react-router-dom";

const TeachersDetails = () => {
    const [data, setData] = useState([]);
  const UserId = useParams().id;
  const GetAllTeacherApiById = async () => {
    const items = await GetAllTeacherById(UserId);
    setData(items);
    console.log("see course: " + data);
  };
  useEffect(() => {
    GetAllTeacherApiById();
  }, [UserId]);
  return (
    <>
      <div className="container max-w-[1250px] mx-auto mt-20 flex items-start mb-10 justify-between px-20" data-aos="fade-up">
        <div className="w-[60%]" data-aos="fade-up">
          <div>
            <p className="text-gray-500 text-lg font-black">مدرس</p>
            <p className="text-4xl font-black mt-3">{data.fullName} </p>
          </div>
          <div className="mt-6 text-lg font-extralight">
            توسعه دهنده و مدرس اصلی
          </div>
          <div className="flex mt-14  items-center justify-between max-w-[70%]">
            <div className="flex flex-col gap-3 items-center">
              <p className="text-gray-500 text-lg">تعداد دانشجویان</p>
              <p className="text-xl font-extrabold">234566</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-gray-500 text-lg">تعداد دوره ها</p>
              <p className="text-xl font-extrabold">7</p>
            </div>
          </div>
          <AboutTeacher />
          <TeachersCourse />
        </div>
        <div className="w-[30%]" data-aos="fade-up">
          <TeacherAvatar />
          <div className="flex flex-col gap-6 mt-14">
            <div className="flex items-center justify-center px-6 py-4 p-2 shadow-sm  shadow-slate-300 rounded-2xl gap-3">
              <svg
                className="w-7"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="3"
                stroke="#000000"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path>
                  <path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path>
                  <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path>
                  <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path>
                  <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line>
                  <line x1="32" y1="6.99" x2="32" y2="56.7"></line>
                  <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line>
                  <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line>
                  <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path>
                </g>
              </svg>
              <p>وبسایت مدرس</p>
            </div>
            <div className="flex items-center justify-center px-6 py-4 p-2 shadow-sm  shadow-slate-300 rounded-2xl gap-3">
              <svg
                className="w-7"
                viewBox="0 -2 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>twitter [#154]</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-60.000000, -7521.000000)"
                      fill="#000000"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                          id="twitter-[#154]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p>twitter</p>
            </div>
            <div className="flex items-center justify-center px-6 py-4 p-2 shadow-sm  shadow-slate-300 rounded-2xl gap-3">
              <svg
                className="w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                  <path
                    d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                  <path
                    d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
              <p>LinedIn</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeachersDetails;
