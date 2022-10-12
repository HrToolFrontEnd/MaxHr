import ProfileIcon from "../../../../../common/components/img/Img";
import PDF from "../../../../../../pics/pdfd.png";
import DOC from "../../../../../../pics/docsd.jpg";
import ImagedDoc from "../../../../../../pics/imaged.png";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import React from "react";
import PdfIcon from "../../../../../../pics/test.pdf";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import Input from "../../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { FiChevronDown } from "react-icons/fi";
export const EmployeesDocument = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <div className="profile_iner_cont">
            <div className="EmployeesDocument_top_title">
              <h3>documents</h3>
            </div>
            <UploadDocument />
          </div>
        </div>
        <div className="col-12">
          <UploadDocumentList />
        </div>
      </div>
    </>
  );
};

export const EmployeesTabPanData = () => {
  return (
    <>
      <div>
        <EmployeesTabPanDataIner />
        <div className="btnupload_bottom_div">
          <button className="btnupload_bottom">Download</button>
        </div>
      </div>
    </>
  );
};
export const EmployeesTabPanDataIner = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="EmployeesTabPanDataImg_div_top">
        <div className="EmployeesTabPanDataImg_iner_div">
          <div className="EmployeesTabPanDataImg_iner_icon_div">
            <RiDeleteBin6Line
              variant="primary"
              onClick={() => setModalShow(true)}
            />
            <UploadDocumentModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div className="EmployeesTabPanDataImg_div_bottom_inner">
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={PDF}
            />
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={DOC}
            />
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={ImagedDoc}
            />
          </div>
          <div className="EmployeesTabPanDataImg_div_bottom_inner">
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={PDF}
            />
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={DOC}
            />
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={ImagedDoc}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const UploadDocument = () => {
  const options = [
    { value: "NDA", label: "NDA" },
    { value: "aadhaar card", label: "aadhaar card" },
  ];
  return (
    <>
      <div className="EmployeesDocument_top_title mt-3">
        <div className="UploadDocument_select">
          <div className="dashboard_top_week_Select">
            <label>Choose Document Type</label>
            <Select options={options} placeholder="Select" />
            <small>only .pdf and not more than 2mb in size</small>
          </div>
        </div>
        <div className="UploadDocument_img_div">
          <UploadDocumentIner />
        </div>

        <div className="btnupload_bottom_div">
          <button className="btnupload_bottom">Choose a file to upload</button>
        </div>
      </div>
    </>
  );
};
export const UploadDocumentIner = () => {
  return (
    <>
      <div className="UploadDocument_img_div_iner">
        <div className=" text-center">
          <button className="btnupload">Choose a file to upload</button>
          <p>or drag file in here</p>
        </div>
      </div>
    </>
  );
};
const UploadDocumentModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="UploadDocumentModal_body">
        <div className="UploadDocumentModal_body_close_btn">
          <span onClick={props.onHide}>
            <AiOutlineClose />
          </span>
        </div>
        <p className="UploadDocumentModal_body_title">Are you sure!</p>
        <p className="UploadDocumentModal_body_text">
          Once deleted it can not be reverted.
        </p>
        <div className="UploadDocumentModal_body_btn_div">
          <button
            className="UploadDocumentModal_body_btn"
            onClick={props.onHide}
          >
            Close
          </button>
          <button className="UploadDocumentModal_body_btn2">Delete</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export const UploadDocumentList = (props) => {
  const AssetListData = [
    {
      DocumentName: "Dummy Documents 1",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: PDF,
    },
    {
      DocumentName: "Dummy Documents 2",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: DOC,
    },
    {
      DocumentName: "Dummy Documents 1",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: PDF,
    },
    {
      DocumentName: "Dummy Documents 2",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: DOC,
    },
    {
      DocumentName: "Dummy Documents 1",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: PDF,
    },
    {
      DocumentName: "Dummy Documents 2",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: DOC,
    },
    {
      DocumentName: "Dummy Documents 1",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: PDF,
    },
    {
      DocumentName: "Dummy Documents 2",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: DOC,
    },
    {
      DocumentName: "Dummy Documents 1",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: PDF,
    },
    {
      DocumentName: "Dummy Documents 2",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: DOC,
    },
    {
      DocumentName: "Dummy Documents 1",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: PDF,
    },
    {
      DocumentName: "Dummy Documents 2",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: DOC,
    },
    {
      DocumentName: "Dummy Documents 1",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: PDF,
    },
    {
      DocumentName: "Dummy Documents 2",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: DOC,
    },
    {
      DocumentName: "Dummy Documents 1",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: PDF,
    },
    {
      DocumentName: "Dummy Documents 2",
      Owner: "Roushan Kumar",
      LastUpdated: "Today",
      icon: DOC,
    },
  ];
  const AssetListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td className="upload_document_list_img_top_div">
            <ProfileIcon
              backgroundImage={props.icon}
              className="upload_document_list_img"
            />
            {props.DocumentName}
          </td>
          <td>{props.Owner}</td>
          <td>{props.LastUpdated}</td>
          <td>
            <div className="contractor_management_list_btn">
              <ActionBtn />
            </div>
          </td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className="custom_container_iner">
        <div className="EmployeesDocument_top_title">
          <h3>Uploaded Document</h3>
        </div>
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

            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
          <table className="table table-hover upload_document_list_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr ">
                <th scope="col" className="text-start">
                  <span className="new_application_table_filter_div">
                    Document Name
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Owner
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Last Updated
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
              {AssetListData.map((val, i) => {
                return (
                  <AssetListApp
                    key={i}
                    DocumentName={val.DocumentName}
                    Owner={val.Owner}
                    LastUpdated={val.LastUpdated}
                    icon={val.icon}
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
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };
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
            <button onClick={() => changNameUser(PdfIcon)}>View</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => setModalShow(true)}>Update</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button>Download</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => setRemoveShow(true)}>Delete</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <UpdateModal show={modalShow} onHide={() => setModalShow(false)} />
      <RemoveModal show={removeShow} onHide={() => setRemoveShow(false)} />
    </>
  );
};
const UpdateModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="contractor_management_Modsal_title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Update Document</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <div className="UpdateModal_inner">
                <UploadDocumentIner />
              </div>
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
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="UploadDocumentModal_body">
        <div className="UploadDocumentModal_body_close_btn">
          <span onClick={props.onHide}>
            <AiOutlineClose />
          </span>
        </div>
        <p className="UploadDocumentModal_body_title">Are you sure!</p>
        <p className="UploadDocumentModal_body_text">
          Once deleted it can not be reverted.
        </p>
        <div className="UploadDocumentModal_body_btn_div">
          <button
            className="UploadDocumentModal_body_btn"
            onClick={props.onHide}
          >
            Close
          </button>
          <button className="UploadDocumentModal_body_btn2">Delete</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
