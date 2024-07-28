import { Link } from 'react-router-dom'
import Avatar from './Avatar'

function Navbar({ author }: { author: string }) {
  return (
    <div className='flex justify-between items-center px-10 py-5 border-b border '>
        <div className='text-2xl font-bold'>
          <Link to='/blogs'>
            Medium
          </Link>
        </div>
        <div>
            <Avatar size='medium' author={author} />
        </div>
    </div>
  )
}

export default Navbar