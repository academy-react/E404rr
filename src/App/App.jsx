
import { Header } from '../components/LandingTop/Header';
import { Courses } from '../screens/Courses/Courses';
import  {Landing}  from '../screens/landingTop/LandingTop';
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


const App = createBrowserRouter([
  {
      path:"/" , element: <Header/> , children:[
        {path: "/" , element: <Landing/>},
        {path:"/course", element:<Courses/>},
        {path:"/introducing-teachers", element: <p>معرفی مدرسین</p>},
        {path:"/blog", element: <p>بلاگ</p>},
        {path:"/Q&A", element: <p>پرسش و پاسخ</p>},
        {path:"/consultation-request", element: <p>درخواست مشاوره</p>},
        {path:"/contact-us", element: <p>تماس با ما</p>},
        {path:"/about-we", element: <p>درباره ما</p>},
        {path: "/free-learn" , element: <p>آموزش های رایگان</p>},
        {path: "/best-teachers" , element: <p>بهترین معلمان</p>},
        {path: "/gift-code" , element: <p>کد تخفیف</p>},
        {path: "/support" , element:<p>پشتیبانی</p>}
      ]
  },
  {path:"/login", element: <p>ورود</p>},

  { path: "*", element: <h1 className='text-red-600'>Error...</h1> },
]);

export default App
