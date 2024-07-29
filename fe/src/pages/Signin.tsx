import Auth from '../components/Auth';
import Quote from '../components/Quote';

function Signin() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className='grid md:grid-cols-2'>
            <div>
              <Auth type='signin'/>
            </div>
            <div className='invisible md:visible'>
              <Quote />
            </div>
        </div>
    </div>
  );
}

export default Signin