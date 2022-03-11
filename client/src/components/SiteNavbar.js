import React from 'react'
import { useNavigate } from 'react-router-dom'
import { userIsAuthenticated, removeToken } from './helpers/auth'


export const SiteNavBar = () => {
    const navigate = useNavigate()
    const userIsAuth = userIsAuthenticated()


    const handleLogout = () => {
        removeToken()
        navigate('/login')
    }

    return (
        <div id="navbar">
            <div id='first'>
                <a id='brand' href='/'>Home</a>
                <a id='wbuilder' href='/gunselect'>Weapon Builder</a>
                <a id='profile' className='button' href='/userprofile/I/1'>
                    Profile
                </a>
            </div>
            <div id="loginout" >
                {userIsAuth ?
                    <div id='logout' className='button' onClick={handleLogout}>
                        Logout
                    </div>
                    :
                    <div id='double'>
                        <a id='register' className='button' href="/register">Register</a>
                        <a id='login' className='button' href="/login">Login</a>
                    </div>
                }
            </div>
        </div>
    )
}