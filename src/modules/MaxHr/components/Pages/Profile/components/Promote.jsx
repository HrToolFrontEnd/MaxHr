import { AboutProfileInput } from "./AboutProfile";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import GIF from "../../../../../common/components/img/Img";
import GifPhoto from "../../../../../../pics/su.gif";
export const Promote = () => {
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
  return (
    <>
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>Promote</h3>
        </div>

        <div className="hand_over_form_top_div">
          <div className="hand_over_form_top_inner_div">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>Select new Title</label>
                  <select className="form-select">
                    <option>select</option>
                    <option>Employees of the month 1</option>
                    <option>Employees of the month 2</option>
                  </select>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="New Salary"
                  type="text"
                  className="form-control"
                  placeholder="2500 INR"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>Reporting Person</label>
                  <select className="form-select">
                    <option>select</option>
                    <option>Employees of the month 1</option>
                    <option>Employees of the month 2</option>
                  </select>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="Effective From"
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>Office Code</label>
                  <select className="form-select">
                    <option>select</option>
                    <option>Employees of the month 1</option>
                    <option>Employees of the month 2</option>
                  </select>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>Timing</label>
                  <select className="form-select">
                    <option>select</option>
                    <option>Employees of the month 1</option>
                    <option>Employees of the month 2</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <AboutProfileInput
                  label="Responsibility"
                  type="text"
                  className="form-control"
                  placeholder="Enjoy"
                />
              </div>
              <div className="col-12 mb-3 mt-4">
                <div className="hand_over_form_btn_div">
                  <button
                    onClick={() => setModalShow(true)}
                    className="AboutProfile_pss_btn"
                  >
                    Promote
                  </button>
                </div>
              </div>
              <FormModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
