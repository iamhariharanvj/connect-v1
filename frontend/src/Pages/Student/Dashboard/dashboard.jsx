import {useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import * as actions from '../../../Redux/actions/actions'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Common/navbar'
import Tesseract from 'tesseract.js'

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currUser = useSelector((state) => state.user)
    
    const [doubtText, setDoubtText] = useState("")


    useEffect(()=>{
        if (!currUser.isLoggedIn) {
            console.log(currUser)
            navigate('/student/login')
        }
    },[currUser])


    const convertDoubt = (e)=>{
      e.preventDefault()
      const file = URL.createObjectURL(e.target.files[0])
    
        Tesseract.recognize(
          file,
          'eng'
        ).then(({ data: { text } }) => {
          setDoubtText(text)
        })

      
    }

  return (
    <div>
        <Navbar />
        <h1>Hello {currUser.user.name}</h1>


        <h1>Ask A DOUBT</h1>




  <div>
    <form>

      <input onChange={e=>convertDoubt(e)} className="DoubtImage" type="file" /><br />
      <textarea value={doubtText} onChange={e=>setDoubtText(e.target.value)} rows="20" cols="100" placeholder="Type Here"/>
      <input type="buttton" name="Submit" value="Submit"/>

    </form>
  </div>





        <button onClick={()=>dispatch(actions.logout())}>LOG OUT</button>
    </div>
  )
}

export default Dashboard