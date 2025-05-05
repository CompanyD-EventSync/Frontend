/*
const ticketSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    title: String,
    price: Number,
    quantity: Number
});
module.exports = mongoose.model("Ticket", ticketSchema);
*/

const Ticket = sequelize.define("Ticket", {
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
});
module.exports = Ticket;