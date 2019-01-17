const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstaDataSchema = new Schema(
  {
    isLiked: {
      type: Boolean
    },
    username: {
      type: String
    },
    thumbnailUrl: {
      type: String
    },
    imageUrl: {
      type: String
    },
    likes: {
      Type: Number
    },
    comments: [
      {
        text: {
          type: String
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("instadata", InstaDataSchema);
