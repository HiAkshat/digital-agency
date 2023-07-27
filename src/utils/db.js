import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error)
    throw new Error("Connection to database failed!");
  }
}

export default connect