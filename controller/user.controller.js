const { userService } = require("../service");
const { createToken } = require("../middleware/auth");

let register = async (req, res) => {
    try {
        let body = req.body;
        console.log(body, "res");
        let user = await userService.register(body);
        res.status(201).json({
            statusCode: 201,
            message: "User register Success!",
            user
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};

let getUserById = async (req, res) => {
    try {
        let { id } = req.params;
        let getUser = await userService.getUserById(id);
        res.status(200).json({
            statusCode: 200,
            message: "User found Success!",
            getUser
        });
    } catch (err) {
        if (err.message === "Record not found") {
            res.status(404).json({
                statusCode: 404,
                message: "record not found"
            });
        } else {
            res.status(500).json({
                statusCode: 500,
                message: err.message
            });
        }
    }
};

let deleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        let clear = await userService.deleteUser(id);
        res.status(200).json({
            statusCode: res.statusCode,
            message: "deleted user success!",
            clear
        });
    } catch (err) {
        if (err.message === "Record not found") {
            res.status(404).json({
                statusCode: 404,
                message: "record not found"
            });
        } else {
            res.status(500).json({
                statusCode: 500,
                message: err.message
            });
        }
    }
};

let updateUser = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        let update = await userService.updateUser(id, body);
        res.status(200).json({
            statusCode: res.statusCode,
            message: "update user success!",
            update
        });
    } catch (err) {
        if (err.message === "Record not found") {
            res.status(404).json({
                statusCode: 404,
                message: "Record not found"
            });
        } else {
            res.status(500).json({
                statusCode: 500,
                message: err.message
            });
        }
    }
};

let login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await userService.findUser(email);
        console.log(user, "User");

        if (!user) {
            throw new Error("user not found!");
        }
        if (user.password != password) {
            throw new Error("Password is invalid!!");
        }

        let token = createToken({ user });
        console.log(token);

        res.cookie(token, "token")

        res.status(200).json({
            statusCode: 200,
            message: "Login SuccessFully:)",
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};

module.exports = { register, getUserById, deleteUser, updateUser, login };
