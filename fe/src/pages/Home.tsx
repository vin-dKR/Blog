import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useBlogs } from '../hooks'
import BlogsSceleton from '../components/BlogsSceleton'
import Navbar from '../components/Navbar'


function Home() {

    const navigate = useNavigate()
    const { loading, blogs } = useBlogs()

    useEffect(() => {
        if (!loading && blogs.length > 0) {
            console.log("User is authenticated, redirecting to /blogs")
            navigate('/blogs', { replace: true })
        }
    }, [loading, blogs, navigate])

    if (loading) {
        return <div>
            <Navbar author={"X"} />
            <BlogsSceleton />
        </div> // Or a more sophisticated loading indicator
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
            {/* Navbar */}
            <nav className="flex justify-between items-center py-4 px-6 bg-white bg-opacity-80 backdrop-blur-md">
                <motion.h1
                    className="text-3xl font-bold text-indigo-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    MediYum
                </motion.h1>
                <div className="space-x-4">
                    <a href="#" className="text-gray-600">Our story</a>
                    <a href="#" className="text-gray-600">Membership</a>
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
            <div className="container mx-auto px-6 py-16 flex items-center">
                <motion.div
                    className="w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-7xl font-serif mb-6 text-indigo-900 leading-tight">Discover <span className="text-purple-600">Human Experience</span><span className="text-yellow-500"> & Ideas</span> </h2>
                    <p className="text-2xl mb-8 text-gray-700">A place to read, write, and deepen your understanding</p>
                    <motion.button
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full text-xl shadow-lg hover:shadow-xl transition duration-300"
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
                    <img src="/right-hero.svg" alt="Decorative illustration" className="w-9/12" />
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="border-t border-purple-200 py-4 text-center text-sm text-indigo-600 bg-white bg-opacity-80 backdrop-blur-md">
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