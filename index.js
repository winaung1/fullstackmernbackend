const cors = require('cors')
const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
const EmployeeModel = require('./models/Employees')

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://winagencydesigns:CEiEAK60whJx4ly6@cluster0.33ievuy.mongodb.net/merndatabase")

app.get('/', async (req, res) => {
    try{
        let result = await EmployeeModel.find()
        res.status(200).json(result);
      } catch (error){
        res.status(500).json(error)
      }
})

app.post('/createEmployee', async (req, res) => {
    const employee = req.body;
    const newEmployee = new EmployeeModel(employee);
    
    await newEmployee.save()

    res.json(employee)
})


app.put('/updateEmployee/:id', async (req, res) => {
    const employee = req.params.id;
    await EmployeeModel.findByIdAndUpdate({_id: employee}, {name: req.body.name, age: req.body.age, position: req.body.position, fullTime: req.body.fullTime, pto: req.body.pto });

    res.json(employee)
})

app.delete('/deletEmployee/:id', async (req, res) => {
    const employee = req.params.id;
    await EmployeeModel.findByIdAndDelete({_id: employee});

    res.json(employee)
})




app.listen(port, () => console.log('running on port', port))