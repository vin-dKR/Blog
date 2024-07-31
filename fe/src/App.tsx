import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Signup from './pages/Signup'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import { RecoilRoot } from 'recoil'
import Home from './pages/Home'
import Edit from './pages/Edit'


function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/blog/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App