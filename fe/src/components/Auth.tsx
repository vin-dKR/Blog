import { useState } from 'react'
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
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInput, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const jwt = response.data.jwt
            // const email = response.data.email
            const name = response.data.name

            if (jwt && jwt.length > 0) {
                localStorage.setItem("jwt", jwt)
                localStorage.setItem("name", name)
                navigate("/blogs")
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data || error.message)
            } else {
                console.log('An unexpected error occurred')
            }
        }
    }
    return (
        <div className='h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-green-100'>
            <div className='w-full max-w-md mx-auto p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-xl shadow-xl'>
                <div className="space-y-8">
                    <div>
                        <h2 className="text-center text-3xl font-bold text-gray-800">
                            {type === "signup" ? "Create an account" : "Welcome back!"}
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-700">
                            {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                            <Link to={type === "signup" ? "/signin" : "/signup"} className="font-medium text-blue-700 hover:text-blue-600 ml-1">
                                {type === "signup" ? "Sign in" : "Sign up"}
                            </Link>
                        </p>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); sendRequest(type); }}>
                        {type === "signup" && (
                            <LabelInput
                                label="Name"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                required={true}
                                onChange={(e) => setPostInput(prev => ({ ...prev, name: e.target.value }))}
                            />
                        )}
                        <LabelInput
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email address"
                            required={true}
                            onChange={(e) => setPostInput(prev => ({ ...prev, email: e.target.value }))}
                        />
                        <LabelInput
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required={true}
                            onChange={(e) => setPostInput(prev => ({ ...prev, password: e.target.value }))}
                        />
                        <div className='mt-6'>
                            <Button
                                type={type}
                                onClick={() => sendRequest(type)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth