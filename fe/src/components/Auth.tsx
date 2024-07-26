import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LabelInput from './LabelInput'
import Button from './Button'
import { SignupSchema } from '@vinodkr/medium-common'

function Auth({ type } : { type: 'signup' | 'signin' }) {
    const [postInput, setPostInput] = useState<SignupSchema>({
        email: '',
        password: '',
        name: ''
    })
  return (
      <div className='h-screen flex justify-center flex-col '>
        {/* {JSON.stringify(postInput)} */}
        <div className="flex justify-center">
            <div className="border border-black-300 rounded-md p-10 bg-slate-200">
            <div className="flex flex-col gap-2 ">
                <div className='flex flex-col gap-2'> 
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className='text-slate-400'>
                        Already have an account? 
                        <Link to={"./signin"} className='text-blue-500 pl-2 underline'>Log in</Link>
                    </div>
                </div>
                <div>
                    <LabelInput 
                        label="Name" 
                        id="name" 
                        name="name" 
                        value="name" 
                        type="name" 
                        placeholder="Name" 
                        required={true} 
                        onChange={(e) => {
                        setPostInput(prev => ({
                            ...prev,
                            name: e.target.value
                        }))
                    }} />
                    <LabelInput 
                        label="Email" 
                        id="email" 
                        name="email" 
                        value="email" 
                        type="email" 
                        placeholder="Email" 
                        required={true} 
                        onChange={(e) => {
                        setPostInput(prev => ({
                            ...prev,
                            email: e.target.value
                        }))
                    }} />
                    <LabelInput 
                        label="Password" 
                        id="password" 
                        name="password" 
                        value="password" 
                        type="password" 
                        placeholder="Password" 
                        required={true} 
                        onChange={(e) => {
                        setPostInput(prev => ({
                            ...prev,
                            password: e.target.value
                        }))
                    }}/>
                </div>
                <div>
                    <Button />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Auth