import PageTop from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import Select from "react-select";
import { GoPrimitiveDot } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import {
  InputBox,
  SelectBox,
  TextareaBox,
  CheckBox,
} from "../../../../../common/ManagerComponents/form/Form";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { UploadDocumentIner } from "../../../../../MaxHr/components/Pages/Profile/components/EmployeesDocument";
import { Nav, Tab } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { OutlineBtnWithIcon } from "../../../../../common/ManagerComponents/Btn/Btn";
import { BsPlus } from "react-icons/bs";
export const ClientProfile = () => {
  return (
    <>
      <div className="custom_container">
        <div>
          <PageTop
            TitleLink={-1}
            TilelIcon={<BsArrowLeft />}
            Name="Create Client Profile"
          />
        </div>
        <ClientProfileStep />
      </div>
    </>
  );
};

export const ClientProfileStep = () => {
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];
  const [currentStep, setCurrentStep] = useState(0);
  const getCurrentStepCheckbox = (index) => {
    if (currentStep === index) return <GoPrimitiveDot />;
    else if (currentStep > index) return <GoPrimitiveDot />;
    else return <GoPrimitiveDot className="ClientProfile_normal_dot" />;
  };
  return (
    <>
      <div className="custom_container_iner">
        <div className="row"></div>
        <div className="Appraisal_progress_bar_custom_container">
          <div className=" Client_Profile_main_top_div ">
            <div className="Appraisal_progress_text_bar">
              <ul className="mb-0 Client_Profile_svg">
                <li>
                  <span>{getCurrentStepCheckbox(0)}</span>
                  <label>Client Profile</label>
                </li>
                <li>
                  <span>{getCurrentStepCheckbox(1)}</span>
                  <label>Project Profile</label>
                </li>
                <li>
                  <span>{getCurrentStepCheckbox(2)}</span>
                  <label> Select Services</label>
                </li>
                <li>
                  <span className="Client_Profile_svg_last">
                    {getCurrentStepCheckbox(3)}
                  </span>
                  <p className="Client_Profile_svg_last_text">
                    Select Team Leaders
                  </p>
                </li>
              </ul>
            </div>
            <progress
              className="Appraisal_progress_bar"
              value={(100 / steps.length) * (currentStep + 1)}
              max="100"
            >
              32%
            </progress>
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
                    onClick={() => setCurrentStep((old) => old + 1)}
                    disabled={steps.length === currentStep + 1}
                  >
                    {steps.length === currentStep + 1
                      ? "Finish"
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
  const CountryData = [
    {
      optionValue: "1",
      option: "+91",
    },
    {
      optionValue: "2",
      option: "+1",
    },
  ];
  const options = [
    { value: "In House", label: "In House" },
    { value: "Project from Website", label: "Project from Website" },
    { value: "Project from BD Team", label: "Project from BD Team" },
  ];
  const Country = [
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Belgium", label: "Belgium" },
    { value: "Denmark", label: "Denmark" },
    { value: "Finland", label: "Finland" },
    { value: "Germany", label: "Germany" },
  ];
  return (
    <>
      <div className="Client_Profile_title">
        <h3>Client Profile</h3>
      </div>
      <div className="m_t">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              placeholder="Enter full name of client"
              label="Client Name*"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              placeholder="Client’s Organization Name if any available"
              label="Orginazation Name"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
                <SelectBox label="country" SelectBoxData={CountryData} />
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
                <InputBox
                  type="number"
                  placeholder=" Add contact number"
                  label=" Contact Number*"
                />
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="all_page_my_label_new">Lead Source*</label>
            <div className="dashboard_top_week_Select drop_box">
              <Select
                // menuIsOpen={true}
                options={options}
                placeholder="Select Lead Source"
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              label="Email Address*"
              placeholder="Client’s personal email ID"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              label="Lead Source details"
              placeholder="Lead Source details"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <TextareaBox
              label="Address Line 1"
              rows="1"
              placeholder="Address line 1"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <TextareaBox
              label="Address Line 2 (Optional)"
              rows="1"
              placeholder="Address line 2(Optional)"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              label="City"
              placeholder="Full Name of your city"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="all_page_my_label_new">Country</label>
            <div className="dashboard_top_week_Select drop_box">
              <Select options={Country} placeholder="Select Country" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              label="Business ABN Number*"
              placeholder="Business ABN Number (If country is selected as AU)"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              label="ZIP /Postcode"
              placeholder="Your local ZIP/Postcode"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const Step2 = () => {
  const navigate = useNavigate();
  const ProjectIndustry = [
    { value: "In House", label: "In House" },
    { value: "Project from Website", label: "Project from Website" },
  ];
  const DecidePriority = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  const Benchmark = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
    {
      value: "Set new Benchmark",
      label: "Set new Benchmark",
      url: "/manager/benchmark",
    },
  ];
  const CountryData = [
    {
      optionValue: "1",
      option: "INR",
    },
    {
      optionValue: "2",
      option: "USD",
    },
  ];
  const EditorCustomToolbarOption = () => (
    <Editor
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      placeholder="Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker "
    />
  );
  const EmployeesDocument = () => {
    const EmployeesDocumentTopNameApp = (props) => {
      return (
        <>
          <Nav.Item>
            <Nav.Link className="Employees_Document_name">
              {props.Name}
              <span>
                <AiOutlineClose />
              </span>
            </Nav.Link>
          </Nav.Item>
        </>
      );
    };
    const EmployeesDocumentTopNameData = [
      {
        Name: "Offer Letter",
      },
      {
        Name: "Attached Documets",
      },
    ];

    return (
      <>
        <div className="EmployeesDocument_list_top_div m-0">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Nav variant="pills" className="flex">
              {EmployeesDocumentTopNameData.map((val, i) => {
                return <EmployeesDocumentTopNameApp key={i} Name={val.Name} />;
              })}
            </Nav>
          </Tab.Container>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="Client_Profile_title">
        <h3>Project Profile</h3>
      </div>
      <div className="m_t">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="all_page_my_label_new">Project Industry*</label>
            <div className="dashboard_top_week_Select drop_box">
              <Select
                options={ProjectIndustry}
                placeholder="Project Industry"
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              label="Project  Name*"
              placeholder=" Name of the idea on which you want to work with us"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="all_page_my_label_new">Decide Priority</label>
            <div className="dashboard_top_week_Select drop_box">
              <Select options={DecidePriority} placeholder="Select One" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="all_page_my_label_new">Benchmark*</label>
            <div className="dashboard_top_week_Select drop_box">
              <Select
                options={Benchmark}
                onChange={(t) => {
                  if (t.url) navigate(t.url);
                }}
                placeholder="Select Bench Mark"
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox type="date" label="On Boarding date" placeholder="" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-5 col-5">
                <SelectBox
                  label="Select Currency*"
                  SelectBoxData={CountryData}
                />
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-7 col-7">
                <InputBox type="number" placeholder="INR" label="Budget*" />
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox type="date" label="Project Srart date" placeholder="" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox type="date" label="Project Deadline*" placeholder="" />
          </div>
          <div className="col-12">
            <label className="all_page_my_label_new">Add Project Brief</label>
            <div className="Hire_editer">
              <EditorCustomToolbarOption />
            </div>
          </div>
          <div className="col-12">
            <label className="all_page_my_label_new">
              Add Objective of this project
            </label>
            <div className="Hire_editer">
              <EditorCustomToolbarOption />
            </div>
          </div>
          <div className="col-12">
            <label className="all_page_my_label_new">
              Add Scope of this project
            </label>
            <div className="Hire_editer">
              <EditorCustomToolbarOption />
            </div>
          </div>
          <div className="col-12">
            <label className="all_page_my_label_new">
              only .pdf and not more than 2mb in size
            </label>
            <div className="DocumentCompanySetup_upload">
              <UploadDocumentIner />
            </div>
          </div>
          <div className="col-12">
            <EmployeesDocument />
          </div>
        </div>
      </div>
    </>
  );
};
const Step3 = () => {
  const Department = [
    { value: "Design", label: "Design" },
    { value: "Developement", label: "Developement" },
    { value: "Marketing", label: "Marketing" },
    { value: "Others", label: "Others" },
  ];
  const Service = [
    { value: "Website Design", label: "Website Design" },
    { value: "Application Design", label: "Application Design" },
    { value: "Facebook Post Design", label: "Facebook Post Design" },
    { value: "Flyer Design", label: "Flyer Design" },
  ];
  const App = (props) => {
    return (
      <>
        <div className="col-12 Select_Services_row_new_inner_top">
          <div className="row  align-items-baseline  Select_Services_row Select_Services_row_new">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
              <div className=" Select_Services_row_new_inner">
                <p>{props.MobileRowNumber}</p>
              </div>

              <label className="all_page_my_label_new">Select Department</label>
              <div className="dashboard_top_week_Select drop_box">
                <Select options={Department} placeholder="Select Department" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <label className="all_page_my_label_new">Select Service</label>
              <div className="dashboard_top_week_Select drop_box">
                <Select
                  isMulti
                  options={Service}
                  placeholder="Select Service"
                />
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
    },
    {
      MobileRowNumber: "2",
    },
    {
      MobileRowNumber: "3",
    },
    {
      MobileRowNumber: "4",
    },
    {
      MobileRowNumber: "5",
    },
    {
      MobileRowNumber: "6",
    },
    {
      MobileRowNumber: "7",
    },
  ];
  return (
    <>
      <div className="Client_Profile_title">
        <h3> Select Services</h3>
      </div>
      <div className="m_t">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          {Data.map((val, i) => {
            return <App key={i} MobileRowNumber={val.MobileRowNumber} />;
          })}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12 add_Department_btn_div">
            <OutlineBtnWithIcon name="Add More Department" icon={<BsPlus />} />
          </div>
        </div>
      </div>
    </>
  );
};
const Step4 = () => {
  const App = (props) => {
    return (
      <>
        <div className="col-12 Select_Services_row_new_inner_top">
          <div className="row    Select_Services_row Select_Services_row_new">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
              <div className=" Select_Services_row_new_inner">
                <p>{props.MobileRowNumber}</p>
              </div>

              <InputBox
                type="text"
                label="Department"
                placeholder={props.DepartmentType}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="dashboard_top_week_Select drop_box">
                <InputBox
                  type="text"
                  label="Team Leader*"
                  placeholder=" Enter name/Email ID"
                />
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
      DepartmentType: "Design",
    },
    {
      MobileRowNumber: "2",
      DepartmentType: "Developement",
    },
    {
      MobileRowNumber: "3",
      DepartmentType: "Marketing",
    },
    {
      MobileRowNumber: "4",
      DepartmentType: "Others",
    },
  ];
  return (
    <>
      <div className="Client_Profile_title">
        <h3>Select Team Leaders</h3>
      </div>
      <div className="m_t">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          {Data.map((val, i) => {
            return (
              <App
                key={i}
                MobileRowNumber={val.MobileRowNumber}
                DepartmentType={val.DepartmentType}
              />
            );
          })}
          <div className="col-12 select_team_leaders_CheckBox_div">
            <CheckBox text="Allow team leader to edit Project Details" id="0" />
          </div>
        </div>
      </div>
    </>
  );
};
