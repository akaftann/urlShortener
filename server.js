import  express  from "express";
import connectDB from "./db.js";
import router from "./router.js";
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//here should be used check if it url middleware
app.use('/api', router)

app.listen(process.env.PORT || 6000,()=>{
    console.log(`Server started at port ${process.env.PORT || 6000}`)
    connectDB()
})