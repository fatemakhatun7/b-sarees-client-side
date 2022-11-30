import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import Error from "../../Error/Error";
import Home from "../../Home/Home/Home";
import SignIn from "../../JoinUs/SignIn/SignIn";
import SignUp from "../../JoinUs/SignUp/SignUp";
import AddProducts from "../../Products/AddProducts";
import Product from "../../Products/Product";
import Products from "../../Products/Products";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <SignIn></SignIn>
        },
        {
          path: '/addProduct',
          element: <AddProducts></AddProducts>
        },
        {
          path: '/categories',
          element: <Products></Products>,
          children: [
            {
              path: '/categories/:name',
              element: <Product></Product>,
              loader: ({params})=> fetch(`http://localhost:5000/categories/${params.name}`)
            }
          ]
        }
        ]
    }
  ]);

  export default router;