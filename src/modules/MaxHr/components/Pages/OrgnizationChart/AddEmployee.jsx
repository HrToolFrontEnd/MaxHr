import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import { AboutProfileInput } from "../Profile/components/AboutProfile";
import { NavLink } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
export const AddEmployee = () => {
  return (
    <>
      <div className="custom_container">
        <div className="background_check_status_main_div">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <PageTop />
            </div>
            <div className="col-12">
              <div className="AddAsset_top_main_div">
                <div className="AddAsset_top_inner_div">
                  <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <AddEmployeeForm />
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
const PageTop = () => {
  return (
    <>
      <div>
        <div className="row TotalOpenings_input_main_div g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <TopPageTitle
              TitleLink={-1}
              TilelIcon={<BsArrowLeft />}
              Name="Add New Employee"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const AddEmployeeForm = () => {
  return (
    <>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <AboutProfileInput
          label="Full Name"
          type="text"
          className="form-control"
          placeholder="Soham Kumar"
        />
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <AboutProfileInput
          label="Add Contact Number"
          type="number"
          className="form-control"
          placeholder="+91 834 9933 768"
        />
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="row document_verification_app_top_div">
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="background_check_data_show">
              <AboutProfileInput
                label="Official Email ID"
                type="email"
                className="form-control"
                placeholder="name@maxlence.com.au"
              />
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="document_verification_app_btn_div">
              <button>Create Email ID</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="row document_verification_app_top_div">
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
            <div className="ApprovalDetailsPage_date_picker">
              <label>Department</label>
              <select className="form-select">
                <option>Select</option>
                <option>graphic designer</option>
                <option>react js developer</option>
              </select>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
            <div className="document_verification_app_btn_div">
              <NavLink to="/hr/add_department">
                <button>add Department</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="ApprovalDetailsPage_date_picker">
          <label>Office Address</label>
          <textarea
            className="form-control"
            placeholder="as qo4j q9o48ur4"
            rows="1"
          ></textarea>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="ApprovalDetailsPage_date_picker">
          <label>Office Address</label>
        </div>
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="form-check form_check_label">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Full Time
              </label>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="form-check form_check_label">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label " htmlFor="flexRadioDefault2">
                Part Time
              </label>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="form-check form_check_label">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label " htmlFor="flexRadioDefault3">
                Intern
              </label>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="form-check form_check_label">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-label " htmlFor="flexRadioDefault4">
                Contractor
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
        <div className="ApprovalDetailsPage_date_picker">
          <label>job Title</label>
          <select className="form-select">
            <option>Select or Add</option>
            <option>graphic designer</option>
            <option>react js developer</option>
          </select>
        </div>
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
        <AboutProfileInput
          label="Reporting Day"
          type="date"
          className="form-control"
          placeholder="Soham Kumar"
        />
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
        <label className="all_page_my_label">Working Hours</label>
        <div className="row Onboard_date_div">
          <div className="col-5">
            <AboutProfileInput
              type="time"
              className="form-control"
              placeholder="Soham Kumar"
            />
          </div>
          <div className="col-2">
            <div>
              <p>to</p>
            </div>
          </div>
          <div className="col-5">
            <AboutProfileInput
              type="time"
              className="form-control"
              placeholder="Soham Kumar"
            />
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
        <div className="ApprovalDetailsPage_date_picker">
          <label>Reporting Person</label>
          <select className="form-select">
            <option>Select one</option>
            <option>Akhilesh</option>
            <option>nikhil</option>
          </select>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
        <div className="row document_verification_app_top_div">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="background_check_data_show">
              <AboutProfileInput
                label="CTC"
                type="text"
                className="form-control"
                placeholder="300000"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="document_verification_app_btn_div">
              <NavLink to="/hr/default_salary_stracture">
                <button>Salary Structure</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <AboutProfileInput
          label="Candidate’s personal email address"
          type="email"
          className="form-control"
          placeholder="Email address"
        />
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <AboutProfileInput
          label="Reference"
          type="text"
          className="form-control"
          placeholder="If any"
        />
      </div>
      <div className="col-12">
        <div className="Hire_editer">
          <EditorCustomToolbarOption />
        </div>
      </div>
      <div className="col-12">
        <div className="IssueAssets_btn_bottom_div IssueAssets_btn_bottom_div2 mt-0">
          <div>
            <NavLink to={-1}>
              <button className="IssueAssets_btn2">Cancel</button>
            </NavLink>
          </div>
          <div>
            <div>
              <NavLink to={-1}>
                <button className="IssueAssets_btn3">Add New Employee</button>
              </NavLink>
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
