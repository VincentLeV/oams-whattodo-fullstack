const mongoose = require( "mongoose" )

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        minlength: 1
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
})

todoSchema.set( "toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model( "Todo", todoSchema )
