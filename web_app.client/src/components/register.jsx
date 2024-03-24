import { useState } from 'react';

function Register() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [token, setToken] = useState({
        username: '',
        password: '',
        loggedIn: false
    });
    function handleSubmit() {
        setFormSubmitted(true);
        localStorage.setItem("token", JSON.stringify(token));
        setTimeout(
            setFormSubmitted(false),
            1000);
    }

    return (
        <div className="layout-wrapper">
            <h3>Register</h3>
            <form id="registration" onSubmit={handleSubmit}>
                <label>
                    <p>
                        Email
                        <br></br>
                        <input name="username" required type="email" value={token.username} placeholder="Enter your username" onChange={e => setToken({ ...token, username: e.target.value })} />
                    </p>
                </label>
                <label>
                    <p>
                        Password
                        <br></br>
                        <input name="password" required type="password" value={token.password} placeholder="Enter your password" onChange={e => setToken({ ...token, password: e.target.value })} />
                    </p>
                </label>
                <br></br>
                <button type="submit" disabled={formSubmitted}>{formSubmitted ? <>Loading</> : <>Submit</>}</button>
            </form>
            <br></br>
        </div>
    );
}

export default Register;