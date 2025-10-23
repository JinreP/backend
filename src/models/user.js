import { Schema, model } from "mongoose";

const userSchemas = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"], default: "male" },
  hobby: { type: String, required: true },
});

export const User = model("User", userSchemas);
