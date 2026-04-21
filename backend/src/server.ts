
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";



dotenv.config();




const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "FrameRate API is running"});
});



mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
        console.log("Connect to MongoDB Atlas")
    })
    .catch((error) => {
        console.log("MongoDb Connection Error", error);
    });



app.listen(PORT, () =>  {
    console.log(`Server is running on port ${PORT}`);
});