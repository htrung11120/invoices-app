import Style from "./SideBars.module.scss";
import sidebarLogo from "../assets/Sidebar-icon.svg";
import avatar from "../assets/image-avatar.jpg";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import { useState } from "react";
export default function SideBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const modeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={Style.container}>
      <img src={sidebarLogo} alt="sidebarLog" />

      <div className={Style.footer}>
        <img
          src={isDarkMode ? sun : moon}
          alt={isDarkMode ? "sun" : "moon"}
          className={Style.icon}
          onClick={modeHandler}
        />
        <div className={Style.line}></div>
        <img src={avatar} alt="avatar" className={Style.avatar} />
      </div>
    </div>
  );
}
