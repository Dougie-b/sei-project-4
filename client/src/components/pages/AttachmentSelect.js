import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const AttachmentSelect = () => {
    const navigate = useNavigate()
    const { gunId } = useParams()

    const [gun, setGun] = useState('')
    const [hasError, setHasError] = useState({ error: false, message: '' })

    useEffect(() => {
        const getSingleGun = async () => {
            try {
                const { data } = await axios.get(`/api/guns/${gunId}`)
                setGun(data)
                console.log(gun)
            } catch (error) {
                setHasError({ error: true, message: error.message })
            }
        }
        getSingleGun()
    }, [])

    return (
        <div id='attachmentselect-wrapper'>
            <div id='attachment-gun-highlight'>
                <h1>{gun.name} - {gun.type}</h1>
                <img src={gun.image} alt={gun.name}></img>
            </div>
        </div>
    )


}

export default AttachmentSelect