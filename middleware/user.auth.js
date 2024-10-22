const userSchema = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.verifyUserToke = async (req, res, next) => {
    const token =
        req.body.token ||
        req.query.token ||
        req.headers["x-access-token"] ||
        req.header("authorization");

    if (!token) {
        return res.status(400).send({
            message: "Token is required",
            isSuccess: false
        })
    }

    const bearerToken = token.split(" ")[1];

    try {

    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "Invalid token",
            isSuccess: false
        })
    }
}