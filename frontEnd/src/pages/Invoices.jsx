import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Style from "./Invoices.module.scss";
export default function Invoices() {
  return (
    <div className={Style.container}>
      <SideBar />
      <Outlet />
    </div>
  );
}
