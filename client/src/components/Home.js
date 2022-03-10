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
                <div id="home-text">Do you ever get tired of min-maxing builds and trying to keep up with the meta at all times?<br />Why not try an incredible (awful) generated build and add more to gloat about when you win (you probably won't)<br /></div>
                <Link to="/randomiser">Generate a random gun!</Link>
            </div>
            <div id="random-gun">
                <h3>Why not try this one?🤔</h3>
                <Link to={`/attachmentselect/${randomGun.id}`}>{randomGun.image}</Link>
            </div>
        </div>
    )
}