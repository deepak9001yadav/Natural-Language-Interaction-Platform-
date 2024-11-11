import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash } from 'bcrypt';

// Corrected function syntax
export const getAllUsers = async () => {
    
};

export const userSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // user signup
        const {name,email,password} = req.body;
        const hashedPassword  = await hash(password,10);
        const user = new User ({name,email,password: hashedPassword});
        await user.save();  // save user information or Password .
  
          const users = await User.find();
          return res.status(200).json({ message: "OK", id: user._id.toString });
      } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "ERROR", cause: error.message });
      }
};
