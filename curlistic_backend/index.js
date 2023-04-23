import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"
import cors from 'cors'


const app = express();
const port = 5000;

const url =
  "mongodb+srv://crankyvein:Kapil1234@cluster0.fglcbdk.mongodb.net/Todo?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.use(express.json());
app.use("/user",userRoutes);

  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is running on Port ${port}`);
      });
    })
    .catch((err) => {
      console.log(err.message)
    });



