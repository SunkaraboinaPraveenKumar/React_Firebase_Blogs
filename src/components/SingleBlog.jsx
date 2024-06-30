import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase'
import { getDoc, doc, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
const SingleBlog = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const colref = collection(db, 'blog')
  useEffect(() => {
    const singledata = doc(db, 'blog', id)
    const singleFetch = () => {
      getDoc(singledata).then((doc) => setData(doc.data()))
    }
    singleFetch()
  }, [id])

  return (
    <>
    <NavBar/>
      <div className="container d-flex justify-content-center align-items-center gap-5 my-4">
        <div className="left-img">
          <img src={data.img} alt="firebase" className='img-fluid' style={{width:'100%'}} />
        </div>
        <div className="right-data">
          <div className="user-content d-flex justify-content-space-between align-items-center">
            <img src={data.authorImg} alt="" style={{ width: '5%', borderRadius: '50%', margin: '0.5rem' }} />
            <h4 style={{ marginLeft: '1rem' }}>{data.authorName}</h4>
          </div>
          <div className='text-center'>
          <h2>{data.title}</h2>
          <h3>{data.shortDesc}</h3>
          <h5>{data.fullDesc}</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog