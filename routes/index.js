const express = require("express");
const router = express.Router();

const user = {
  longitude: -77.032,
  latitude: 38.913,
};

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { user: JSON.stringify(user) });
});

module.exports = router;
