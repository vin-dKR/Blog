import { motion } from 'framer-motion'
import { Link, Navigate, } from 'react-router-dom'
import { useRedirectIfSignedIn } from '../hooks'



function Home() {

    // if user is already signed in, redirect to /blogs
    const { token } = useRedirectIfSignedIn()

    if (token) {
        return <Navigate to="/blogs" />
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 fixed top-0 w-full">
            {/* Navbar */}
            <nav className="flex justify-between items-center py-4 px-6 bg-white bg-opacity-80 backdrop-blur-md ">
                <motion.h1
                    className="text-3xl font-bold text-indigo-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    MediYum
                </motion.h1>
                <div className="space-x-4">
                    <a href="#" className="text-gray-600 hidden sm:inline">Our story</a>
                    <a href="#" className="text-gray-600 hidden sm:inline">Membership</a>
                    <Link to="/signin" className="text-gray-600">Sign in</Link>
                    <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-full">Get started</Link>
                </div>
            </nav>

            {/* Banner */}
            <motion.div
                className="bg-gradient-to-r from-yellow-300 to-orange-400 py-3 text-center text-white font-bold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p>Be part of a better internet. <a href="mailto:vinodkumarmurmu@gmail.com" className="underline">Get 20% OFF: Hire Me NOW!</a></p>
            </motion.div>

            {/* Main content */}
            <div className="container mx-auto px-6 pt-28 flex items-center">
                <motion.div
                    className="w-1/2 md:w-4/5 m-7"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-7xl font-serif mb-6 text-indigo-900 leading-tight md:text-8xl ">Discover <span className="text-purple-600">Human Experience</span><span className="text-yellow-500"> & Ideas</span> </h2>
                    <p className="text-2xl mb-8 text-gray-700">A place to read, write, and deepen your understanding</p>
                    <motion.button
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full text-xl shadow-lg hover:shadow-xl transition duration-300 md:mt-20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/signup">Start reading</Link>
                    </motion.button>
                </motion.div>
                <motion.div
                    className="w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <motion.div
                        className="w-full mt-12 md:w-full flex justify-center items-center md:-mt-8 lg:-mt-12"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <motion.img
                            src="/right-hero.svg"
                            alt="Decorative illustration"
                            className="w-full md:w-full lg:w-11/12"
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="border-t border-purple-200 py-4 text-center text-sm text-indigo-600 bg-white bg-opacity-80 backdrop-blur-md sticky top-[100vh]">
                <div className="space-x-4">
                    <a href="#">Help</a>
                    <a href="#">Status</a>
                    <a href="#">About</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Text to speech</a>
                    <a href="#">Teams</a>
                </div>
            </footer>
        </div>
    )
}

export default Home