import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = () => {
    // navigate
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        gamertag: '',
        email: '',
        platform: '',
        password: '',
        passwordConfirmation: '',
    })

    const [formErrors, setFormErrors] = useState({
        gamertag: '',
        email: '',
        platform: '',
        password: '',
        passwordConfirmation: '',
    })

    const handleChange = (e) => {
        const newObj = { ...formData, [e.target.name]: e.target.value }
        setFormData(newObj)
        setFormErrors({ ...formErrors, [e.target.name]: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log('formdata', formData)
            await axios.post('/api/auth/register/', formData)
            navigate('/login')
        } catch (err) {
            setFormErrors(err.response.data.errors)
        }
    }

    return (
        <section className="form-page">
            <Container>
                <Form onSubmit={handleSubmit} className="mt-4">
                    <h2>Register</h2>
                    {/* Gamertag */}
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="gamertag">Gamertag</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="gamertag"
                            placeholder="gamertag"
                            defaultValue={formData.gamertag}
                        />
                        {formErrors.gamertag && (
                            <Form.Text>{formErrors.gamertag}</Form.Text>
                        )}
                    </Form.Group>
                    {/* Email */}
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="email">Email Address</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Email"
                            defaultValue={formData.email}
                        />
                        {formErrors.email && <Form.Text>{formErrors.email}</Form.Text>}
                    </Form.Group>
                    {/* Platform */}
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="platform">Platform</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="platform"
                            placeholder="Platform"
                            defaultValue={formData.platform}
                        />
                        {formErrors.platform && <Form.Text>{formErrors.platform}</Form.Text>}
                    </Form.Group>
                    {/* Password */}
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Password"
                            defaultValue={formData.password}
                        />
                        {formErrors.password && (
                            <Form.Text>{formErrors.password}</Form.Text>
                        )}
                    </Form.Group>
                    {/* Password Confirmation */}
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="passwordConfirmation">
                            Confirm Password
                        </Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="password"
                            name="passwordConfirmation"
                            placeholder="Confirm Password"
                            defaultValue={formData.passwordConfirmation}
                        />
                        {formErrors.passwordConfirmation && (
                            <Form.Text>{formErrors.passwordConfirmation}</Form.Text>
                        )}
                    </Form.Group>
                    {/* Submit */}
                    <Form.Group className="text-center mt-4">
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </section>
    )
}

export default Register
