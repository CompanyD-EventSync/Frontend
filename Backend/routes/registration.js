const router = require("express").Router();
const { register, getMyRegistrations } = require("../controllers/registrationController");
const { protect } = require("../middleware/authMiddleware");
router.post("/:eventId", protect, register);
router.get("/my-events", protect, getMyRegistrations);
module.exports = router;