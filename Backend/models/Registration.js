/*
const registrationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    status: { type: String, enum: ["REGISTERED", "CANCELLED"], default: "REGISTERED" }
});
module.exports = mongoose.model("Registration", registrationSchema);
*/

const Registration = sequelize.define("Registration", {
    status: { type: DataTypes.ENUM("REGISTERED", "CANCELLED"), defaultValue: "REGISTERED" }
});
module.exports = Registration;