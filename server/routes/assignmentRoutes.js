import express from "express";

import {
  createAssignment,
  getAssignments,
  toggleAssignment,
  deleteAssignment,
} from "../controllers/assignmentController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/", createAssignment);
router.get("/", getAssignments);
router.patch("/:id", toggleAssignment);
router.delete("/:id", deleteAssignment);

export default router;