import Card from "./Card";
import Notification from "../../../../../../pics/profile.jpeg";
import { MdNotifications } from "react-icons/md";
import { BsFillChatLeftFill } from "react-icons/bs";
import styles from "./Notifications.module.scss";
import { useState } from "react";
import useClickOutside from "../../../../CustomHooks/ClickOutside";
import { NavLink } from "react-router-dom";

const Index = (props) => {
  const [isNotificationsOpen, setisNotificationsOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNotificationsOpen(false);
  });
  const CardData = [
    {
      img: Notification,
      name: "Gaurav Kaushik",
      text: "I have bought a new car",
      time: "3 Seconds ago",
    },
    {
      img: Notification,
      name: "Gaurav Kaushik",
      text: "I have bought a new car",
      time: "3 Seconds ago",
    },
  ];
  return (
    <>
      <div>
        <NavLink
          className="messages_icon_top_nav"
          to="messages"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Messages"
        >
          <BsFillChatLeftFill />
        </NavLink>
      </div>
      <div
        ref={domNode}
        className={`${styles.icon_container} ${
          styles.notifications_container
        } ${isNotificationsOpen ? styles.icon_active : undefined}`}
        onClick={() => {
          setisNotificationsOpen(!isNotificationsOpen);
        }}
      >
        <div
          className=" position-relative"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Notification"
        >
          <span className="position-absolute top-0 start-100 translate-middle badge badge_top rounded-circle bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
          <MdNotifications />
        </div>

        {/* INBOX SUBMENU */}
        <div
          className={`${styles.submenu} ${
            isNotificationsOpen ? styles.submenu_active : ""
          }`}
        >
          {/* <h3 className={styles.title}>Notifications</h3> */}
          <div className={styles.notifications}>
            {CardData.map((val, i) => {
              return (
                <Card
                  key={i}
                  img={val.img}
                  name={val.name}
                  text={val.text}
                  time={val.time}
                />
              );
            })}
            <div>
              <div className="notifications_btn">
                <NavLink className="" to="/hr/notification">
                  view more
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
