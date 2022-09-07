import Hotel from "../models/Hotel.js";

//Create Hotel
export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//Read Hotel - specific
export const getSpecificHotel = async (req, res) => {
  try {
    const hotelToGet = await Hotel.findById(req.params.id);
    res.status(200).json(hotelToGet);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//Read all Hotels

export const getAllHotels = async (req, res) => {
  try {
    const allHotels = await Hotel.find();
    res.status(200).json(allHotels);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//Update Hotel
export const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//Delete Hotel
export const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Hotel has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
