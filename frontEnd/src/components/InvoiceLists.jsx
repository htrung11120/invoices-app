import React from "react";
import Style from "../scss/InvoiceLists.module.scss";
import { useGlobalContext } from "../context/AppContext";
import { v4 as uuid } from "uuid";
import rightArr from "../assets/icon-arrow-right.svg";

export default function InvoiceLists() {
  const { data } = useGlobalContext();

  if (!data) {
    return <h1>Loading....</h1>;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options).replace(/,/g, "");
  }

  return (
    <div className={Style.container}>
      {data.map((listItem) => {
        const { id, paymentDue, client, total, status } = listItem;
        const { name } = client;

        return (
          <div className={Style.listContainer} key={uuid()}>
            <div className={Style.rightContainer}>
              <p className={Style.listId}>
                <span>#</span>
                {id}
              </p>
              <p className={Style.dueDate}>Due {formatDate(paymentDue)}</p>
              <p className={Style.name}>{name}</p>
            </div>
            <div className={Style.leftContainer}>
              <p className={Style.total}>$ {total}</p>
              <div className={`${Style.status} ${Style[status]}`}>
                <div className={`${Style.circle}`}></div>
                <p className={Style.statusText}>{status}</p>
              </div>
              <img src={rightArr} alt="rightArr" className={Style.arr} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
