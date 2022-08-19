
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    id: {
        type:'string',
    },
    name: {
        type: 'string',
    },
    username: {
        type: 'string',
    },
    password: {
        type: 'string',
    },
    role: {
        type: 'string',
        default: 'student'
    },
    email: {
        type: 'string',
    },
    phone: { 
        type: 'string'
    },
    doubts: {
        type: 'array',
        default: [],
    },
    location:{type: 'string'},
    isSpecial:{
        type: 'boolean',
        default: false
    },
    level: {
        type: 'number',
        default: 1
    }
    
});

const User = mongoose.model('students', studentSchema);

export {studentSchema};
export default User