import DoubtsDB from '../../models/DoubtModel.js'

export const createDoubt = async (doubt) =>{
        await DoubtsDB.create(doubt)
        .then((doubt) => {return doubt})
        .catch(error => {return error})


    }
