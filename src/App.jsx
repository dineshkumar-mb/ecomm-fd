import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import HomeWrapper from "./Wrappers/HomeWrapper";
import Register from "./Components/Register";
import Login from "./Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;