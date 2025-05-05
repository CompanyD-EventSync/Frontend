const Ticket = require("../models/Ticket");
exports.createTicket = async (req, res) => {
    const ticket = await Ticket.create({ ...req.body, eventId: req.params.eventId });
    res.status(201).json(ticket);
};
exports.getTickets = async (req, res) => {
    const tickets = await Ticket.find({ eventId: req.params.eventId });
    res.json(tickets);
};