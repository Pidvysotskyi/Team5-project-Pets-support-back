const { User } = require("../../models");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");

const signup = async (req, res, next) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`email: ${email} in use`);
  }

  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, avatarURL });

  newUser.setPassword(password);

  await newUser.save();

  res.status(201).json({
    user: {
      email: newUser.email,
      subscribtion: newUser.subscription,
      avatarURL: newUser.avatarURL,
    },
  });
};

module.exports = signup;
