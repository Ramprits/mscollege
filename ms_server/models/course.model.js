const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String
  },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false }
});

module.exports = mongoose.model("Course", CourseSchema);
