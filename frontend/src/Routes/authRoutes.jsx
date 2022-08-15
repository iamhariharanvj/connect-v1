import {BrowserRouter, Routes, Route} from 'react-router-dom'
import * as Auth from '../Pages/Authentication/pages'

function AuthRoutes() {
  return (
        <Routes>
            <Route path="/" element={<Auth.SignUp />} />
        </Routes>

    
  )
}

export default AuthRoutes