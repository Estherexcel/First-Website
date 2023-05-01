import axios from 'axios'
import React, { useEffect } from 'react'
import useFetch from '../Hooks/useFetch'

const Test = () => {
    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
    console.log(data, 'data')
  
  return (
    <div>
        {/* {
            data.map
        } */}
    </div>
  )
}

export default Test