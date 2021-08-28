const router = require("express").Router();
const {
  register,
  login,
  validateUser,
  validateReferralCode,
} = require("../controller/auth");

router.post("/register", register);

router.post("/validateuser", validateUser);

router.post("/validateReferralCode", validateReferralCode);

router.post("/login", login);

module.exports = router;