

import CourseDetailsPage from "../screens/CourseDetailPage/CourseDetailsPage";

import Landing from "../screens/landing/Landing";
import ArticleDetails from "../screens/ArticleDetails/ArticleDetails";

import Maghalat from '../screens/Maghalat/Maghalat'
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import ForgetPass from '../screens/ForgetPass/ForgetPass'
import { Header } from '../components/LandingTop/Header';
import { Courses } from '../screens/Courses/Courses';

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
import { Panel } from '../screens/Panel/Panel';
import { Navbar } from '../components/common/navbar/Navbar';
import { Listcurses } from "../screens/Panel/Listcurses";
import { Mylistcurses } from "../screens/Panel/Mylistcurses";
import { Dashbord } from "../screens/Panel/Dashbord";

const App = createBrowserRouter([
  {
      path:"/" , element: <Header/> , children:[
        {path: "/" , element: <Landing/>},
        {path:"/course", element:<Courses/>},
        {path:"/introducing-teachers", element: <p>معرفی مدرسین</p>},
        {path:"/blog", element: <Maghalat />},
        {path:"/Q&A", element: <p>پرسش و پاسخ</p>},
        {path:"/consultation-request", element: <p>درخواست مشاوره</p>},
        {path:"/contact-us", element: <p>تماس با ما</p>},
        {path:"/about-we", element: <p>درباره ما</p>},
        {path: "/free-learn" , element: <p>آموزش های رایگان</p>},
        {path: "/best-teachers" , element: <p>بهترین معلمان</p>},
        {path: "/gift-code" , element: <p>کد تخفیف</p>},
        {path: "/support" , element:<p>پشتیبانی</p>},
        {path: "/shopping" , element:<p>سبد خرید</p>}
      ]
  },
  {path:"/login", element: <Login />},
  {path:"/register", element: <Register />},
  {path:"/forget", element: <ForgetPass />},


  
  {path:"/panel", element: <Navbar /> , children:[
    {path:"/panel" , element:<Dashbord/>},
    {path:"/panel/listcurses" , element: <Listcurses/>},
    {path:"/panel/editprofile" , element:<Panel/>},
    {path:"/panel/mycurses" , element: <Mylistcurses/>}

  ]
},

  { path: "*", element: <h1 className='text-red-600'>Error...</h1> },
]);




export default App;


