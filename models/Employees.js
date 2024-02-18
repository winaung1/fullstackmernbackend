// bring in the mongoose
const mongoose = require('mongoose')

// create a schema
const EmployeeSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        employeeId: {
            type: Number,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        fullTime: {
            type: String,
            required: true,
        },
        pto: {
            type: String,
            required: true,
        },
    
    
})

// connect the model 
const EmployeeModel = mongoose.model("employees", EmployeeSchema)

// export it 

module.exports = EmployeeModel;

