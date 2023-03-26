import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addquestion from "./Addquestion";
import Addanswer from "./Addanswer";
import Home from "./Home";
import Login from "./login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/addanswer",
    element: <Addanswer />,
  },
  {
    path: "/addquestion",
    element: <Addquestion />,
  },
]);
function App() {
  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
