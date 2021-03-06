const http=require('http');
const path=require('path');
const express=require('express');
const db=require('./config/mongoose');

const port=8080;
const app=express();

const Task=require("./models/task");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static('assets'));
app.use(express.urlencoded());

var ctr=1;
var tasks = [
    {
    task:"What the fuck do you need this app for?",
    category: "Personal",
    dueDate: "21-01-2000",
    id:1
    }
];

app.get('/',(req,res)=>{
    Task.find({},(err,tasks)=>{
        if(err){console.log(err); return;}

        return res.render("home",{
            tasks_list:tasks
        });
    });
})
app.post("/add-task",(req,res)=>{
    
    Task.create({
        task:req.body.task,
        category:req.body.category,
        dueDate:req.body.dueDate,
    },(err,newTask)=>{
        if(err){console.log(err); return;}
        console.log(newTask);
    });
    // const ids=req.body.isCheckboxEnabled;
    // for(let i of ids){
    //     var index=tasks.findIndex(id=>i==id);
    //     console.log(index);
    //     if(index!=-1)
    //         tasks.splice(index,1);
    // }
    
    res.redirect('back');
});
app.post("/delete-task",(req,res)=>{
    console.log(req.body.checkedCb);
    Task.findByIdAndDelete(req.body.checkedCb,()=>{
        console.log("Task deleted!");
    })
    res.redirect('back');
});

app.listen(port,(err)=>{
    if(err){console.log(err);return ;}
    console.log("Server is up and running!");
});