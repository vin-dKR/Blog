import Navbar from './Navbar'
import Avatar from './Avatar'

interface BlogCardProps {
    title: string
    description: string
    author: string
    date: string
}

function BlogCard({title, description, author, date}: BlogCardProps) {
  return (
    <div>
        <div className='flex flex-col w-1/2 mx-auto mt-3'>
            <div className='flex flex-col border-b border-gray-200 pb-5 '>
                <div className='flex items-center gap-3'>
                    <Avatar size='small' author={author} />
                    <p>{author}</p>
                    <span>•</span>
                    <p className='text-gray-500'>{date}</p>
                </div>
                <div className='mt-3'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                </div>
                <div className='text-sm text-gray-500'>
                    <p>{description.slice(0,100)}...</p>
                </div>
                <div className='text-sm text-gray-500 mt-4'>
                    {`${Math.ceil(description.length / 100)} min(s) read`}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard