import userService from './../services/login.js'

const login = (req, res) => {
    const payload = req.body;

    const result = userService.login(payload);

    return sendResults(result,res)
}   


const sendResults = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: "Ha ocurrido un error!"})
}

const loginController = { login }

export default loginController;