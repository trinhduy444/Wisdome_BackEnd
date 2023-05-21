const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const Course = require('./app/models/Course');
const bcrypt = require('bcryptjs');
const User = require('./app/models/User');


// middeware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(express.json());

// Template engine
app.engine('.hbs',handlebars.engine({
    extname: '.hbs'
}));  
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));
//when res.render('home') by default will go to dir views/home


// Route init;
route(app);

app.get('/login',  (req,res) =>{
    res.render('login.ejs');
})

app.get('/register',  (req,res) =>{
    res.render('register.ejs');
})
app.get('/home',  (req,res) =>{
    res.render('home.ejs');
})

app.post('/register', async(req,res) =>{

    const data = {
        email:req.body.email,
        password:req.body.password
    }

    await User.create(data);
    res.render('home.ejs')

})
app.post('/login', async (req, res) => {
    const data1 = {
        "name": "Login Success"
    };
    const data2 = {
        "name": "Login Faill"
    };

      console.log("req ", req.body);

    const emailReq = req.body.email;
    console.log("Bandau la",emailReq);

    try {
        const check = await User
        .collection
        .findOne(
            {
                email:emailReq
            }
        );
        console.log("check.email =", check);
        console.log("Davao day",emailReq);

        if(check && check.email === req.body.email){
            console.log("Login Success");
            res.status(200).json(data1);
        }
        else{
            console.log("Login Fail");
            res.status(200).json(data2);
        }
    } catch (error) {
        console.log("Error ", error);
        res.status(500).json({ error: "Internal Server Error" });

    }
  });






















// connect to database, create and find data from database
app.post('/course', async (req,res) =>{
    try{
        const course = await Course.create(req.body);
        res.status(200).json(course);
        // res.send(course.body);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message})
    }
})
app.get('/course', async (req,res) =>{
    try{
        const course = await Course.find({});
        res.status(200).json(course);
        // res.send(course.body);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message})
    }
})
// find by id
app.get('/course/:id', async (req,res) =>{
    try{
        const {id} = req.params;
        const course = await Course.findById(id);
        res.status(200).json(course);
        // res.send(course.body);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message})
    }
})

// update
app.put('course/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(id,req.body);
        // can't find id
        if(!course){
            return res.status(404).json({message: 'Cannot find any course with ID ${id} '})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose
.connect('mongodb+srv://admin:root@testnodejsdb.h8lpjj0.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('\x1b[32m%s\x1b[0m',"Connect to MongoDB SUCCESSFULL !!!");
    app.listen(port, () =>{
        console.log('\x1b[32m%s\x1b[0m','Running app in port localhost: 3000');
        }) 
}).catch((error) =>{
    console.log("Connect to Database MongoDB FAILL !!!");
    console.log(error)
})
 


   