export const loginUser = async(user,signin,db)=>{
    try{
        const response = await signin(user.email,user.password);
        console.log(response.uuid)
        if (response.uid != null ){
            
            const user_searched = await db.find(user.email)

            if (user_searched != null){
                return "User is in the database"
            }
            else{
                return "User is not found in the database"
            }
        }
        else{
            console.log(response.code)
            return response.message

        }

    }
    catch(err){
        return err.message;
    }

}

export const signupUser = async (user,signup,db) => {

    try{
        if (await db.find(user.email) != null){
            return "User is already registered"
        }
        else{
            const response = await signup(user.email,user.password);
            
            if (response.uid != null){
                const newUser = user
                newUser.id = response.uid
                newUser.email = response.email
    
                const res = await db.create(user);
 
                return res

            }
        }
    }
    catch(err){
        return err.message;
    }

}