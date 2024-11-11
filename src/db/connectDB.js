import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// approach 2
const app = express();
async function connectDB() {
    try {
        const connectDBInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `MONGO DB CONNECTED!! DB HOST: ${connectDBInstance.connection.host}`
        );
        // app.on("error", (err) => {
        //     console.log("error: ", err);
        //     throw err;
        // });
        // app.listen(process.env.PORT, () =>
        //     console.log(`app is listening on port: ${process.env.PORT}`)
        // );
    } catch (err) {
        console.log("MONGO DB CONNECTION ERROR: ", err);
        process.exit(1);
    }
};

export default connectDB
