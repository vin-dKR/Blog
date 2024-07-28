import { useRecoilValue } from 'recoil'
import BlogCard from '../components/BlogCard'
import BlogsSceleton from '../components/BlogsSceleton'
import Navbar from '../components/Navbar'
import { useBlogs } from '../hooks'
import { authorAtom } from '../store/atoms/atom'

function Blogs() {
    const { loading, blogs } = useBlogs()
    const author = useRecoilValue(authorAtom)

    if (loading) { 
        return <div>
            <Navbar author='X' />
            <BlogsSceleton />
            <BlogsSceleton />
            <BlogsSceleton />
            <BlogsSceleton />
        </div>
    }
    return (
        <div>
            <Navbar author={author} />
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