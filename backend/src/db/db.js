import mongoose from "mongoose";
const connectDB = ()=>{
    const username = process.env.DB_USERNAME
    const password = process.env.DB_PASSWORD

    const dbUrl = `mongodb+srv://${username}:${password}@clusterv1.cs0tg.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(dbUrl,(err) => {
        if (!err){
            console.log("Database connection established...")
        }
        else{
            console.log("Database connection error: " + err.message)
        }
    });

}
export default connectDB;