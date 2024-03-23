import useToken from '../hooks/useToken';
import NavMenu from '../components/navmenu';
import Account from './account';
function Profile() {
    const { token, setToken } = useToken();

    return (
        <>
            <NavMenu />
            {(!token) ? <Account setToken={setToken} /> : <>Hi, token.Account.Forename</> }
            
        </>
     );
}

export default Profile;