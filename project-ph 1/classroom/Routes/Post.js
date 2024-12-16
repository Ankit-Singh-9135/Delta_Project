const express = require("express");
const router = express.Router();

// Index-
router.get("/", (req, res) => {
  res.send("Get for post");
});
// Show-
router.get("/:id", (req, res) => {
  res.send("Get for show post id");
});

// Post-
router.post("/", (req, res) => {
  res.send("Post for post");
});
// Delete -
router.delete("/:id", (req, res) => {
  res.send("Delete for post id");
});
module.exports=router;