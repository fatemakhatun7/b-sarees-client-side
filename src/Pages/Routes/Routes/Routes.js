import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import Error from "../../Error/Error";
import Home from "../../Home/Home/Home";
import SignIn from "../../JoinUs/SignIn/SignIn";
import SignUp from "../../JoinUs/SignUp/SignUp";
import AddProducts from "../../Products/AddProducts";
import Product from "../../Products/Product";
import ProductLayout from "../../../Layout/ProductLayout";

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
          element: <ProductLayout></ProductLayout>,
          children: [
            {
              path: '/categories/:name',
              element: <Product></Product>,
              loader: ({params})=> fetch(`http://localhost:5000/addProducts?name=${params.name}`)
            }
          ]
        }
        ]
    }
  ]);

  export default router;