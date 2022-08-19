import React from 'react'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div>
        <a href="#" onClick={()=>navigate('/student/dashboard')} >Dashboard</a><br />
        <a href="#" onClick={()=>navigate('/student/doubts')} >Doubts</a><br />
        <a href="#" onClick={()=>navigate('/student/lectures')} >Lectures</a><br />
        <a href="#" >Dashboard</a><br />
        <a href="#" >Dashboard</a><br />

    </div>
  )
}

export default Navbar
