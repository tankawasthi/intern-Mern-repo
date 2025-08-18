const express = require ("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

app.use("/user", userRoutes);

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

// Global error handler 

app.get("/error",(req,res,next)=>{
    const error = new Error("something went very wrong!");
    error.status = 500;
    next(error); // Pass the error to the next middleware
})
app.use((error, req, res, next) => {
console.error("Error occurred:", error.stack);
    res.status(error.status || 500);
    res.json({
        sucess: false,//indicates that the request was not successful
        message: error.message || "Internal Server Error",
        status: error.status || 500
    });
})

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});