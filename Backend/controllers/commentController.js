const Comment = require("../models/Comment");
exports.addComment = async (req, res) => {
    const comment = await Comment.create({ eventId: req.params.eventId, userId: req.user._id, message: req.body.message });
    res.status(201).json(comment);
};
exports.getComments = async (req, res) => {
    const comments = await Comment.find({ eventId: req.params.eventId }).populate("userId", "name");
    res.json(comments);
};
