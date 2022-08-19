import Axios from "axios";
import * as config from "../../config"
export const signUpRequest = async(user) => {

    const response = await Axios.post(config.BASE_URL + "/user/signup",user)
    .then((result) => result)
    .catch((err) => err)

    if (response.data != undefined && response.data != null && response.data.id != undefined) {
        response.status = "OK"
        return response

    }
    else{
        response.status = "ERROR"
        return response
    
    }
}

export const loginRequest = async(user) => {

    const response = await Axios.post(config.BASE_URL + "/user/login",user)
    .then((result) => result)
    .catch((err) => err)

    if (response.data != undefined || response.data != null) {
        response.status = "OK"
        console.log(response)
        return response

    }
    else{
        const error = response
        response.status = "ERROR"
        response.message = error
        return response
    
    }
}