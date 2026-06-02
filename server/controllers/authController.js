import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../services/tokenService.js";
import Subject from "../models/Subject.js";
import Assignment from "../models/Assignment.js";
import Exam from "../models/Exam.js";
import Progress from "../models/Progress.js";
import CalendarEvent from "../models/CalendarEvent.js";
import Attendance from "../models/Attendance.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password, mode } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      mode,
    });

    const token = generateToken(user._id);

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mode: user.mode,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mode: user.mode,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMe = async (req, res) => {
  res.status(200).json(req.user);
};

export const updateMode = async (req, res) => {
  try {
    const { mode } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.mode = mode;

    await user.save();

    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      mode: user.mode,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update mode",
    });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user._id;

    await Subject.deleteMany({ user: userId });
    await Assignment.deleteMany({ user: userId });
    await Exam.deleteMany({ user: userId });
    await Progress.deleteMany({ user: userId });
    await CalendarEvent.deleteMany({ user: userId });
    await Attendance.deleteMany({ user: userId });
    await User.findByIdAndDelete(userId);

    res.status(200).json({
      message: "Account deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};