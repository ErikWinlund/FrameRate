import { Request, Response } from "express";
import JWTModel from "../models/JWT";

import userModel from "../models/userModel";
import bcrypt from "bcrypt";

class UserController {
  async registerUser(req: Request, res: Response) {
    try {
      const { username, email, password, favoriteGenre } = req.body;

      console.log(req.body);

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
      console.log(error);
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
        const token = JWTModel.createJwtToken(user._id, user.username, email);
        const expiry = new Date(Date.now() + 1000 * 60 * 60);
        res.cookie("token", token, {
          httpOnly: true,
          sameSite: "lax",
          path: "/",
          expires: expiry,
        });
        return res.status(200).json({ user: userObj });
      }

      return res.status(401).json({
        message: "Incorrect password",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}

export default new UserController();
