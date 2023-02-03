const { Schema, model } = require("mongoose");

const newsSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
  },
  { versionKey: false, timestamps: true }
);

const News = model("news", newsSchema);

module.exports = News;
