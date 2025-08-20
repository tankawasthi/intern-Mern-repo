const express = require("express");
const app = express();

const product_routes = require('./routes/products')
const PORT = process.env.PORT || 5000;


app.get("/",(req,res)=>{
    res.send("hi am server live...")
})

app.use("/api/products", product_routes)


const start = async ()=>{
    try{
        app.listen(PORT,()=>{
           console.log( `port is connected to ${PORT}`);
        })
    }catch(error){
        console.log(error)
    }
}

start();