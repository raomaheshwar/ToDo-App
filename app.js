const express = require("express");
const mongoose = require('mongoose');
const todo = require('./model/todo');
const bodyparser = require("body-parser");
var methodOverride = require('method-override')
mongoose.connect('mongodb://127.0.0.1/todo');
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(methodOverride('_method'));

app.use(bodyparser());

app.use(express.static("public"));

//Read or Fetch Operation
app.get("/", async(req, res)=>{
    //write to the code to fetch all the todos
    const data = await todo.find();
    //console.log(data);
   res.render("todo.ejs", {data});
})

//Create Operation
app.post("/todo/add", async(req, res)=>{
    //write the code to save the record in db
    //console.log(req.body)
    const todoname = await todo.create({
        todoname: req.body.todoname
    })
    res.redirect("/")
})

//Update Operation
app.put("/update/:id/todo", async(req, res)=>{
    //console.log(In Update);
    //console.log(req.params)

  const data= await todo.updateOne({_id: req.params.id}, {taskstatus: true});
  res.redirect("/");
})

//Delete Opertion
app.delete("/delete/:id/todo", async(req, res)=>{
    //console.log(In Update);
    //console.log(req.params)
    
  const data= await todo.deleteOne({_id: req.params.id});
  res.redirect("/");
})


app.listen(5000, ()=> console.log("Server is up at 5000"))