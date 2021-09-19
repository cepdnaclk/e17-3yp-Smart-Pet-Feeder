const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petFeederSchema = new Schema({
  battery: {
    type: Number,
    required: true,
    default: 80,
  },
  status: {
    type: Boolean,
    required: true,
  },
  remainingRounds: {
    type: Number,
    required: true,
    default: 4,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("PetFeeder", petFeederSchema);
