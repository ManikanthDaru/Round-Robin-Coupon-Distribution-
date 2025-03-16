import bcrypt from "bcryptjs";
import Admin from "../models/admin.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// this controls the admin login 
const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields." });
        }

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const isMatched = await bcrypt.compare(password, admin.password);

        if (!isMatched) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        // after credentials are matched the admin is give a token
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1hr" });
        return res.json({ token });

    } catch (error) {
        console.log("Error: " + error);
        res.status(400).json({ message: error.message });
    }
}

export default login;