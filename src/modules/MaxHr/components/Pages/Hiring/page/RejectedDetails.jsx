import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { BiSearch, BiLink } from "react-icons/bi";
import React from "react";
import PhotoApp from "../../../../../common/components/img/Img";
import Icon from "../../../../../../pics/profile.jpeg";
import { AiFillLinkedin, AiOutlineClockCircle } from "react-icons/ai";
import PdfIcon from "../../../../../../pics/test.pdf";
import ReactStars from "react-rating-stars-component";
import { ApplicationBtn } from "./DesignApplication";
import { Modal } from "react-bootstrap";

export const RejectedDetails = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <CompletedJobsList />
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
            Name="Rejected Candidates"
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
const CompletedJobsList = () => {
  const RedirectPage = () => {
    window.open("https://www.linkedin.com/login", "_blank");
  };
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };

  const JobsListApp = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const ratingChanged = () => {};

    return (
      <>
        <div className="col-12">
          <div className="EmployeesProfileCard_top_div">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                <div>
                  <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-3 col-3">
                      <PhotoApp
                        className="JobsList_img"
                        backgroundImage={Icon}
                      />
                    </div>
                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8 mx-2">
                      <div className="JobsList_img_text">
                        <h3>{props.name}</h3>
                        <p>{props.postName}</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="JobsList_img_sub_text">
                        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p>
                              Experience: <span>3 Years</span>
                            </p>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p>
                              Linkedin Profile
                              <span onClick={RedirectPage}>
                                <AiFillLinkedin />
                              </span>
                            </p>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p>
                              Resume
                              <span>
                                <BiLink
                                  onClick={() => changNameUser(PdfIcon)}
                                />
                              </span>
                            </p>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p>
                              cv
                              <span>
                                <BiLink
                                  onClick={() => changNameUser(PdfIcon)}
                                />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div>
                        <div className="JobsList_mid_title">
                          <h3> Interviewed By</h3>
                        </div>
                        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div>
                              <ul className="upcoming_interviews_ul">
                                <li>Gaurav Kaushik</li>
                                <li>Akhilesh Soni</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 Completed_Jobs_List_time">
                            <div className="datetime_local_top_div justify-content-start">
                              <div>
                                <AiOutlineClockCircle /> 24/04/2022
                                <span>10:00-11:00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ borderRight: "none" }}
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 EmployeesProfileCard_div_info"
              >
                <div className="col-12">
                  <div className="Application_btn_div">
                    <button
                      onClick={() => changNameUser(PdfIcon)}
                      className="IssueAssets_btn"
                    >
                      Downlaod Resume
                    </button>
                  </div>
                </div>
                <div className="Application_btn_div">
                  <ApplicationBtn />
                </div>
              </div>
            </div>
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 Completed_Jobs_List_feedback_div mt-0 pt-0">
              <div className="col-12">
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_title">
                          <p>1st Interview Feedback</p>
                        </div>
                      </div>
                      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <ul className="upcoming_interviews_ul mt-0">
                          <li>Gaurav Kaushik</li>
                          <li>Akhilesh Soni</li>
                          <li
                            className="more_interviews_modal"
                            onClick={() => setModalShow(true)}
                          >
                            +2
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="datetime_local_top_div RejectedDetails_time  pt-1">
                          <div>
                            <AiOutlineClockCircle /> 24/04/2022
                            <span>10:00-11:00</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_star">
                          Rating:
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={16}
                            activeColor="#F1C21B"
                          />
                          4.0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <div className="ApprovalDetailsPage_date_picker mt-3">
                      <textarea
                        className="form-control"
                        placeholder=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  "
                        rows="2"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_title">
                          <p>2st Interview Feedback</p>
                        </div>
                      </div>
                      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <ul className="upcoming_interviews_ul mt-0">
                          <li>Gaurav Kaushik</li>
                          <li>Akhilesh Soni</li>
                          <li
                            className="more_interviews_modal"
                            onClick={() => setModalShow(true)}
                          >
                            +2
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="datetime_local_top_div RejectedDetails_time  pt-1">
                          <div>
                            <AiOutlineClockCircle /> 24/04/2022
                            <span>10:00-11:00</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_star">
                          Rating:
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={16}
                            activeColor="#F1C21B"
                          />
                          4.0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <div className="ApprovalDetailsPage_date_picker mt-3">
                      <textarea
                        className="form-control"
                        placeholder=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  "
                        rows="2"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_title">
                          <p>3st Interview Feedback</p>
                        </div>
                      </div>
                      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <ul className="upcoming_interviews_ul mt-0">
                          <li>Gaurav Kaushik</li>
                          <li>Akhilesh Soni</li>
                          <li
                            className="more_interviews_modal"
                            onClick={() => setModalShow(true)}
                          >
                            +2
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="datetime_local_top_div RejectedDetails_time  pt-1">
                          <div>
                            <AiOutlineClockCircle /> 24/04/2022
                            <span>10:00-11:00</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_star">
                          Rating:
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={16}
                            activeColor="#F1C21B"
                          />
                          4.0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <div className="ApprovalDetailsPage_date_picker mt-3">
                      <textarea
                        className="form-control"
                        placeholder=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  "
                        rows="2"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_title">
                          <p>4st Interview Feedback</p>
                        </div>
                      </div>
                      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <ul className="upcoming_interviews_ul mt-0">
                          <li>Gaurav Kaushik</li>
                          <li>Akhilesh Soni</li>
                          <li
                            className="more_interviews_modal"
                            onClick={() => setModalShow(true)}
                          >
                            +2
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="datetime_local_top_div RejectedDetails_time  pt-1">
                          <div>
                            <AiOutlineClockCircle /> 24/04/2022
                            <span>10:00-11:00</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_star">
                          Rating:
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={16}
                            activeColor="#F1C21B"
                          />
                          4.0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <div className="ApprovalDetailsPage_date_picker mt-3">
                      <textarea
                        className="form-control"
                        placeholder=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  "
                        rows="2"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_title">
                          <p>5st Interview Feedback</p>
                        </div>
                      </div>
                      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <ul className="upcoming_interviews_ul mt-0">
                          <li>Gaurav Kaushik</li>
                          <li>Akhilesh Soni</li>
                          <li
                            className="more_interviews_modal"
                            onClick={() => setModalShow(true)}
                          >
                            +2
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="datetime_local_top_div RejectedDetails_time  pt-1">
                          <div>
                            <AiOutlineClockCircle /> 24/04/2022
                            <span>10:00-11:00</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="Completed_Jobs_List_feedback_star">
                          Rating:
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={16}
                            activeColor="#F1C21B"
                          />
                          4.0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <div className="ApprovalDetailsPage_date_picker mt-3">
                      <textarea
                        className="form-control"
                        placeholder=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  "
                        rows="2"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <MoreInterviewsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  const JobsListData = [
    {
      name: "Jan Mik",
      postName: "UX Designer",
    },
  ];
  return (
    <>
      <div className="JobsList_main_div">
        <div className="row">
          {JobsListData.map((val, i) => {
            return (
              <JobsListApp key={i} name={val.name} postName={val.postName} />
            );
          })}
        </div>
      </div>
    </>
  );
};
const MoreInterviewsModal = (props) => {
  const MoreInterviewsModalApp = (textProps) => {
    return (
      <>
        <div className="col-4">
          <div className="More_Interviews_Modal_text">{textProps.text}</div>
        </div>
      </>
    );
  };
  const MoreInterviewsModalData = [
    {
      text: "Gaurav Kaushik",
    },
    {
      text: "Gaurav Kaushik",
    },
    {
      text: "Gaurav Kaushik",
    },
    {
      text: "Gaurav Kaushik",
    },
    {
      text: "Gaurav Kaushik",
    },
    {
      text: "Gaurav Kaushik",
    },
    {
      text: "Gaurav Kaushik",
    },
    {
      text: "Gaurav Kaushik",
    },
    {
      text: "Gaurav Kaushik",
    },
  ];
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="ApplicationInfo_main_div"
    >
      <Modal.Body>
        <div>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {MoreInterviewsModalData.map((val, i) => {
              return <MoreInterviewsModalApp key={i} text={val.text} />;
            })}
            <div className="col-12 text-center">
              <button
                className="missing_information_td_button"
                onClick={props.onHide}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
