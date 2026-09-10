const express = require("express");

const notificationRoutes =
  require("./routes/notificationRoutes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    service: "notification-service",
    status: "UP"
  });
});

app.use(
  "/notifications",
  notificationRoutes
);

module.exports = app;
