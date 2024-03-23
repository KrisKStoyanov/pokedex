import { Link } from "react-router-dom";
function NavMenu() {
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
                        <li>
                            <Link to={'/Community'}>Community</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavMenu;