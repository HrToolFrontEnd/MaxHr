import NavProfile from "../../../../../common/components/NavProfile/NavProfile";
import useClickOutside from "../../../../CustomHooks/ClickOutside";
import { useState } from "react";
import styles from "./MyProfile.module.scss";
import UserProfile from "../../../../../common/components/img/Img";
import UserImg from "../../../../../../pics/profile.jpeg";
import { AiTwotoneSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import SwitchInput from "../../../../../common/components/input/Input";
import { BiChevronDown } from "react-icons/bi";
import { MdDinnerDining, MdLocalHospital } from "react-icons/md";
import { CgCoffee } from "react-icons/cg";
import { RiHotelBedLine } from "react-icons/ri";
import UserBreks from "./subPages/UserBreaks";
import UserInput from "./subPages/UserInput";
import ProfileList from "./subPages/ProfileList";
// import { IoLogOutOutline } from "react-icons/io5";
const MyProfile = () => {
  const [userBreks, setUserBreks] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });
  const changName = () => {
    setIsOnline(!isOnline);
  };

  const changNameUser = () => {
    setUserBreks(!userBreks);
  };
  const UserBreksData = [
    {
      icon: <MdDinnerDining />,
      title: "Lunch Break ",
      time: "30 min",
    },
    {
      icon: <CgCoffee />,
      title: " Break ",
      time: "15 min",
    },
    {
      icon: <RiHotelBedLine />,
      title: " Sick ",
      time: "today",
    },
    {
      icon: <MdLocalHospital />,
      title: " Emergency ",
      time: "2 hr",
    },
  ];
  const ProfileListData = [
    {
      color: "#DA1E28",
      title: "Maxlence HR Tool ",
      date: "25 sep 21 to 26 sep 21",
    },
    {
      color: "#0043CE",
      title: "Maxlence Tool",
      date: "25 oct 21 to 26 nov 21",
    },
    {
      color: "#24A148",
      title: "Maxlence",
      date: "25 oct 21 to 26 nov 21",
    },
    {
      color: "#0043CE",
      title: "Maxlence Tool",
      date: "25 oct 21 to 26 nov 21",
    },
  ];
  return (
    <div ref={domNode} className={styles.avatar_container}>
      <NavProfile
        onClick={() => {
          setisProfileOpen(!isProfileOpen);
        }}
      />
      <div
        className={`${styles.menu} ${isProfileOpen ? styles.menu_active : ""}`}
      >
        <div className=" position-relative">
          <div className="user_profile_top_card_div">
            <div className="row m-0">
              <div className="col-3">
                <div className="user_profile_img_div">
                  <UserProfile
                    className="user_profile_img"
                    backgroundImage={UserImg}
                  />
                </div>
              </div>
              <div className="col-9">
                <div className="user_profile_imfo">
                  <p className="user_profile_name">Gaurav Kaushik</p>
                  <p className="user_profile_work">UI/UX designer</p>
                  <p className="user_profile_work">Employee ID: # 12</p>
                  <NavLink to="profile" className="user_profile_icon_div">
                    <AiTwotoneSetting className="user_profile_icon" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="user_profile_hr">
            <hr />
          </div>
          <div>
            <div className="profile_switch_main_div  ">
              <div className="row m-0">
                <div className="col-6">
                  <div className="profile_switch_top">
                    <div>
                      <label className="switch">
                        <SwitchInput type="checkbox" className="switch_input" />
                        <span
                          className="slider round"
                          onClick={changName}
                        ></span>
                      </label>
                    </div>
                    <div className="profile_switch_onlin_div">
                      <p className={`${isOnline ? "offline2" : " online2"}`}>
                        {isOnline ? "Offline" : " Online"}
                      </p>
                      <span className="user_breks_menu" onClick={changNameUser}>
                        <BiChevronDown />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="profile_switch_time_div">
                    <p className={`${isOnline ? "offline" : " online"}`}>
                      04:23:45
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${userBreks ? "online3" : "offline3"}`}>
              <div className="user_breks_main_div" onClick={changNameUser}>
                {UserBreksData.map((val, i) => {
                  return (
                    <UserBreks
                      key={i}
                      icon={val.icon}
                      title={val.title}
                      time={val.time}
                    />
                  );
                })}
                dddd
              </div>
              <div className="user_input_main_div">
                <div className="row m-0">
                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                    <UserInput
                      title="title"
                      type="text"
                      className="form-control"
                      placeholder="Type new"
                    />
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <UserInput
                      title="time"
                      type="text"
                      className="form-control"
                      placeholder="30 mints"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="profile_switch_main_div">
              <div className="profile_list_top_div">
                {ProfileListData.map((val, i) => {
                  return (
                    <ProfileList
                      key={i}
                      color={val.color}
                      title={val.title}
                      date={val.date}
                    />
                  );
                })}
              </div>
            </div>
            <div className="user_profile_hr user_profile_hr2">
              <hr />
            </div>
            <div className="logout_btn_div">
              <NavLink className="logout_btn" to="/">
                log out
              </NavLink>
            </div>
            {/* <div className=" text-center user_profile_bottom_link">
              <div className="row m-0">
                <div className="col-6">
                  <div className="user_profile_page_link">
                    <NavLink to="/">Privacy policy</NavLink>
                  </div>
                </div>
                <div className="col-6">
                  <div className="user_profile_page_link2">
                    <NavLink to="/">Terms and condition</NavLink>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
