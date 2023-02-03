const { Schema, model } = require("mongoose");

const noticeSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model("notice", noticeSchema);

module.exports = Notice;
