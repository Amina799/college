//import express module
const express=require('express')
const app=express()

app.use(express.json())
let users=[
    {id:1,name:"alice",email:"abc@gmail.com"},
    {id:2,name:"rose",email:"abcde@gmail.com"}
]
//get all users
app.get('/users',(req,res)=>{
    res.json(users)
})
//post
app.post('/users',(req,res)=>{
    const newUser={id:users.length+1, ...req.body}
    users.push(newUser)
    res.status(201).json(newUser);
});
//update--PUT()
app.put('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if(!user) return res.status(404).json({message:"user not found"})
    user.name=req.body.name||user.name;
    user.email=req.body.email||user.email;
    res.json(user);
});
//delete
app.delete('/users/:id',(req,res)=>{
    users=user.filter(user=>user.id !==parseInt(req.params.id))
    res.json({message:'user deleted'})
});
app.listen(10000,()=>console.log("server is running in the port 10000")
)
