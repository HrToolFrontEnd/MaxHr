import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { EmployeesProfileCard } from "../Profile/components/EmployeesProfileCard";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import { AboutProfileInput } from "../Profile/components/AboutProfile";
import { UploadDocumentIner } from "../Profile/components/EmployeesDocument";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import React from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import GIF from "../../../../common/components/img/Img";
import GifPhoto from "../../../../../pics/su.gif";
export const ApplyLeave = () => {
  return (
    <>
      <div className="custom_container">
        <TopPageTitle
          TilelIcon={<BsArrowLeft />}
          TitleLink={-1}
          Name="Apply Leave"
        />
        <EmployeesProfileCard />
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="profile_iner_cont">
              <ApplyLeaveInput />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <ApplyLeaveRightCardApp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ApplyLeaveRightCardApp = () => {
  const ApplyLeaveRightCard = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="profile_iner_cont">
            <div className="ApplyLeave_right_card">
              <h3>{props.TopPageTitle}</h3>
              <p>
                {props.text}/<span>{props.textInner}</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  const ApplyLeaveRightCardData = [
    {
      TopPageTitle: "Sick Leave",
      text: "08",
      textInner: "04",
    },
    {
      TopPageTitle: "Casual Leave",
      text: "08",
      textInner: "04",
    },
    {
      TopPageTitle: "Privilage Leave",
      text: "08",
      textInner: "04",
    },
    {
      TopPageTitle: "Compensatory Leave",
      text: "08",
      textInner: "04",
    },
  ];
  return (
    <>
      {ApplyLeaveRightCardData.map((val, i) => {
        return (
          <ApplyLeaveRightCard
            key={i}
            TopPageTitle={val.TopPageTitle}
            text={val.text}
            textInner={val.textInner}
          />
        );
      })}
    </>
  );
};
const ApplyLeaveInput = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ApplyLeaveDropdownOpen, setApplyLeaveDropdownOpen] = useState(true);
  const ApplyLeaveShow = () => {
    setApplyLeaveDropdownOpen(!ApplyLeaveDropdownOpen);
  };
  return (
    <>
      <div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <label className="all_page_my_label">Choose leave type</label>
            <div
              className="ApplyLeave_leave_drop_top_div"
              onClick={ApplyLeaveShow}
            >
              <div className="ApplyLeave_leave_drop_iner_div ">
                Select your leave type
                <span>
                  {ApplyLeaveDropdownOpen ? <FiChevronDown /> : <FiChevronUp />}
                </span>
              </div>
              <div
                className={`${
                  ApplyLeaveDropdownOpen
                    ? "LeaveDropdownHide"
                    : "LeaveDropdownShow"
                }`}
              >
                <div className="ApplyLeave_leave_drop_opstion">
                  <div className="row">
                    <div className="col-6">
                      <p>Sick</p>
                    </div>
                    <div className="col-6">
                      <div className="row ">
                        <div className="col-6">
                          <p>
                            08<label>/04</label>
                          </p>
                        </div>
                        <div className="col-6 ApplyLeave_leave_drop_opstion_iner_div">
                          <AiOutlineCheck />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ApplyLeave_leave_drop_opstion">
                  <div className="row">
                    <div className="col-6">
                      <p>Sick</p>
                    </div>
                    <div className="col-6">
                      <div className="row ">
                        <div className="col-6">
                          <p>
                            08<label>/04</label>
                          </p>
                        </div>
                        <div className="col-6 ApplyLeave_leave_drop_opstion_iner_div">
                          <AiOutlineCheck />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <AboutProfileInput
              label="from"
              type="date"
              className="form-control"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <AboutProfileInput
              label="to"
              type="date"
              className="form-control"
            />
          </div>
          <div className="col-12">
            <div className="ApprovalDetailsPage_date_picker">
              <label>Comments if any</label>
              <textarea
                className="form-control"
                placeholder="Placeholder text"
                rows="1"
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <label className="all_page_my_label">Upload Document if any</label>
            <div className="ApplyLeave_leave_upload_div">
              <UploadDocumentIner />
            </div>
            <small className="all_page_my_label">
              Only .jpg and .png files. 500kb max file size.
            </small>
          </div>
          <div className="col-12">
            <div className="IssueAssets_btn_bottom_div IssueAssets_btn_bottom_div2 mt-0">
              <div>
                <NavLink to="/hr/previous_leaves">
                  <button className="IssueAssets_btn2">Previous Leaves</button>
                </NavLink>
              </div>
              <div>
                <div>
                  <button
                    onClick={() => setModalShow(true)}
                    className="IssueAssets_btn3"
                  >
                    Apply Leave
                  </button>
                  <UploadDocumentModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
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
