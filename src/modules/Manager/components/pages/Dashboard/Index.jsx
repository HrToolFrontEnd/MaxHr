import { FullBtn } from "../../../../common/ManagerComponents/Btn/Btn";
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
export const Index = () => {
  return (
    <>
      <WelcomeNote
        name="Shived"
        text="Lets do the best today"
        data={<FullBtn link="/manager/client_Profile" name="Add Project" />}
      />
      <ProjectSummary />
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
          <ProjectList />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
              <CalendarApp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ProjectSummary = () => {
  const Data = [
    {
      link: "/manager/",
      backgroundColor: "#F1C21B",
      icon: Icon1,
      color: "white",
      number: "12",
      text: "New Projects",
    },
    {
      link: "/",
      backgroundColor: "#393939",
      icon: Icon2,
      color: "white",
      number: "12",
      text: "Projects Running Late",
    },
    {
      link: "/",
      backgroundColor: "#0A0E30",
      icon: Icon3,
      color: "white",
      number: "12",
      text: "My Tasks",
    },
    {
      link: "/",
      backgroundColor: "#DA1E28",
      icon: Icon4,
      color: "white",
      number: "12",
      text: "Approval Requests",
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
                <div className="col-12">
                  <Img
                    backgroundImage={props.icon}
                    className="project_summary_card_icon"
                  />
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
      text: "New Projects",
    },
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#31C971",
      PriorityName: "low",
      ProgressBar: "50",
      text: "New Projects",
    },
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "high",
      ProgressBar: "30",
      text: "New Projects",
    },
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#F3D32C",
      PriorityName: "Medium",
      ProgressBar: "70",
      text: "New Projects",
    },
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "high",
      ProgressBar: "90",
      text: "New Projects",
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
                    style={{ width: props.ProgressBar + "%" }}
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
