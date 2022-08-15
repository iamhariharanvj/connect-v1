import {BrowserRouter} from 'react-router-dom'

//Importing Routes
import AuthRoutes from './authRoutes'


function Routes() {
  return (
    <BrowserRouter>
            <AuthRoutes />
    </BrowserRouter>
  )
}

export default Routes