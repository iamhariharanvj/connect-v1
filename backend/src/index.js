import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db/db.js';
import connectFirebase from './db/firebase-auth/firebase.js';
import authRoutes from './routes/authentication.js';
import doubtRoutes from './routes/doubt.js';

const app = express();
const PORT = process.env.PORT || 5000;


// Importing environment variables
const envPath = '.env'
dotenv.config({path: envPath})

// Establishing DB connection
connectDB();
connectFirebase();

app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/user', authRoutes)
app.use('/', doubtRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
