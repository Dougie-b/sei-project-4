import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Login = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        gamertag: '',
        password: '',
    })

    const [formError, setFormError] = useState('')

    const handleChange = (e) => {
        const newObj = { ...formData, [e.target.name]: e.target.value }
        setFormData(newObj)
        setFormError('')
    }

    const setTokenToLocalStorage = (token) => {
        window.localStorage.setItem('totallyunIqueTokEn', token)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/auth/login/', formData)
            console.log('token', data.token)
            setTokenToLocalStorage(data.token)
            navigate('/gunlist')
        } catch (err) {
            console.log('catch error', err.response)
            setFormError(err.response.data.message)
        }
    }


    return (
        <div className="form-page">
            <Container>
                <Form onSubmit={handleSubmit} className='mt-4'>
                    <h2>Login</h2>
                    <Form.Group className='mb-2'>
                        <Form.Label htmlFor='gamertag'>Gamertag</Form.Label>
                        <Form.Control onChange={handleChange} type="gamertag" name="gamertag" placeholder='Gamertag' defaultValue={formData.gamertag} />
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control onChange={handleChange} type="password" name="password" placeholder='Password' defaultValue={formData.password} />
                    </Form.Group>
                    {formError && <Form.Text>{formError}</Form.Text>}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me logged in" />
                    </Form.Group>
                    <Form.Group className='mt-4 text-left'>
                        <Button variant="success" type="submit">Log in</Button>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default Login