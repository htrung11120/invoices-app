import Style from "../scss/SideBars.module.scss";
import sidebarLogo from "../assets/Sidebar-icon.svg";
import avatar from "../assets/image-avatar.jpg";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import { useGlobalContext } from "../context/AppContext";

export default function SideBar() {
  const { darkMode, setDarkMode } = useGlobalContext();

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={Style.container}>
      <img src={sidebarLogo} alt="sidebarLog" />
      <div className={Style.footer}>
        <img
          src={darkMode ? sun : moon}
          alt={darkMode ? "sun" : "moon"}
          className={Style.icon}
          onClick={toggleDarkMode}
        />
        <div className={Style.line}></div>
        <img src={avatar} alt="avatar" className={Style.avatar} />
      </div>
    </div>
  );
}
