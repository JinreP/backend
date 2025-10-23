import { User } from "../models/user.js";

export const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const result = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      hobby: req.body.hobby,
      phone: req.body.phone,
      gender: req.body.gender,
      age: req.body.age,
    });
    console.log(result);

    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const result = await User.find();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndUpdate(userId, req.body);
    res.send({ user });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    
  } catch (error) {
    console.error(error);
  }
};
