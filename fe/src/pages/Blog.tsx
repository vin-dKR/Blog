import React from 'react'
import { useBlog } from '../hooks'
import InnerBlog from '../components/InnerBlog'
import { useParams } from 'react-router-dom'

function Blog() {
  const { id } = useParams()
  const { blog, loading, error } = useBlog({ id: Number(id) })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!blog) return <div>No blog found</div>

  return (
    <div>
      <InnerBlog blog={blog} />
    </div>
  )
}

export default Blog