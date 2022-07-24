import User from '../../models/userModel.js'

export const find = async (email) =>{
        const response = await User.findOne({email: email})
        .then((user) => user)
        .catch(error => {return error})

        return response

    }

export const create = async (user) => {

    const response = await User.create(user)
        .then((user) => user)
        .catch(error => {return error})

        return response



}


