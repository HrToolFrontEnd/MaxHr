import Input from "../../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ProfileIcon from "../../../../../common/components/img/Img";
import ProfilPhoto2 from "../../../../../../pics/profile2.jpeg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { useState } from "react";
import { RightFilters } from "../../../../../common/components/RightFilters/RightFilters";
import { AboutProfileInput } from "./AboutProfile";
export const Projects = () => {
  return (
    <>
      <ProjectsFilter />
      <ProjectsCard />
    </>
  );
};
export const ProjectsFilter = () => {
  return (
    <>
      <div className=" mb-4">
        <div className="row g-3">
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="ApprovalDetailsPage_date_picker">
              <label>From</label>
              <Input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 ">
            <div className="ApprovalDetailsPage_date_picker">
              <label>to</label>
              <Input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-9 col-9 ApprovalDetailsPage_search_input justify-content-start">
            <div className="ApprovalDetailsPage_date_picker">
              <div className="ApprovalDetailsPage_search_input_iner_div">
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-3 col-3 RightFilters_top_div ">
            <RightFilters
              title="Filter"
              btn1="Reset"
              btn2="Show results"
              data={<ProjectsRightFiltersData />}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export const ProjectsRightFiltersData = () => {
  const [FiltersAdd, setFiltersAdd] = useState(false);
  const FiltersAddOpen = () => {
    setFiltersAdd(!FiltersAdd);
  };
  const Data = [
    {
      toptile: "Sort By",
      cat1: [
        {
          label: "Most recent",
        },
        {
          label: "Most relevent",
        },
      ],
    },
    {
      toptile: "Priority",
      cat1: [
        {
          label: "High",
        },
        {
          label: "Medium",
        },
        {
          label: "Low",
        },
      ],
    },
    {
      toptile: "Department",
      cat1: [
        {
          label: "My role only",
        },
        {
          label: "Design",
        },
        {
          label: "Developement",
        },
        {
          label: "Marketing",
        },
        {
          label: "Others",
        },
      ],
    },
    {
      toptile: "Status",
      cat1: [
        {
          label: "Assigned",
        },
        {
          label: "In progress",
        },
        {
          label: "In review",
        },
        {
          label: "Not started",
        },
        {
          label: "Pending",
        },
        {
          label: "Delayed",
        },
        {
          label: "Completed",
        },
      ],
    },
    {
      toptile: "Status",
      cat1: [
        {
          label: "Assigned",
        },
        {
          label: "In progress",
        },
        {
          label: "In review",
        },
        {
          label: "Not started",
        },
        {
          label: "Pending",
        },
        {
          label: "Delayed",
        },
        {
          label: "Completed",
        },
      ],
    },
  ];
  const App = (props) => {
    return (
      <>
        <div className="row Projects_Right_Filters_Data_main_div">
          <div className="col-12">
            <p>{props.toptile}</p>
          </div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div
                key={i}
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label={val.label} />
                </FormGroup>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const FiltersInnerBtn = () => {
    return (
      <>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-6">
            <AboutProfileInput
              label="Start Date"
              type="date"
              className="form-control"
              placeholder="918-233-2345"
            />
          </div>
          <div className="col-6">
            <AboutProfileInput
              label="End Date"
              type="date"
              className="form-control"
              placeholder="918-233-2345"
            />
          </div>
          <div className="col-12 text-center">
            <div className={`${FiltersAdd ? "d-block" : "d-none"}`}>
              <button
                className="UploadDocumentModal_body_btn2 w-75"
                onClick={FiltersAddOpen}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {Data.map((val, i) => {
        return <App key={i} toptile={val.toptile} arr={val} />;
      })}
      <div className={`${FiltersAdd ? "d-none" : "d-block"}`}>
        <button
          className="UploadDocumentModal_body_btn2"
          onClick={FiltersAddOpen}
        >
          Custom
        </button>
      </div>
      <div>{FiltersAdd ? <FiltersInnerBtn /> : null}</div>
    </>
  );
};
const ProjectsCard = () => {
  const App = (props) => {
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="projects_card_div">
            <h3>{props.ProjectName}</h3>
            <p>
              Last Update:<span>{props.time}</span>
            </p>
            <div className="projects_card_status">{props.status}</div>
            <ul className="projects_card_members">
              <li>
                <p>Members:</p>
              </li>
              <li className=" mx-3  d-flex align-items-center">
                {props.arr.cat1.map((val, i) => {
                  return (
                    <ProfileIcon
                      key={i}
                      className="projects_card_members_icon"
                      backgroundImage={val.img}
                    />
                  );
                })}
                <div className="projects_card_members_more_icon">
                  <span>+{props.more}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  const Data = [
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "5",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "10",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "5",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "10",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "5",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "10",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "5",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "10",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "5",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "10",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "10",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
    {
      ProjectName: "ABC Project Custom...",
      time: "4 hr Ago",
      status: "In Progress",
      more: "10",

      cat1: [
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
        {
          img: ProfilPhoto2,
        },
      ],
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        {Data.map((val, i) => {
          return (
            <App
              key={i}
              ProjectName={val.ProjectName}
              time={val.time}
              status={val.status}
              more={val.more}
              arr={val}
            />
          );
        })}
      </div>
    </>
  );
};
