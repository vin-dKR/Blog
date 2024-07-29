import { useScrollDirection } from '../hooks'
import BlogCard from '../components/BlogCard'
import BlogsSceleton from '../components/BlogsSceleton'
import Navbar from '../components/Navbar'
import { useBlogs } from '../hooks'

function Blogs() {
    const { loading, blogs } = useBlogs()
    const scrollDirection = useScrollDirection()

    if (loading) { 
        return <div>
            <div className={`sticky top-0 transition-transform duration-300 ${
                scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
            }`}>
                <Navbar />
            </div>
            <BlogsSceleton />
            <BlogsSceleton />
            <BlogsSceleton />
            <BlogsSceleton />
        </div>
    }
    return (
        <div>
            <div className={`sticky top-0 transition-transform duration-300 ${
                scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
            }`}>
                <Navbar />
            </div>
            {blogs.map((blog) => (
                //outer card in "/blogs"
                <BlogCard
                    key={blog.id}
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