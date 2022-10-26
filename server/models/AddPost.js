import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const addPostSchema = new Schema({
  title: {type: String, required: true},
  link: String,
  text: String,
  isRelated: {type: Boolean, default: false},
  _creator: {type: Schema.ObjectId, ref: 'User'},//this is a foriegn key refreferencing the user id in the user table/collection
});

// Write some encrption for Password

const AddPost = mongoose.model('AddPost', addPostSchema);
export default AddPost;
