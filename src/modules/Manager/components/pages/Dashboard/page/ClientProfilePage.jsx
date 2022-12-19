import PageTop from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { ProfileImg } from "../../../../../common/ManagerComponents/ProfileImg";
import {
  InputBox,
  SelectBox,
  TextareaBox,
} from "../../../../../common/ManagerComponents/form/Form";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { OutlineBtnWithIcon } from "../../../../../common/ManagerComponents/Btn/Btn";
import { BsPlus } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";
import React, { Component } from "react";
import { BsUpload } from "react-icons/bs";

// mui
import { CgAttachment } from "react-icons/cg";
let Photo = "https://source.unsplash.com/random/500x500/?woman";
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
  const navigate = useNavigate();
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];
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
                  <label>Client Profile</label>
                </li>
                <li>
                  <span>{getCurrentStepCheckbox(1)}</span>
                  <label>Project Details</label>
                </li>
                <li>
                  <span>{getCurrentStepCheckbox(2)}</span>
                  <label>Services</label>
                </li>
                <li>
                  <span className="Client_Profile_svg_last">
                    {getCurrentStepCheckbox(3)}
                  </span>
                  <p className="Client_Profile_svg_last_text">Project Leads</p>
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
      <div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              placeholder="Enter full name of client"
              label="Client Name* (POC/Owner)"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              placeholder="Designation"
              label="Designation / role"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox
              type="text"
              placeholder="Client’s Organization Name if any available"
              label="Organisation Name*"
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
            <InputBox
              type="text"
              label="Email Address*"
              placeholder="Client’s personal email ID"
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
    { value: "High", label: "High" },
    { value: "Low", label: "Low" },
  ];
  const Frequency = [
    { value: "Monthly", label: "Monthly" },
    { value: "3 Monthly", label: "3 Monthly" },
    { value: "Yearly", label: "Yearly" },
    { value: "Fixed", label: "Fixed" },
  ];
  const Benchmark = [
    { value: "Standard", label: "Standard" },
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

  const options = [
    { value: "In House", label: "In House" },
    { value: "Project from Website", label: "Project from Website" },
    { value: "Project from BD Team", label: "Project from BD Team" },
  ];

  class UploadDocument extends Component {
    handleFileUpload = (event) => {
      console.log(event.target.files[0].name);
    };

    render() {
      return (
        <>
          <input
            ref="fileInput"
            onChange={this.handleFileUpload}
            type="file"
            style={{ display: "none" }}
            // multiple={false}
          />
          <div>
            <button
              className="manager_btn_full upload_document_btn"
              onClick={() => this.refs.fileInput.click()}
            >
              Upload document
              <span>
                <BsUpload />
              </span>
            </button>
          </div>
        </>
      );
    }
  }
  return (
    <>
      <div className="Client_Profile_title">
        <h3>Project Details</h3>
      </div>
      <div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 order-md-1 order-2">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-12">
                  <InputBox
                    type="text"
                    label="Project  Name*"
                    placeholder=" Project Name"
                  />
                </div>
                <div className="col-12">
                  <label className="all_page_my_label_new">Lead Source*</label>
                  <div className="dashboard_top_week_Select drop_box">
                    <Select
                      // menuIsOpen={true}
                      options={options}
                      placeholder="Select Lead Source"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 order-md-2 order-1 user_logo_inner_div">
              <div>
                <ProfileImg Photo={Photo} />
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="all_page_my_label_new">Priority*</label>
            <div className="dashboard_top_week_Select drop_box">
              <Select options={ProjectIndustry} placeholder="Priority" />
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
            <InputBox type="date" label="Onboarding Date*" placeholder="" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
                <SelectBox
                  label="Select Currency*"
                  SelectBoxData={CountryData}
                />
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12">
                <InputBox
                  type="number"
                  placeholder="Service Charge*"
                  label="Service Charge*"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox type="date" label="Project Start Date*" placeholder="" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="all_page_my_label_new">Frequency</label>
            <div className="dashboard_top_week_Select drop_box">
              <Select options={Frequency} placeholder="Frequency" />
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <InputBox type="date" label="Project Due Date*" placeholder="" />
          </div>
          <div className=" d-flex  col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <ul className="client_profile_uplod_btn_ul">
              <li>
                <p>
                  <span>
                    <CgAttachment />
                  </span>
                  Attachments :
                </p>
              </li>
              <li>
                <UploadDocument />
              </li>
            </ul>
          </div>
          <div className="col-12">
            <label className="breff_label_add_project">Brief</label>
            <div className="Hire_editer">
              <EditorCustomToolbarOption />
            </div>
          </div>
          <div className="col-12">
            <label className="breff_label_add_project">Objectives</label>
            <div className="Hire_editer">
              <EditorCustomToolbarOption />
            </div>
          </div>
          <div className="col-12">
            <label className="breff_label_add_project">Scope</label>
            <div className="Hire_editer">
              <EditorCustomToolbarOption />
            </div>
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
  const SelectSubDepartment = [
    { value: "Website Design", label: "Website Design" },
    { value: "Application Design", label: "Application Design" },
    { value: "Facebook Post Design", label: "Facebook Post Design" },
    { value: "Flyer Design", label: "Flyer Design" },
  ];
  const Service = [
    { value: "Website Design", label: "Website Design" },
    { value: "Application Design", label: "Application Design" },
    { value: "Facebook Post Design", label: "Facebook Post Design" },
    { value: "Flyer Design", label: "Flyer Design" },
  ];
  const Frequency = [{ value: "Monthly", label: "Monthly" }];
  const App = (props) => {
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
    return (
      <>
        <div className="col-12 Select_Services_row_new_inner_top">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3  align-items-baseline  Select_Services_row Select_Services_row_new">
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
              <label className="all_page_my_label_new">
                Select Sub-Department*
              </label>
              <div className="dashboard_top_week_Select drop_box">
                <Select
                  isMulti
                  options={SelectSubDepartment}
                  placeholder="Select Sub-Department"
                />
              </div>
            </div>
            <div className="col-12 px-4">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
                <div className="col-12">
                  <div>
                    <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label className="all_page_my_label_new">Service</label>
                        <div className="dashboard_top_week_Select drop_box">
                          <Select
                            isMulti
                            options={Service}
                            placeholder="Select Service"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <SelectBox
                              label="Budget"
                              SelectBoxData={CountryData}
                            />
                          </div>
                          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                            <InputBox
                              type="number"
                              placeholder="Service Charge*"
                              label="Service Charge*"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <label className="all_page_my_label_new">Frequency</label>
                      <div className="dashboard_top_week_Select drop_box">
                        <Select
                          isMulti
                          options={Frequency}
                          placeholder="Monthly"
                        />
                      </div>
                    </div>
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

            <hr className=" d-none d-xxl-block d-xl-block d-md-block " />
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
  ];
  return (
    <>
      <div className="Client_Profile_title">
        <h3>Services</h3>
      </div>
      <div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          {Data.map((val, i) => {
            return <App key={i} {...val} />;
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
              <label className="all_page_my_label_new">Leads*</label>
              <div className="dashboard_top_week_Select drop_box drop_box2">
                <Select isMulti options={Leads} placeholder="Leads*" />
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
      DepartmentType: "Google Ads",
    },
    {
      MobileRowNumber: "2",
      DepartmentType: "React js Front End",
    },
  ];
  return (
    <>
      <div className="Client_Profile_title">
        <h3>Project Leads</h3>
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
