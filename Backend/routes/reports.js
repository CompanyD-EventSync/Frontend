/*
const router = require("express").Router();
const { getRegistrationReport, getTicketSalesReport } = require("../controllers/reportController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

router.get("/registrations", protect, adminOnly, getRegistrationReport);
router.get("/ticket-sales", protect, adminOnly, getTicketSalesReport);

module.exports = router;
*/

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");
const { User, Event, Registration, Ticket } = require("../modelAssociations");

router.get("/registrations", protect, adminOnly, async (req, res) => {
  const data = await Registration.findAll({ include: [User, Event] });
  res.json(data);
});

router.get("/tickets", protect, adminOnly, async (req, res) => {
  const data = await Ticket.findAll({ include: [Event] });
  res.json(data);
});

module.exports = router;