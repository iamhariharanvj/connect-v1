import express from 'express';
import {login,signUp} from '../controllers/authenticationController.js'

const router = express.Router();

router.post('/login', (req, res) => {
    
    login(req, res);

})

router.post('/signup', (req, res) => {
    
    signUp(req, res);

})
export default router