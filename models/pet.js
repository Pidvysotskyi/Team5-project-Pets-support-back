const { Schema, model } = require("mongoose");

const petSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Pet = model("pet", petSchema);

module.exports = Pet;
