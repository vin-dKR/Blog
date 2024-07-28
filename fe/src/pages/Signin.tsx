import { motion } from 'framer-motion';
import Auth from '../components/Auth';
import Quote from '../components/Quote';

function Signin() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 relative">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-[5%] left-[5%] w-16 h-16 bg-white opacity-10 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[5%] w-24 h-24 bg-white opacity-10 rounded-full"
          animate={{ scale: [1, 1.3, 1], rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        {/* Add more decorative elements as needed */}
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 relative z-10'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Auth type='signin'/>
        </motion.div>
        <motion.div
          className='hidden lg:block'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Quote />
        </motion.div>
      </div>
    </div>
  );
}

export default Signin