import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";

// Database connection 
import connectDB from "./db/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection 
connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});