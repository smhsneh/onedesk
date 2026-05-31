import express from "express";

import {
  createExam,
  getExams,
  deleteExam,
} from "../controllers/examController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/", createExam);
router.get("/", getExams);
router.delete("/:id", deleteExam);

export default router;