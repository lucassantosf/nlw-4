import express, { response } from 'express';

const app = express();
 
app.get('/users',(request,response)=>{
    return response.json({"message":"hello word"})
})

app.post("/users",(request,response)=>{
    return response.json({message:"Dados salvos"})
})

app.listen(3333,()=>console.log('server is running'));