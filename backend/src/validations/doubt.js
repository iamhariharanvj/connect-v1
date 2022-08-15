import {isStudent} from '../db/controllers/authentication.js'
import * as DoubtsDB from '../db/controllers/doubts.js'

export const isAskDoubtValid = async(req,res)=>{
    if (req.body.question == undefined || req.body.studentId == undefined){
        res.status(400).send("Bad Request")
        return false
    }
    else if (isStudent(req.body.studentID)){
        return true
    }
    else{
        res.status(400).send("Bad Request")
        return false
    }
}

export const isSolveDoubtValid = async(req, res) => {
    if (req.body.answer == undefined || req.body.teacherId == undefined){
        res.status(400).send("Bad Request")
        return false
    }
    else if (await isDoubtValid(req.body.id)){
        return true
    }
    else{
        res.status(400).send("Bad Request")
        return false
    }
}

const isDoubtValid = async(id)=>{
    
    if (await DoubtsDB.findDoubt(id)){
        return true
    }
    else{
        return false
    }

}