import { useState } from 'react';

function Login() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    function handleSubmit() {
        setFormSubmitted(true)
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        console.log(username);
        console.log(password);
        console.log(formData.username);
        console.log(formData.password);
        if (username !== null && password !== null) {
            if (username === formData.username && password === formData.password) {
                alert("Logged in");
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
        <>
            <div className="wrapper">
                <h3>Sign in</h3>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={formSubmitted}>
                        <label>
                            <p>Username</p>
                            <input name="username" type="text" value={formData.username} placeholder="Enter your username" onChange={e => setFormData({...formData, username: e.target.value})} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input name="password" type="password" value={formData.password} placeholder="Enter your password" onChange={e => setFormData({...formData, password: e.target.value})} />
                        </label>
                    </fieldset>
                    <button type="submit" disabled={formSubmitted}>{formSubmitted ? <>Loading</> : <>Submit</>}</button>
                </form>
            </div>
        </>
    );
}

export default Login;