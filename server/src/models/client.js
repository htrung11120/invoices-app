const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true },
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
