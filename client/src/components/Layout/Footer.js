import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
    <img src='/images/LOGO-WITH-NAAC.png' alt='contactus' style={{ width:'100%', height: '80px', objectFit: 'contain'}}/>
    <p className='text-center mt-3'>
      <Link to ="/about">About</Link> | <Link to='/contact'>Contact</Link>|<Link to='/policy'>Alumini</Link>
    </p>
    </div>
  )
}

export default Footer
