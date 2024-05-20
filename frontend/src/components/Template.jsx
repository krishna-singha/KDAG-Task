import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./export";

const Template = () => {
    return(
        <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Template;