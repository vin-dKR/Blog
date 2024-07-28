import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";


export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "createdAt": Date
    "author": {
        "name": string
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
            .then(response => {
                setBlogs(response.data.posts);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching blogs:', err)
                setError('Failed to fetch blogs. Please try again later.')
                setLoading(false)
            })
    }, [])

    return {
        loading,
        blogs,
        error
    }
}