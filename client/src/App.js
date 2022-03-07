import React, { useEffect } from 'react'
import axios from 'axios'

function App() {
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('/api/guns/') // * <-- replace with your endpoint
            console.log(data)
        }
        getData()
    })

    return <h1>Pleeease</h1>
}

export default App
