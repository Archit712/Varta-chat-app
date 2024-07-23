import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connected to database");   
    }catch(error){
        console.log("error connecting the database",error.message);
    }
}
export default connectToMongoDB;