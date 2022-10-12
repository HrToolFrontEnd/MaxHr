import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { Nav, Tab } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { AboutProfileInput } from "../../Profile/components/AboutProfile";
import Logo from "../../../../../common/components/img/Img";
import LogoImg from "../../../../../../pics/max.png";
import GifPhoto from "../../../../../../pics/su.gif";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Select from "react-select";
import { UploadDocumentIner } from "../../Profile/components/EmployeesDocument";
export const CompanySetup = () => {
  return (
    <>
      <div className="custom_container">
        <TopPageTitle
          TitleLink={-1}
          TilelIcon={<BsArrowLeft />}
          Name="Settings"
        />
        <div className="CompanySetup_main_div">
          <div className="profile_iner_cont  CompanySetup_inner_main_div">
            <div className="EmployeesDocument_top_title text-center">
              <h3>Lets get to know your company</h3>
            </div>
            <div className="profile_tab_div CompanySetup_tab">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Company Detail</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tax Setup</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second1">Automation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second2">Document</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <CompanyDetail />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <TaxSetup />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second1">
                    <Automation />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second2">
                    <DocumentCompanySetup />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CompanyDetail = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="row ">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="CompanySetup_logo_div">
              <label className="all_page_my_label">Your Logo</label>
              <Logo className="CompanySetup_logo" backgroundImage={LogoImg} />
              <div className="CompanySetup_logo_btn_div">
                <button>Change logo</button>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="CompanySetup_logo_div">
              <label className="all_page_my_label">Shortcut icon</label>
              <Logo className="CompanySetup_logo" backgroundImage={LogoImg} />
              <div className="CompanySetup_logo_btn_div">
                <button>Change Shortcut icon</button>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3 text-center">
            <small className="all_page_my_label  ">
              (PNG, JPEG, JPG and max size 3mb)
            </small>
          </div>
        </div>
        <div className="col-12">
          <AboutProfileInput
            label="Company Name"
            type="text"
            className="form-control"
            placeholder="The name of the legal entity."
          />
        </div>
        <div className="col-12">
          <div className="CompanySetup_checkbox_div">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label
                className="form-check-label CompanySetup_checkbox_label"
                htmlFor="flexCheckDefault"
              >
                Same as Company Name
              </label>
            </div>

            <AboutProfileInput
              label="Brand Name"
              type="text"
              className="form-control"
              placeholder="If your company is publicily known by different brand"
            />
          </div>
        </div>
        <div className="col-12">
          <AboutProfileInput
            label="Registered Address"
            type="text"
            className="form-control"
            placeholder="Enter the same address as on GST Certificate."
          />
        </div>
        <div className="col-12">
          <AboutProfileInput
            label="Pincode"
            type="text"
            className="form-control"
            placeholder="Enter six digit your area pin code"
          />
        </div>
        <div className="col-12 company_setup_bottom_btn">
          <div className=" text-capitalize text-center">
            <button
              onClick={() => setModalShow(true)}
              className=" ApprovalDetailsPage_btn"
            >
              Save Changes
            </button>
            <Success show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
    </>
  );
};
const TaxSetup = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <AboutProfileInput
            label="Company PAN"
            type="text"
            className="form-control"
            placeholder="Enter your company PAN"
          />
        </div>
        <div className="col-12">
          <AboutProfileInput
            label="Company TAN"
            type="text"
            className="form-control"
            placeholder="Enter your company TAN"
          />
        </div>
        <div className="col-12">
          <AboutProfileInput
            label="Company GSTIN"
            type="text"
            className="form-control"
            placeholder="Enter your company GSTIN"
          />
        </div>
        <div className="col-12 company_setup_bottom_btn">
          <div className=" text-capitalize text-center">
            <button
              onClick={() => setModalShow(true)}
              className=" ApprovalDetailsPage_btn"
            >
              Save Changes
            </button>
            <Success show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
    </>
  );
};
const Automation = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const options = [
    { value: " 01", label: " 01" },
    { value: " 02", label: " 02" },
    { value: "03", label: "03" },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <div className="automation_checkbox_div">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault2"
              />
              <label
                className="form-check-label automation_checkbox_label"
                htmlFor="flexCheckDefault2"
              >
                Payroll Enabled
              </label>
            </div>
            <div className="setting_text setting_text2">
              Choose when you would like to pay your employees. Select a date
              after the 15th to pay your employees for the same month eg. if you
              pick 31, then your employees will get paid for January on 31st
              January. Or, if you pick 1, then your employees will get paid for
              January on 1st February.
            </div>
          </div>
        </div>
        <div className="col-12 dep_all">
          <div className="dashboard_top_week_Select">
            <label className="all_page_my_label">Payroll Date</label>
            <Select options={options} placeholder="01" />
          </div>
        </div>
        <div className="col-12">
          <div className=" setting_text setting_text2">
            Choose when you would like to pay your employees. Select a date
            after the 15th to pay your employees for the same month eg. if you
            pick 31, then your employees will get paid for January on 31st
            January. Or, if you pick 1, then your employees will get paid for
            January on 1st February.
          </div>
        </div>
        <div className="col-12">
          <div className="automation_checkbox_div">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault3"
              />
              <label
                className="form-check-label automation_checkbox_label"
                htmlFor="flexCheckDefault3"
              >
                Automatically run payroll on selected date
              </label>
            </div>

            <div className=" setting_text setting_text2">
              Employees can request salary advances through XPayroll. If
              approved, the advance amount will be paid immediately and
              automatically recovered from future payments to the employees.
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="automation_checkbox_div">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault1"
              />
              <label
                className="form-check-label automation_checkbox_label"
                htmlFor="flexCheckDefault1"
              >
                Let employees request salary advances
              </label>
            </div>
          </div>
        </div>
        <div className="col-12 company_setup_bottom_btn">
          <div className=" text-capitalize text-center">
            <button
              onClick={() => setModalShow(true)}
              className=" ApprovalDetailsPage_btn"
            >
              Save Changes
            </button>
            <Success show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
    </>
  );
};
const DocumentCompanySetup = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const options = [
    {
      value: " Privacy Policy (It will be updated in Footer)",
      label: " Privacy Policy (It will be updated in Footer)",
    },
    {
      value: " Terms and Condition (It will be updated in Footer)",
      label: " Terms and Condition (It will be updated in Footer)",
    },
    {
      value:
        "Salary Structure (It will be updated in each employee profile section)",
      label:
        "Salary Structure (It will be updated in each employee profile section)",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <div className="dashboard_top_week_Select">
            <label className="all_page_my_label">Document Type</label>
            <Select options={options} placeholder="Privacy Policy" />
          </div>
        </div>
        <div className="col-12">
          <div className="DocumentCompanySetup_upload">
            <UploadDocumentIner />
          </div>
        </div>
        <div className="col-12 company_setup_bottom_btn">
          <div className=" text-capitalize text-center">
            <button
              onClick={() => setModalShow(true)}
              className=" ApprovalDetailsPage_btn"
            >
              Save Changes
            </button>
            <Success show={modalShow} onHide={() => setModalShow(false)} />
          </div>
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
