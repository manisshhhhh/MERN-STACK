//@desc   Auth user/ Set token
//route   POST /api/users/auth
//@access public
const authUser = (req, res) => {
    res.status(200).json({ message: 'Auth user' });
}

export { authUser };