const mongoose = require( "mongoose" )

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    todos: [
        {
            description: {
                type: String,
                required: true,
                minlength: 1,
                maxLength: 20
            },
            deadline: Date,
            priority: {
                type: Number,
                default: 0
            },
            isCompleted: {
                type: Boolean,
                default: false
            }
        }
    ]
})

projectSchema.set( "toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model( "Project", projectSchema )
