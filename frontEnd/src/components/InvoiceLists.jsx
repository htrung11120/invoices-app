import React from "react";
import Style from "../scss/InvoiceLists.module.scss";
import { useGlobalContext } from "../context/AppContext";
export default function InvoiceLists() {
  const { data } = useGlobalContext();
  console.log(data);
  return <div>InvoiceLists</div>;
}
