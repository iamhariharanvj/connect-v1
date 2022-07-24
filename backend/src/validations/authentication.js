export const isLoginValid = (req, res, next) => {
    if (!req.body){
        res.send("Error: body is empty")
        return false;
    }

    else if (req.body.email === undefined || req.body.password === undefined){

        res.send("Error: Field should not be empty");
        return false

    }
    else{
        return true
    }
}

export const isSignupValid = (req, res, next) => {
    if (!req.body){
        res.send("Error: body is empty")
        return false;
    }

    else if (req.body.email === undefined || req.body.password === undefined){

        res.send("Error: Field should not be empty");
        return false

    }
    else{
        return true
    }

}