import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { BiSearch, BiLink } from "react-icons/bi";
import Select from "react-select";
import { Nav, Tab } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import PhotoApp from "../../../../../common/components/img/Img";
import Icon from "../../../../../../pics/profile.jpeg";
import { AiFillLinkedin, AiOutlineClockCircle } from "react-icons/ai";
import InterviewedChip from "./InterviewedChip";
import Schedule from "../../../../../../pics/edit.png";
import PdfIcon from "../../../../../../pics/test.pdf";
import ReactStars from "react-rating-stars-component";
import { ApplicationBtn } from "./DesignApplication";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export const Interviews = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <InterviewsTabs />
      </div>
    </>
  );
};
const PageTop = () => {
  const options = [
    { value: "designer", label: "designer" },
    { value: "developer", label: "developer" },
  ];
  return (
    <>
      <div>
        <div className="row TotalOpenings_input_main_div g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <TopPageTitle
              TitleLink={-1}
              TilelIcon={<BsArrowLeft />}
              Name="Interviews"
            />
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="TotalOpenings_input_div">
              <span>
                <BiSearch />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Search jobs by title or department"
              />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="All Department" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const InterviewsTabs = () => {
  return (
    <>
      <div className="profile_tab_div mt-3">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex">
            <Nav.Item>
              <Nav.Link eventKey="first">Upcoming</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Completed</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="m_t"></div>
              <JobsType />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="m_t"></div>
              <CompletedSlider />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
const JobsType = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="interviews_round_tabs_div">
        <div className=" JobsType_card">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <div>
                    <ul>
                      <li>
                        <div className="JobCards_main_div_round"></div>
                      </li>
                      <li>
                        <h3>Lead UX Designer</h3>
                        <p>12 Candidates</p>
                      </li>
                      <li>
                        <div
                          onClick={() => navigate("/hr/create_new_jobs")}
                          className="JobCards_main_div_menu"
                        >
                          <FiEdit />
                        </div>
                      </li>
                    </ul>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <div>
                    <ul>
                      <li>
                        <div className="JobCards_main_div_round"></div>
                      </li>
                      <li>
                        <h3>UI Developer Intern</h3>
                        <p>12 Candidates</p>
                      </li>
                      <li>
                        <div
                          onClick={() => navigate("/hr/create_new_jobs")}
                          className="JobCards_main_div_menu"
                        >
                          <FiEdit />
                        </div>
                      </li>
                    </ul>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">
                  <div>
                    <ul>
                      <li>
                        <div className="JobCards_main_div_round"></div>
                      </li>
                      <li>
                        <h3>SEO Marketing</h3>
                        <p>12 Candidates</p>
                      </li>
                      <li>
                        <div
                          onClick={() => navigate("/hr/create_new_jobs")}
                          className="JobCards_main_div_menu"
                        >
                          <FiEdit />
                        </div>
                      </li>
                    </ul>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">
                  <div>
                    <ul>
                      <li>
                        <div className="JobCards_main_div_round"></div>
                      </li>
                      <li>
                        <h3>HR Manager</h3>
                        <p>12 Candidates</p>
                      </li>
                      <li>
                        <div
                          onClick={() => navigate("/hr/create_new_jobs")}
                          className="JobCards_main_div_menu"
                        >
                          <FiEdit />
                        </div>
                      </li>
                    </ul>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="m_t"></div>
                <Upcoming />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="m_t"></div>
                <Upcoming />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <div className="m_t"></div>
                <Upcoming />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <div className="m_t"></div>
                <Upcoming />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const CompletedSlider = () => {
  return (
    <>
      <div className="interviews_round_tabs_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="row align-items-center">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="JobsType_card JobsType_card2">
                <div>
                  <ul>
                    <li>
                      <div className="JobCards_main_div_round"></div>
                    </li>
                    <li>
                      <h3>Lead UX Designer</h3>
                      <p>12 Candidates</p>
                    </li>
                    <li>
                      <NavLink
                        className="JobsType_card_menu"
                        to="/hr/create_new_jobs"
                      >
                        <FiEdit />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-6 col-sm-12 col-12">
              <Nav variant="pills" className="flex">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <JobCards
                      roundName="1st Round"
                      candidatesNumber="05 Candidates"
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <JobCards
                      roundName="2st Round"
                      candidatesNumber="05 Candidates"
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second3">
                    <JobCards
                      roundName="3st Round"
                      candidatesNumber="05 Candidates"
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second4">
                    <JobCards
                      roundName="HR Round"
                      candidatesNumber="05 Candidates"
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second5">
                    <JobCards
                      roundName="Final Round"
                      candidatesNumber="05 Candidates"
                    />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="m_t"></div>
              <CompletedJobsList />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="m_t"></div>
              <CompletedJobsList />
            </Tab.Pane>
            <Tab.Pane eventKey="second3">
              <div className="m_t"></div>
              <CompletedJobsList />
            </Tab.Pane>
            <Tab.Pane eventKey="second4">
              <div className="m_t"></div>
              <CompletedJobsList />
            </Tab.Pane>
            <Tab.Pane eventKey="second5">
              <div className="m_t"></div>
              <CompletedJobsList />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};

const JobCards = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="JobCards_main_div">
        <div className="row">
          <div className="col-3">
            <div className="JobCards_main_div_round"></div>
          </div>
          <div className="col-6">
            <h3>{props.roundName}</h3>
            <p>{props.candidatesNumber}</p>
          </div>
          <div className="col-1">
            <div
              onClick={() => navigate("/hr/create_new_jobs")}
              className="JobCards_main_div_menu"
            >
              <FiEdit />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Upcoming = () => {
  return (
    <>
      <div className="interviews_round_tabs_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex">
            <Nav.Item>
              <Nav.Link eventKey="first">
                <JobCards
                  roundName="1st Round"
                  candidatesNumber="05 Candidates"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                <JobCards
                  roundName="2st Round"
                  candidatesNumber="05 Candidates"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second3">
                <JobCards
                  roundName="3st Round"
                  candidatesNumber="05 Candidates"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second4">
                <JobCards
                  roundName="HR Round"
                  candidatesNumber="05 Candidates"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second5">
                <JobCards
                  roundName="Final Round"
                  candidatesNumber="05 Candidates"
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="m_t"></div>
              <JobsList />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="m_t"></div>
              <JobsList />
            </Tab.Pane>
            <Tab.Pane eventKey="second3">
              <div className="m_t"></div>
              <JobsList />
            </Tab.Pane>
            <Tab.Pane eventKey="second4">
              <div className="m_t"></div>
              <JobsList />
            </Tab.Pane>
            <Tab.Pane eventKey="second5">
              <div className="m_t"></div>
              <JobsList />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};

const JobsList = () => {
  const [buttonText, setButtonText] = useState("Copy");

  function handleClick() {
    setButtonText("Copied");
  }
  const RedirectPage = () => {
    window.open("https://www.linkedin.com/login", "_blank");
  };
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };
  const JobsListApp = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="EmployeesProfileCard_top_div">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <div>
                  <div className="row">
                    <div className="col-3">
                      <PhotoApp
                        className="JobsList_img"
                        backgroundImage={Icon}
                      />
                    </div>
                    <div className="col-9">
                      <div className="JobsList_img_text">
                        <h3>{props.name}</h3>
                        <p>{props.postName}</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="JobsList_img_sub_text">
                        <p>
                          Experience: <span>3 Years</span>
                        </p>
                        <p>
                          Linkedin Profile
                          <span onClick={RedirectPage}>
                            <AiFillLinkedin />
                          </span>
                        </p>
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
              </div>
              <div className="ccol-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 EmployeesProfileCard_div_info">
                <div>
                  <div className="JobsList_mid_title">
                    <h3>Being Interviewed By</h3>
                  </div>
                  <div>
                    <InterviewedChip />
                  </div>
                  <div className="JobsList_mid_title">
                    <h3>Interview link</h3>
                  </div>
                  <div className="JobsList_copy_btn_div">
                    <div className="JobsList_copy_text">
                      {props.InterviewLink}
                    </div>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(props.InterviewLink)
                      }
                    >
                      <span onClick={handleClick}>{buttonText}</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 ">
                <div className="datetime_local_top_div">
                  <div>
                    <AiOutlineClockCircle /> Today <span>10:00-11:00</span>
                  </div>
                  <div className="sd-container datetime_local">
                    <input
                      className="sd"
                      type="datetime-local"
                      name="selected_date"
                    />
                    <span className="open-button">
                      <button type="button">
                        <PhotoApp
                          className="selected_date_img"
                          backgroundImage={Schedule}
                        />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="datetime_local_butn_top_div">
                  <div className="datetime_local_butn">
                    <button className="button2">Join</button>
                    <div className=" d-none d-xxl-block d-xl-block d-lg-block d-md-block"></div>
                    <NavLink to="/hr/feedback" className="button1">
                      Feedback
                    </NavLink>
                  </div>
                </div>
              </div>
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
      InterviewLink: "zsdfho458yjasdt94 /aeer/awerg/ar",
    },
    {
      name: "Jan Mik",
      postName: "UX Designer",
      InterviewLink: "zsdfho458yjasdt94 /aeer/awerg/ar",
    },
  ];
  return (
    <>
      <div className="JobsList_main_div">
        <div className="row">
          {JobsListData.map((val, i) => {
            return (
              <JobsListApp
                key={i}
                name={val.name}
                postName={val.postName}
                InterviewLink={val.InterviewLink}
              />
            );
          })}
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
                <div className="Application_btn_div">
                  <ApplicationBtn />
                </div>
              </div>
            </div>
            <div className="row Completed_Jobs_List_feedback_div">
              <div className="row ">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="Completed_Jobs_List_feedback_title">
                    <p>Feedback</p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="Completed_Jobs_List_feedback_star">
                    1st Interview Rating:
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
