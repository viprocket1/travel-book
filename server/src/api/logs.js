const { Router } = require("express");
const LogEntry = require("../models/LogEntry");

const router = Router();
router.get("/", (req, res) => {
  res.json({
    message: "hello logs",
  });
});
router.post("/", (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = logEntry.save();
    res.json(createdEntry);
    console.log(req.body);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
