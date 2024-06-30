import React from 'react'
import { auth } from '../Firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // console.log(result)
    navigate('/blogs')
  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <button onClick={googleClick} className="google-login-button">
          <img
            src="https://imgs.search.brave.com/-j5eYj011OQQSXFfjGjkzJfjz6UTQbOfr9NSEnqZ3js/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS0xNjAt/MTg5ODI0LnBuZz9m/PXdlYnAmdz0xMjg" alt="" style={{ width: '10%' }} />
          <span style={{marginLeft:'1rem'}}>Login with Google</span>
        </button>
      </div>
    </>
  )
}

export default Login