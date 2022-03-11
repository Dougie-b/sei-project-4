import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const AttachmentSelect = () => {
    const navigate = useNavigate()
    const { gunId } = useParams()

    const [gun, setGun] = useState('')
    const [hasError, setHasError] = useState({ error: false, message: '' })
    // const [attachments, setAttachments] = useState([])

    useEffect(() => {
        const getSingleGun = async () => {
            try {
                const { data } = await axios.get(`/api/guns/${gunId}`)
                setGun(data)
            } catch (error) {
                setHasError({ error: true, message: error.message })
            }
        }
        getSingleGun()
    }, [gunId])

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


    const handleClick = async (e) => {
        e.preventDefault()
        navigate(`/userprofile/1`)
    }

    return (
        <div id='attachmentselect-wrapper'>
            {gun ?
                <>
                    <div id='attachment-gun-highlight'>
                        <h1>{gun.name} - {gun.type}</h1>
                        <img src={gun.image} alt={gun.name}></img>
                    </div>
                    <div id="attachment-select">
                        <div id='firsthalf'>
                            <select className="select" id="muzzle">
                                <option disabled selected>Muzzle</option>
                                <option value='13'>Recoil Booster</option>
                                <option value='3'>Mercury Silencer</option>
                            </select>
                            <select className="select" id="barrel">
                                <option disabled selected>Barrel</option>
                                <option value='5'>Long Range</option>
                                <option value='14'>Short Range</option>
                            </select>
                            <select className="select" id="optic">
                                <option disabled selected>Optic</option>
                                <option value='1'>Slate Reflector</option>
                                <option value='20'>G16 2.5x</option>
                            </select>
                            <select className="select" id="stock">
                                <option disabled selected>Stock</option>
                                <option value='4'>No Stock</option>
                                <option value='15'>Padded Stock</option>
                            </select>
                            <select className="select" id="underbarrel">
                                <option disabled selected>Underbarrel</option>
                                <option value='7'>Carver Foregrip</option>
                                <option value='16'>Bayonet</option>
                            </select>
                        </div>
                        <div id='secondhalf'>
                            <select className="select" id="magazine">
                                <option disabled selected>Magazine</option>
                                <option value='17'>Fast Mags</option>
                                <option value='8'>Extended Mags</option>
                            </select>
                            <select className="select" id="ammunition">
                                <option disabled selected>Ammunition</option>
                                <option value='6'>Incendiary</option>
                                <option value='18'>Hollow Point</option>
                            </select>
                            <select className="select" id="rear-grip">
                                <option disabled selected>Rear Grip</option>
                                <option value='2'>Stippled Grip</option>
                                <option value='19'>Taped Grip</option>
                            </select>
                            <select className="select" id="perk1">
                                <option disabled selected>Perk 1</option>
                                <option value='10'>Momentum</option>
                                <option value='9'>Gung-ho</option>
                            </select>
                            <select className="select" id="perk2">
                                <option disabled selected>Perk 2</option>
                                <option value='12'>Reach</option>
                                <option value='11'>Surplus</option>
                            </select>
                        </div>
                    </div>
                    <div id='fakebutton' onClick={handleClick}>Save to Loadout!</div>
                </>
                :
                <h2>{hasError.error ? 'Please login first' : 'Now i\'m loading, yes i\'m the real loading, so won\'t the real loading please stand up'}</h2>
            }
        </div>
    )
}

export default AttachmentSelect