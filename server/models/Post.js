import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
  title: { type: String, required: true },
  link: String,
  text: String,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  _userId: { type: Schema.ObjectId, ref: "User" }, //this is a foriegn key refreferencing the user id in the user table/collection
});

// Write some encrption for Password

const Post = mongoose.model("Post", postSchema);
export default Post;
