import {BrowserRouter} from 'react-router-dom'

//Importing Routes
import AuthRoutes from './authRoutes'
import StudentRoutes from './studentRoutes'
import TeacherRoutes from './teacherRoutes'

function Routes() {
  return (
    <BrowserRouter>
            <AuthRoutes />
            <StudentRoutes />
            <TeacherRoutes />
    </BrowserRouter>
  )
}

export default Routes