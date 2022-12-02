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
import SingleProduct from "../../Products/SingleProduct";
import AllSeller from "../../AllSeller/AllSeller";
import AllBuyer from "../../AllBuyer/AllBuyer";
import MyProducts from "../../MyProducts/MyProducts";
import Wishlist from "../../Wishlist/Wishlist";
import MyOrders from "../../MyOrders/MyOrders";

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
          path: '/allSeller/:role',
          element: <AllSeller></AllSeller>,
          loader: ({params})=> fetch(`http://localhost:5000/users?role=${params.role}`)
        },
        {
          path: '/allBuyer/:role',
          element: <AllBuyer></AllBuyer>,
          loader: ({params})=> fetch(`http://localhost:5000/users?role=${params.role}`)
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
        },
        {
          path: '/addProducts/:id',
          element: <SingleProduct></SingleProduct>,
          loader: ({params})=> fetch(`http://localhost:5000/addProducts/${params.id}`)
        },
        {
          path: '/myProducts/:email',
          element: <MyProducts></MyProducts>,
          loader: ({params})=> fetch(`http://localhost:5000/addProducts?email=${params.email}`)
        },
        {
          path: '/wishlists/:email',
          element: <Wishlist></Wishlist>,
          loader: ({params})=> fetch(`http://localhost:5000/wishlists?email=${params.email}`)
        },
        {
          path: '/myOrders/:email',
          element: <MyOrders></MyOrders>,
          loader: ({params})=> fetch(`http://localhost:5000/myOrders?email=${params.email}`)
        }
        ]
    }
  ]);

  export default router;