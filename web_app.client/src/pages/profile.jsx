import Dashboard from '../components/dashboard';
import Account from '../components/account';

function Profile() {

    const token = JSON.parse(localStorage.getItem("token"));

    return (
        <div className="layout-profile">
            {!token.loggedIn ? <Account /> : <Dashboard/> }
        </div>
     );
}

export default Profile;