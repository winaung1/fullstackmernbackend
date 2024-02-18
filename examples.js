const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const _PORT = 3001;
const UserModel = require('./models/Users')
const pass = 'CEiEAK60whJx4ly6'

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://winagencydesigns:CEiEAK60whJx4ly6@cluster0.33ievuy.mongodb.net/merndatabase")



app.get('/', async (req, res) => {
    try{
        let result = await UserModel.find()
        res.status(200).json(result);
      } catch (error){
        res.status(500).json(error)
      }
})

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    
    await newUser.save()

    res.json(user)
})


app.put('/updateUser/:id', async (req, res) => {
    const user = req.params.id;
    await UserModel.findByIdAndUpdate({_id: user}, {name: req.body.name, age: req.body.age, username: req.body.username});

    res.json(user)
})

app.delete('/deletUser/:id', async (req, res) => {
    const user = req.params.id;
    const userToDelet = await UserModel.findByIdAndDelete({_id: user});

    res.json(user)
})

app.listen(_PORT, () => {
    console.log('server running', _PORT)
})