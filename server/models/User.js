import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, "Username must be 5 characters or more."],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be 8 characters or more."],
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: [11, "Phone number must be 11 characters or more."],
  },
  isActivated: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Write some encrption for Password here to encrypt the password

const User = mongoose.model("User", userSchema);
export default User;
