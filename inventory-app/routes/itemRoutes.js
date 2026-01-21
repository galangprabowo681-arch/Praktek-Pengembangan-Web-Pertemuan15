const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const roleAccess = require("../middlewares/roleAccess");
const item = require("../controllers/itemController");

router.get("/dashboard", verifyToken, item.dashboard);

router.get("/items/add", verifyToken, roleAccess("manager"), (req, res) => {
  res.render("form-add");
});

router.get("/items/edit/:id", verifyToken, async (req, res) => {
  const { Item } = require("../models");
  const itemData = await Item.findByPk(req.params.id);
  res.render("form-edit", { item: itemData });
});

router.post("/items/create", verifyToken, roleAccess("manager"), item.createItem);
router.post("/items/update/:id", verifyToken, item.updateItem);
router.post("/items/delete/:id", verifyToken, roleAccess("manager"), item.deleteItem);

module.exports = router;
