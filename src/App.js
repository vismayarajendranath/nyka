import React ,{useContext}from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import { MyContext } from "./components/AppProvider";
import ProductPage from "./pages/ProductPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path:'product/:productID',
        element:<ProductPage />
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
const App = () => {

  const {name} = useContext(MyContext)
  console.log(name);

  return (
      <RouterProvider router={router} />

  );
};

export default App;
