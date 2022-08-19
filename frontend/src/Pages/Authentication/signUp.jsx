import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {useState} from "react"
import { signUpRequest } from "../../Middleware/API/authenticaton"
import * as actions from "../../Redux/actions/actions"

export function StudentSignUp() {


  const currUser = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(currUser)
    if (currUser.isLoggedIn){navigate(`/${currUser.user.role}/dashboard`)}
  },[currUser])

  const [user,setUser] = useState(
    {
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      pincode: "",
      role: "student",
      isSpecial: false,
  })


  const signUpUser = async (e)=>{
    e.preventDefault()
    if (user.name === "" || user.email === "" || user.password === "" || user.phone === "" || user.pincode === "" ){
      alert("Please enter all the information")
    }
    else{
      const response = await signUpRequest(user)
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
        <h1>Student Sign Up</h1>
        <form>
        <input type="text"     value={user.name}     onChange={e=> setUser({...user, name: e.target.value})}     placeholder="Enter Name" required />      <br /> 
        <input type="text"     value={user.username} onChange={e=> setUser({...user, username: e.target.value})} placeholder="Enter Username" required />  <br />
        <input type="email"    value={user.email}    onChange={e=> setUser({...user, email: e.target.value})}    placeholder="Enter Email" required />     <br />
        <input type="password" value={user.password} onChange={e=> setUser({...user, password: e.target.value})} placeholder="Enter password" required />  <br />
        <input type="number"   value={user.phone}    onChange={e=> setUser({...user, phone: e.target.value})}    placeholder="Enter Phone" required />     <br />
        <input type="number"   value={user.pincode}  onChange={e=> setUser({...user, pincode: e.target.value})}  placeholder="Enter Pincode" required />   <br />
        <input type="submit" id="btnSignUp" onClick={e=> signUpUser(e)} />
        
        </form>
    </div>
  )
}


export  function TeacherSignUp() {
  
  const currUser = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {

    if (currUser.isLoggedIn){navigate(`/${currUser.user.role}/dashboard`)}

  },[currUser])


  const [user,setUser] = useState(
    {
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      pincode: "",
      role: "teacher",
      isSpecial: false,
  })




  const signUpUser = async (e)=>{
    e.preventDefault()
    if (user.name === "" || user.email === "" || user.password === "" || user.phone === "" || user.pincode === "" ){
      alert("Please enter all the information")
    }
    else{
      const response = await signUpRequest(user)
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
        <h1>Student Sign Up</h1>
        <form>
        <input type="text"     value={user.name}     onChange={e=> setUser({...user, name: e.target.value})}     placeholder="Enter Name" required />      <br /> 
        <input type="text"     value={user.username} onChange={e=> setUser({...user, username: e.target.value})} placeholder="Enter Username" required />  <br />
        <input type="email"    value={user.email}    onChange={e=> setUser({...user, email: e.target.value})}    placeholder="Enter Email" required />     <br />
        <input type="password" value={user.password} onChange={e=> setUser({...user, password: e.target.value})} placeholder="Enter password" required />  <br />
        <input type="number"   value={user.phone}    onChange={e=> setUser({...user, phone: e.target.value})}    placeholder="Enter Phone" required />     <br />
        <input type="number"   value={user.pincode}  onChange={e=> setUser({...user, pincode: e.target.value})}  placeholder="Enter Pincode" required />   <br />
        <input type="submit" id="btnSignUp" onClick={e=> signUpUser(e)} />
        
        </form>
    </div>
  )
}

