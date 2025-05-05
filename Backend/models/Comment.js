/*
const commentSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    message: String,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Comment", commentSchema);
*/

const Comment = sequelize.define("Comment", {
    message: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});
module.exports = Comment;