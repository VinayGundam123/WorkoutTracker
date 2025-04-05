const mongoose = require("mongoose");
const model = require('../model/user');
const User = model.User;

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const user = await User.findById(id);
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

