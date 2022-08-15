export const loginUser = async(user,signin,db)=>{
    try{
        const response = await signin(user.email,user.password);
        console.log(response.uid)
        if (response.uid != null ){
            
            var user_searched = await db.findStudent(response.uid)
            if(user_searched == null){
                var user_searched = await db.findTeacher(response.uid)
            }
            
            

            if (user_searched != null){
                return user_searched
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
        if ((await db.findStudent(user.email) != null) || (await db.findTeacher(user.email) != null)){
            return "User is already registered"
        }
        else{
            const response = await signup(user.email,user.password);
            
            if (response.uid != null){
                const newUser = user
                newUser.id = response.uid
                newUser.email = response.email
                console.log(newUser)
                const res = user.role == "teacher"?await db.createTeacher(newUser):await db.createStudent(newUser)

                console.log("USER REGISTERED")
                return res

            }
            else{
                return response
            }
        }
    }
    catch(err){
        return err.message;
    }

}