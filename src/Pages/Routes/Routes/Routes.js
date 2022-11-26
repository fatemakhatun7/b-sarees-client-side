import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import Error from "../../Error/Error";
import Home from "../../Home/Home/Home";

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
        }
        ]
    }
  ]);

  export default router;