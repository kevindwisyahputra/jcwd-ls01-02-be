const {
  registerService,
  keepLoginService,
  verificationService,
  loginService,
  changePasswordService,
  profilePictureService,
  forgotPasswordService,
} = require("./authServices");
const {
  adminLoginService,
  newProductService,
  filterProductsService,
  getOrdersService,
  validPrescriptionService,
  getProductsService,
  getProductDetailsService,
  editProductService,
  deleteProductService,
  getReportService,
  getNameService,
  addStockService,
  getProductStockService,
} = require("./adminServices");
const {
  fetchProductsService,
  fetchProductDetailsService,
  fetchPromoProductsService,
  filterProductService,
} = require("./productServices");
const {
  fetchProvincesService,
  fetchCitiesService,
  fetchCostService,
} = require("./rajaOngkirServices");
const {
  addNewAddressService,
  changePrimaryAddressService,
  editAddressService,
  getAllAddressesService,
  getPrimaryAddressService,
} = require("./profileService");
const {
  addToCartServices,
  getCartServices,
  editQuantityonCartServices,
  deleteProductCartServices,
  rejectOrderService,
  confirmOrderService,
  getAllTransactionService,
  uploadReceipeService,
  getUserOrdersService,
  getCartPrescriptionService,
  uploadPaymentProofService,
  paymentMethodService,
  getOrderDetailsService,
  orderReceivedService,
} = require("./transactionServices");

module.exports = {
  registerService,
  keepLoginService,
  verificationService,
  adminLoginService,
  loginService,
  changePasswordService,
  profilePictureService,
  fetchProductsService,
  fetchProductDetailsService,
  filterProductService,
  forgotPasswordService,
  newProductService,
  fetchPromoProductsService,
  getAllTransactionService,
  addToCartServices,
  getCartServices,
  editQuantityonCartServices,
  deleteProductCartServices,
  fetchProvincesService,
  fetchCitiesService,
  addNewAddressService,
  getAllAddressesService,
  changePrimaryAddressService,
  rejectOrderService,
  confirmOrderService,
  fetchCostService,
  uploadReceipeService,
  filterProductsService,
  getOrdersService,
  validPrescriptionService,
  getProductsService,
  deleteProductService,
  getProductDetailsService,
  editProductService,
  getReportService,
  getNameService,
  addStockService,
  getProductStockService,
  getUserOrdersService,
  editAddressService,
  getAllAddressesService,
  getPrimaryAddressService,
  getCartPrescriptionService,
  uploadPaymentProofService,
  paymentMethodService,
  getOrderDetailsService,
  orderReceivedService,
};
