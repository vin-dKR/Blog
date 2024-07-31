import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom'
import { useBlog } from '../hooks';
import { useRecoilState } from 'recoil';
import { descriptionAtom, titleAtom } from '../store/atoms/atom';

const Edit = () => {
    const [title, setTitle] = useRecoilState(titleAtom);
    const [content, setContent] = useRecoilState(descriptionAtom);
    const { id } = useParams();

    const { blog, loading } = useBlog({ id: Number(id) });

    
    useEffect(() => {
        setTitle(blog?.title || '');
        setContent(blog?.content || '');
    }, [blog]);
    
    if(loading) return <div>Loading...</div>

    return <div>
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto mt-8 px-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    className="w-full text-5xl font-bold mb-4 p-2 border-none outline-none break-words focus:ring-0 placeholder-gray-300 whitespace-normal overflow-hidden"
                    onChange={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                        setTitle(e.target.value)
                    }}
                />
                <textarea
                    placeholder="Tell your story..."
                    className="w-full text-xl mt-4 p-2 border-none outline-none focus:ring-0 placeholder-gray-300 resize-none overflow-hidden"
                    rows={1}
                    style={{ minHeight: '200px' }}
                    value={content}
                    onChange={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                        setContent(e.target.value)
                    }}
                />
            </div>
        </div>
    </div>
}

export default Edit