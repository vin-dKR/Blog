import React from 'react'
import Quote from '../components/Quote'
import Auth from '../components/Auth'

function Signin() {
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
              <Auth type='signin'/>
            </div>
            <div className='invisible md:visible'>
              <Quote />
            </div>
        </div>
    </div>
  )
}

export default Signin