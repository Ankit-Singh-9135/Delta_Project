const express = require("express");
const router = express.Router();

// Index-User
router.get("/", (req, res) => {
  res.send("Get for users");
});
// Show-User
router.get("/:id", (req, res) => {
  res.send("Get for show users");
});

// Post-User
router.post("/", (req, res) => {
  res.send("Post for users");
});
// Delete -User
router.delete("/:id", (req, res) => {
  res.send("Delete for users id");
});

module.exports = router;