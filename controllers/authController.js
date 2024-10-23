import { comparePassword, hashPassword } from './../helpers/authHelper.js';
import userModel from '../models/userModel.js';
import JWT from 'jsonwebtoken'; // Assuming you need JWT


// Register Controller
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, rollnumber } = req.body;

        // Validation
        if (!name) return res.send({ message: 'Name is Required' });
        if (!email) return res.send({ message: 'Email is Required' });
        if (!password) return res.send({ message: 'Password is Required' });
        if (!phone) return res.send({ message: 'Phone number is Required' });
        if (!rollnumber) return res.send({ message: 'RollNumber is Required' });

        // Check if user exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already registered. Please login.',
            });
        }

        // Register new user
        const hashedPassword = await hashPassword(password);
        const user = await new userModel({
            name, email, phone, rollnumber, password: hashedPassword,
        }).save();

        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user,
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error,
        });
    }
};

// Login Controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(404).send({ success: false, message: 'Invalid email or password' });
        }

        // Check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({ success: false, message: 'Email is not registered' });
        }

        // Compare password
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({ success: false, message: 'Invalid Password' });
        }

        // Generate token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(200).send({
            success: true,
            message: 'Login successful',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                rollnumber: user.rollnumber,
                role: user.role,
            },
            token,
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error,
        });
    }
};

// Forgot Password Controller
export const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;

        if (!email) return res.status(400).send({ message: 'Email is required' });
        if (!rollnumber) return res.status(400).send({ message: 'StudentID is required' });
        if (!newPassword) return res.status(400).send({ message: 'New Password is required' });

        // Check user
        const user = await userModel.findOne({ email, rollnumber });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Wrong email or StudentID',
            });
        }

        // Update password
        const hashedPassword = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });

        res.status(200).send({
            success: true,
            message: 'Password reset successfully',
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
};

// Test Controller
export const testController = (req, res) => {
    try {
        res.send('Protected Routes');
    } catch (error) {
        console.error(error);
        res.status(500).send({ error });
    }
};


  

