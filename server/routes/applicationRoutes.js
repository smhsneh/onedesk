import express from "express";

import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getApplications)
  .post(protect, createApplication);

router
  .route("/:id")
  .patch(protect, updateApplication)
  .delete(protect, deleteApplication);

export default router;