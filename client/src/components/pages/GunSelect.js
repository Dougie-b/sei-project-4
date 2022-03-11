import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GunSelect = () => {
    const [guns, setGuns] = useState([])
    const [updatedGuns, setUpdatedGuns] = useState([])
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
            if (event.target.value === "")
                return guns.type
            return guns.type === (event.target.value)
        })
        setUpdatedGuns(filteredGuns)
    }

    return (
        <div id="gunselect-wrapper">
            {guns ?
                <div onChange={handleChange}>
                    <h2>Weapon Select</h2>
                    <select id='gun-select' className="type=select">
                        <option value="" selected >All</option>
                        <option value="AR">Assault Rifle</option>
                        <option value="SMG">Submachine Gun</option>
                    </select>
                </div>
                :
                <h2>{hasError.error ? 'Something funny goin on here' : 'Livin in a loading paradise'}</h2>
            }
            <ul className="gun-list"></ul>
            {updatedGuns && updatedGuns.map((gun, i) => {
                const { name, type, image } = gun
                if (i <= 3) {
                    return (
                        <div>
                            <a id='gun-name' href={`/attachmentselect/${gun.id}`}>
                                <h3>{name} - {type}</h3>
                                <img src={image} alt={name}></img>
                            </a>
                        </div>
                    )
                }
                else console.log('yikes dawg')
            })}
        </div>
    )
}

export default GunSelect