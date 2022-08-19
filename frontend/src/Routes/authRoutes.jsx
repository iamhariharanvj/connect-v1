import {Routes, Route} from 'react-router-dom'
import * as Auth from '../Pages/Authentication/pages'

function AuthRoutes() {
  return (
        <Routes>
            <Route path="/student/signup" element={<Auth.StudentSignUp />} />
            <Route path="/student/login" element={<Auth.StudentLogin />} />
            <Route path="/teacher/signup" element={<Auth.TeacherSignUp />} />
            <Route path="/teacher/login" element={<Auth.TeacherLogin />} />

        </Routes>

    
  )
}

export default AuthRoutes