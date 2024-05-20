import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import ErrorPage from './Components/Error';
import Alldonation from './Components/Alldonation';
import Statistics from './Components/Statistics';
import Details from './Components/Details';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path:'/all',
        element:<Alldonation></Alldonation>,
        loader: () => fetch("/data.json"),
      },
      {
        path:'/stat',
        element:<Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/data.json"),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
