export const askDoubt =(user,question,doubtDb,userDb) => {
    const student = await db.findStudent(user.email);
    if (student != null){
        const doubt = doubtDb.createDoubt({question: question})
        student.doubts.push(doubt)
        const response = await userDb.updateStudent(student.id)
        return response
        
    }
    else{
        return "Error finding user"
    }

    

}