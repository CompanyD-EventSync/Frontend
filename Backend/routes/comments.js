const router = require("express").Router();
const { addComment, getComments } = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");
router.post("/:eventId", protect, addComment);
router.get("/:eventId", getComments);
module.exports = router;
