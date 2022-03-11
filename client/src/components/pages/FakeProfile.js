import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../helpers/auth'

const UserProfile = () => {
    const { userId } = useParams()

    const [user, setUser] = useState(null)
    const [hasError, setHasError] = useState({ error: false, message: '' })

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await axios.get(`/api/auth/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                })
                setUser(data)
            } catch (error) {
                setHasError({ error: true, message: error.message })
            }
        }
        getUser()
    }, [userId])

    return (
        <div id="userprofile-wrapper">
            {user ?
                <>
                    <h1>{user.username}'s profile</h1>
                    <h2>You ain't got no loadouts</h2>
                </>
                :
                <h2>{hasError.error ? 'Please login first' : '.....let\'s pretend this isn\'t taking ages'}</h2>
            }
        </div>
    )
}

export default UserProfile