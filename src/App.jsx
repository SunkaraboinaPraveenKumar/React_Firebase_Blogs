import React from 'react'
import Login from './components/Login'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/addblog" element={<AddBlog/>}></Route>
          <Route path="/blogs/:id" element={<SingleBlog/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App