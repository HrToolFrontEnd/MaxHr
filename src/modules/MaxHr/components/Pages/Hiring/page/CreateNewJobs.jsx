import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { AboutProfileInput } from "../../Profile/components/AboutProfile";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React from "react";
import Select from "react-select";
import { Editor } from "react-draft-wysiwyg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SketchPicker } from "react-color";
import useClickOutside from "../../../../CustomHooks/ClickOutside";
import { FiEdit } from "react-icons/fi";

export const CreateNewJobs = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />

        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 mt-1">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
            <CreateNewJobsForm />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-5 order-lg-2 order-1">
            <OpenJobs />
          </div>
        </div>
      </div>
    </>
  );
};
const PageTop = () => {
  return (
    <>
      <div className="row TotalOpenings_input_main_div g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
          <TopPageTitle
            TitleLink={-1}
            TilelIcon={<BsArrowLeft />}
            Name="Create New Jobs"
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="TotalOpenings_input_div">
            <span>
              <BiSearch />
            </span>
            <input
              type="email"
              className="form-control w-100"
              placeholder="Search by name, email or department"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const CreateNewJobsForm = () => {
  const [ColorPicker, setColorPicker] = useState(false);
  const [buttonText, setButtonText] = useState("Copy");

  function handleClick() {
    setButtonText("Copied");
  }
  const ColorPickerOpen = () => {
    setColorPicker(!ColorPicker);
  };
  let domNode = useClickOutside(() => {
    setColorPicker(false);
  });
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <AboutProfileInput
            label="Job Title"
            type="text"
            className="form-control"
            placeholder="Job Title"
          />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div>
            <label className="all_page_my_label">
              Define Color for this job
            </label>
          </div>
          <div className="new_jobs_setup_color_div" onClick={ColorPickerOpen}>
            <p className="new_jobs_setup_color"></p>
          </div>
          <div ref={domNode}>
            {ColorPicker ? <SketchPicker className="color_picker3" /> : null}
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <AboutProfileInput
            label="Job Title"
            type="text"
            className="form-control"
            placeholder="Internship"
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
          <label className="all_page_my_label">Departments</label>
          <div className="row">
            <div className="col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Departments" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <AboutProfileInput
            label="Experience"
            type="text"
            className="form-control"
            placeholder="0-1 Year"
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
          <AboutProfileInput
            label="start date"
            type="date"
            className="form-control"
            placeholder="0-1 Year"
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
          <AboutProfileInput
            label="end date"
            type="date"
            className="form-control"
            placeholder="0-1 Year"
          />
        </div>
        <div className="col-12">
          <div>
            <EditorCustomToolbarOption />
          </div>
        </div>
        <div className="col-12">
          <CreateNewJobsList />
        </div>
        <div className="col-12 m-0 mb-4">
          <div>
            <label className="all_page_my_label">
              Copy this link to share this job on other sites
            </label>
          </div>
          <div className="JobsList_copy_btn_div">
            <div className="JobsList_copy_text">
              caiufhq934yr9hacoew8fyqc0384yuf 08eucNW04UFJ-0]9
            </div>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  "caiufhq934yr9hacoew8fyqc0384yuf 08eucNW04UFJ-0]9"
                )
              }
            >
              <span onClick={handleClick}>{buttonText}</span>
            </button>
          </div>
        </div>
        <div className="col-12">
          <div className="CreateNewJobs_btn_div">
            <div>
              <button className="CreateNewJobs_btn">Cancel</button>
            </div>
            <div>
              <div>
                <button className="CreateNewJobs_btn2">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EditorCustomToolbarOption = () => (
  <Editor
    wrapperClassName="wrapper-class"
    editorClassName="editor-class"
    toolbarClassName="toolbar-class"
    placeholder="Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker "
  />
);
const CreateNewJobsList = () => {
  const CreateNewJobsListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td className=" p-3">{props.title}</td>
          <td className=" text-end p-3">
            <input className="form-check-input" type="checkbox" />
          </td>
          <td className=" text-end p-3">
            <input className="form-check-input" type="checkbox" />
          </td>
        </tr>
      </>
    );
  };
  const CreateNewJobsListData = [
    {
      title: "Full Name",
    },
    {
      title: "Candidate’s Photo",
    },
    {
      title: "Resume",
    },
    {
      title: "CV",
    },
    {
      title: "Experience",
    },
    {
      title: "Current Orginazation",
    },
    {
      title: "Role in Current Orginazation",
    },
    {
      title: "Add More Experience",
    },
    {
      title: "Current CTC",
    },
    {
      title: "Expected CTC",
    },
    {
      title: "Availability",
    },
    {
      title: "Linkedin Profile",
    },
    {
      title: "Portfolio Link",
    },
    {
      title: "Other Link",
    },
    {
      title: "Anything else you want us know something exciting about you?",
    },
    {
      title: "Give us  reason to hire you",
    },
  ];
  return (
    <>
      <div>
        <div className="ApprovalDetailsPage_top_div pt-0">
          <table className="table table-hover ReimbursementSetup_main_div  text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col" className=" p-3">
                  Colum
                </th>
                <th scope="col" className=" text-end p-3">
                  Required
                </th>
                <th scope="col" className=" text-end p-3">
                  Compulsary
                </th>
              </tr>
            </thead>
            <tbody className="default_salary_tbody">
              {CreateNewJobsListData.map((val, i) => {
                return <CreateNewJobsListApp key={i} title={val.title} />;
              })}
              <tr className="ApprovalDetailsPage_thead_td">
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="text"
                      className="form-control w-100 "
                      placeholder="New Type"
                    />
                  </div>
                </td>
                <td colSpan="2">
                  <div className="reimbursement_setup_lisl">
                    <button>Add</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const OpenJobs = () => {
  const JobCardsApp = (props) => {
    return (
      <>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
          <div className="JobCards_main_div">
            <div className="row">
              <div className="col-3">
                <NavLink to="/hr/new_application">
                  <div
                    className="JobCards_main_div_round"
                    style={{ backgroundColor: props.color }}
                  ></div>
                </NavLink>
              </div>
              <div className="col-6">
                <NavLink to="/hr/new_application">
                  <h3>{props.name}</h3>
                  <p>{props.applicationsNumber}</p>
                </NavLink>
              </div>
              <div className="col-1">
                <NavLink
                  className="JobCards_main_div_menu"
                  to="/hr/create_new_jobs"
                >
                  <FiEdit />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const JobCardsData = [
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        {JobCardsData.map((val, i) => {
          return (
            <JobCardsApp
              key={i}
              name={val.name}
              applicationsNumber={val.applicationsNumber}
              color={val.color}
            />
          );
        })}
      </div>
    </>
  );
};
