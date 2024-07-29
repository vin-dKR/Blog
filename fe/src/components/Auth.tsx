import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LabelInput from './LabelInput'
import Button from './Button'
import { SignupSchema } from '@vinodkr/medium-common'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../store/atoms/atom';


function Auth({ type }: { type: 'signup' | 'signin' }) {

    const navigate = useNavigate()

    const [postInput, setPostInput] = useState<SignupSchema>({
        email: '',
        password: '',
        name: ''
    })

    const setUser = useSetRecoilState(userAtom);

    async function sendRequest(type: 'signup' | 'signin') {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInput, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const jwt = response.data
            setUser(jwt)
            localStorage.setItem("jwt", jwt)
            navigate("/blogs")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data || error.message)
            } else {
                console.log('An unexpected error occurred')
            }
        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8'>
            <div className="max-w-md w-full space-y-8 bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-xl shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
                        {type === "signup" ? "Create an account" : "Welcome back!"}
                    </h2>
                    <p className="mt-2 text-center text-sm text-white text-opacity-80">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                        <Link to={type === "signup" ? "/signin" : "/signup"} className="font-medium text-white hover:text-opacity-90 transition-colors duration-300 ml-1">
                            {type === "signup" ? "Sign in" : "Sign up"}
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); sendRequest(type); }}>
                    <div className="rounded-md shadow-sm -space-y-px">
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
                    </div>

                    <div>
                        <Button
                            type={type}
                            onClick={() => sendRequest(type)}
                        >
                            {/* {type === "signup" ? "Sign up" : "Sign in"} */}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth