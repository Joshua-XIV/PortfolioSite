import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import BackGround from "../components/BackGround";

const MainLayout = () => {
  return (
    <>
      <BackGround/>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default MainLayout