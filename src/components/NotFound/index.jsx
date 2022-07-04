import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h3>Page not found</h3>
        <button><Link to='/'>Return</Link></button>
    </div>
  )
}

export default NotFound