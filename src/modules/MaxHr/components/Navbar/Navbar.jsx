//STYLES
import styles from "./Navbar.module.scss";
import "../../../../scss/index.scss";
//CONTEXT
import { useContext } from "react";
import NavContext from "../../Context/NavContext";

//REACT ROUTER
import { NavLink } from "react-router-dom";
import Logo from "../../../../pics/Logo.png";
import LogoImg from "../../../common/components/NavLogo/Logo";
//ICONS
import { MdPayments, MdManageAccounts, MdOutlineHelp } from "react-icons/md";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { ImBullhorn, ImProfile } from "react-icons/im";
import {
  AiOutlineSearch,
  AiOutlineLineChart,
  AiTwotoneSetting,
} from "react-icons/ai";
import { RiTableAltFill, RiBankFill } from "react-icons/ri";
import {
  FaUserTie,
  FaUsers,
  FaBook,
  FaClipboardList,
  FaUserAstronaut,
  FaTicketAlt,
} from "react-icons/fa";
import {
  BsCalendarX,
  BsCalendar2CheckFill,
  BsFillCalendar2WeekFill,
} from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../../common/components/input/Input";
import { useState } from "react";
import {
  faGaugeHigh,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { TiTicket } from "react-icons/ti";
import { CgPerformance } from "react-icons/cg";
import { GiReceiveMoney } from "react-icons/gi";
const NavUrl = ({ url, icon, description, navItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const { nav, setNav } = useContext(NavContext);
  const checkWindowSize = () => {
    if (window.innerWidth < 1024) setNav(!nav);
  };
  const DropdownItem = () => (
    <>
      <div
        className={styles.test}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {icon}
        <span className={styles.description}>
          {description}
          <span className="last_icon">
            {navItems ? (
              isDropdownOpen ? (
                <FiChevronRight />
              ) : (
                <FiChevronDown />
              )
            ) : null}
          </span>
        </span>
      </div>
      <div
        className={`${
          isDropdownOpen ? "isDropdownOpen_show" : "isDropdownOpen_hide"
        }`}
      >
        {navItems.map((item, i) => (
          <div className="isDropdownOpen_sub_menu " key={i}>
            <NavLink
              to={item.link}
              onClick={() => checkWindowSize()}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span>
                {item.iconIner}
                <label className="nav_sub_title">{item.title}</label>
              </span>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
  const NavItem = () => (
    <div>
      <NavLink
        to={`${url}`}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        onClick={() => checkWindowSize()}
      >
        {icon}
        <span className={styles.description}>{description}</span>
      </NavLink>
    </div>
  );
  return (
    <li className={styles.li_navlink}>
      {navItems ? <DropdownItem /> : <NavItem />}
    </li>
  );
};

const Navbar = () => {
  const { nav, setNav } = useContext(NavContext);

  return (
    <div
      className={`${styles.navbar_container} ${
        nav ? styles.navbar_mobile_active : undefined
      }`}
    >
      <nav className={nav ? undefined : styles.nav_small}>
        {/* LOGO */}
        <LogoImg className={styles.logo_div} img={Logo} alt="logo" />

        {/* MENU */}
        <div className="menu_container_new">
          <ul className={styles.menu_container}>
            <div className=" d-block d-xxl-none d-xl-none d-md-none">
              <div className="nav_mobile_search_main_div">
                <div className="nav_mobile_search_iner_div">
                  <span>
                    <AiOutlineSearch />
                  </span>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <NavUrl
              url="dashboard"
              icon={<RiTableAltFill />}
              description="Dashboard"
            />
            <NavUrl
              url="announcement"
              icon={<ImBullhorn />}
              description="Announcement"
            />
            <NavUrl
              navItems={[
                {
                  title: "My profile",
                  link: "/hr/profile",
                  iconIner: <ImProfile />,
                },
                {
                  title: "Employees’ Management",
                  link: "/hr/employees_management",
                  iconIner: <MdManageAccounts />,
                },
              ]}
              url="profile"
              icon={<FaUserTie />}
              description="profile"
            />
            <NavUrl url="finance" icon={<MdPayments />} description="finance" />
            <NavUrl
              navItems={[
                {
                  title: "My Attendence",
                  link: "/hr/attendence",
                  iconIner: <BsCalendar2CheckFill />,
                },
                {
                  title: "Employees Attendence",
                  link: "/hr/employees_attendance",
                  iconIner: <BsFillCalendar2WeekFill />,
                },
              ]}
              icon={<BsCalendarX />}
              description="attendence"
            />
            <NavUrl
              navItems={[
                {
                  title: "My performance",
                  link: "/hr/performance",
                  iconIner: <AiOutlineLineChart />,
                },
                {
                  title: "Employees performance",
                  link: "/hr/employees_performance",
                  iconIner: <CgPerformance />,
                },
              ]}
              url="performance"
              icon={<FontAwesomeIcon icon={faGaugeHigh} />}
              description="performance"
            />
            <NavUrl
              url="organizationchart"
              icon={<FaUsers />}
              description="Orginazation Tree"
            />
            <NavUrl
              url="contractor_management"
              icon={<FaUserAstronaut />}
              description="Contractor Management"
            />
            <NavUrl
              url="asset_management"
              icon={<GiReceiveMoney />}
              description="Asset Management"
            />
            <NavUrl
              url="hiring"
              icon={<BsCalendar2CheckFill />}
              description="hiring"
            />
            <NavUrl
              url="training"
              icon={<FontAwesomeIcon icon={faPersonChalkboard} />}
              description="training"
            />
            <NavUrl
              url="taskmanagement"
              icon={<FaBook />}
              description="task management"
            />
            <NavUrl url="Payroll" icon={<RiBankFill />} description="Payroll" />
            <NavUrl
              url="reports"
              icon={<FaClipboardList />}
              description="reports"
            />
            <NavUrl
              url="settings"
              icon={<AiTwotoneSetting />}
              description="Settings"
            />
            <NavUrl
              navItems={[
                {
                  title: "Add Ticket",
                  link: "/hr/add_ticket",
                  iconIner: <FaTicketAlt />,
                },
                {
                  title: "ActionTicket",
                  link: "/hr/action_ticket",
                  iconIner: <TiTicket />,
                },
              ]}
              icon={<MdOutlineHelp />}
              description="Help & Support"
            />
          </ul>
        </div>

        {/* LOGOUT BUTTON */}
        {/* <div
          className={`${styles.btn_logout}`}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <MdOutlineLogout />
        </div> */}
      </nav>

      <div
        className={nav ? styles.mobile_nav_background_active : undefined}
        onClick={() => {
          setNav(!nav);
        }}
      ></div>
    </div>
  );
};

export default Navbar;
