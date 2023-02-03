const { User } = require("../../models");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendEmail } = require("../../helpers/");
const { DB_PORT } = process.env;

const signup = async (req, res, next) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`email: ${email} in use`);
  }
  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, avatarURL, verificationToken });

  newUser.setPassword(password);

  await newUser.save();

  const mail = {
    to: email,
    subject: "Email varification",
    html: `<a href="http://localhost:${DB_PORT}/api/users/verify/${verificationToken}">Please verify your email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscribtion: newUser.subscription,
      avatarURL: newUser.avatarURL,
      verificationToken: newUser.verificationToken,
    },
  });
};

module.exports = signup;
