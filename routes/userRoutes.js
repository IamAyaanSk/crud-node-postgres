const express = require("express");
const router = express.Router();

const {
  usersGet,
  userGet,
  userPut,
  userDelete,
  userPost,
} = require("../controllers/userControllers");

router.get("/", usersGet);

router.post("/", userPost);

router.get("/new", (req, res) => {
  res.render("createUser");
});

router.get("/:id", userGet);

router.put("/:id", userPut);

router.delete("/:id", userDelete);

module.exports = router;
