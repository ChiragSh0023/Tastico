import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import AboutClass from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("User");

  // Authentication Logic
  useEffect(() => {
    // api call
    setTimeout(() => {
      const response = {
        name: "Chirag",
      };
      setUserName(response.name);
    }, 1000);
  }, []);

  const updateUserName = (text) => {
    setUserName(text);
  };

  return (
    <UserContext.Provider value={{ loggedInUser: userName, updateUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
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
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
];

const appRouter = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
