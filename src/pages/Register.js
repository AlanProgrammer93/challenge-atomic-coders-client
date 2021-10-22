import React, { useState } from 'react'
import Swal from 'sweetalert2';
import clientAxios from '../functions/Axios';
import {useDispatch} from 'react-redux';

const Register = ({history}) => {
    let dispatch = useDispatch();

    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
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
        const {data} = await clientAxios.post(`/register`, form);
        console.log(data);
        Swal.fire({
            icon: 'success',
            title: 'Registered',
            showConfirmButton: false,
            timer: 1500
          })
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
          history.push('/');
       } catch (error) {
            Swal.fire('Error', 'Mail already exists', 'error');
       }
        
    }

    const verify = () => {
        return ( 
            form.name.length > 0 &&
            form.lastName.length > 0 &&
            form.email.length > 0 &&
            form.password.length > 5 &&
            form.password == form.password2 
        ) ? true : false;
    }

    return (
        <div className="register-page">
            <div className="card-auth">
                <h2>Register</h2>
                <div className="names">
                    <input type="text" placeholder="Name" name="name" value={form.name} onChange={ onChange } />
                    <input type="text" placeholder="Last Name" name="lastName" value={form.lastName} onChange={ onChange } />
                </div>
                <br />
                <input type="email" placeholder="Email" name="email" value={form.email} onChange={ onChange } />
                <br />
                <input placeholder="Password" type="password" name="password" value={form.password} onChange={ onChange } />
                <br />
                <input placeholder="Repeat Password" type="password" name="password2" value={form.password2} onChange={ onChange } />
                <br />
                <button className="button-custom" type="submit" onClick={ onSubmit } disabled={ !verify() }>Register</button>
            </div>
        </div>
    )
}

export default Register
