const Registration = require("../models/Registration");
exports.register = async (req, res) => {
    const reg = await Registration.create({ userId: req.user._id, eventId: req.params.eventId });
    res.status(201).json(reg);
};
exports.getMyRegistrations = async (req, res) => {
    const list = await Registration.find({ userId: req.user._id }).populate("eventId");
    res.json(list);
};