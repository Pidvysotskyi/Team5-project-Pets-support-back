const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const PORT = process.env.PORT || 3001;

mongoose.set("strictQuery", false);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });
