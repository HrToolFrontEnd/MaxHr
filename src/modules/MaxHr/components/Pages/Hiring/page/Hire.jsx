import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import PdfIcon from "../../../../../../pics/test.pdf";
import { AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import PhotoApp from "../../../../../common/components/img/Img";
import Icon from "../../../../../../pics/profile.jpeg";
import ReactStars from "react-rating-stars-component";
import { AboutProfileInput } from "../../Profile/components/AboutProfile";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { NavLink } from "react-router-dom";
import { UploadDocumentIner } from "../../Profile/components/EmployeesDocument";
import { Nav, Tab } from "react-bootstrap";
import { Modal } from "react-bootstrap";
export const Hire = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <CompletedJobsList />
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
            Name="Hire"
          />
        </div>
      </div>
    </>
  );
};
const CompletedJobsList = () => {
  const RedirectPage = () => {
    window.open("https://www.linkedin.com/login", "_blank");
  };
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };

  const JobsListApp = (props) => {
    const ratingChanged = () => {};
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <div className="col-12">
          <div className="EmployeesProfileCard_top_div">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-8">
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
                        <h3>{props.name}</h3>
                        <p>{props.postName}</p>
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
              <div className="col-4 d-flex align-items-end">
                <div className="Completed_Jobs_List_feedback_star justify-content-start">
                  Overall Rating:
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
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 Completed_Jobs_List_feedback_div">
              <div className="col-12">
                <div>
                  <AboutProfileInput
                    label="Email Address"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="Hire_editer">
                  <div className="row">
                    <div className="col-6">
                      <label className="all_page_my_label">Message</label>
                    </div>
                    <div className="col-6">
                      <div className=" text-end">
                        <label className="all_page_my_label">0/100</label>
                      </div>
                    </div>
                  </div>
                  <EditorCustomToolbarOption />
                </div>
              </div>

              <div className="col-12">
                <div className="DocumentCompanySetup_upload">
                  <UploadDocumentIner />
                </div>
              </div>
              <div className="col-12">
                <EmployeesDocument />
              </div>
              <div className="col-12">
                <div className="IssueAssets_btn_bottom_div IssueAssets_btn_bottom_div2 mt-0">
                  <div>
                    <NavLink to="/hr/design_application">
                      <button className="IssueAssets_btn2">Cancel</button>
                    </NavLink>
                  </div>
                  <div>
                    <div>
                      <button
                        onClick={() => setModalShow(true)}
                        className="IssueAssets_btn3"
                      >
                        Send Offer
                      </button>
                      <ApplicationInfo
                        show={modalShow}
                        onHide={() => setModalShow(false)}
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
  const JobsListData = [
    {
      name: "Jan Mik",
      postName: "UX Designer",
    },
  ];
  return (
    <>
      <div className="JobsList_main_div">
        <div className="row">
          {JobsListData.map((val, i) => {
            return (
              <JobsListApp key={i} name={val.name} postName={val.postName} />
            );
          })}
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
const ApplicationInfo = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="ApplicationInfo_main_div"
    >
      <Modal.Body className="ApplicationInfo_top_div">
        <div className="ApplicationInfo_text_div">
          Offer Letter has been successfully sent!
        </div>
      </Modal.Body>
    </Modal>
  );
};
