const pool = require("../models/queries");

const usersGet = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      res.status(500).json({ success: false, message: error.message });
    }
    const data = results.rows;
    res.render("users", { data });
  });
};

const userGet = (req, res) => {
  const userId = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM users WHERE id = $1",
    [userId],
    (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      const data = results.rows[0];
      res.render("user", { data });
    }
  );
};

const userPost = (req, res) => {
  const { name, email } = req.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      res.status(201).redirect("/users");
    }
  );
};

const userPut = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, userId],
    (error, results) => {
      if (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      res.redirect("/users");
    }
  );
};

const userDelete = (req, res) => {
  const userId = req.params.id;

  pool.query("DELETE FROM users WHERE id = $1", [userId], (error, results) => {
    if (error) {
      res.status(500).json({ success: false, message: error.message });
    }
    res.redirect("/users");
  });
};

module.exports = {
  usersGet,
  userGet,
  userPost,
  userPut,
  userDelete,
};
