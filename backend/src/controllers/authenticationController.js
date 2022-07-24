import {isLoginValid,isSignupValid} from '../validations/authentication.js'
import {loginUser,signupUser} from '../services/authentication.js'
import {signin,signup} from '../db/firebase-auth/authentication.js'
import * as UserDB from '../db/controllers/authentication.js'

export const login = async (req,res)=>{

    if (isLoginValid(req,res)){
        const user = await loginUser(req.body,signin,UserDB);
        res.send(user)
    }

}

export const signUp = async (req,res)=>{

    if (isSignupValid(req,res)){
        const user = await signupUser(req.body,signup,UserDB);
        res.send(user)
    }
}