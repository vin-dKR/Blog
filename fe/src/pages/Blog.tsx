import { useBlog } from '../hooks'
import InnerBlog from '../components/InnerBlog'
import { useParams } from 'react-router-dom'
import InnerBlogSkeleton from '../components/BlogSkeleton'  

function Blog() {
  const { id } = useParams()
  const { blog, loading, error } = useBlog({ id: Number(id) })

  if (loading) return <div>
    <InnerBlogSkeleton />
  </div>
  if (error) return <div>Error: {error}</div>
  if (!blog) return <div>No blog found</div>

  return (
    <div>
      <InnerBlog blog={blog} />
    </div>
  )
}

export default Blog