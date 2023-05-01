import {Navigate, createBrowserRouter} from "react-router-dom";    
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/news/news/news";
import LoginLayOut from "../layouts/LoginLayOut";
import Login from "../pages/login/login/login";
import Register from "../pages/login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../pages/Terms/Terms";
  const router = createBrowserRouter([
    {
path: '/',
element: <LoginLayOut></LoginLayOut>,
children: [
  {
path: '/',
element: <Navigate to="/category/0"></Navigate>
  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/terms',
    element: <Terms></Terms>
  }
]
    },
    {
      path: "category",
      element: <Main></Main>,
      children: [
        {
            path:':id',
            element:<Category></Category>,
            loader: ()=> fetch('https://the-news-dragon-server-jamiulislam10.vercel.app/news')
        },
        
        
      ]
    },
    {
      path:'news',
      element:<NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoutes><News></News></PrivateRoutes>,
          loader: ({params}) => fetch(`https://the-news-dragon-server-jamiulislam10.vercel.app/news/${params.id}`)
        }
      ]
    }
  ]);  
  export default router;                                                                   