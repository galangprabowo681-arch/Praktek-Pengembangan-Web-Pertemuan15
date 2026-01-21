const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", auth.login);
router.get("/logout", auth.logout);

module.exports = router;
