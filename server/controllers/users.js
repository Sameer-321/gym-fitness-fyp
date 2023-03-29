import User from "../models/User.js"

export const createUser = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been delete");
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const hotelAll = await Hotel.find();
    res.status(200).json(hotelAll);
  } catch (err) {
    next(err);
  }
};

export const getUser= async (req, res, next) => {
  try {
    const savedHotel = await newHotel.findById(req.params.id);
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
