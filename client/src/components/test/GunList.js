import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'



const GunList = () => {
    const [guns, setGuns] = useState([])
    const [hasError, setHasError] = useState({ error: false, message: '' })


    useEffect(() => {
        const getGuns = async () => {
            try {
                const { data } = await axios.get('/api/guns')
                setGuns(data)
            } catch (error) {
                setHasError({ error: true, message: error.message })
            }
        }
        getGuns()
    }, [])



    return (
        <section className="form-page">
            <Container>
                <h1>{guns.length}</h1>
            </Container>
        </section>
    )
}

export default GunList
