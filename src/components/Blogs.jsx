import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { getAuth } from 'firebase/auth'
import { db } from '../Firebase'
import { onSnapshot, collection,doc,deleteDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Blogs = () => {
  const [data, setData] = useState([])
  const collectionRef = collection(db, 'blog')
  useEffect(() => {
    const getData = () => {
      onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        })))
      })
    }
    getData()
    // console.log(data)
  }, [])

  const deletedoc=async (id)=>{
    const data=doc(db,'blog',id);
    alert('Your Blog Will be Deleted Forever!')
    await deleteDoc(data);
    toast.success('Your Blog Post Deleted Successfully!');
  }
  const auth = getAuth()
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
      {
        data.map((data) => {
          return (
            <>
              <div key={data.id} className="container d-flex justify-content-center align-items-center flex-column my-3">
                <div className="container">
                  <div className="user-content d-flex justify-content-center align-items-center">
                    <img src={data.authorImg} alt="" style={{ width: '5%', borderRadius: '50%', margin: '0.5rem' }} />
                    <h3 style={{ marginLeft: '1rem' }}>{data.authorName}</h3>
                  </div>
                </div>
                <div key={data.id} className="card mb-3 bg-secondary" style={{ maxWidth: "700px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                      <img
                        src={data.img}
                        className="img-fluid rounded-start"
                        style={{ width: '70%' }}
                        alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center text-white">
                        <h2 className="card-title">{data.title}</h2>
                        <h3 className="card-text">{data.shortDesc}</h3>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        <Link to={`/blogs/${data.id}`} className='btn btn-primary mx-3'>View More</Link>
                        <button
                        onClick={()=>deletedoc(data.id)}
                        className='btn btn-danger'>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Blogs