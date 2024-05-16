const mongoose = require("mongoose");
const Invoice = require("./invoice");
const Client = require("./client");

mongoose.connect("mongodb://127.0.0.1:27017/invoicesDB");

// // Function to save invoice data
// async function saveInvoice(invoice) {
//   try {
//     // Create and save the client
//     const client = new Client({
//       name: invoice.clientName,
//       email: invoice.clientEmail || "no-email@example.com", // Default email if empty
//       address: {
//         street: invoice.clientAddress.street || "N/A",
//         city: invoice.clientAddress.city || "N/A",
//         postCode: invoice.clientAddress.postCode || "N/A",
//         country: invoice.clientAddress.country || "N/A",
//       },
//     });
//     const savedClient = await client.save();

//     // Create and save the invoice
//     const newInvoice = new Invoice({
//       id: invoice.id,
//       createdAt: new Date(invoice.createdAt),
//       paymentDue: new Date(invoice.paymentDue),
//       description: invoice.description,
//       paymentTerms: invoice.paymentTerms,
//       client: savedClient._id,
//       status: invoice.status,
//       senderAddress: invoice.senderAddress,
//       items: invoice.items,
//       total: invoice.total,
//     });

//     await newInvoice.save();
//     console.log("Invoice added");
//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     mongoose.disconnect();
//   }
// }

// // Invoice data
// const invoices = [
//   {
//     id: "TY9141",
//     createdAt: "2021-10-01",
//     paymentDue: "2021-10-31",
//     description: "Landing Page Design",
//     paymentTerms: 30,
//     clientName: "Thomas Wayne",
//     clientEmail: "thomas@dc.com",
//     status: "pending",
//     senderAddress: {
//       street: "19 Union Terrace",
//       city: "London",
//       postCode: "E1 3EZ",
//       country: "United Kingdom",
//     },
//     clientAddress: {
//       street: "3964 Queens Lane",
//       city: "Gotham",
//       postCode: "60457",
//       country: "United States of America",
//     },
//     items: [
//       {
//         name: "Web Design",
//         quantity: 1,
//         price: 6155.91,
//         total: 6155.91,
//       },
//     ],
//     total: 6155.91,
//   },
//   {
//     id: "FV2353",
//     createdAt: "2021-11-05",
//     paymentDue: "2021-11-12",
//     description: "Logo Re-design",
//     paymentTerms: 7,
//     clientName: "Anita Wainwright",
//     clientEmail: "",
//     status: "draft",
//     senderAddress: {
//       street: "19 Union Terrace",
//       city: "London",
//       postCode: "E1 3EZ",
//       country: "United Kingdom",
//     },
//     clientAddress: {
//       street: "",
//       city: "",
//       postCode: "",
//       country: "",
//     },
//     items: [
//       {
//         name: "Logo Re-design",
//         quantity: 1,
//         price: 3102.04,
//         total: 3102.04,
//       },
//     ],
//     total: 3102.04,
//   },
// ];

// // Save each invoice
// invoices.forEach((invoice) => saveInvoice(invoice));

async function saveInvoice(invoice) {
  try {
    // Create and save the client
    const client = new Client({
      name: invoice.clientName,
      email: invoice.clientEmail || "no-email@example.com", // Default email if empty
      address: {
        street: invoice.clientAddress.street || "N/A",
        city: invoice.clientAddress.city || "N/A",
        postCode: invoice.clientAddress.postCode || "N/A",
        country: invoice.clientAddress.country || "N/A",
      },
    });
    const savedClient = await client.save();

    // Create and save the invoice
    const newInvoice = new Invoice({
      id: invoice.id,
      createdAt: new Date(invoice.createdAt),
      paymentDue: new Date(invoice.paymentDue),
      description: invoice.description,
      paymentTerms: invoice.paymentTerms,
      client: savedClient._id,
      status: invoice.status,
      senderAddress: invoice.senderAddress,
      items: invoice.items,
      total: invoice.total,
    });

    await newInvoice.save();
    console.log("Invoice added");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    mongoose.disconnect();
  }
}

// // Invoice data
// const invoiceData = {
//   id: "RT3080",
//   createdAt: "2021-08-18",
//   paymentDue: "2021-08-19",
//   description: "Re-branding",
//   paymentTerms: 1,
//   clientName: "Jensen Huang",
//   clientEmail: "jensenh@mail.com",
//   status: "paid",
//   senderAddress: {
//     street: "19 Union Terrace",
//     city: "London",
//     postCode: "E1 3EZ",
//     country: "United Kingdom",
//   },
//   clientAddress: {
//     street: "106 Kendell Street",
//     city: "Sharrington",
//     postCode: "NR24 5WQ",
//     country: "United Kingdom",
//   },
//   items: [
//     {
//       name: "Brand Guidelines",
//       quantity: 1,
//       price: 1800.9,
//       total: 1800.9,
//     },
//   ],
//   total: 1800.9,
// };

// // Save the invoice
// saveInvoice(invoiceData);
