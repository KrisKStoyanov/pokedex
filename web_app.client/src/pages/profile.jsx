import Dashboard from '../components/dashboard';
import Account from '../components/account';

function Profile() {

    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    return (
        <div className="layout-frame-profile">
            {(token && token.loggedIn) ? <Dashboard /> : <Account />}
        </div>
     );
}

export default Profile;