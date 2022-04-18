import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './router/users.js'

const app = express();

const PORT = 5000;


app.use(bodyParser.json());
app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    res.send('Request Reached');
})

app.listen(PORT || 3000,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
})