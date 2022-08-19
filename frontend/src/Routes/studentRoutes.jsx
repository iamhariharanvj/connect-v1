import {Routes, Route} from 'react-router-dom'
import * as Student from '../Pages/Student/pages'

function StudentRoutes() {
  return (
        <Routes>
            <Route path="/student/dashboard" element={<Student.Dashboard />} />
            <Route path="/student/doubts" element={<Student.MyDoubts />} />
            <Route path="/student/lectures" element={<Student.Lectures />} />

        </Routes>

    
  )
}

export default StudentRoutes