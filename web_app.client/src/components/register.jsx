import { useState, useReducer } from 'react';

const formReducer = (state, event) => {
    if (event.reset) {
        return {
            username: '',
            forename: '',
            surname: '',
            dateOfBirth: '',
            country: '',
            password: '',
            confirmPassword: '',
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

function Register() {

    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {
        username: '',
        forename: '',
        surname: '',
        dateOfBirth: '',
        country: '',
        password: '',
        confirmPassword: '',
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
                <h3>Create your account</h3>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={submitting}>
                        <label>
                            <p>E-mail</p>
                            <input name="email" type="text" value={formData.email} placeholder="example@mail.com" onChange={handleChange} />
                        </label>
                        <label>
                            <p>First Name</p>
                            <input name="forename" type="text" value={formData.forename} placeholder="Enter your first name" onChange={handleChange} />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input name="surname" type="text" value={formData.surname} placeholder="Enter your last name" onChange={handleChange} />
                        </label>
                        <label>
                            <p>Date of Birth</p>
                            <input name="dateOfBirth" type="text" value={formData.dateOfBirth} placeholder="DD/MM/YYYY" onChange={handleChange} />
                        </label>
                        <label>
                            <p>Country</p>
                            <input name="country" type="text" value={formData.country} placeholder="Enter your country" onChange={handleChange} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input name="password" type="password" value={formData.password} placeholder="Enter your password" onChange={handleChange} />
                        </label>
                        <label>
                            <p>Confirm Password</p>
                            <input name="confirmPassword" type="password" value={formData.confirmPassword} placeholder="Retype your password" onChange={handleChange} />
                        </label>
                    </fieldset>
                    <button type="submit" disabled={submitting}>{submitting ? <>Loading</> : <>Register</>}</button>
                </form>
            </div>
        </>
    );
}

export default Register;