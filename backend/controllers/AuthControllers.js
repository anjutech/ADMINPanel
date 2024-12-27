import dotenv from 'dotenv';
import admin_master from '../models/admin_master.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
dotenv.config();


// Step 1: Register new admin
export const register = async (req, res) => {
    try {
        console.log('Step 1: Received registration request.');
        const {
            admin_login,
            admin_pwd,
            admin_name,
            admin_mobile,
            admin_email,
            is_active,
            admin_type
        } = req.body;

        console.log('Step 2: Validating input fields.');
        if (!admin_login || !admin_pwd || !admin_name || !admin_mobile || !admin_email || !admin_type) {
            console.log('Validation failed. Missing required fields.');
            return res.status(400).json({ message: 'All fields are required!' });
        }

        console.log('Step 3: Checking if admin_login already exists.');
        const existingAdmin = await admin_master.findOne({
            where: {
                admin_email: admin_email
            }
        });
        if (existingAdmin) {
            console.log('Admin with the same login already exists.');
            return res.status(400).json({ message: 'Admin login already exists!' });
        }

        console.log('Step 4: Hashing the password.');
        const hashedPassword = await bcrypt.hash(admin_pwd, 10);

        console.log('Step 5: Creating new admin object.');
        const newAdmin = {
            admin_login,
            admin_pwd: hashedPassword,
            admin_name,
            admin_mobile,
            admin_email,
            is_active,
            admin_type      };
        console.log('Step 6: Storing the new admin in the database.');

        const createdAdmin = await admin_master.create(newAdmin)
            .then(createdAdmin => {
                console.log('New admin created:', createdAdmin );
            })
            .catch(error => {
                console.error('Error creating new admin:', error);
            }); 
       
        // Send response with tokens
        res.status(200).json({
            message: 'Registration successful! Logi  To Get Access Token',
            createdAdmin: createdAdmin
        });
      
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }

    console.log(`Hit SignUp!`);
};


export const login = async (req, res) => {
    const { admin_login, admin_pwd } = req.body;

    try {
        // Check if the user exists
        const Exist_admin_master = await admin_master.findOne({
            where: { admin_login }
        });
        if (!Exist_admin_master) {
            return res.status(400).json({ success: false, message: "User not found." });
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(admin_pwd, Exist_admin_master.admin_pwd);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid password." });
        }

        // Generate tokens
        const AccessToken = jwt.sign(
            { id: Exist_admin_master.admin_id, admin_type: Exist_admin_master.admin_type },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        const RefreshToken = jwt.sign(
            { id: Exist_admin_master.admin_id, admin_type: Exist_admin_master.admin_type },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
        );

        // Store refresh token in the database
        await admin_master.update(
            { refresh_token: RefreshToken },
            { where: { admin_email: Exist_admin_master.admin_email } }
        );

        // Set refresh token in a secure cookie
        res.cookie('refreshToken', RefreshToken, {
            httpOnly: true,
            secure: false, // true for HTTPS in production
            sameSite: 'Strict', // Adjust based on your needs
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        // Send response with access token
        res.status(200).json({
            success: true,
            message: 'Login successful!',
            accessToken: AccessToken
        });

    } catch (error) {
        console.error('Login error:', error.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// logout Api

export const logout = async (req, res) => {
    try {
        // Clear the refresh token cookie
        res.clearCookie('refreshToken');

        res.status(200).json({ success: true, message: 'Logged out successfully!' });
    } catch (error) {
        console.error('Logout error:', error.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};



