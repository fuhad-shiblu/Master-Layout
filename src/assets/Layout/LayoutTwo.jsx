import { Outlet } from "react-router-dom"
import NavbarTwo from "../Components/NavbarTwo/NavbarTwo"
import Footer from "../Components/Footer"

const LayoutTwo = () => {
  return (
    <>
    <NavbarTwo/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutTwo
