import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ProfileIcon from "../../../../../common/components/img/Img";
import ProfilPhoto2 from "../../../../../../pics/profile2.jpeg";
export const EmployeesCard = () => {
  const EmployeesCardApp = (props) => {
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <NavLink
            to={props.pagelink ? props.pagelink : "/hr/not-found"}
            className="EmployeesCard_top_div_link"
          >
            <div className="EmployeesCard_top_div_main">
              <div className="EmployeesCard_top_div_main"></div>
              <div className="EmployeesCard_top_div">
                <div className=" position-relative">
                  <ProfileIcon
                    className="profile_card_icon"
                    backgroundImage={props.userIcon}
                  />
                </div>
                <h3>{props.name}</h3>
                <div className="EmployeesCard_text">
                  <span>
                    <AiOutlineMail />
                  </span>
                  <span>{props.email}</span>
                </div>
                <div className="EmployeesCard_text">
                  <span>
                    <IoCallOutline />
                  </span>
                  <span>{props.phoneNumber}</span>
                </div>
              </div>
              <div className="EmployeesCard_hr">
                <hr />
              </div>
              <div className="EmployeesCard_text_bottom">
                {props.footerName}
              </div>
            </div>
          </NavLink>
        </div>
      </>
    );
  };
  const EmployeesCardAppData = [
    {
      pagelink: "/hr/announcement_profile",
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      email: "sunny@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      footerName: "react js developer",
    },
    {
      pagelink: "/hr/announcement_profile",
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      email: "sunny@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      footerName: "react js developer",
    },
    {
      pagelink: "/hr/announcement_profile",
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      email: "sunny@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      footerName: "react js developer",
    },
    {
      pagelink: "/hr/announcement_profile",
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      email: "sunny@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      footerName: "react js developer",
    },
    {
      pagelink: "/hr/announcement_profile",
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      email: "sunny@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      footerName: "react js developer",
    },
    {
      pagelink: "/hr/announcement_profile",
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      email: "sunny@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      footerName: "react js developer",
    },
    {
      pagelink: "/hr/announcement_profile",
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      email: "sunny@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      footerName: "react js developer",
    },
    {
      pagelink: "/hr/announcement_profile",
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      email: "sunny@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      footerName: "react js developer",
    },
    {
      pagelink: "/hr/announcement_profile",
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      email: "sunny@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      footerName: "react js developer",
    },
  ];
  return (
    <>
      <div className="EmployeesCard_container">
        <div>
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {EmployeesCardAppData.map((val, i) => {
              return (
                <EmployeesCardApp
                  key={i}
                  pagelink={val.pagelink}
                  userIcon={val.userIcon}
                  footerName={val.footerName}
                  phoneNumber={val.phoneNumber}
                  email={val.email}
                  name={val.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
