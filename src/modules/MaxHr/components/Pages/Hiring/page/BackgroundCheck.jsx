import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import React from "react";
import PhotoApp from "../../../../../common/components/img/Img";
import Icon from "../../../../../../pics/profile.jpeg";
import { AiFillLinkedin } from "react-icons/ai";
import PdfIcon from "../../../../../../pics/test.pdf";
import ReactStars from "react-rating-stars-component";
import { AboutProfileInput } from "../../Profile/components/AboutProfile";
import { NavLink } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
export const BackgroundCheck = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <BackgroundCheckRating />
        <BackgroundCheckStatus />
        <Onboard />
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
              Name="Background Check"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const BackgroundCheckRating = () => {
  const RedirectPage = () => {
    window.open("https://www.linkedin.com/login", "_blank");
  };
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };

  const JobsListApp = (props) => {
    const ratingChanged = () => {};
    return (
      <>
        <div className="col-12">
          <div className="row ">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="Completed_Jobs_List_feedback_title">
                <p>{props.name}</p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="Completed_Jobs_List_feedback_star">
                {props.name}
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={16}
                  activeColor="#F1C21B"
                />
                4.0
              </div>
            </div>
          </div>
          <div className="col-12">
            <div>
              <div className=" rating_changed_text mt-3">
                <p>{props.placeholder}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const JobsListData = [
    {
      name: "1st Interview’s Feedback",
      placeholder:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    },
    {
      name: "2nd Interview’s Feedback",
      placeholder:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    },
    {
      name: "3nd Interview’s Feedback",
      placeholder:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    },
    {
      name: "4nd Interview’s Feedback",
      placeholder:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    },
    {
      name: "5nd Interview’s Feedback",
      placeholder:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    },
  ];
  return (
    <>
      <div className="JobsList_main_div ">
        <div className="row">
          <div className="col-12">
            <div className="EmployeesProfileCard_top_div background_check_status_main_div">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-12">
                  <div>
                    <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                      <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-3 col-3">
                        <PhotoApp
                          className="JobsList_img"
                          backgroundImage={Icon}
                        />
                      </div>
                      <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8 mx-2">
                        <div className="JobsList_img_text">
                          <h3>Jan Mik</h3>
                          <p>UX Designer</p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="JobsList_img_sub_text">
                          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                              <p>
                                Experience: <span>3 Years</span>
                              </p>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                              <p>
                                Linkedin Profile
                                <span onClick={RedirectPage}>
                                  <AiFillLinkedin />
                                </span>
                              </p>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                              <p>
                                Resume
                                <span>
                                  <BiLink
                                    onClick={() => changNameUser(PdfIcon)}
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                              <p>
                                cv
                                <span>
                                  <BiLink
                                    onClick={() => changNameUser(PdfIcon)}
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 Completed_Jobs_List_feedback_div">
                {JobsListData.map((val, i) => {
                  return (
                    <JobsListApp
                      key={i}
                      name={val.name}
                      placeholder={val.placeholder}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const BackgroundCheckStatus = () => {
  const BackgroundCheckStatusApp = (props) => {
    return (
      <>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div className="background_check_sub_title_div mb-0 pb-0">
              <p>{props.toptile}</p>
            </div>
          </div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div key={i} className="row mb-3">
                <div className="col-12">
                  <div className="row ">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="background_check_data_show">
                        <label className="all_page_my_label">
                          {val.NameLabel}
                        </label>
                        <p>{val.Name}</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="background_check_data_show">
                        <label className="all_page_my_label">
                          {val.numberLabel}
                        </label>
                        <p>{val.number}</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="background_check_data_show">
                        <label className="all_page_my_label">
                          {val.ratingsLabel}
                        </label>
                        <p>{val.ratings}</p>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="background_check_data_show">
                        <label className="all_page_my_label">
                          {val.feedbackLabel}
                        </label>
                        <p>{val.feedback}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const BackgroundCheckStatusData = [
    {
      toptile: "On Call Verification",
      cat1: [
        {
          NameLabel: "Name",
          Name: "Maxlence Consulting",
          numberLabel: "Number",
          number: "8349933768",
          ratingsLabel: "Ratings",
          ratings: "4",
          feedbackLabel: "Feedback",
          feedback: "NA",
        },
        {
          NameLabel: "Name",
          Name: "Maxlence Consulting",
          numberLabel: "Number",
          number: "8349933768",
          ratingsLabel: "Ratings",
          ratings: "4",
          feedbackLabel: "Feedback",
          feedback: "NA",
        },
      ],
    },
  ];
  return (
    <>
      <div className="background_check_status_main_div">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div className="background_check_status_title">
              <h3>Background Check</h3>
            </div>
          </div>
          <div className="col-12">
            {BackgroundCheckStatusData.map((val, i) => {
              return (
                <BackgroundCheckStatusApp
                  key={i}
                  toptile={val.toptile}
                  arr={val}
                />
              );
            })}
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
            <div className="document_verification_app_btn_div">
              <button>add New</button>
            </div>
          </div>
        </div>
        <DocumentVerification />
      </div>
    </>
  );
};
const DocumentVerification = () => {
  const DocumentVerificationApp = (props) => {
    return (
      <>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div className="background_check_sub_title_div2 mb-0 pb-0">
              <p>{props.toptile}</p>
            </div>
          </div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div key={i} className="col-12">
                <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="background_check_data_show">
                      <label className="all_page_my_label">
                        {val.documentNameLabel}
                      </label>
                      <p>{val.documentName}</p>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                    <div className="row document_verification_app_top_div">
                      <div className="col-xxl-9 col-xl-9 col-lg-8">
                        <div className="background_check_data_show">
                          <label className="all_page_my_label">
                            {val.uploadDocumentNameLabel}
                          </label>
                          <p>{val.uploadDocumentName}</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-xl-3 col-lg-4">
                        <div className="document_verification_app_btn_div">
                          <button>Attach file</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                    <div className="background_check_data_show">
                      <label className="all_page_my_label">
                        {val.statusLabel}
                      </label>
                      <p>{val.status}</p>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                    <div className="background_check_data_show">
                      <label className="all_page_my_label">
                        {val.feedbackLabel}
                      </label>
                      <p>{val.feedback}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const DocumentVerificationData = [
    {
      toptile: "Document Verification",
      cat1: [
        {
          documentNameLabel: "Document Name",
          documentName: "Salary Slip",
          uploadDocumentNameLabel: "Upload",
          uploadDocumentName: "Salary Slip",
          statusLabel: "Status",
          status: "ok",
          feedbackLabel: "Feedback",
          feedback: "NA",
        },
        {
          documentNameLabel: "Document Name",
          documentName: "Salary Slip",
          uploadDocumentNameLabel: "Upload",
          uploadDocumentName: "Salary Slip",
          statusLabel: "Status",
          status: "ok",
          feedbackLabel: "Feedback",
          feedback: "If any",
        },
        {
          documentNameLabel: "Document Name",
          documentName: "Salary Slip",
          uploadDocumentNameLabel: "Upload",
          uploadDocumentName: "Salary Slip",
          statusLabel: "Status",
          status: "ok",
          feedbackLabel: "Feedback",
          feedback: "If any",
        },
      ],
    },
  ];
  return (
    <>
      <div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            {DocumentVerificationData.map((val, i) => {
              return (
                <DocumentVerificationApp
                  key={i}
                  toptile={val.toptile}
                  arr={val}
                />
              );
            })}
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
            <div className="document_verification_app_btn_div">
              <button>add New</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Onboard = () => {
  return (
    <>
      <div className="background_check_status_main_div">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div className="background_check_status_title">
              <h3>Onboard</h3>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
            <AboutProfileInput
              label="Full Name"
              type="text"
              className="form-control"
              placeholder="Soham Kumar"
            />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
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
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
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

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
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
              <label>job types</label>
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
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
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
                  <label
                    className="form-check-label "
                    htmlFor="flexRadioDefault2"
                  >
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
                  <label
                    className="form-check-label "
                    htmlFor="flexRadioDefault3"
                  >
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
                  <label
                    className="form-check-label "
                    htmlFor="flexRadioDefault4"
                  >
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
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <AboutProfileInput
              label="Candidate’s personal email address"
              type="email"
              className="form-control"
              placeholder="Email address"
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
                <NavLink to="/hr/hired_candidates">
                  <button className="IssueAssets_btn2">Cancel</button>
                </NavLink>
              </div>
              <div>
                <div>
                  <NavLink to="/hr/hired_candidates">
                    <button className="IssueAssets_btn3">Onboard</button>
                  </NavLink>
                </div>
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
