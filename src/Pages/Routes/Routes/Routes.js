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
import DashboardLayout from "../../../Layout/DashboardLayout";
import AllUsers from "../../AllUsers/AllUsers";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SelllerRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";

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
          path: '/categories',
          element: <PrivateRoute><ProductLayout></ProductLayout></PrivateRoute>,
          children: [
            {
              path: '/categories/:name',
              element: <PrivateRoute><Product></Product></PrivateRoute>,
              loader: ({params})=> fetch(`https://b-sarees-server.vercel.app/addProducts?name=${params.name}`)
            }
          ]
        },
        {
          path: '/addProducts/:id',
          element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
          loader: ({params})=> fetch(`https://b-sarees-server.vercel.app/addProducts/${params.id}`)
        },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
              path: '/dashboard/myOrders/:email',
              element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>,
              loader: ({params})=> fetch(`https://b-sarees-server.vercel.app/myOrders?email=${params.email}`)
            },
            {
              path: '/dashboard/addProduct',
              element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
              path: '/dashboard/myProducts/:email',
              element: <SellerRoute><MyProducts></MyProducts></SellerRoute>,
              loader: ({params})=> fetch(`https://b-sarees-server.vercel.app/addProducts?email=${params.email}`)
            },
            {
              path: '/dashboard/wishlists/:email',
              element: <BuyerRoute><Wishlist></Wishlist></BuyerRoute>,
              loader: ({params})=> fetch(`https://b-sarees-server.vercel.app/wishlists?email=${params.email}`)
            },
            {
              path: '/dashboard/allSeller/:role',
              element: <AdminRoute><AllSeller></AllSeller></AdminRoute>,
              loader: ({params})=> fetch(`https://b-sarees-server.vercel.app/users?role=${params.role}`)
            },
            {
              path: '/dashboard/allBuyer/:role',
              element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>,
              loader: ({params})=> fetch(`https://b-sarees-server.vercel.app/users?role=${params.role}`)
            }
        ]
    }
  ]);

  export default router;