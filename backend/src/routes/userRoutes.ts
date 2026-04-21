import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

router.post("/register", (req, res) => {
  userController.registerUser(req, res);
});

router.post("/login", (req, res) => {
  userController.loginUser(req, res);
});

export default router;
