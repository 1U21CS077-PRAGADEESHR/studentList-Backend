import express from "express";
import mongoose from "mongoose";
import studentRoute from "./studentController.js";
import cors from "cors";

const PORT = 5959;
const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", studentRoute);

mongoose.connect("mongodb+srv://mernstackdeveloper888:6jYxXAc5PHI3FrUX@cluster0.z2x4n.mongodb.net/")
.then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
        console.log(`The server started successfully on port ${PORT}`);
    });
}).catch((err) => {
    console.log("MongoDB not connected");
    console.log(err);
});
