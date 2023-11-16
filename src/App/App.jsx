import CourseDetailsPage from "../screens/CourseDetailPage/CourseDetailsPage";
import TeachersPage from "../screens/TeachersPage/TeachersPage";
import Landing from "../screens/landing/Landing";
import ArticleDetails from "../screens/ArticleDetails/ArticleDetails";
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
import MyCourses from "../screens/Panel2/MyCourses";
import { Tiket } from "../screens/Panel2/Tiket";
import { EditProfile } from "../screens/Panel2/EditProfile";
import { Addtiket } from "../screens/Panel2/AddTiket/Addtiket";

import TeachersDetails from "../screens/TeachersDetails/TeachersDetails";
import { E404ror } from "../screens/404/E404ror";

import CourseSummary from "../screens/CourseDetailPage/CourseSummary"
import TeacherSummary from "../screens/CourseDetailPage/TeacherSummary"
import CourseTopics from "../screens/CourseDetailPage/CourseTopics"
import CourseOpinions from "../screens/CourseDetailPage/CourseOpinions"
import { About } from "../screens/ArticleDetails/detailskid/About";
import { Comment } from "../screens/ArticleDetails/detailskid/Comment";



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
      { path: "/Cart", element: <Cart /> },
      { path: "/ArticalePage/:id", element: <ArticleDetails />, children :[
          {path: "/ArticalePage/:id", element : <About/>},
          {path: "/ArticalePage/:id/comment", element : <Comment/>}

      ] },
      { path: "/CoursePage/:id", element: <CourseDetailsPage /> ,children: [
        {path: "/CoursePage/:id" , element : <CourseSummary/>},
        {path: "/CoursePage/:id/modares" , element : <TeacherSummary/>},
        {path: "/CoursePage/:id/sarfasl" , element : <CourseTopics/>},
        {path: "/CoursePage/:id/comment" , element : <CourseOpinions/>},
      ] },
      { path: "/CoursePage/:id", element: <CourseDetailsPage /> },
      { path: "/teacher-profile", element: <TeachersDetails /> },
  
      { path: "/teacher-profile", element: <TeachersDetails /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forget", element: <ForgetPass /> },

  {
    path: "/panel2",
    element: <Navbar />,
    children: [
      { path: "/panel2", element: <Dashbord /> },
      { path: "/panel2/listcurses", element: <Listcurses /> },
      { path: "/panel2/editprofile", element: <Panel /> },
      { path: "/panel2/mycurses", element: <Mylistcurses /> },
    ],
  },



  // پیشخوان
  {
    path: "/panel",
    element: <SideBar/>,
    children: [
      { path: "/panel" , element: <PishKhan/> },
      { path: "/panel/2", element:<MyCourses/> },
      { path: "/panel/3", element: <Tiket/> },
      { path: "/panel/4", element: <EditProfile/> },
      { path: "/panel/Addticket", element: <Addtiket/> },
    ],
  },

  { path: "*", element: <E404ror/> },
] );

export default App;
