import NavMenu from "../components/navmenu";
import Logo from "./logo";

function Header() {
    return (
        <div className="layout-header">
            <Logo />
            <NavMenu />
        </div>
    );
}

export default Header;