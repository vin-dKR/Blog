import Avatar from "./Avatar"
import Navbar from "./Navbar"

interface Blog {
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    author: {
        name: string
    }
}

function InnerBlog({ blog }: { blog: Blog }) {
    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <div className="flex items-center mb-6 justify-between">
                    <div>
                        <Avatar size='small' author={blog.author.name} />
                        <span className="mx-2 text-lg font-semibold">{blog.author.name}</span>
                        <span className="mx-1 text-lg text-gray-600">·</span>
                        <span className="ml-2 text-sm text-gray-600">{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div>
                        <button className="ml-4 flex items-center space-x-1 text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <span>Edit</span>
                        </button>
                    </div>
                </div>
                <div className="border-t border-b border-gray-300 py-4 mb-6 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                            <span>Like</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>Comment</span>
                        </button>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{Math.ceil(blog.content.split(' ').length / 200)} min read</span>
                        <span>{Math.floor(Math.random() * 1000)} views</span>
                    </div>
                </div>
                <div className="prose prose-lg">
                    {blog.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default InnerBlog