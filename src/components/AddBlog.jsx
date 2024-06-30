import React, { useState } from 'react'
import NavBar from './NavBar'
import { db } from '../Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddBlog = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [formData, setFormData] = useState({
    title: '',
    shortDesc: '',
    fullDesc: '',
    img: '',
    authorName: auth?.currentUser?.displayName,
    authorImg: auth?.currentUser?.photoURL
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // console.log(formData)
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formRef = collection(db, 'blog');
    try {
      await addDoc(formRef, formData);
      toast.success('Your Blog Added Successfully!');
      setTimeout(()=>{
        navigate('/blogs');
      },2500)
    } catch (error) {
      toast.error('Error adding blog, please try again.');
      console.error("Error adding document: ", error);
    }
  }
  
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <NavBar />
      <div className="container my-3" style={{ width: '60%', lineHeight: '1rem' }}>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input
              value={formData.title}
              name='title'
              onChange={handleChange}
              type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Short Description</label>
            <input
              name='shortDesc'
              onChange={handleChange}
              value={formData.shortDesc}
              type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Full Description</label>
            <textarea
              name='fullDesc'
              onChange={handleChange}
              value={formData.fullDesc}
              className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Image URL</label>
            <input
              name='img'
              onChange={handleChange}
              value={formData.img}
              type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <button type="submit" className="btn btn-primary">Add Blog</button>
        </form>
      </div>
    </>
  )
}

export default AddBlog