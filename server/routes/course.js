import express from "express";
import { createCourse, deleteCourse, getCourseById, updateCourse } from "../controllers/course.js";

const router = express.Router();

router.post("/create-course",  createCourse);
router.get("/get-course",  getCourseById);
router.post("/update-course",  updateCourse);
router.delete("/delete-course",  deleteCourse);
export default router;