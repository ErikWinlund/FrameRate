import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import morgan from "morgan";
import axios from "axios";
import { connect } from "node:http2";

dotenv.config();

const app = express();
const PORT = 5000;
const API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "FrameRate API is running" });
});

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connect to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("MongoDb Connection Error", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//API call

app.get("/api/movies", async (req, res) => {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: API_KEY,
        s: req.query.q,
      },
    });

    res.json(response.data);
  } catch (err: any) {
    console.log("ERROR:", err.response?.data || err.message);

    res.status(500).json({
      error: err.response?.data || err.message,
    });
  }
});
