const ticketSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    title: String,
    price: Number,
    quantity: Number
});
module.exports = mongoose.model("Ticket", ticketSchema);