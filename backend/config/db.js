import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://inderaneela20_db_user:inderaneela20_db_user@cluster0.hugjavj.mongodb.net/').then(()=>console.log("DB Connected"));
}