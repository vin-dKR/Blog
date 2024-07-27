import { useEffect, useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config"

interface Blog {
    title: string
    content: string
    author: {
        name: string
    }
}
export const useBlog = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setBlogs(res.data.posts)
                setLoading(false)
            })
    }, [])

    return { 
        loading, 
        blogs 
    }
}