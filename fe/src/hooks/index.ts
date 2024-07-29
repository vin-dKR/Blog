import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


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

export const useBlog = ({ id }: { id: number }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
            .then(response => {
                setBlog(response.data.post);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching blog:', err)
                setError('Failed to fetch blog. Please try again later.')
                setLoading(false)
            })
    }, [id])

    return {
        loading,
        blog,
        error
    }
}

export const useRedirectIfSignedIn = () => {
    const [token, setToken] = useState<string | null>(null)
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('jwt');
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          setToken(String(decodedToken))
          if ((decodedToken.exp ?? 0) * 1000 > Date.now()) {
            navigate('/blogs');
          }
        } catch (error) {
          console.error('Invalid token:', error);
        }
      }
    }, []);

    return {
        token
    }
  }

export function useScrollDirection() {
const [scrollDirection, setScrollDirection] = useState("up");

useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
    const scrollY = window.pageYOffset;
    const direction = scrollY > lastScrollY ? "down" : "up";
    if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
    }
    lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
    window.removeEventListener("scroll", updateScrollDirection);
    };
}, [scrollDirection]);

return scrollDirection;
}