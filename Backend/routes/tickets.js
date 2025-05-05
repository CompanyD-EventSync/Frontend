const router = require("express").Router();
const { createTicket, getTickets } = require("../controllers/ticketController");
const { protect } = require("../middleware/authMiddleware");
router.post("/create/:eventId", protect, createTicket);
router.get("/list/:eventId", getTickets);
module.exports = router;
