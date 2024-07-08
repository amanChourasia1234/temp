import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const MongoDB = async () => {
    try {
        const mongoDb_instance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `\n MongoDB Connected !! DB HOST : ${mongoDb_instance.connection.host}`
        );
    } catch (error) {
        console.log("Error", error);
        process.exit(1);
    }
};

export default MongoDB;
