var express = require("express");
var router = express.Router();
const httpstatuscode = require("http-status-codes");
const Course = require("../models/course.model");

/* GET home page. */
router.get("/", async (req, res) => {
  try {
    const result = await Course.find()
      .sort("name")
      .limit(1);
    if (result != null) {
      res.status(httpstatuscode.OK).send(result);
    }
  } catch (error) {
    res.status(httpstatuscode.BAD_REQUEST).send("Unable to fetch course");
  }
});

router.post("/", async (req, res) => {
  try {
    const course = new Course({
      name: req.body.name,
      author: req.body.author,
      tags: req.body.tags
    });
    const result = await course.save();
    res.status(httpstatuscode.CREATED).send(result);
  } catch (error) {
    res.status(httpstatuscode.BAD_REQUEST).send("Unable to create course");
  }
});
module.exports = router;
