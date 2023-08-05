import mongoose from "mongoose";

export const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB is connected')
    } catch (error) {
        console.log('Error while connecting to DB: ', error)
    }
}