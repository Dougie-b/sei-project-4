import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Home = () => {

    const [randomGun, setRandomGun] = useState([])
    const [hasError, setHasError] = useState({ error: false, message: '' })

    useEffect(() => {
        const getGuns = async () => {
            try {
                const { data } = await axios.get('/api/guns')
                const random = data[Math.floor(Math.random() * data.length)]
                setRandomGun(random)
            } catch (error) {
                setHasError({ error: true, message: error.message })
            }
        }
        getGuns()
    }, [])



    return (
        <div id="home-wrapper">
            <div id="welcome">
                <h1>Welcome to Warzone gun builder thingy! </h1>
            </div>
            <div id="random-gun">
                <h3>Why not try this one?🤔</h3>
                <Link to="/">{randomGun.image}</Link>
            </div>
        </div>
    )
}