import express from "express";
import {
  createHotel,
  getSpecificHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
} from "../controllers/HotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create Hotel
router.post("/", verifyAdmin, createHotel);
//Read Specific Hotel
router.get("/:id", getSpecificHotel);
//Read All Hotels
router.get("/", getAllHotels);
//Update Hotel
router.put("/:id", verifyAdmin, updateHotel);
//Delete Hotel
router.delete("/:id", verifyAdmin, deleteHotel);

export default router;
