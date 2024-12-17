import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home";
import Services from "./components/Services";
import AstrologerDetails from "./components/AstrologerDetails";

import Blogs from "./components/Blogs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/", element: <AstrologerDetails /> },
      { path: "/blogs", element: <Blogs /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
