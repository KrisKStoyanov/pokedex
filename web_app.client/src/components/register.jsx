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
            <h3>Create your account</h3>
            <form id="registration" onSubmit={handleSubmit}>
                <fieldset disabled={formSubmitted}>
                    <label>
                        <p>Email</p>
                        <input name="username" required type="email" value={token.username} placeholder="Enter your username" onChange={e => setToken({ ...token, username: e.target.value })} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input name="password" required type="password" value={token.password} placeholder="Enter your password" onChange={e => setToken({ ...token, password: e.target.value })} />
                    </label>
                </fieldset>
                <button type="submit" disabled={formSubmitted}>{formSubmitted ? <>Loading</> : <>Register</>}</button>
            </form>
        </div>
    );
}

export default Register;