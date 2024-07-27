import React from 'react'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import { useBlog } from '../hooks/useBlog'

function Blogs() {
    const { loading, blogs } = useBlog()
    const author = "Author Name"

    if (loading) { 
        return <div>Loading...</div> 
    }
    return (
        <div>
            <Navbar author={author} />
            <BlogCard
                title='Make faucking website like no one did ever.'
                description='This is a description of the blog post. It is a long description that will be used to describe the blog post.'
                author='Author Name'
                date='Date'
            />
            <BlogCard
                title='Make faucking website like no one did ever.'
                description='This is a description of the blog post. It is a long description that will be used to describe the blog post.'
                author='Author Name'
                date='Date'
            />
            <BlogCard
                title='Make faucking website like no one did ever.'
                description='This is a description of the blog post. It is a long description that will be used to describe the blog post.'
                author='Author Name'
                date='Date'
            />
            <BlogCard
                title='Make faucking website like no one did ever.'
                description='This is a description of the blog post. It is a long description that will be used to describe the blog post.'
                author='Author Name'
                date='Date'
            />
        </div>
    )
}

export default Blogs