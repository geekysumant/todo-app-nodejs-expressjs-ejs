const http=require('http');
const path=require('path');
const express=require('express');

const port=8080;
const app=express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static('assets'));
app.use(express.urlencoded());

var tasks = [
    {
    task:"What the fuck do you need this app for?",
    category: "Personal",
    dueDate: "21-01-2000"
    }
];

app.get('/',(req,res)=>{
    res.render("home",{
        tasks_list:tasks
    });
})
app.post("/add-task",(req,res)=>{
    console.log(req.body);
    tasks.push({
        task:req.body.task,
        category:req.body.category,
        dueDate:req.body.dueDate
    })
    res.redirect('back');
});

app.listen(port,(err)=>{
    if(err){console.log(err);return ;}
    console.log("Server is up and running!");
});