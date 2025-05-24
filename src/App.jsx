import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProjectPage from "./pages/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout/>,
    children: [
      {index: true, element: <HomePage/>},
      {path: "about", element: <AboutPage/>},
      {path: "projects", element: <ProjectPage/>}
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App