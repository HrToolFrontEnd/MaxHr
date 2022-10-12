import { AiOutlineClose } from "react-icons/ai";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AboutProfileInput } from "../Profile/components/AboutProfile";
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Logo from "../../../../common/components/img/Img";
import GifPhoto from "../../../../../pics/su.gif";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { Nav, Tab } from "react-bootstrap";

import { UploadDocumentIner } from "../Profile/components/EmployeesDocument";

export const AddContractor = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <div className="profile_iner_cont">
          <div className="AddAsset_top_main_div">
            <div className="AddAsset_top_inner_div">
              <AddAssetForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const PageTop = () => {
  const RedirectPage = () => {
    window.open("https://www.google.com/intl/en-GB/gmail/about/", "_blank");
  };
  return (
    <>
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
          <TopPageTitle
            Name="Add Contractor"
            TitleLink={-1}
            TilelIcon={<BsArrowLeft />}
          />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 AddContractor_page">
          <div onClick={RedirectPage}>
            <span>Create Email ID</span>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};
const AddAssetForm = () => {
  const [modalShow1, setModalShow1] = React.useState(false);

  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
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
            label="Official Email ID"
            type="text"
            className="form-control"
            placeholder="name@maxlence.com.au"
          />
        </div>
        <div className="col-12">
          <AboutProfileInput
            label="Office Address"
            type="text"
            className="form-control"
            placeholder="as qo4j q9o48ur4u onfdvoamneorjf"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="ApprovalDetailsPage_date_picker">
            <label>Department</label>
            <select className="form-select">
              <option>Design</option>
              <option>Design</option>
              <option>Design</option>
            </select>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Title"
            type="text"
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Reporting Day"
            type="date"
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
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
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="ApprovalDetailsPage_date_picker">
            <label>Reporting Person</label>
            <select className="form-select">
              <option>Reporting to</option>
              <option>Shived Bansal</option>
              <option>Shived Bansal</option>
            </select>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="ApprovalDetailsPage_date_picker">
            <label>Pay/project</label>
            <select className="form-select">
              <option>1200</option>
              <option>1500</option>
              <option>1600</option>
            </select>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Candidate’s personal email address"
            type="email"
            className="form-control"
            placeholder="Email address"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Candidate’s personal Contact Number"
            type="number"
            className="form-control"
            placeholder="Contact Number"
          />
        </div>
        <div className="col-12">
          <div className="Hire_editer">
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
              <div>
                <NavLink to={-1}>
                  <button className="IssueAssets_btn3 mx-1">back</button>
                </NavLink>
              </div>
            </div>
            <div>
              <button
                className="IssueAssets_btn2 mx-1"
                onClick={() => setModalShow1(true)}
              >
                save
              </button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Success show={modalShow1} onHide={() => setModalShow1(false)} />
        </div>
      </div>
    </>
  );
};

const Success = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="UploadDocumentModal_body bg-white">
        <div className="UploadDocumentModal_body_close_btn">
          <span onClick={props.onHide}>
            <AiOutlineClose />
          </span>
        </div>

        <div>
          <Logo className="success_gif" backgroundImage={GifPhoto} />
        </div>
        <p className="UploadDocumentModal_body_title text-center">Success</p>
        <div className="UploadDocumentModal_body_btn_div">
          <button
            className="UploadDocumentModal_body_btn"
            onClick={props.onHide}
          >
            ok
          </button>
        </div>
      </Modal.Body>
    </Modal>
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
