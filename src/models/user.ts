import { model, Schema } from "mongoose";
import { Clients } from "../interfaces/client.interface";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    company: { required: true, type: String },
    password: { required: true, type: String },
    email: { required: true, type: String, unique: true },
    city: { required: true, type: String },
    rol: { required: true, type: String },
  },
  { versionKey: false, timestamps: true }
);

const UserModel = model("users", UserSchema);
export default UserModel;
