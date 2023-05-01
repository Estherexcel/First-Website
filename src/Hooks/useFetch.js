
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect( async () => {
        try {
            setLoading(true)
            const response = await axios.get(url)
            const obj = JSON.parse(response);
            setData(obj)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
            setData([])
        }
    }, [])

}
export default { data, loading, error}