import express from "express";

import {
  getEvents,
  createEvent,
  deleteEvent,
} from "../controllers/calendarController.js";

import { protect } from "../middleware/authMiddleware.js";

const router =
  express.Router();

router.use(protect);

router.get("/", getEvents);

router.post("/", createEvent);

router.delete(
  "/:id",
  deleteEvent
);

export default router;