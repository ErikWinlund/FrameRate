import { Request, Response } from "express";

import userModel from "../models/userModel";
import bcrypt from "bcrypt";

class UserController {
  async registerUser(req: Request, res: Response) {
    try {
      const { username, email, password, favoriteGenre } = req.body;

      if (
        await userModel.findOne({
          email: email,
        })
      ) {
        return res.status(409).json({ message: "Email already exists" });
      }
      if (
        await userModel.findOne({
          username: username,
        })
      ) {
        return res.status(409).json({ message: "Username already exists" });
      }

      const newUser = await userModel.insertOne({
        username,
        email,
        password: await bcrypt.hash(password, 12),
        favoriteGenre,
      });

      return res.status(201).json({
        message: "User created",
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await userModel.findOne({
        email,
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (await bcrypt.compare(password, user.password)) {
        const userObj = user.toObject();
        //@ts-ignore
        delete userObj.password;
        return res.status(200).json({ user: userObj });
      }

      return res.status(401).json({
        message: "Incorrect password",
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new UserController();
