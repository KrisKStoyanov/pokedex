import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
function Layout() {
    return (
        <div className="layout-app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;