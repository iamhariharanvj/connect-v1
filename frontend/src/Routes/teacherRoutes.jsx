import {Routes, Route} from 'react-router-dom'
import * as Teacher from '../Pages/Teacher/pages'

function TeacherRoutes() {
  return (
        <Routes>
            <Route path="/teacher/dashboard" element={<Teacher.Dashboard />} />
            <Route path="/teacher/doubts" element={<Teacher.MyDoubts />} />
            <Route path="/teacher/lectures" element={<Teacher.Lectures />} />

        </Routes>

    
  )
}

export default TeacherRoutes