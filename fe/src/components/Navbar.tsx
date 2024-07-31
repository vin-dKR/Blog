import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Avatar from './Avatar'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { descriptionAtom, loadingState, titleAtom } from '../store/atoms/atom';
import axios from 'axios';
import { BACKEND_URL } from '../config';

function Navbar() {
  const title = useRecoilValue(titleAtom);
  const description = useRecoilValue(descriptionAtom);
  const authorr = localStorage.getItem("name")

  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // loading state used in the update button in Edit.tsx
  const setLoading = useSetRecoilState(loadingState);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate('/');
  };

  const { id } = useParams();

  // dropdown functionality
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // onClick function for the update button
  const handleOnClick = () => {
    setLoading(true);
    axios.put(`${BACKEND_URL}/api/v1/blog`, {
      id: Number(id),
      title,
      content: description
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    })
      .then(response => {
        console.log('Blog updated successfully:', response.data);
        navigate(`/blog/${id}`);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error updating blog:', error);
        setLoading(false);
      })
  }

  return (
    <div className='flex justify-between items-center px-10 py-5 border-b border '>
      <div className='text-2xl font-bold'>
        <Link to='/blogs'>
          MediYum
        </Link>
      </div>
      <div className='flex items-center'>
        {window.location.pathname.startsWith("/blog/edit/") && (
          <button
            className="mx-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out flex items-center"
            onClick={ handleOnClick }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Update
          </button>
        )}
        {!window.location.pathname.startsWith("/publish") && !window.location.pathname.startsWith("/blog/edit/") && (
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
        <div className="relative" ref={dropdownRef}>
          <div
            className="cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <Avatar size='medium' author={authorr || ""} />
          </div>
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
              <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
              <hr className="my-1 border-gray-200" />
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar