import mongoose from "mongoose";
const url =
  "mongodb+srv://crankyvein:Kapil1234@cluster0.fglcbdk.mongodb.net/Todo?retryWrites=true&w=majority";

const mongoDB = async() => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DataBase Connected Successfully")
    })
    .catch((err) => {
      console.log(err.message)
    });

};

export default mongoDB;
