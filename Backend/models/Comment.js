const commentSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    message: String,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Comment", commentSchema);