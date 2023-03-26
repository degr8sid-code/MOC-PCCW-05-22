import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

/* REGISTER USER */
export const register = async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            password: passwordHash
        });

        const savedUser = await newUser.save();
        res.Status(201).json(savedUser);

    }

    catch (err) {
        res.Status(500).json({error: err.message});
    }

}

// LOGGING