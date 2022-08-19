import {useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import * as actions from '../../../Redux/actions/actions'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Common/navbar'

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currUser = useSelector((state) => state.user)
    
    useEffect(()=>{
        if (!currUser.isLoggedIn) {
            console.log(currUser)
            navigate('/teacher/login')
        }
    },[currUser])

  return (
    <div>
        <Navbar />
        <h1>Hello {currUser.user.name}</h1>
        <button onClick={()=>dispatch(actions.logout())}>LOG OUT</button>

    </div>
  )
}

export default Dashboard