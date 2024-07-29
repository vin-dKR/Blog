import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userAtom } from './store/atoms/atom'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Signup from './pages/Signup'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import { RecoilRoot } from 'recoil'
import Home from './pages/Home'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  
  return <>{children}</>
}

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="/blogs" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
          <Route path="/publish" element={<ProtectedRoute><Publish /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App