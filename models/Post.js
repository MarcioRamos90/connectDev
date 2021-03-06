const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Create Schema
const PostSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  avatar: {
    type: String,
    required: false
  },
  likes: [
    {
      user: {
        type: schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      avatar: {
        type: String,
        required: false
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
