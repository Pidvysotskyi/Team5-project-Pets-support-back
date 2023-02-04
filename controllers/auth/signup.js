const { User } = require("../../models");
const { Conflict } = require("http-errors");
const { SECRET_KEY } = process.env;
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const { password, email, name, address, phone } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`email: ${email} in use`);
  }

  const [city, region] = address.split(", ");

  const avatarURL = gravatar.url(email);

  const birthday = new Date(0);
  const newUser = new User({ email, avatarURL, name, city, region, phone, birthday });

  newUser.setPassword(password);

  await newUser.save();

  const payload = {
    id: newUser._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "8h" });
  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
      token,
    },
  });
};

module.exports = signup;
