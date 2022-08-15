import express from "express";
import {askDoubtController, solveDoubtController} from "../controllers/doubtController.js"

const router = express.Router()

router.route('/student/askDoubt')
.post(askDoubtController)

router.route('/teacher/solveDoubt')
.post(solveDoubtController)

export default router