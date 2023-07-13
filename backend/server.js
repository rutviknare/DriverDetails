const express=require("express");
const cors=require("cors");
const mysql=require("mysql");

const app=express();
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"driverdetails"
})

app.get("/",(req,res)=>{
    // res.json("hello from backend..");
    const sql="select * from details";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/add',(req,res)=>{
    const sql="insert into details (`name`,`id_number`,`email`,`phone_no`) values(?)";
    const values=[
        req.body.name,
        req.body.id,
        req.body.email,
        req.body.phone
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.put('/update/updateform/:id',(req,res)=>{
    const sql="update details set `name`=?, `email`=?, `phone_no`=? where id_number=?";
    const values=[
        req.body.name,
       // req.body.id,
        req.body.email,
        req.body.phone
    ]
    const id=req.params.id;
     
    db.query(sql,[...values,id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/delete/:id',(req,res)=>{
    const sql="delete from details where id_number=?";
    
    const id=req.params.id;
     
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})



app.listen(8081,()=>{
    console.log("listening")
})