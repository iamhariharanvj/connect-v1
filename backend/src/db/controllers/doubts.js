import DoubtsDB from "../../models/DoubtModel.js"

export const createDoubt = async (doubt) =>{
        const response = await DoubtsDB.create(doubt)
        .then((doubt) => doubt)
        .catch(error => {return error})

        return response
    }

export const findDoubt = async (id) =>{
        const response = await DoubtsDB.findOne({id: id})
        .then((user) => {return user})
        .catch(error => {return error})

        return response

    }


export const updateDoubt = async (doubt) =>{
        const response = await DoubtsDB.findOneAndUpdate({id: doubt.id}, doubt,{new: true, upsert: true, setDefaultsOnInsert: true})
        .then((user) => {return user})
        .catch(error => {return error})

        return response
    }

export const solveDoubt = async (answer,teacherId,doubtId,DoubtsDB) => {
    const doubt = await findDoubt(doubtId)
    
    doubt.answer = answer
    doubt.solvedBy = teacherId
    doubt.assignedTeachers = []
    doubt.status = 'Solved'

    return doubt
}

