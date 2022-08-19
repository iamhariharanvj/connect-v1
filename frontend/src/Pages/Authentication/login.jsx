import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {useState} from "react"
import { loginRequest } from "../../Middleware/API/authenticaton"
import * as actions from "../../Redux/actions/actions"
export function StudentLogin() {


  const currUser = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(currUser)
    if (currUser.isLoggedIn){navigate(`/${currUser.user.role}/dashboard`)}
  },[currUser])

  const [user,setUser] = useState(
    {
      email: "",
      password: "",
      role: "student",
  })


  const loginUser = async (e)=>{
    e.preventDefault()
    if (user.email === "" || user.password === "" ){
      alert("Please enter all the information")
    }
    else{
      const response = await loginRequest(user)
      if (response.status === "OK"){
        dispatch(actions.login(response.data))
      }
      else{
        console.log(response.message)
        alert(response.data)
      }

    }


    
  }




  return (
    <div>
        <h1>Student Login</h1>
        <form>
        <input type="email"    value={user.email}    onChange={e=> setUser({...user, email: e.target.value})}    placeholder="Enter Email" required />     <br />
        <input type="password" value={user.password} onChange={e=> setUser({...user, password: e.target.value})} placeholder="Enter password" required />  <br />
        <input type="submit" id="btnLogin" onClick={e=> loginUser(e)} />
        
        </form>
    </div>
  )
}


export  function TeacherLogin() {
  
  const currUser = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {

    if (currUser.isLoggedIn){navigate(`/${currUser.user.role}/dashboard`)}

  },[currUser])


  const [user,setUser] = useState(
    {
      email: "",
      password: "",
      role: "teacher",
      isSpecial: false,
  })




  const loginUser = async (e)=>{
    e.preventDefault()
    if (user.name === "" || user.email === "" || user.password === "" ){
      alert("Please enter all the information")
    }
    else{
      const response = await loginRequest(user)
      if (response.status === "OK"){
        dispatch(actions.login(response.data))

      }
      else{
        console.log(response.message)
        alert(response.data)
      }

    }


    
  }




  return (
    <div>
        <h1>Teacher Login</h1>
        <form>
        <input type="email"    value={user.email}    onChange={e=> setUser({...user, email: e.target.value})}    placeholder="Enter Email" required />     <br />
        <input type="password" value={user.password} onChange={e=> setUser({...user, password: e.target.value})} placeholder="Enter password" required />  <br />
        <input type="submit" id="btnLogin" onClick={e=> loginUser(e)} />
        
        </form>
    </div>
  )
}

