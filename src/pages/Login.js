import React, { useState } from 'react'
import clientAxios from '../functions/Axios';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const Login = ({ history }) => {
    let dispatch = useDispatch();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const onChange = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await clientAxios.post(`/login`, form);

            dispatch({
                type: 'LOGGED_IN_USER',
                payload: {
                    _id: data.user._id,
                    name: data.user.name,
                    lastName: data.user.lastName,
                    email: data.user.email,
                    role: data.user.role,
                }
            });
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))

            history.push('/');
        } catch (error) {
            Swal.fire('Error', 'Invalid data', 'error');
        }
    }

    const verify = () => {
        return (
            form.email.length > 0 &&
            form.password.length > 5
        ) ? true : false;
    }

    return (
        <div className="login-page">
            <div className="card-auth">
                <h2>Login</h2>
                <input type="email" placeholder="Email" name="email" value={form.email} onChange={onChange} />
                <br />
                <input placeholder="Password" type="password" name="password" value={form.password} onChange={onChange} />
                <br />
                <button className="button-custom" type="submit" onClick={onSubmit} disabled={!verify()}>Login</button>
            </div>
        </div>
    )
}

export default Login
