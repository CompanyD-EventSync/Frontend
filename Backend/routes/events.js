const express = require("express");
const router = express.Router();
const { createEvent, getAllEvents } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");

router.post("/create", protect, createEvent);
router.get("/get-all", getAllEvents);

module.exports = router;
