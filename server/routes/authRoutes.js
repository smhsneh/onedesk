import express from "express";
import {
  signup,
  login,
  getMe,
  deleteAccount,
  updateMode,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", protect, getMe);
router.patch("/mode", protect, updateMode);
router.delete("/delete-account", protect, deleteAccount);

export default router;