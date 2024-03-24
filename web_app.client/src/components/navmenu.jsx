import { Link } from "react-router-dom";
function NavMenu() {

    const token = JSON.parse(localStorage.getItem("token"));
    function logOut() {
        localStorage.setItem("token", JSON.stringify({ ...token, loggedIn: false }));
        location.reload();
    }

    return (
        <div className="layout-wrapper">
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link to={'/About'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/Contact'}>Contact</Link>
                    </li>
                    {token.loggedIn && 
                    <>
                        <li>
                            <Link to={'/'} onMouseDown={logOut}>Log Out</Link>
                        </li>
                    </>}
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu;