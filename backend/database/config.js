import mongoose from "mongoose";

export const connectionBd = async () => {

    try {
        await mongoose.connect(process.env.DB)
        console.log("db yes")
    } catch (error) {
        console.log("db yes")
    }
}