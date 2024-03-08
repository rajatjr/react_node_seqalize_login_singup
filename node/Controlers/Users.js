const Users = require("../Model/UserModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const nodemailer = require("nodemailer");



// Sign Up Users....................

exports.Singup = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword)
    return res.status(400).json({ msg: "Password and Confirm Password do not match" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const createUser = await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      confirmPassword: confirmPassword
    });
    res.json({ success:true,msg: " user Registered Successfuly", createUser:createUser});
  } catch (error) {
    console.log(error);
  }
}


// Login Users..................................

exports.Login = async (req, res) => {
  try {
    console.log("hello", req.body)
    const { email, password } = req.body;
    const user1 = await Users.findOne({ where: { email } })
    if (user1) {
      const cmpPwd = bcrypt.compareSync(password, user1.password);
      if (cmpPwd) {
        const token = jwt.sign({ user: user1 }, "secretkey");
        return res.status(200).json({ success: true, token });
      }
    }
    else {

      res.json({ success: false, msg: "invalid user" })
    }

  } catch (error) {
    console.log(error)
  }
}