import { Outlet } from "react-router-dom";

// import ContactFrom from "../pages/Home/ContactFrom/ContactFrom";
// import About from "../pages/Home/About/About";
import Nav from "../pages/Shared/Nav/Nav";


const Main = () => {
    return (
        <div>
            <Nav></Nav>            
            {/* <About></About> */}
            <Outlet></Outlet>
            {/* <ContactFrom></ContactFrom> */}
            
            
        </div>
    );
};

export default Main;
