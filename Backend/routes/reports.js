const router = require("express").Router();
const { getRegistrationReport, getTicketSalesReport } = require("../controllers/reportController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

router.get("/registrations", protect, adminOnly, getRegistrationReport);
router.get("/ticket-sales", protect, adminOnly, getTicketSalesReport);

module.exports = router;