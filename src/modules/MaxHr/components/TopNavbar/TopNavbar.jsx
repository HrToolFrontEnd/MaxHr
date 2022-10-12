import styles from "./TopNavbar.module.scss";
import { useContext } from "react";
import NavContext from "../../Context/NavContext";
import { MdOutlineMenu } from "react-icons/md";
import MyProfile from "./Submenus/MyProfile/MyProfile";
import Notifications from "./Submenus/NotificationCard/Index";
import SearchBar from "./Submenus/SearchBar/SearchBar";
const RightNavbar = () => {
  const { nav, setNav } = useContext(NavContext);

  return (
    <div className={styles.container}>
      {/* BURGER */}

      <div
        className={styles.burger_container}
        onClick={() => {
          setNav(!nav);
        }}
      >
        <MdOutlineMenu />
      </div>
      <SearchBar />
      {/* ACTIONS */}
      <div className={styles.actions}>
        <Notifications />
      </div>

      {/* My Profile */}
      <MyProfile />
    </div>
  );
};

export default RightNavbar;
