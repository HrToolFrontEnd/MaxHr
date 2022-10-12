import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { AiFillLinkedin, AiOutlineInfoCircle } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import PdfIcon from "../../../../../../pics/test.pdf";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import React from "react";
export const DesignApplication = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <Application />
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
            Name="Design Application"
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="TotalOpenings_input_div">
            <span>
              <BiSearch />
            </span>
            <input
              type="email"
              className="form-control w-100"
              placeholder="Search by name, email or department"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const Application = () => {
  const [InfoTextBtn, setInfoTextBtn] = useState(false);
  const [InfoTextBtn2, setInfoTextBtn2] = useState(false);
  const [InfoTextBtn3, setInfoTextBtn3] = useState(false);
  const InfoTextBtnOpen3 = () => {
    setInfoTextBtn3(!InfoTextBtn3);
  };
  const InfoTextBtnOpen2 = () => {
    setInfoTextBtn2(!InfoTextBtn2);
  };
  const InfoTextBtnOpen = () => {
    setInfoTextBtn(!InfoTextBtn);
  };
  const RedirectPage = () => {
    window.open("https://www.linkedin.com/login", "_blank");
  };
  const RedirectPage2 = () => {
    window.open("https://goo.gl/maps/FUQb5Rv4MAWBXggR7", "_blank");
  };
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };

  const ratingChanged = () => {};
  return (
    <>
      <div className="design_application_top_div mt-4">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-6">
            <div className="design_application_name_div">
              <h3>Soham Gupta</h3>
            </div>
          </div>
          <div className="col-6">
            <div className="design_application_time_div">
              <p>
                <span>
                  <IoTimeOutline />
                </span>
                5 Days Ago
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="row g-2">
              <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className="design_application_location_div">
                  <p>
                    <span>
                      <IoLocationOutline onClick={RedirectPage2} />
                    </span>
                    Noida
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                <div className="design_application_location_div design_application_link_div">
                  <p>
                    Linkedin Profile
                    <span>
                      <AiFillLinkedin onClick={RedirectPage} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-xxl-7 col-lg-7 col-md-5 col-sm-12 col-12">
                <div className="design_application_location_div design_application_link_div">
                  <p>
                    Resume
                    <span>
                      <BiLink onClick={() => changNameUser(PdfIcon)} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className="design_application_location_div design_application_mobile">
                  <p>Experience</p>
                </div>
              </div>
              <div className="col-xxl-10 col-lg-10 col-md-9 col-sm-12 col-12">
                <div className="design_application_text_div">
                  <h3>
                    Digital Marketing Analyst at Marolix Technologies
                    <span>(Dec'19 - Present. 1 year 11 months)</span>
                  </h3>
                  <p>
                    Role: Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
                <div className="design_application_text_div">
                  <h3>
                    Digital Marketing Lead at Luxurion World
                    <span>(Aug'19 - Jan'20. 5 months)</span>
                  </h3>
                  <p>
                    Role: Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className="design_application_location_div design_application_mobile">
                  <p>Education</p>
                </div>
              </div>
              <div className="col-xxl-10 col-lg-10 col-md-9 col-sm-12 col-12">
                <div className="design_application_text_div">
                  <h3>
                    Electronics and Instrumentation , Bachelor of Technology
                    <span> (B.Tech) (2014 - 2018)</span>
                  </h3>
                  <p>Collage: Bapatla Engineering College</p>
                </div>
              </div>
            </div>
            <div className="row InfoText_div_top">
              <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className="design_application_location_div design_application_link_div design_application_mobile">
                  <p>
                    Skills
                    <span>
                      <AiOutlineInfoCircle
                        onMouseOver={InfoTextBtnOpen}
                        onMouseOut={InfoTextBtnOpen}
                      />
                    </span>
                  </p>
                  {InfoTextBtn ? (
                    <InfoText text="Self accessed by candidate on scale of 1 to 5 stars" />
                  ) : null}
                </div>
              </div>
              <div className="col-xxl-10 col-lg-10 col-md-9 col-sm-12 col-12">
                <div className="row g-2 ">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div
                      className="Feedback_Ratings_div design_application_Ratings_div
                    "
                    >
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#F1C21B"
                      />
                      <h6>Facebook Marketing</h6>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div
                      className="Feedback_Ratings_div design_application_Ratings_div
                    "
                    >
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#F1C21B"
                      />
                      <h6>Other Marketing</h6>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div
                      className="Feedback_Ratings_div design_application_Ratings_div
                    "
                    >
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#F1C21B"
                      />
                      <h6>Other Marketing</h6>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div
                      className="Feedback_Ratings_div design_application_Ratings_div
                    "
                    >
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#F1C21B"
                      />
                      <h6>Facebook Marketing</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row InfoText_div_top mt-3">
              <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className="design_application_mobile design_application_location_div design_application_link_div">
                  <p>
                    Cover Letter
                    <span>
                      <AiOutlineInfoCircle
                        onMouseOver={InfoTextBtnOpen2}
                        onMouseOut={InfoTextBtnOpen2}
                      />
                    </span>
                  </p>
                  {InfoTextBtn2 ? (
                    <InfoText text="Question 1: Why you should be hired for this role?" />
                  ) : null}
                </div>
              </div>
              <div className="col-xxl-10 col-lg-10 col-md-9 col-sm-12 col-12">
                <div className="design_application_text_div">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="row InfoText_div_top mt-3">
              <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className=" design_application_mobile design_application_location_div design_application_link_div">
                  <p>
                    Cover Letter
                    <span>
                      <AiOutlineInfoCircle
                        onMouseOver={InfoTextBtnOpen3}
                        onMouseOut={InfoTextBtnOpen3}
                      />
                    </span>
                  </p>
                  {InfoTextBtn3 ? (
                    <InfoText text="Question 2: Will you be able to start immediately or what ever question HR wants to ask?" />
                  ) : null}
                </div>
              </div>
              <div className="col-xxl-10 col-lg-10 col-md-9 col-sm-12 col-12">
                <div className="design_application_text_div">
                  <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                      <p>Yes</p>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <p>
                        Experience: <span> 3 Years</span>
                      </p>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                      <p>
                        Expected CTC: <span>360000 INR/Y</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="Application_btn_div">
              <button
                onClick={() => changNameUser(PdfIcon)}
                className="IssueAssets_btn"
              >
                Downlaod Resume
              </button>
              <ApplicationBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const InfoText = (props) => {
  return (
    <>
      <div className="InfoText_div">
        <p>{props.text}</p>
      </div>
    </>
  );
};
export const ApplicationBtn = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Next Steps
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <button onClick={() => navigate("/hr/schedule_interview")}>
              Interview
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => setModalShow(true)}>short list</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => navigate("/hr/hire")}>hire</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => setModalShow2(true)}>reject</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ApplicationInfo show={modalShow} onHide={() => setModalShow(false)} />
      <ApplicationInfo2 show={modalShow2} onHide={() => setModalShow2(false)} />
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
          Candidate has been shortlisted successfully!
        </div>
      </Modal.Body>
    </Modal>
  );
};
const ApplicationInfo2 = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="ApplicationInfo_main_div"
    >
      <Modal.Body className="ApplicationInfo_top_div ApplicationInfo_top_div2">
        <div className="ApplicationInfo_text_div">
          Candidate has been rejected successfully!
        </div>
      </Modal.Body>
    </Modal>
  );
};
