//STYLES
import styles from "./Navbar.module.scss";

//CONTEXT
import { useContext } from "react";
import NavContext from "../../Context/NavContext";

//REACT ROUTER
import { NavLink } from "react-router-dom";
import Logo from "../../../../pics/Logo.png";
import LogoImg from "../../../common/components/NavLogo/Logo";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiTableAltFill } from "react-icons/ri";
import Input from "../../../common/components/input/Input";
import { useState } from "react";
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
          <div className="isDropdownOpen_sub_menu" key={i}>
            <NavLink
              to={item.link}
              onClick={() => checkWindowSize()}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span>
                {item.iconIner}
                {item.title}
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

            {/* <NavUrl
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
            /> */}
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
