import { NavLink } from "react-router-dom";
import { BsArrowRight, BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import React from "react";
import { AboutProfileInput } from "../Profile/components/AboutProfile";

export const ContractorManagementIndex = () => {
  return (
    <>
      <Top />
      <ContractorManagementList />
    </>
  );
};
const Top = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
          <TopPageTitle Name="Contractor Mangement" />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
          <NavLink to="/hr/add_contractor">
            <span>Add Contractor</span>
            <BsArrowRight />
          </NavLink>
        </div>
      </div>
    </>
  );
};
const ContractorManagementList = (props) => {
  const ContractorManagementListData = [
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
  ];
  const ContractorManagementListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>
            <input className="form-check-input" type="checkbox" />
          </td>
          <td>{props.SubcontractorID}</td>
          <td>{props.date}</td>
          <td>{props.Name}</td>
          <td>{props.Email}</td>
          <td>{props.Phone}</td>
          <td>{props.pay}</td>
          <td>
            <div>
              <label className="switch">
                <Input type="checkbox" className="switch_input" />
                <span className="slider round"></span>
              </label>
            </div>
          </td>
          <td>
            <div>
              <label className="switch">
                <Input type="checkbox" className="switch_input" />
                <span className="slider round"></span>
              </label>
            </div>
          </td>
          <td>
            <div className="contractor_management_list_btn">
              <ActionBtn />
            </div>
          </td>
        </tr>
      </>
    );
  };
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div className="custom_container_iner">
        <div>
          <div className="row g-3">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="ApprovalDetailsPage_date_picker">
                <label>From</label>
                <Input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="ApprovalDetailsPage_date_picker">
                <label>to</label>
                <Input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Departments" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Sort by" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
          </div>
        </div>
        <div className="ApprovalDetailsPage_top_div">
          <table className="table table-hover Contractor_Management_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    ID No.
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Date
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Name
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Emial ID
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Contact No.
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Payterm
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Working
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Status
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {ContractorManagementListData.map((val, i) => {
                return (
                  <ContractorManagementListApp
                    key={i}
                    SubcontractorID={val.SubcontractorID}
                    date={val.date}
                    Name={val.Name}
                    Email={val.Email}
                    Phone={val.Phone}
                    pay={val.pay}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export const ActionBtn = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [removeShow, setRemoveShow] = React.useState(false);
  const [holdPaymentShow, setHoldPaymentShow] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Action
          <span>
            <FiChevronDown />
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <button onClick={() => navigate("/hr/action_contractor")}>
              Edit Details
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => navigate("/hr/profile")}>
              View Profile
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => setModalShow(true)}>Disable</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => setRemoveShow(true)}>Remove</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => setHoldPaymentShow(true)}>Hold Pay</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <DisableLoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <RemoveModal show={removeShow} onHide={() => setRemoveShow(false)} />
      <HoldPaymentModal
        show={holdPaymentShow}
        onHide={() => setHoldPaymentShow(false)}
      />
    </>
  );
};
const DisableLoginModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="contractor_management_Modsal_title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Disable Login</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <label className="all_page_my_label">Disable Login</label>

              <div>
                <label className="switch">
                  <Input type="checkbox" className="switch_input" />
                  <span className="slider slider2 round"></span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <AboutProfileInput
                label="Comment"
                type="text"
                className="form-control"
                placeholder="Add your comment"
              />
            </div>
            <div className="col-12">
              <div className="UploadDocumentModal_body_btn_div d-flex justify-content-center">
                <button
                  className="UploadDocumentModal_body_btn"
                  onClick={props.onHide}
                >
                  Close
                </button>
                <button
                  className="UploadDocumentModal_body_btn2"
                  onClick={props.onHide}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
const RemoveModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="contractor_management_Modsal_title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Remove</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <label className="all_page_my_label">Remove</label>

              <div>
                <label className="switch">
                  <Input type="checkbox" className="switch_input" />
                  <span className="slider slider2 round"></span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <AboutProfileInput
                label="Comment"
                type="text"
                className="form-control"
                placeholder="Add your comment"
              />
            </div>
            <div className="col-12">
              <div className="UploadDocumentModal_body_btn_div d-flex justify-content-center">
                <button
                  className="UploadDocumentModal_body_btn"
                  onClick={props.onHide}
                >
                  Close
                </button>
                <button
                  className="UploadDocumentModal_body_btn2"
                  onClick={props.onHide}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
const HoldPaymentModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="contractor_management_Modsal_title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Hold Payment</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <label className="all_page_my_label">Hold Payment</label>

              <div>
                <label className="switch">
                  <Input type="checkbox" className="switch_input" />
                  <span className="slider slider2 round"></span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <AboutProfileInput
                label="Comment"
                type="text"
                className="form-control"
                placeholder="Add your comment"
              />
            </div>
            <div className="col-12">
              <div className="UploadDocumentModal_body_btn_div d-flex justify-content-center">
                <button
                  className="UploadDocumentModal_body_btn"
                  onClick={props.onHide}
                >
                  Close
                </button>
                <button
                  className="UploadDocumentModal_body_btn2"
                  onClick={props.onHide}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
