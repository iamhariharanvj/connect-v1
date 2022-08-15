export const askDoubt = async(studentId,question,doubtDb,userDb) => {
    

    const doubt = await doubtDb.createDoubt({question: question})
    doubt.id = doubt._id.toString()
    await doubtDb.updateDoubt(doubt)
    const student = await userDb.findStudent(studentId)
    student.doubts.push(doubt.id)

    const response = await userDb.updateStudent(student)
    console.log(response)
    return response
    
}

export const answerDoubt = async(answer,teacherId,doubtId,doubtDB,userDb) =>{
    const doubt = await doubtDB.solveDoubt(answer,teacherId,doubtId)
    const teacher =  await userDb.findTeacher(teacherId)
    teacher.points += doubt.points
    await userDb.updateTeacher(teacher)
    const response = await doubtDB.updateDoubt(doubt)
    return response
}