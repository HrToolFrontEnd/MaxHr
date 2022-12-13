import { PageAllTopTitle } from "../../../../../common/ManagerComponents/PageAllTopTitle";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../../../../../common/ManagerComponents/form/Form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  OutlineBtnWithIcon,
  OutlineBtn,
} from "../../../../../common/ManagerComponents/Btn/Btn";
import { BsPlus } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";

export const AssignProject = () => {
  return (
    <>
      <div className="custom_container">
        <PageAllTopTitle link={-1} icon={<BsArrowLeft />} title="back" />
        <ClientProfileStep />
      </div>
    </>
  );
};
const ClientProfileStep = () => {
  const navigate = useNavigate();
  const steps = [<Step1 />, <Step2 />, <Step3 />];
  const [currentStep, setCurrentStep] = useState(0);
  const getCurrentStepCheckbox = (index) => {
    if (currentStep === index) return <AiOutlineCheckCircle />;
    else if (currentStep > index) return <AiOutlineCheckCircle />;
    else return <FiCircle className="ClientProfile_normal_dot" />;
  };
  return (
    <>
      <div className="custom_container_iner">
        <div className="row"></div>
        <div className="Appraisal_progress_bar_custom_container">
          <div className=" Client_Profile_main_top_div ">
            <div className="Client_Profile_main_top_div_inner">
              <progress
                className="Appraisal_progress_bar Appraisal_progress_bar_man"
                value={(100 / steps.length) * (currentStep + 1)}
                max="100"
                variant="warning"
              >
                32%
              </progress>
            </div>

            <div className="Appraisal_progress_text_bar Appraisal_progress_text_bar_mann">
              <ul className="mb-0 Client_Profile_svg">
                <li>
                  <span>{getCurrentStepCheckbox(0)}</span>
                  <label>Team Members</label>
                </li>
                <li>
                  <span>{getCurrentStepCheckbox(1)}</span>
                  <label>Milestones</label>
                </li>
                <li>
                  <span className="Client_Profile_svg_last">
                    {getCurrentStepCheckbox(2)}
                  </span>
                  <p className="Client_Profile_svg_last_text">Sprints</p>
                </li>
              </ul>
            </div>
          </div>
          <div>{steps[currentStep]}</div>
          <div>
            <div className=" Client_Profile_btn_div">
              <div>
                <button
                  className="manager_btn_outline"
                  onClick={() => setCurrentStep((old) => old - 1)}
                  disabled={!currentStep}
                >
                  Previous
                </button>
              </div>
              <div>
                <div>
                  <button
                    className="manager_btn_full"
                    onClick={() => {
                      setCurrentStep((old) => old + 1);
                      if (steps.length === currentStep + 1) navigate("/");
                    }}
                    // disabled={steps.length === currentStep + 1}
                  >
                    {steps.length === currentStep + 1
                      ? "Save"
                      : "Save and Continue"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Step1 = () => {
  const App = (props) => {
    const Leads = [
      { value: "sunny charkhwal", label: "sunny charkhwal" },
      { value: "kamal dixit", label: "kamal dixit" },
      { value: "Vivek Rawat", label: "Vivek Rawat" },
      { value: "akhilesh.soni", label: "akhilesh.soni" },
    ];
    return (
      <>
        <div className="col-12 Select_Services_row_new_inner_top">
          <div className="row    Select_Services_row Select_Services_row_new">
            <div className="col-12 ">
              <div className=" Select_Services_row_new_inner">
                <p>{props.MobileRowNumber}</p>
              </div>
              <p className="project_leads">{props.DepartmentType}</p>
              <label className="all_page_my_label_new">Team Members*</label>
              <div className="dashboard_top_week_Select drop_box">
                <Select isMulti options={Leads} placeholder="Team Members*" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const Data = [
    {
      MobileRowNumber: "1",
      DepartmentType: "Website Front End Development",
    },
    {
      MobileRowNumber: "2",
      DepartmentType: "Backend",
    },
  ];
  return (
    <>
      <div className="row align-items-baseline">
        <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="Client_Profile_title">
            <h3>Team Members</h3>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
          <OutlineBtn
            link="/manager/project_details"
            name="View Project Details"
            icon={<BsPlus />}
          />
        </div>
      </div>
      <div className="m_t">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          {Data.map((val, i) => {
            return <App key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};

const Step2 = () => {
  const App = (props) => {
    const Milestones = [
      { value: "Research", label: "Research" },
      { value: "Design Overview", label: "Design Overview" },
    ];
    const Employee = [
      { value: "sunny charkhwal", label: "sunny charkhwal" },
      { value: "kamal dixit", label: "kamal dixit" },
      { value: "Vivek Rawat", label: "Vivek Rawat" },
      { value: "akhilesh.soni", label: "akhilesh.soni" },
    ];
    return (
      <>
        <div className="col-12 Select_Services_row_new_inner_top">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3    Select_Services_row Select_Services_row_new">
            <div className="col-12 ">
              <div className=" Select_Services_row_new_inner">
                <p>{props.MobileRowNumber}</p>
              </div>
              <p className="project_leads">{props.DepartmentType}</p>
              <label className="all_page_my_label_new">Milestones*</label>
              <div className="dashboard_top_week_Select drop_box">
                <Select
                  isMulti
                  options={Milestones}
                  placeholder="Milestones*"
                />
              </div>
            </div>
            <div className="col-12  mt-2 milestones_emp ">
              <div className="row g-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label className="all_page_my_label_new">Employee*</label>
                  <div className="dashboard_top_week_Select drop_box">
                    <Select options={Employee} placeholder="Employee*" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 ">
                      <OutlineBtnWithIcon
                        name="Add  Service"
                        icon={<BsPlus />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const Data = [
    {
      MobileRowNumber: "1",
      DepartmentType: "Website Front End Development",
    },
    {
      MobileRowNumber: "2",
      DepartmentType: "Backend",
    },
  ];

  return (
    <>
      <div className="row align-items-baseline">
        <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="Client_Profile_title">
            <h3>Milestones</h3>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
          <OutlineBtn
            link="/manager/project_details"
            name="View Project Details"
            icon={<BsPlus />}
          />
        </div>
      </div>
      <div className="m_t">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          {Data.map((val, i) => {
            return <App key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const Step3 = () => {
  const App = (props) => {
    return (
      <>
        <div className="col-12 Select_Services_row_new_inner_top">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3    Select_Services_row Select_Services_row_new">
            <div className="col-12 ">
              <div className=" Select_Services_row_new_inner">
                <p>{props.MobileRowNumber}</p>
              </div>
              <p className="project_leads">{props.DepartmentType}</p>
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <InputBox type="date" label="Start Date*" />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <InputBox type="date" label="end Date*" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const Data = [
    {
      MobileRowNumber: "1",
      DepartmentType: "Website Front End Development",
    },
    {
      MobileRowNumber: "2",
      DepartmentType: "Backend",
    },
  ];

  return (
    <>
      <div className="row align-items-baseline">
        <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="Client_Profile_title">
            <h3>Sprints</h3>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
          <OutlineBtn
            link="/manager/project_details"
            name="View Project Details"
            icon={<BsPlus />}
          />
        </div>
      </div>
      <div className="m_t">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          {Data.map((val, i) => {
            return <App key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
