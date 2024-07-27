import React from 'react'
import Quote from '../components/Quote'
import Auth from '../components/Auth'

function Signup() {
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
              <Auth type='signup'/>
            </div>
            <div className='invisible md:visible'>
              <Quote />
            </div>
        </div>
    </div>
  )
}

export default Signup