import express from 'express'
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import cors from 'cors'
import router from './routes/Users.js';

dotenv.config();


const app = express()
app.use(express.json()); 
app.use(cors());
app.use('/user',router)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
connectDB();
app.listen(process.env.PORT , () => {
         
           console.log('result') 
}) 