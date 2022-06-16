import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Error.css'

const Error = () => {
    const navigate = useNavigate()
  return (
    <div className='cover'>
       <h1>Hmmm! That doesn't looks good!</h1>
    <div>
        <p>Go back to <a href="" onClick={() => navigate('/')}>Home Page</a></p>
    </div>

    </div>
  )
}

export default Error
