const express = require("express");
const {
  registerController,
  keepLoginController,
  emailVerificationController,
  verificationController,
  loginController,
  forgotPassword,
  tokenPassword,
  changePassword,
} = require("../controllers");
const { verifyToken, verifyLastToken } = require("../lib");
const Router = express.Router();

Router.post("/register", registerController);
Router.post("/email-verification", emailVerificationController);
Router.get("/keep-login", verifyToken, keepLoginController);
Router.get(
  "/verification",
  verifyToken,
  verifyLastToken,
  verificationController
);
Router.post("/login", loginController);
Router.post("/forgot-password", forgotPassword);
Router.get("/token-password", verifyToken, verifyLastToken, tokenPassword);
Router.post("/change-password", verifyToken, verifyLastToken, changePassword);

module.exports = Router;
