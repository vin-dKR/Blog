import Avatar from './Avatar'

function Navbar({ author }: { author: string }) {
  return (
    <div className='flex justify-between items-center px-10 py-5 border-b border '>
        <div className='text-2xl font-bold'>
            Medium
        </div>
        <div>
            <Avatar size='medium' author="Author" />
        </div>
    </div>
  )
}

export default Navbar