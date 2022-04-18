import { v4 as uuidv4 } from 'uuid';
let users=[];

export const getUsers= (req,res)=>{
    res.send(users);
}

export const createUser = (req,res)=>{
    const user = req.body;
    users.push({id:uuidv4(), ...user});
    res.send(`user named ${user.firstName} is added to the database`);
    
}

export const getUser = (req,res)=>{
    const {id} = req.params;
    const userWithID = users.find((user)=>user.id===id);
    res.send(userWithID);
}

export const deleteUser =(req,res)=>{
    const {id} =req.params;
    users = users.filter((user)=> user.id != id);
    res.send(`The person id ${id} is deleted`);
}

export const modifyUser = (req,res)=>{
    const {id} =req.params;
    const {firstName, lastName, age}=req.body;
    const user = users.find((user)=>user.id===id);
    if(firstName)user.firstName = firstName;
    if(lastName)user.lastName = lastName;
    if(age)user.age = age;
    res.send(users);
}
