import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";
import asyncHandler from 'express-async-handler'

// U have to be logged in to access that route 
const protect = asyncHandler(async function (req, res, next) {

    let token;

    token = req.cookies.jwt;

    if (token) {
        try {
            // verify method help us to get payload from the token which is userId 
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select('-password');

            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not autherize, Invalid token');
        }
    } else {
        res.status(401);
        throw new Error('Not autherize, no token');
    }
});

export { protect };