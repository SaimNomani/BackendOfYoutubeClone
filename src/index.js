import dotenv from "dotenv"

import connectDB from "./db/connectDB.js";

dotenv.config({path:".env"})

connectDB()



// approach 1
// const app = express()(async function () {
//     try {
//         const connectDBInstance = await mongoose.connect(
//             `${process.env.MONGODB_URI}/${DB_NAME}`
//         );
//         console.log(
//             `MONGO DB CONNECTED!! DB AT: ${connectDBInstance.Connection.host}`
//         );
//         app.on("error", (err) => {
//             console.log("error: ", err);
//             throw err;
//         });
//         app.listen(process.env.PORT, () =>
//             console.log(`app is listening on port: ${process.env.PORT}`)
//         );
//     } catch (err) {
//         console.log("MONGO DB CONNECTION ERROR: ", err);
//         process.exit(1);
//     }
// })();
