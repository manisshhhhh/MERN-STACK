import asyncHandler from 'express-async-handler'
//@desc   Auth user/ Set token
//route   POST /api/users/auth
//@access public
const authUser = asyncHandler(async (req, res) => {
    // res.status(401);
    // throw new Error('Somthing went wrong');

    res.status(200).json({ message: 'Auth user' });
});

export { authUser };