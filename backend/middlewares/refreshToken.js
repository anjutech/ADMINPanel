import jwt from 'jsonwebtoken';
// import admin_master from '../models/admin_master.js';

 const refreshToken = async (req, res, next) => {

    try {
        const refreshToken = req.cookies.refreshToken; // Assuming the refresh token is in cookies
        if (!refreshToken) {
          return res.status(401).json({ message: 'Refresh token not found' });
        }
    
        // Validate the refresh token and generate a new access token
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        console.log('Decoded Token:', decoded);
        const newAccessToken = jwt.sign(
          { id: decoded.id, admin_type: decoded.admin_type },
          process.env.JWT_SECRET,
          { expiresIn: '15m' } // Set an appropriate expiry time
        );
    
        // Send the new access token in the response
        return res.status(200).json({ accessToken: newAccessToken, admin_type: decoded.admin_type });
      } catch (error) {
        console.error('Error refreshing token:', error);
        if (!res.headersSent) {
          res.status(403).json({ message: 'Invalid or expired refresh token' });
        }
      }




    // const refreshToken = req.cookies.refreshToken;
    // console.log('Cookies:', req.cookies);
    // console.log('Refresh Token:', refreshToken);

    // if (refreshToken) {
    //     console.log(' Refresh token found ' + refreshToken);

    //     // Case 1: Refresh token is provided
    //     try {
    //         // Step 1: Verify refresh token
    //         const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    //         console.log('Decoded Token:', decoded);
    //         req.admin_login = decoded
    //         next();
    //         // Step 2: Check if the refresh token exists in the database
    //         const existingAdmin = await admin_master.findOne({
    //             where: { refresh_token: refreshToken }
    //         });

    //         if (!existingAdmin) {
    //             return res.status(403).json({ message: 'Invalid refresh token' });
    //         }

    //         // Step 3: Generate a new access token
    //         const accessToken = jwt.sign(
    //             { id: existingAdmin.admin_id, username: existingAdmin.admin_type },
    //             process.env.JWT_SECRET,
    //             { expiresIn: '15m' }  // Set expiration for access token
    //         );

    //         // Step 4: Send response with the new access token
    //         return res.status(200).json({
    //             accessToken
    //         });

    //     } catch (err) {
    //         if (err.name === 'TokenExpiredError') {
    //             console.error('Refresh token expired:', err.message);
    //             return res.status(403).json({ message: 'Refresh token expired. Please log in again.' });
    //         }
    //         console.error('Error refreshing token:', err.message);
    //         return res.status(403).json({ message: 'Invalid refresh token' });
    //     }
    // }
    // // Case 2: Refresh token is missing
    // else {
    //     console.log('No refresh token found, generating a new refresh token.');

    //     const { admin_login } = req.body;  // Assuming you are sending admin_login in the body
    //     console.log(admin_login); //
    //     if (!admin_login) {
    //         return res.status(401).json({ message: "Login required to obtain a new refresh token." });
    //     }

    //     try {
    //         // Step 1: Find the user by login
    //         const existingAdmin = await admin_master.findOne({
    //             where: { admin_login }
    //         });

    //         if (!existingAdmin) {
    //             return res.status(404).json({ message: "Admin not found." });
    //         }

    //         // Step 2: Generate a new refresh token
    //         const newRefreshToken = jwt.sign(
    //             { id: existingAdmin.admin_id, username: existingAdmin.admin_type },
    //             process.env.REFRESH_TOKEN_SECRET,
    //             { expiresIn: '7d' }  // Set expiration for refresh token
    //         );

    //         // Step 3: Update the database with the new refresh token
    //         await admin_master.update(
    //             { refresh_token: newRefreshToken },
    //             { where: { admin_id: existingAdmin.admin_id } }
    //         );

    //         // Step 4: Set the new refresh token in the cookies
    //         res.cookie('refreshToken', newRefreshToken, {
    //             httpOnly: true,
    //             secure: false, // Secure cookie in production
    //             sameSite: 'Lax',
    //             maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days expiration for refresh token
    //         });

    //         // Step 5: Generate a new access token
    //         const accessToken = jwt.sign(
    //             { id: existingAdmin.admin_id, username: existingAdmin.admin_type },
    //             process.env.JWT_SECRET,
    //             { expiresIn: '15m' }  // Set expiration for access token
    //         );

    //         // Step 6: Send the new access token in the response
    //         return res.status(200).json({ accessToken });

    //     } catch (err) {
    //         console.error('Error generating new refresh token:', err.message);
    //         return res.status(500).json({ message: 'Internal server error' });
    //     }
    // }


};
export default refreshToken;
