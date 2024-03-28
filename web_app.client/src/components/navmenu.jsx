import { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";

function NavMenu() {

    const [tokenData, setTokenData] = useState({
        username: '',
        password: '',
        loggedIn: 'false'
    });

    const getLogin = useCallback(async () => {
        const data = await JSON.parse(localStorage.getItem("token"));
        setTokenData(data);
    }, [])


    function logOut() {
        localStorage.setItem("token", JSON.stringify({ ...tokenData, loggedIn: false }));
        setTokenData(JSON.parse(localStorage.getItem("token")));
        location.reload();
    }

    useEffect(() => {
        getLogin().catch(console.error);
    }, [getLogin])

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
                    {tokenData && tokenData.loggedIn && 
                    <li>
                            <Link to={'/'} onMouseDown={logOut}>Log Out</Link>
                    </li>}
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu;