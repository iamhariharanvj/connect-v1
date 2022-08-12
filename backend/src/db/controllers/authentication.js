import StudentDB from '../../models/StudentModel.js'
import TeacherDB from '../../models/TeacherModel.js'

export const findStudent = async (email) =>{
        const response = await StudentDB.findOne({email: email})
        .then((user) => user)
        .catch(error => {return error})

        return response

    }

export const createStudent = async (user) => {

    const response = await StudentDB.create(user)
        .then((user) => user)
        .catch(error => {return error})

        return response



}

export const updateStudent = async (user,updatedUser) => {
    await StudentDB.findOneAndUpdate({id: user.id}, updatedUser, {new: true, upsert: true, setDefaultsOnInsert: true}, function(error, result) {
        if(error){
            console.log("Something wrong when updating data!");
            return error
        }
    
        console.log(result);
        return result
    });
}

export const findTeacher = async (email) =>{
    const response = await TeacherDB.findOne({email: email})
    .then((user) => user)
    .catch(error => {return error})

    return response

}

export const createTeacher = async (user) => {

const response = await TeacherDB.create(user)
    .then((user) => user)
    .catch(error => {return error})

    return response



}

