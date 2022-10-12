import { AboutProfileInput } from "../Profile/components/AboutProfile";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import GIF from "../../../../common/components/img/Img";
import GifPhoto from "../../../../../pics/su.gif";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import Select from "react-select";
import { UploadDocumentIner } from "../Profile/components/EmployeesDocument";

export const AddTicket = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const FormModal = (props) => {
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
            <GIF className="success_gif" backgroundImage={GifPhoto} />
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
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
            <TopPageTitle Name="Add Ticket" />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
            <NavLink to="/hr/ticket_history">
              <span>History</span>
              <BsArrowRight />
            </NavLink>
          </div>
        </div>
        <div className="profile_iner_cont">
          <div className="hand_over_form_top_div">
            <div className="hand_over_form_top_inner_div">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-12">
                  <AboutProfileInput
                    label="Issue Type"
                    type="text"
                    className="form-control"
                    placeholder="Laptop "
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 dep_all">
                  <div className="dashboard_top_week_Select">
                    <label className="all_page_my_label">Tag Department</label>
                    <Select options={options} placeholder="Department" />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 dep_all">
                  <div className="dashboard_top_week_Select">
                    <label className="all_page_my_label">Priority</label>
                    <Select options={options} placeholder="Priority" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="ApprovalDetailsPage_date_picker">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Placeholder text"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="Resignation_upload">
                    <UploadDocumentIner />
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div class="UploadDocumentModal_body_btn_div mt-0 d-flex justify-content-center">
                    <button class="UploadDocumentModal_body_btn">Close</button>
                    <button
                      onClick={() => setModalShow(true)}
                      class="UploadDocumentModal_body_btn2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <FormModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
