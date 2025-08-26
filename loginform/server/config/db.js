import mongoose from "mongoose";
export async function connectDB(uri) {
    try{
        await mongoose.connect(uri);
        console.log("MongoDb connected");
     }catch(err){
        console.error("Db connection failed",err.message)
        process.exit(1);
    }
}