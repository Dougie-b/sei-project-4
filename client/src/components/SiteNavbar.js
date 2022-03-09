import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userIsAuthenticated, removeToken } from './helpers/auth'

export const SiteNavBar = () => {
    const navigate = useNavigate()
    const userIsAuth = userIsAuthenticated()

    const handleLogout = () => {
        removeToken()
        navigate('/login')
    }

    return (
        <nav className="navbar columns is-black" id="navbar">
            <div className="column" id="site-links">
                <div className="navbar-item">
                    <Link to="/userprofile">
                        <h3>Profile</h3>
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link to="/gunselect">
                        <h3>Weapon Builder</h3>
                    </Link>
                </div>
                {/* <div className="navbar-item">
                    <Link to="/randomiser">
                        <h3>Randomiser</h3>
                    </Link>
                </div> */}
            </div>
            {!userIsAuth &&
                <div className="navbar-item">
                    <Link to="/login">
                        <h3>Login</h3>
                    </Link>
                </div>
            }
            {!userIsAuth &&
                <div className="navbar-item">
                    <Link to="/register">
                        <h3>Register</h3>
                    </Link>
                </div>
            }
            {userIsAuth &&
                <div className="navbar-item">
                    <Link to="/" onClick={handleLogout}>
                        <h3>Logout</h3>
                    </Link>
                </div>
            }
        </nav>
    )
}