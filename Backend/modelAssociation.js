const User = require("./models/User");
const Event = require("./models/Event");
const Registration = require("./models/Registration");
const Ticket = require("./models/Ticket");
const Comment = require("./models/Comment");

User.hasMany(Event);
Event.belongsTo(User);

User.belongsToMany(Event, { through: Registration });
Event.belongsToMany(User, { through: Registration });

Event.hasMany(Ticket);
Ticket.belongsTo(Event);

User.hasMany(Comment);
Comment.belongsTo(User);
Event.hasMany(Comment);
Comment.belongsTo(Event);

module.exports = { User, Event, Registration, Ticket, Comment };