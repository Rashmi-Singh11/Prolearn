import React from 'react'
import Layout from '../components/Layout/layout';
import {Link} from 'react-router-dom'
const Pagenotfound = () => {
  return (
    <Layout title={'GO BACK-Page not found'}>
    <div className='pnf'>
      <h1 className='pnf-title'>404</h1>
      <h2 className='pnf-heading'>Oops ! page not found</h2>
      <Link to='/' className='pnf-btn'>
        Go Back
      </Link>
    </div>
    </Layout>
  )
}

export default Pagenotfound
