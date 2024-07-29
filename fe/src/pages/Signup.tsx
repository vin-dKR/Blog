import Quote from '../components/Quote'
import Auth from '../components/Auth'

function Signup() {
  return (
    <div className="h-screen w-screen overflow-hidden ">
      <div className='grid md:grid-cols-2'>
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