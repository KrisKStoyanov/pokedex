import { useState } from 'react';

function Login() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [token, setToken] = useState({
        username: '',
        password: '',
        loggedIn: 'false'
    });

    function handleSubmit() {
        setFormSubmitted(true)
        const tokenData = JSON.parse(localStorage.getItem("token"));
        if (tokenData) {
            if (tokenData.username === token.username && tokenData.password === token.password) {
                localStorage.setItem("token", JSON.stringify({ ...tokenData, loggedIn: true }));
            }
            else {
                alert("Invalid credentials");
            }
        }
        else {
            alert("Invalid credentials");
        }
        setTimeout(
            setFormSubmitted(false),
            1000);
    }

    return (
        <div className="layout-wrapper">
            <h3>Sign in</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>
                        Email
                        <br></br>
                        <input id="usernameLoginInputField" name="username" required type="email" value={token.username} placeholder="Enter your username" onChange={e => setToken({ ...token, username: e.target.value })} />
                    </p>
                </label>
                <label>
                    <p>
                        Password
                        <br></br>    
                        <input id="usernameLoginInputField" name="password" required type="password" value={token.password} placeholder="Enter your password" onChange={e => setToken({ ...token, password: e.target.value })} />
                    </p>
                </label>
                <br></br>
                <button type="submit" disabled={formSubmitted}>{formSubmitted ? <>Loading</> : <>Submit</>}</button>
            </form>
            <br></br>
        </div>
    );
}

export default Login;