import { OutlineBtn } from "../../../../common/ManagerComponents/Btn/Btn";
import { WelcomeNote } from "../../../../common/ManagerComponents/WelcomeNote/WelcomeNote";
import Img from "../../../../common/components/img/Img";
import Icon1 from "../../../../../pics/Manager/d1.png";
import Icon2 from "../../../../../pics/Manager/d2.png";
import Icon3 from "../../../../../pics/Manager/d4.png";
import Icon4 from "../../../../../pics/Manager/d3.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { PageInnerTitle } from "../../../../common/ManagerComponents/pageInnerTitle/Title";
import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
// mui
import { ExistingClientModal } from "./ExistingClientModal";
export const Index = () => {
  return (
    <>
      <WelcomeNote
        name="Shived"
        text="Lets do the best today"
        data={<ExistingClientModal />}
      />

      <ProjectSummary />
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
          <ProjectList />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <CalendarApp />
            </div>
          </div>
        </div>
        <div className="col-xxl-6 xol-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <TodayMeetings />
        </div>
        <div className="col-xxl-6 xol-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <PendingTasks />
        </div>
      </div>
    </>
  );
};
const ProjectSummary = () => {
  const Data = [
    {
      link: "/manager/project_list",
      backgroundColor: "#F1C21B",
      icon: Icon1,
      color: "white",
      number: "12",
      text: "New Projects",
      DotColor: "#DA1E28",
    },
    {
      link: "/",
      backgroundColor: "#393939",
      icon: Icon2,
      color: "white",
      number: "12",
      text: "Projects Running Late",
      DotColor: "white",
    },
    {
      link: "/",
      backgroundColor: "#0A0E30",
      icon: Icon3,
      color: "white",
      number: "12",
      text: "My Tasks",
      DotColor: "#DA1E28",
    },
    {
      link: "/",
      backgroundColor: "#DA1E28",
      icon: Icon4,
      color: "white",
      number: "12",
      text: "Approval Requests",
      DotColor: "white",
    },
  ];
  const App = (props) => {
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
          <NavLink to={props.link}>
            <div
              className="project_summary_card"
              style={{ backgroundColor: props.backgroundColor }}
            >
              <div className="row">
                <div className="col-12 position-relative">
                  <Img
                    backgroundImage={props.icon}
                    className="project_summary_card_icon"
                  />
                  <span className="project_summary_card_icon_dot">
                    <GoPrimitiveDot style={{ color: props.DotColor }} />
                  </span>
                  <div>
                    <p style={{ color: props.color }}>
                      <span>{props.number}</span>
                      {props.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <>
      <div style={{ marginBottom: "1.5rem" }}>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          {Data.map((val, i) => {
            return <App key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};

const ProjectList = () => {
  const ProjectListData = [
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "high",
      ProgressBar: "80",
    },
    {
      link: "/",
      ProjectName: "Aftercare Website Design & Marketing",
      PrioritybackgroundColor: "#31C971",
      PriorityName: "low",
      ProgressBar: "50",
    },
    {
      link: "/",
      ProjectName: "Maxlence Website Development",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "high",
      ProgressBar: "30",
    },
    {
      link: "/",
      ProjectName: "FSL E-Commerce Website Design",
      PrioritybackgroundColor: "#F3D32C",
      PriorityName: "Medium",
      ProgressBar: "70",
    },
    {
      link: "/",
      ProjectName: "FSL Marketing - Google Ads",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "high",
      ProgressBar: "90",
    },
  ];
  const ProjectListApp = (props) => {
    return (
      <>
        <tr>
          <td className="project_list_name">{props.ProjectName}</td>
          <td>
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">
                {props.PriorityName}
              </span>
            </div>
          </td>
          <td>
            <div className="project_list_progress_td">
              <div className="project_list_progress">
                <div className=" text-end mb-1">
                  <span>{props.ProgressBar}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: props.ProgressBar + "%",
                    }}
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="project_list_progress_td_link">
                <NavLink to={props.link}>View</NavLink>
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="dashbaord_white_card dashbaord_white_card2">
        <div className="row">
          <div className="col-6">
            <PageInnerTitle name="Projects" />
          </div>
          <div className="col-6 project_List_view_all_link">
            <NavLink to="/">View All</NavLink>
          </div>
        </div>
        <div>
          <table className="table project_tabel table-borderless text-capitalize">
            <thead>
              <tr className="project_list_title">
                <th scope="col">Project Name</th>
                <th scope="col">Priority</th>
                <th scope="col">Progress</th>
              </tr>
            </thead>
            <tbody className="project_list_name_tr">
              {ProjectListData.map((val, i) => {
                return <ProjectListApp key={i} {...val} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const TodayMeetings = () => {
  const ProjectListData = [
    {
      link: "/",
      ProjectName: "Merchant Discounts & Offers",
      titme: "10:20 - 11:00",
      borderColor: "#F1C21B",
    },
    {
      link: "/",
      ProjectName: "Merchant Discounts & Offers",
      titme: "10:20 - 11:00",
      borderColor: "#393939",
    },
    {
      link: "/",
      ProjectName: "Merchant Discounts & Offers",
      titme: "10:20 - 11:00",
      borderColor: "#DA1E28",
    },
    {
      link: "/",
      ProjectName: "Merchant Discounts & Offers",
      titme: "10:20 - 11:00",
      borderColor: "#31C971",
    },
  ];
  const ProjectListApp = (props) => {
    return (
      <>
        <div className="row project_list_name_top_div">
          <div className=" col-10 ">
            <div
              style={{ borderColor: props.borderColor }}
              className="project_list_name project_list_name_boder"
            >
              <h3>
                {props.titme} <span>am</span>
              </h3>
              {props.ProjectName}
              <p>
                Lead by <span>Peter Marcus</span>
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="today_meetings_btn_div">
              <OutlineBtn link={props.link} name="Join" />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="dashbaord_white_card dashbaord_white_card2">
        <div className="row">
          <div className="col-12">
            <PageInnerTitle name="Today’s Meetings" />
          </div>
        </div>
        <div>
          {ProjectListData.map((val, i) => {
            return <ProjectListApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const PendingTasks = () => {
  const ProjectListData = [
    {
      link: "/",
      ProjectName: "Luno Webiste Review With Design Team",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "high",
      Projecttext: "Luno Electrical",
    },
    {
      link: "/",
      ProjectName: "Budget Allocation for Aftercare",
      PrioritybackgroundColor: "#31C971",
      PriorityName: "low",
      Projecttext: "Luno Electrical",
    },
    {
      link: "/",
      ProjectName: "Budget Allocation for Aftercare",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "high",
      Projecttext: "Luno Electrical",
    },
    {
      link: "/",
      ProjectName: "Budget Allocation for Aftercare",
      PrioritybackgroundColor: "#F3D32C",
      PriorityName: "Medium",
      Projecttext: "Luno Electrical",
    },
  ];
  const ProjectListApp = (props) => {
    return (
      <>
        <tr>
          <td className="project_list_name">
            {props.ProjectName}
            <p>{props.Projecttext}</p>
          </td>
          <td>
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">
                {props.PriorityName}
              </span>
            </div>
          </td>
          <td>
            <div className="">
              <NavLink to={props.link}>View</NavLink>
            </div>
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="dashbaord_white_card dashbaord_white_card2">
        <div className="row">
          <div className="col-6">
            <PageInnerTitle name="Pending Tasks" />
          </div>
          <div className="col-6 project_List_view_all_link">
            <NavLink to="/">View All</NavLink>
          </div>
        </div>
        <div>
          <table className="table project_tabel table-borderless text-capitalize">
            <thead>
              <tr className="project_list_title">
                <th scope="col">Task Name</th>
                <th scope="col">Priority</th>
              </tr>
            </thead>
            <tbody className="project_list_name_tr">
              {ProjectListData.map((val, i) => {
                return <ProjectListApp key={i} {...val} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const CalendarApp = () => {
  const [value, onChangee] = useState(new Date());
  const navigate = useNavigate();
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="dashbaord_white_card dashbaord_white_card2">
            <div className="dashbaord_white_title">
              <div>
                <Calendar
                  className="dashbaord_calendar"
                  onChange={(date) => {
                    onChangee(date);
                    navigate("/");
                  }}
                  value={value}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
