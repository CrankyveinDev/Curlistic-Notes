import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes:{
    type:[Object],
    default:[]
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('user', userSchema);
