import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout/>,
    children: [
      {index: true, element: <HomePage></HomePage>}
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App