import { useState, useReducer } from 'react';

const formReducer = (state, event) => {
    if (event.reset) {
        return {
            username: '',
            password: ''
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

function Login() {

    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {
        username: '',
        password: ''
    });

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 3000)
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        })
    }

    return (
        <>
            <div className="wrapper">
                <h1>Test Login</h1>
                {submitting &&
                    <div>Loading...</div>
                }
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={submitting}>
                        <label>
                            <p>Username</p>
                            <input name="username" value={formData.username} placeholder="Enter your username" onChange={handleChange} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input name="password" value={formData.password} placeholder="Enter your password" onChange={handleChange} />
                        </label>
                    </fieldset>
                    <button type="submit" disabled={submitting}>Sign in</button>
                </form>
            </div>
        </>
    );
}

export default Login;