import { Link } from "react-router-dom";
function NavMenu() {

    const token = JSON.parse(localStorage.getItem("token"));
    function logOut() {
        localStorage.setItem("token", JSON.stringify({ ...token, loggedIn: false }));
        location.reload();
    }

    return (
        <>
            <div id="navmenu">
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/Profile'}>Profile</Link>
                        </li>
                        <li>
                            <Link to={'/Research'}>Research</Link>
                        </li>
                        {token.loggedIn && 
                        <>
                            <li>
                                <Link to={'/Community'}>Community</Link>
                            </li>
                            <li onMouseDown={logOut}>
                                <Link to={'/'}>Log Out</Link>
                            </li>
                        </>}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavMenu;