import Style from "../scss/InvoiceDetailsHeader.module.scss";
import arrDown from "../assets/icon-arrow-down.svg";
import addItem from "../assets/Add-new.svg";
export default function InvoiceDetailsHeader() {
  return (
    <div className={Style.container}>
      <div className={Style.leftSide}>
        <p className={Style.header}>Invoices</p>
        <p className={Style.total}>There are 7 total invoices</p>
      </div>
      <div className={Style.rightSide}>
        <div className={Style.filterContainer}>
          <p className={Style.filter}>Filter by status</p>
          <img src={arrDown} className={Style.filterIcon} alt="icon" />
        </div>
        <img src={addItem} className={Style.total} alt="icon-arr-total" />
      </div>
    </div>
  );
}
