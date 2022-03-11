import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Randomiser = () => {
    const [randomGun, setRandomGun] = useState([])
    // const [attachments, setAttachments] = useState([])
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

    // useEffect(() => {
    //     const getAttachments = async () => {
    //         try {
    //             const { data } = await axios.get('/api/attachments')
    //             setAttachments(data)
    //         } catch (error) {
    //             setHasError({ error: true, message: error.message })
    //         }
    //     }
    //     getAttachments()
    // }, [])

    return (
        <div>
            {randomGun ?
                <>
                    <h1>{randomGun.name}</h1>
                    <img src={randomGun.image} alt={randomGun.name}></img>
                    <h1>Let's just pretend there are some randomed attachments here, yeah?🙃</h1>
                </>
                :
                <h2>{hasError.error ? 'Something funny goin on here' : 'They see me loading, they hatin'}</h2>
            }
        </div>
    )
}