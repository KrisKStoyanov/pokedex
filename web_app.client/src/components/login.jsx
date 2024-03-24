import { useState } from 'react';

function Login() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [token, setToken] = useState({
        username: '',
        password: '',
        loggedIn: true
    });

    function handleSubmit() {
        setFormSubmitted(true)
        const tokenData = JSON.parse(localStorage.getItem("token"));
        if (tokenData) {
            if (tokenData.username === token.username && tokenData.password === token.password) {
                localStorage.setItem("token", JSON.stringify({ ...tokenData, loggedIn: true }));
            }
            else {
                alert("Invalid credentials 1");
            }
        }
        else {
            alert("Invalid credentials 2");
        }
        setTimeout(
            setFormSubmitted(false),
            1000);
    }

    return (
        <div className="layout-wrapper">
            <h3>Sign in</h3>
            <form onSubmit={handleSubmit}>
                <fieldset disabled={formSubmitted}>
                    <label>
                        <p>Email</p>
                        <input name="username" required type="email" value={token.username} placeholder="Enter your username" onChange={e => setToken({ ...token, username: e.target.value })} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input name="password" required type="password" value={token.password} placeholder="Enter your password" onChange={e => setToken({...token, password: e.target.value})} />
                    </label>
                </fieldset>
                <br></br>
                <button type="submit" disabled={formSubmitted}>{formSubmitted ? <>Loading</> : <>Submit</>}</button>
            </form>
            <br></br>
        </div>
    );
}

export default Login;