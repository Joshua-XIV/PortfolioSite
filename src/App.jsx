import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";

const gradient = "bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text text-transparent"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout/>,
    children: [
      {index: true, element: <HomePage gradient={gradient}/>},
      {path: "about", element: <AboutPage gradient={gradient}/>},
      {path: "projects", element: <ProjectsPage gradient={gradient}/>},
      {path: "projects/:name", element: <ProjectPage/>},
      {path: "*", element: <NotFoundPage/>}
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App