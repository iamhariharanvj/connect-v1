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
    branch: {
        type: 'string',
    },
    phone: { 
        type: 'string'
    },
    assignedDoubts: {
        type: 'array'
    },
    authenticated: {
        type: 'boolean',
        default: false
    },
    points: {
        type: 'number',
        default: 0
    }
    
});

const User = mongoose.model('teachers', teacherSchema);

export {teacherSchema};
export default User