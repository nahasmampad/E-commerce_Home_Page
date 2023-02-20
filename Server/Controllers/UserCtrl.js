const express = require("express");
const router = express.Router();
const User = require("../Models/UserSchema");
const { generateToken } = require("../generatetoken/token");
const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    console.log("login");
    try {
      const { email, password } = req.body;
      const user = await User.findOne( {email:email} );
      console.log(password);

      if (!user) {
        return res.status(400).json({
          message:
            "Invalid E-mail",
            login:false
        });
      }

      console.log('check');
      const check = await bcrypt.compare(password, user.password);
      if (!check) {
        return res.status(200).json({
          message: "Invalid credentials.Please try again.",
          login:false
        });
      }

      const token = generateToken({ id: user._id.toString() }, "7d");
      res.status(200).json({
        id: user._id,
        email: user.email,
        cart: user.cart,
        message: "Register Success ! ",
        token: token,
        login:true
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  register: async (req, res) => {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });

    try {
      if (existUser) {
        return res.status(200).json("E-mail Allredy Exist");
      }
      const cryptedPassword = await bcrypt.hash(password, 12);
      const user = await new User({
        email: email,
        password: cryptedPassword,
      }).save();

      const token = generateToken({ id: user._id.toString() }, "7d");
      console.log("user", token);
      res.status(200).json({
        id: user._id,
        email: user.email,
        cart: user.cart,
        message: "Register Success ! ",
        token: token,
        siginin:true
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUser: async (req, res) => {
    try {
      const { email } = req.params;
      const user = await User.findOne({ email });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateCart: async (req, res) => {
    try {
      const { email, cart } = req.body;
      const item = await User.findOne({ email });
      const carted = item.cart.filter((item) => item.id == cart.id);
      console.log(carted);

      if (carted.length==0) {
        const newCart = await User.updateOne(
          { email },
          {
            $push: {
              cart: {
                id: cart.id,
                image: cart.image,
                product: cart.product,
              },
            },
          },
          {
            new: true,
          }
        );
        res.status(200).json({newCart,message:"Cart Added"});
      } else {
        const newCart = await User.updateOne(
          { email },
          {
            $pull: {
              cart: {
                id: cart.id,
              },
            },
          },
          {
            new: true,
          }
        );
        res.status(200).json({newCart,message:"Cart removed"});
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
