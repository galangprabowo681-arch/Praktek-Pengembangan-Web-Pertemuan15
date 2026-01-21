const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { role } = req.body;

  if (!role || !["manager", "admin"].includes(role)) {
    return res.redirect("/login");
  }

  // username disamakan dengan role (sesuai kebutuhan tugas)
  const token = jwt.sign(
    {
      username: role,
      role: role
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);
  res.redirect("/dashboard");
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};
