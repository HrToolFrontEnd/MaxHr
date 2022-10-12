import Select from "react-select";
import { AiOutlineClose } from "react-icons/ai";
import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { AboutProfileInput } from "../../Profile/components/AboutProfile";
import Input from "../../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import Logo from "../../../../../common/components/img/Img";
import GifPhoto from "../../../../../../pics/su.gif";
import React from "react";
import { BsArrowLeft, BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
export const AddDepartment = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <div className="col-12">
            <div className="custom_container_iner mt-4">
              <div className="AddDepartment_main_div">
                <div className="AddDepartment_inner_div">
                  <CreateDepartment />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <CreateDepartmentList />
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
        <div className="row TotalOpenings_input_main_div ">
          <div className="col-12">
            <TopPageTitle
              TitleLink={-1}
              TilelIcon={<BsArrowLeft />}
              Name="Add Department"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const CreateDepartment = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12 ">
          <AboutProfileInput
            label="Create department name"
            type="text"
            className="form-control"
            placeholder="Create a new department"
          />
        </div>
        <div className="col-12">
          <div className="document_verification_app_btn_div text-center">
            <button
              onClick={() => setModalShow1(true)}
              className=" w-auto px-4"
            >
              Add
            </button>
          </div>
          <Success show={modalShow1} onHide={() => setModalShow1(false)} />
        </div>
      </div>
    </>
  );
};
const CreateDepartmentList = () => {
  const MissingInformationData = [
    {
      Department: "Design",
      DateCreated: "05/25/2021",
      Employee: "2340",
    },
    {
      Department: "Design",
      DateCreated: "05/25/2021",
      Employee: "2340",
    },
    {
      Department: "Design",
      DateCreated: "05/25/2021",
      Employee: "2340",
    },
    {
      Department: "Design",
      DateCreated: "05/25/2021",
      Employee: "2340",
    },
    {
      Department: "Design",
      DateCreated: "05/25/2021",
      Employee: "2340",
    },
    {
      Department: "Design",
      DateCreated: "05/25/2021",
      Employee: "2340",
    },
    {
      Department: "Design",
      DateCreated: "05/25/2021",
      Employee: "2340",
    },
  ];
  const MissingInformationApp = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td className="MissingInformation_td">{props.Department}</td>
          <td className="MissingInformation_td">{props.DateCreated}</td>
          <td className="MissingInformation_td">{props.Employee}</td>
          <td className="MissingInformation_td">
            <span
              onClick={() => setModalShow(true)}
              className="AddDepartment_link"
            >
              edit
            </span>
            <CreateDepartmentRenameModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </td>
          <td className="MissingInformation_td">
            <span
              onClick={() => setModalShow2(true)}
              className="AddDepartment_link"
            >
              Delete
            </span>
            <DeleteModal
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />
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
      <div>
        <div className="custom_container_iner">
          <div className="row g-3 mb-4">
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
            <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="all Departments" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
          <div className="ApprovalDetailsPage_top_div pt-0">
            <table className="table table-hover MissingInformation_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Department
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Date Created
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Employee
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Edit
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Delete
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {MissingInformationData.map((val, i) => {
                  return (
                    <MissingInformationApp
                      key={i}
                      Department={val.Department}
                      DateCreated={val.DateCreated}
                      Employee={val.Employee}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
const CreateDepartmentRenameModal = (props) => {
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
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <AboutProfileInput
              label="Rename Department"
              type="text"
              className="form-control"
              placeholder="Add Asset Name"
            />
          </div>
        </div>
        <div className="UploadDocumentModal_body_btn_div">
          <button
            className="UploadDocumentModal_body_btn"
            onClick={props.onHide}
          >
            save
          </button>
        </div>
      </Modal.Body>
    </Modal>
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
const DeleteModal = (props) => {
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
          <button
            onClick={props.onHide}
            className="UploadDocumentModal_body_btn2"
          >
            Delete
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
