import NavMenu from '../components/navmenu';
import Dashboard from '../components/dashboard';
import Account from '../components/account';

function Profile() {

    const token = JSON.parse(localStorage.getItem("token"));

    return (
        <>
            <NavMenu />
            {!token.loggedIn ? <Account /> : <Dashboard/> }
        </>
     );
}

export default Profile;