import  mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const dbUrl = process.env.MONGO_URI || ''
const connectDB = async()=>{
    try{
        await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("db connected")
    }catch(e){
        console.log(e.message)
        //process.exit(1)

    }
}
export default connectDB