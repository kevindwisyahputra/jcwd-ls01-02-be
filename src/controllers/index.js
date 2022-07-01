const {
  registerController,
  keepLoginController,
  emailVerificationController,
  verificationController,
  loginController,
  forgotPassword,
  tokenPassword,
  changePassword,
  changePasswordProfileController,
  profilePictureController,
} = require("./authController");
const { loginAdminController, newProduct } = require("./adminController");
const {
  fetchProductsController,
  fetchProductDetailsController,
  filterProductController,
} = require("./productController");

module.exports = {
  newProduct,
  registerController,
  keepLoginController,
  emailVerificationController,
  verificationController,
  loginAdminController,
  loginController,
  forgotPassword,
  tokenPassword,
  changePassword,
  fetchProductsController,
  fetchProductDetailsController,
  changePasswordProfileController,
  profilePictureController,
  filterProductController,
};
