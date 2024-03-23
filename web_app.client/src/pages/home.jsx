import NavMenu from "../components/navmenu";
import Profile from "../components/profile";
import Login from "../components/login";
function Home() {
    return (
        <>
            <Login />
            <NavMenu />
            <div>
                <h1>Digital Museum of Video Games</h1>
                <p>Welcome</p>
            </div>
        </>
    );
}

export default Home;