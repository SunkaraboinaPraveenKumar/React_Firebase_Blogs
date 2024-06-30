import React from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate,useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const navigate=useNavigate();
  const location=useLocation()
  const auth=getAuth();
  const logOut=()=>{
    auth.signOut();
    navigate("/")
  }
  return (
    <>
    <div className='bg-primary d-flex align-items-center p-2' style={{justifyContent:'space-between'}}>
      <div className="user-content d-flex justify-content-center align-items-center">
      <img src={auth?.currentUser?.photoURL} alt="" style={{width:'15%',borderRadius:'50%'}}/>
      <h3 style={{marginLeft:'1rem'}}>{auth?.currentUser?.displayName}</h3>
      </div>
      <div className="email d-flex justify-content-center align-items-center" style={{gap:'1rem'}}>
        {
          location.pathname==='/blogs'&&
          (<Link to={'/addblog'} className='btn btn-warning'>Add Blog</Link>)
        }
        {
          location.pathname!=='/blogs'&&
          (<Link to={'/blogs'} className='btn btn-warning'>Back To Blogs</Link>)
        }
        <h3>{auth?.currentUser?.email}</h3>
        <button onClick={logOut} className='btn btn-danger'>Log Out</button>
      </div>
    </div>
    </>
  )
}

export default NavBar