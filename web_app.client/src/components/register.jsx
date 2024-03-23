import { useState } from 'react';

function Register() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    function handleSubmit() {
        setFormSubmitted(true);
        localStorage.setItem("username", formData.username);
        localStorage.setItem("password", formData.password);
        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("password"));
        setTimeout(
            setFormSubmitted(false),
            1000);
    }

    return (
        <>
            <div className="wrapper">
                <p id="description">Create your account</p>
                <form id="registration" onSubmit={handleSubmit}>
                    <fieldset disabled={formSubmitted}>
                        <label>
                            <p>Username</p>
                            <input name="username" type="text" value={formData.username} placeholder="Enter your username" onChange={e => setFormData({ ...formData, username: e.target.value} )} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input name="password" type="password" value={formData.password} placeholder="Enter your password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
                        </label>
                    </fieldset>
                    <button type="submit" disabled={formSubmitted}>{formSubmitted ? <>Loading</> : <>Register</>}</button>
                </form>
            </div>
        </>
    );
}

export default Register;