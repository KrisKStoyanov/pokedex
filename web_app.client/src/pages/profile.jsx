import useToken from '../hooks/useToken';
import NavMenu from '../components/navmenu';
import Dashboard from '../components/dashboard';
import Account from '../components/account';

function Profile() {
    const { token, setToken } = useToken();

    return (
        <>
            <NavMenu />
            <Account setToken={setToken} />
            <Dashboard />
        </>
     );
}

export default Profile;