const notifications = require("../models/notificationModel");

const getNotifications = (req, res) => {
  res.json(notifications);
};

const createNotification = (req, res) => {
  const { userId, message, type } = req.body;

  if (!userId || !message || !type) {
    return res.status(400).json({
      message: "userId, message and type are required"
    });
  }

  const notification = {
    id: notifications.length + 1,
    userId,
    message,
    type,
    status: "SENT"
  };

  notifications.push(notification);

  res.status(201).json(notification);
};

module.exports = {
  getNotifications,
  createNotification
};
