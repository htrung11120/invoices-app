import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./scss/main.scss";
import Invoices from "./pages/Invoices.jsx";
import InvoiceDetails from "./components/InvoiceDetails.jsx";
import { AppProvider } from "./context/AppContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Invoices />,
    children: [
      {
        element: <InvoiceDetails />,
        index: true,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
);
