import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const GunSelect = () => {
    const [guns, setGuns] = useState([])
    const [updatedGuns, setUpdatedGuns] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [attachments, setAttachments] = useState([])
    // const [filteredAttachments, setFilteredAttachments] = useState([])
    const [hasError, setHasError] = useState({ error: false, message: '' })

    useEffect(() => {
        const getGuns = async () => {
            try {
                const { data } = await axios.get('/api/guns')
                setGuns(data)
                setUpdatedGuns(data)
            } catch (error) {
                setHasError({ error: true, message: error.message })
            }
        }
        getGuns()
    }, [])

    const handleChange = (event) => {
        const filteredGuns = guns.filter((guns) => {
            return guns.type <= (event.target.value)
        })
        setUpdatedGuns(filteredGuns)
    }


    useEffect(() => {
        const getAttachments = async () => {
            try {
                const { data } = await axios.get('/api/attachments')
                setAttachments(data)
            } catch (error) {
                setHasError({ error: true, message: error.message })
            }
        }
        getAttachments()
    }, [])


    return (
        <div id="gunselect-wrapper">
            {/* <h1>{filteredAttachments}</h1> */}
            <div onChange={handleChange}>
                <h2>Weapon Select</h2>
                <select className="type=select">
                    <option value="" disabled selected >Choose Weapon Class</option>
                    <option value="AR">Assault Rifle</option>
                    <option value="SMG">Submachine Gun</option>
                </select>
            </div>
            <ul className="gun-list"></ul>
            {updatedGuns && updatedGuns.map(gun => {
                const { name, type, image } = gun
                return (
                    <div>
                        <h3>{name} - {type}</h3>
                        <Link to={`/attachmentselect/${gun.id}`}>{image}</Link>
                    </div>
                )
            })}
        </div>
    )

}

export default GunSelect