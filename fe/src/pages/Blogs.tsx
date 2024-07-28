import BlogCard from '../components/BlogCard'
import BlogsSceleton from '../components/BlogsSceleton'
import Navbar from '../components/Navbar'
import { useBlogs } from '../hooks'

function Blogs() {
    const { loading, blogs } = useBlogs()
    const author = "Author Name"

    if (loading) { 
        return <div>
            <BlogsSceleton />
        </div>
    }
    return (
        <div>
            <Navbar author={author} />
            {blogs.map((blog) => (
                //outer card in "/blogs"
                <BlogCard
                    id={blog.id}
                    title={blog.title}
                    description={blog.content}
                    author={blog.author.name}
                    date={blog.createdAt ? new Date(blog.createdAt) : undefined}
                />
            ))}
        </div>
    )
}

export default Blogs