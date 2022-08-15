import StudentDB from '../../models/StudentModel.js'
import TeacherDB from '../../models/TeacherModel.js'

export const findStudent = async (id) =>{
        const response = await StudentDB.findOne({id: id})
        .then((user) => {return user})
        .catch(error => {return error})

        return response

    }

export const createStudent = async (user) => {

    const response = await StudentDB.create(user)
        .then((user) => user)
        .catch(error => {return error})

        return response


}

export const isStudent = async (id) =>{
    const response = await StudentDB.findOne({id: id})
    .then((user) => {return true})
    .catch(error => {return false})

    return response

}

export const isTeacher = async (id) =>{
    const response = await TeacherDB.findOne({id: id})
    .then((user) => {return true})
    .catch(error => {return false})

    return response

}

export const updateStudent = async (updatedUser) => {
    const response = await StudentDB.findOneAndUpdate({id: updatedUser.id}, updatedUser, {new: true, upsert: true, setDefaultsOnInsert: true})
    .then((user) => {return user})
    .catch(error => {return error})

    return response
}

export const findTeacher = async (id) =>{
    const response = await TeacherDB.findOne({id: id})
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

export const updateTeacher = async (updatedUser) => {
    const response = await TeacherDB.findOneAndUpdate({id: updatedUser.id}, updatedUser, {new: true, upsert: true, setDefaultsOnInsert: true})
    .then((user) => {return user})
    .catch(error => {return error})
    
    return response
}

