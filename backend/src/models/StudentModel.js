
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
    level: {
        type: 'number',
        default: 1
    }
    
});

const User = mongoose.model('students', studentSchema);

export {studentSchema};
export default User