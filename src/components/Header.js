import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Header = () => {
    //const [user, setUser] = useState(false);

    const {user} = useSelector((state) => ({ ...state }));
    let dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('token');
        dispatch({
            type: 'LOGOUT',
            payload: null
        });
    }

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">Atomic</Link>
            </div>
            {
                user ? (
                    <div className="navbar-menu">
                        {user.name}
                        <Link className="link-button" onClick={logout} to="#">Cerrar</Link>
                    </div>
                ) : (
                    <div className="navbar-menu">
                        <Link className="link-button" to="/login">Login</Link>
                        <Link className="link-button" to="/register">Register</Link>
                    </div>
                )
            }

        </div>
    )
}

export default Header
