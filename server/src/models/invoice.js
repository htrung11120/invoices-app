const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const invoiceSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  paymentDue: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  paymentTerms: {
    type: Number,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  status: {
    type: String,
    enum: ["paid", "pending", "draft"],
    required: true,
  },
  senderAddress: {
    type: addressSchema,
    required: true,
  },
  items: {
    type: [itemSchema],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
