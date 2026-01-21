const { Item } = require("../models");

exports.dashboard = async (req, res) => {
  const items = await Item.findAll({
    where: { is_active: true }
  });

  res.render("dashboard", {
    items,
    user: req.user
  });
};

exports.createItem = async (req, res) => {
  await Item.create({
    ...req.body,
    is_active: true,
    created_by: req.user.username
  });
  res.redirect("/dashboard");
};

exports.updateItem = async (req, res) => {
  await Item.update(
    {
      ...req.body,
      updated_by: req.user.username
    },
    { where: { id: req.params.id } }
  );
  res.redirect("/dashboard");
};

exports.deleteItem = async (req, res) => {
  await Item.update(
    { is_active: false },
    { where: { id: req.params.id } }
  );
  res.redirect("/dashboard");
};
