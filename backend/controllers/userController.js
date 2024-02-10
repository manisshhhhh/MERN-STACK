import asyncHandler from 'express-async-handler'

//@desc   Auth user/ Set token
//route   POST /api/users/auth
//@access public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth user' });
});

//@desc   Register a new user
//route   POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Register User' });
});


//@desc   Logout User
//route   POST /api/users/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout User' });
});

//@desc   Get user profile
//route   GET /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' });
});

//@desc   Update user profile
//route   PUT /api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update User Profile' });
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };