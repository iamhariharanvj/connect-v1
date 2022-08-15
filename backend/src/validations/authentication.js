export const isLoginValid = (req, res) => {
    if (!req.body){
        res.status(400).send("Error: body is empty")
        return false;
    }

    else if (req.body.email === undefined || req.body.password === undefined){

        res.status(400).send("Error: Field should not be empty");
        return false

    }
    else{
        return true
    }
}

export const isSignupValid = (req, res) => {
    if (!req.body){
        res.status(400).send("Error: body is empty")
        return false;
    }

    else if (req.body.email === undefined || req.body.password === undefined){

        res.status(400).send("Error: Field should not be empty");
        return false

    }
    else{
        return true
    }

}