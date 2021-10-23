import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Header = () => {
    const {user} = useSelector((state) => ({ ...state }));
    let dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

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
                    <div className="navbar-menu" style={{color: 'white', fontWeight: 'bold'}}>
                        {user?.name} {user?.lastName}
                        <Link className="link-button" onClick={logout} to="#">Close</Link>
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
