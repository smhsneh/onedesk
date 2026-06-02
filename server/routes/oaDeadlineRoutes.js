import express from "express";

import {
  getOADeadlines,
  createOADeadline,
  updateOADeadline,
  deleteOADeadline,
} from "../controllers/oaDeadlineController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getOADeadlines)
  .post(protect, createOADeadline);

router
  .route("/:id")
  .patch(protect, updateOADeadline)
  .delete(protect, deleteOADeadline);

export default router;