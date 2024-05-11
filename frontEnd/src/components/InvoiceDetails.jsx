import InvoiceDetailsHeader from "./InvoiceDetailsHeader";
import InvoiceLists from "./InvoiceLists";
import Style from "../scss/InvoicesDetails.module.scss";
export default function InvoiceDetails() {
  return (
    <div className={Style.container}>
      <InvoiceDetailsHeader />
      <InvoiceLists />
    </div>
  );
}
