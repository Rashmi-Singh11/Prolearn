import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true
  },
  phone:{
    type: String,
    required: true,
  },
  rollnumber:{
    type:String,
    required:true,
    unique:true,
  },
  
  role:{
    type:Number,
    default:0
  }
} , {timestamps:true}
);

 export default mongoose.model('users' , userSchema)
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     rollNumber: { type: String, required: true }, // Ensure correct naming here
//     phone: { type: String, default: "" },
//     address: { type: String, default: "" },
//     answer: { type: String, default: "" },
//     role: { type: String, default: "user" },
// }, { timestamps: true });

// export default mongoose.model('User', userSchema);
