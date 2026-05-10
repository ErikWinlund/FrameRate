import express from "express";
import userController from "../controllers/userController";
import { jwtMiddleware } from "../middleware/jwtMiddleware";

const router = express.Router();

router.post("/register", (req, res) => {
  userController.registerUser(req, res);
});

router.post("/login", (req, res) => {
  userController.loginUser(req, res);
});

export default router;
