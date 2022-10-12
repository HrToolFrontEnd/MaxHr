import ProfileIcon from "../../../../../common/components/img/Img";
import ProfilPhoto2 from "../../../../../../pics/profile2.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import ProgressBar from "react-bootstrap/ProgressBar";
import { GrEdit } from "react-icons/gr";
import { Modal } from "react-bootstrap";
import React from "react";
export const EmployeesProfileCard = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const now = 60;
  return (
    <>
      <div className="EmployeesProfileCard_top_div">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className=" EmployeesProfileCard_icon_div_main">
              <div className="EmployeesProfileCard_icon_div">
                <ProfileIcon
                  className="EmployeesProfileCard_icon"
                  backgroundImage={ProfilPhoto2}
                />
              </div>
              <div className="EmployeesProfileCard_text_div">
                <h3>gaurav Kaushik</h3>
                <p>
                  hR Manager <span>ID: MXHR02</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 EmployeesProfileCard_div_info"
            style={{ borderRight: "none" }}
          >
            <div className="EmployeesProfileCard_info">
              <p>
                <span>
                  <AiOutlineMail />
                </span>
                gaurav@maxlence.com.au
              </p>
              <p>
                <span>
                  <IoCallOutline />
                </span>
                +91 834 9933 768
              </p>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 EmployeesProfileCard_div_info ProgressBar_top_main_div"
            style={{ borderRight: "none" }}
          >
            <div className="EmployeesProfileCard_info_user ProgressBar_top_div">
              <p>Complete Your Profile</p>
              <div>
                <ProgressBar now={now} label={`${now}%`} />
              </div>
              <div className="ProgressBar_top_edit">
                <GrEdit onClick={() => setModalShow(true)} />
              </div>
              <EditeModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const EditeModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="ApplicationInfo_main_div"
    >
      <Modal.Body>test</Modal.Body>
    </Modal>
  );
};
