import mongoose from "mongoose"

const doubtSchema = new mongoose.Schema({
    id: { 
        type: 'string',
        
    },
    question: {
        type: "string",
        required: true,
    },
    tags: {
        type: "array",
        required: true,
    },
    answer: {
        type: "string",
    },
    status: {
        type: "string",
        default: "Unsolved"
    },
    assignedTeachers: {
        type: "array",
        default: []
    },
    points: {
        type: "number",
        default: 10,
    },
    solvedBy: {
        type: "string"
    }
});

const Doubt = mongoose.model("doubts",doubtSchema);

export {doubtSchema}
export default Doubt;