const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getTickets, createTicket } = require("../controllers/ticketController");

// router
//   .route("/")
//   .get(authMiddleware, getTickets)
//   .post(authMiddleware, createTicket);

router.get("/", authMiddleware, getTickets);

// router.post("/", authMiddleware, createTicket);

module.exports = router;
