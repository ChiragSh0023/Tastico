import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import appStore from "./utils/appStore";
import { Provider, useSelector } from "react-redux";
import UserInfo from "./Components/UserInfo";
import { updateName } from "./utils/Redux Slices/userSlice";
import { useDispatch } from "react-redux";

// Lazy loading of cart items
const Cart = lazy(() => import("./Components/Cart"));

const AppLayout = () => {
  const loggedInUser = useSelector((store) => store.user.name);
  const dispatch = useDispatch();
  // Authentication Logic
  useEffect(() => {
    // api call
    setTimeout(() => {
      const response = {
        name: "Chirag",
      };
      dispatch(updateName(response.name));
    }, 1000);
  }, []);

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/userinfo",
        element: <UserInfo />,
      },
    ],
    errorElement: <Error />,
  },
];

const appRouter = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
