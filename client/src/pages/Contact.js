import React from 'react'
import Layout from '../components/Layout/layout';
import { BiMailSend } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";



const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img src='/images/contactus.jpg' alt='contactus' style={{ width:'100%' }}/>
        </div>
    <div className='col-md-4'>
      <h1 className='bg-dark p-2 text-white text-center'>Contact Us</h1>
      <p className='text-justify mt-2'>Any query and info about productfeel free to call anytime we 24x7 available</p>
      <p className='mt-3'>
        <BiMailSend/> : www.help@ecommerceapp.com
      </p>
      <p className='mt-3'>
        <BiPhoneCall/> : 012-3456789
      </p>
      <p className='mt-3'>
        <BiSupport/> : 1800-0000-0000 (toll-free)
      </p>
       </div>
      </div>
    </Layout>
  )
}

export default Contact
