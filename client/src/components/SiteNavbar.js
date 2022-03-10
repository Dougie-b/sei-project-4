import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userIsAuthenticated, removeToken } from './helpers/auth'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'



export const SiteNavBar = () => {
    const navigate = useNavigate()
    const userIsAuth = userIsAuthenticated()

    const handleLogout = () => {
        removeToken()
        navigate('/login')
    }

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    {userIsAuth ?
                        <Nav>
                            <Nav.Link href="/userprofile">
                                Profile
                            </Nav.Link>
                            <Nav.Link onclick={handleLogout}>
                                Logout
                            </Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}





{/* <div className="column" id="site-links">
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
                    <div className="navbar-item">
                        <Link to="/randomiser">
                            <h3>Randomiser</h3>
                        </Link>
                    </div>
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
                } */}