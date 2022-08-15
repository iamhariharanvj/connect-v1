import {isSolveDoubtValid, isAskDoubtValid} from '../validations/doubt.js'
import { askDoubt, answerDoubt } from '../services/doubts.js'
import * as UserDB from '../db/controllers/authentication.js'
import * as DoubtDB from '../db/controllers/doubts.js'

export const askDoubtController = async (req,res)=>{
    if(await isAskDoubtValid(req,res) ){
        const response = await askDoubt(
            req.body.studentId,
            req.body.question,
            DoubtDB,
            UserDB)

        console.log(response)
        res.send(response)
    }
}

export const solveDoubtController = async (req,res)=>{
    if (await isSolveDoubtValid(req,res)){
        const response = await answerDoubt(
            req.body.answer,
            req.body.teacherId,
            req.body.doubtId,
            DoubtDB,
            UserDB
        )
        console.log(response)
        res.send(response)
    }
}