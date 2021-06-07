const mongoose = require("mongoose");
const User = mongoose.model("modelOP");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.registerOperator = async (req, res) => {
    const { fname, lname, username, email, password, nik } = req.body;
  
    const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;
  
    if (!emailRegex.test(email)) throw "Email is not supported from your domain.";
    if (password.length < 6) throw "Password must be atleast 6 characters long.";
  
    const userExists = await User.findOne({
      email,
    });

    const userExistsUsername = await User.findOne({
        username,
      });
  
    if (userExists) throw "Pengguna dengan email yang sama telah ada.";
    if (userExistsUsername) throw "Pengguna dengan username yang sama telah ada.";
  
    const user = new User({
      fname,
      lname,
      username,
      password: sha256(password + process.env.SALT),
      email,
      nik,
    });
  
    await user.save();
    const namaLengkap = fname+" "+lname;
    res.json({
      message: "User " + namaLengkap + " berhasil di buat!",
    });
  };

  exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({
      username,
      password: sha256(password + process.env.SALT),
    });
  
    if (!user) throw "Username and Password did not match.";
  
    const token = await jwt.sign({ id: user.id }, process.env.SECRET);
  
    res.json({
      message: "User logged in successfully!",
      token,
    });
  };