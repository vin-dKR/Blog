import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LabelInput from './LabelInput'
import Button from './Button'
import { SignupSchema } from '@vinodkr/medium-common'
import axios from 'axios'
import { BACKEND_URL } from '../config'

function Auth({ type }: { type: 'signup' | 'signin' }) {

    const navigate = useNavigate()

    const [postInput, setPostInput] = useState<SignupSchema>({
        email: '',
        password: '',
        name: ''
    })

    async function sendRequest(type: 'signup' | 'signin') {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInput)
            const jwt = response.data
            localStorage.setItem("jwt", jwt)
            navigate("/blog")
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className='h-screen flex justify-center flex-col '>
            {/* {JSON.stringify(postInput)} */}
            <div className="flex justify-center">
                <div className="border border-black-300 rounded-md p-10 bg-slate-200">
                    <div className="flex flex-col gap-2 ">
                        <div className='flex flex-col gap-2'>
                            <div className="text-3xl font-extrabold">
                                {type === "signup" ? "Create an account" : "Welcome back!"}
                            </div>
                            <div className='text-slate-400'>
                                {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                                <Link to={type === "signup" ? "/signin" : "/signup"} className='text-blue-500 pl-2 underline'>{type === "signup" ? "Signin" : "Signup"}</Link>
                            </div>
                        </div>
                        <div>
                            {type === "signup" ?
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
                                    }} /> : ""}
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
                                }} />
                        </div>
                        <div>
                            <Button type={type} onClick={sendRequest} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth