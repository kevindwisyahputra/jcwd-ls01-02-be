const {
  registerService,
  keepLoginService,
  verificationService,
  loginService,
  changePasswordProfileService,
  forgotPasswordService,
} = require("./authServices");
const { adminLoginService } = require("./adminServices");
const {
  fetchProductsService,
  fetchProductDetailsService,
} = require("./productServices");

module.exports = {
  registerService,
  keepLoginService,
  verificationService,
  adminLoginService,
  loginService,
  changePasswordProfileService,
  fetchProductsService,
  fetchProductDetailsService,
  forgotPasswordService,
};
