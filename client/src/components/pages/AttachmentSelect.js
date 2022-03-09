import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const AttachmentSelect = () => {
    const navigate = useNavigate()
    const { gunId } = useParams()

    const [gun, setGun] = useState([])
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
    }, [gunId])

    return (
        <h1></h1>
    )


}

export default AttachmentSelect