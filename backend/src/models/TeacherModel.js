import mongoose from 'mongoose';


const teacherSchema = new mongoose.Schema({
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
        type: 'array'
    },
    level: {
        type: 'number'
    }
    
});

const User = mongoose.model('teachers', teacherSchema);

export {teacherSchema};
export default User