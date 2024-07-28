function Quote() {
  return (
    <div className='h-full flex items-center justify-center p-4 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600'>
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl max-w-2xl">
        <div className="relative">
          <svg className="absolute top-0 left-0 w-16 h-16 text-white opacity-20" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className='text-left text-xl md:text-2xl font-serif italic text-white my-6 pl-12'>
            In the tapestry of human experience, each thread weaves a story of joy, sorrow, and growth, creating a masterpiece as unique as the individual who lives it.
          </p>
        </div>
        <div className='flex items-center mt-6'>
          <div className='w-12 h-12 bg-white bg-opacity-30 rounded-full mr-4 flex items-center justify-center'>
            <span className='text-white text-xl font-bold'>X</span>
          </div>
          <div>
            <div className='text-xl font-bold text-white'>
              Unknown
            </div>
            <div className='text-sm text-white text-opacity-80'>
              Philosopher of Life
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote