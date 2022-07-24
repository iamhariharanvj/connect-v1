import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth";


const signup = async (email,password) => 

{
    const auth = getAuth();
    const response = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        
        const user = userCredential.user;
        return user
    })
    .catch((error) => {
 
        return error.message
        
    });
    return response

}


const signin = async (email,password) =>{
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
        const user = userCredential.user;
        return user
    })
    .catch(async(error) => {
        return error.message;

    });

    return response
}

const signout = (email =>{
    const auth = getAuth();
    signOut(auth).then(() => {
        return [201, null]
    }).catch((error) => {
        return [error.code, error.message]
    });

})

export {signup, signin, signout}

