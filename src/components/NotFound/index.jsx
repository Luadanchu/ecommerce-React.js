import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='page_404'>
      <div className='four_zero_four_bg'>
        <h2>404</h2>
      </div>
      <div className='contant_box_404'>
        <h3 className='h2'>Look like you're lost</h3>
        <p>The page you are looking for is not avaible!</p>
        <button className='link_404'><Link to='/'>Return</Link></button>
      </div>
    </div>
  )
}

export default NotFound