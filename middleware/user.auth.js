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
        bearerToken,
            process.env.USER_TOKEN_KEY,
            async (error, authData) => {
                if (error) {
                    return res.status(401).send({
                        error: error.message,
                        message: "Invalid Token",
                        isSuccess: false
                    });
                }
                let user = await userSchema.findById({ _id: authData.id });
                req.user = user;
                if (!req.user) {
                    return res.status(401).send({
                        error: error.message,
                        message: "Please pass token in header",
                        isSuccess: false
                    });
                }
                next();
            }
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "Something went wrong, Please try again later",
            isSuccess: false
        })
    }
}