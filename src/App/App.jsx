import CourseDetailsPage from "../screens/CourseDetailPage/CourseDetailsPage";
import TeachersPage from "../screens/TeachersPage/TeachersPage";
import Landing from "../screens/landing/Landing";
import {ArticleDetails} from "../screens/ArticleDetails/ArticleDetails";
import Header from "../components/common/Header/Header";
import Maghalat from "../screens/Maghalat/Maghalat";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import ForgetPass from "../screens/ForgetPass/ForgetPass";
import AboutUs from "../screens/AboutUs/AboutUs";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useRouteError,
  Outlet,
  Link,
  useNavigate,
  NavLink,
  useParams,
} from "react-router-dom";
import { Panel } from "../screens/Panel/Panel";
import { Navbar } from "../components/common/navbar/Navbar";
import { Listcurses } from "../screens/Panel/Listcurses";
import { Mylistcurses } from "../screens/Panel/Mylistcurses";
import { Dashbord } from "../screens/Panel/Dashbord";

import Courses from "../screens/Courses/Courses";
import ContactUs from "../screens/ContactUs/ContactUs";
import ConsultaitionReq from "../screens/ConsultaitionReq/ConsultaitionReq";
import Cart from "../screens/Cart/Cart";
import { SideBar } from "../components/common/SideBar/SideBar";
import PishKhan from "../screens/Panel2/PishKhan";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    
    children: [
      { path: "/", element: <Landing /> },
      { path: "/course", element: <Courses /> },
      { path: "/introducing-teachers", element: <TeachersPage /> },
      { path: "/blog", element: <Maghalat /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/consultation-req", element: <ConsultaitionReq /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/free-learn", element: <p>آموزش های رایگان</p> },
      { path: "/best-teachers", element: <p>بهترین معلمان</p> },
      { path: "/gift-code", element: <p>کد تخفیف</p> },
      { path: "/support", element: <p>پشتیبانی</p> },
      { path: "/Cart", element: <Cart /> },
      { path: "/ArticalePage", element: <ArticleDetails/> },
      { path: "/CoursePage", element: <CourseDetailsPage/> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forget", element: <ForgetPass /> },

  {
    path: "/panel",
    element: <Navbar />,
    children: [
      { path: "/panel", element: <Dashbord /> },
      { path: "/panel/listcurses", element: <Listcurses /> },
      { path: "/panel/editprofile", element: <Panel /> },
      { path: "/panel/mycurses", element: <Mylistcurses /> },
    ],
  },



  // پیشخوان
  {
    path: "/panel2",
    element: <SideBar/>,
    children: [
      { path: "/panel2", element: <PishKhan/> },
      { path: "/panel2/2", element: <p>دوره های من</p> },
      { path: "/panel2/3", element: <p>تیکت ها</p> },
      { path: "/panel2/4", element: <p>ویرایش پروفایل</p> },
    ],
  },

  { path: "*", element: <h1 className="text-red-600">Error...</h1> },
]);

export default App;
