import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../helpers/auth'

const UserProfile = () => {
    const { userId } = useParams()
    const navigate = useNavigate()
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

    const handleClick = () => {
        navigate(`/userprofile/l/${userId}`)
    }

    return (
        <div id="userprofile-wrapper">
            {user ?
                <>
                    <h1>{user.username}'s profile</h1>
                    <div id='flipper'>
                        <h2>Loadouts</h2>
                        <div>{user.loadouts[0].gunID.name}</div>
                        <img src={user.loadouts[0].gunID.image} alt={user.loadouts[0].gunID.name}></img>
                        <ul id="attachment-list">
                            <li>Muzzle  :   Recoil Booster</li>
                            <li>Barrel   :      Short Range</li>
                            <li>Optic   :       Slate Reflector</li>
                            <li>Stock   :       No Stock</li>
                            <li>Underbarrel  : Carver Foregrip</li>
                            <li>Magazine   :    Extended Mags</li>
                            <li>Ammunition   :  Hollow Point</li>
                            <li>Rear Grip   :   Stippled Grip</li>
                            <li>Perk 1   :      Momentum</li>
                            <li>Perk 2   :      Surplus</li>
                        </ul>
                    </div>
                    <button onClick={handleClick}>Delete Loadout</button>

                </>
                :
                <h2>{hasError.error ? 'Please login first' : '.....let\'s pretend this isn\'t taking ages'}</h2>
            }
        </div>
    )
}

export default UserProfile