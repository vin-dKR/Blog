import { Link, useNavigate } from 'react-router-dom'
import Avatar from './Avatar'
import { useRecoilValue } from 'recoil';
import { descriptionAtom, titleAtom } from '../store/atoms/atom';
import axios from 'axios';
import { BACKEND_URL } from '../config';

function Navbar({ author }: { author: string }) {
  const title = useRecoilValue(titleAtom);
  const description = useRecoilValue(descriptionAtom);

  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center px-10 py-5 border-b border '>
      <div className='text-2xl font-bold'>
        <Link to='/blogs'>
          Medium
        </Link>
      </div>
      <div className='flex items-center'>
        {window.location.pathname !== "/publish" && (
          <Link to="/publish" className="mx-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 ease-in-out flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Write
          </Link>
        )}
        {window.location.pathname === "/publish" && (
          <button 
            className="mx-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 ease-in-out flex items-center"
            onClick={() => {
              axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description
              }, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
              })
              .then(response => {
                console.log('Blog published successfully:', response.data);
                navigate(`/blog/${response.data.id}`);
              })
              .catch(error => {
                console.error('Error publishing blog:', error);
              });
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Publish
          </button>
        )}
        <Avatar size='medium' author={author} />
      </div>
    </div>
  )
}

export default Navbar