
function Quote() {
  return (
    <div className='h-full flex items-center justify-center p-4 bg-app-green relative overflow-hidden'>
      <div className="reflection-light"></div>
      <div className="max-w-2xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg relative z-10">
        <div className="relative">
          <svg className="absolute top-0 left-0 w-12 h-12 text-white text-opacity-50" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className='text-left text-lg md:text-xl font-serif italic text-white my-6 pl-16'>
            In the tapestry of human experience, each thread weaves a story of joy, sorrow, and growth, creating a masterpiece as unique as the individual who lives it.
          </p>
        </div>
        <div className='flex items-center mt-4'>
          <div className='w-10 h-10 bg-white bg-opacity-30 rounded-full mr-4 flex items-center justify-center'>
            <span className='text-white text-lg font-bold'>U</span>
          </div>
          <div>
            <div className='text-lg font-semibold text-white'>
              Unknown
            </div>
            <div className='text-sm text-white text-opacity-80'>
              Philosopher of Life
            </div>
          </div>
        </div>
      </div>
      <style >{`
        .reflection-light {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: reflectionMove 8s infinite linear;
          transform: rotate(45deg);
        }

        @keyframes reflectionMove {
          0% {
            transform: translateX(-50%) translateY(-50%) rotate(45deg);
          }
          100% {
            transform: translateX(50%) translateY(50%) rotate(45deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Quote