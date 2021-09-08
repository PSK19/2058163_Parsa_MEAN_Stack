let express = require("express");
let router = express.Router();
let courseController = require("./course.controller");

router.post("/storeCourse",courseController.storeCourseInfo);
router.put("/updateCourse",courseController.updateCourseInfo);
router.delete("/deleteCourse/:cid",courseController.deleteCourseInfo);
router.get("/getCourse",courseController.getCourseInfo);

module.exports = router;