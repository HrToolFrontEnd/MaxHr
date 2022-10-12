import {
  FullBtn,
  OutlineBtnWithIcon,
} from "../../../../common/ManagerComponents/Btn/Btn";
import { WelcomeNote } from "../../../../common/ManagerComponents/WelcomeNote/WelcomeNote";
import Img from "../../../../common/components/img/Img";
import Icon3 from "../../../../../pics/Manager/d3.png";
import Icon4 from "../../../../../pics/Manager/d4.png";
import Icon5 from "../../../../../pics/Manager/d5.png";
import Icon6 from "../../../../../pics/Manager/d6.png";
import ProjectIconImg from "../../../../../pics/Manager/projactLogo.webp";
import MeetingsImg from "../../../../../pics/profile.jpeg";
import { NavLink } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import React from "react";
import { PageInnerTitle } from "../../../../common/ManagerComponents/pageInnerTitle/Title";
import { BiLink } from "react-icons/bi";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";
import { MdOutlineReviews, MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Modal } from "react-bootstrap";
import {
  InputBox,
  TextareaBox,
} from "../../../../common/ManagerComponents/form/Form";
export const Index = () => {
  return (
    <>
      <WelcomeNote
        name="Shived"
        text="Lets do the best today"
        data={<FullBtn link="/manager/client_Profile" name="Add Project" />}
      />
      <ProjectSummary />
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <ProjectListApp />
            </div>
            <div className="col12">
              <MeetingsList />
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
              <CalendarApp />
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
              <MyNotes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ProjectSummary = () => {
  const App = (props) => {
    return (
      <>
        <NavLink to={props.link}>
          <div
            className="project_summary_card"
            style={{ backgroundColor: props.backgroundColor }}
          >
            <div className="row">
              <div className="col-12">
                <Img
                  backgroundImage={props.icon}
                  className="project_summary_card_icon"
                />
                <div>
                  <p style={{ color: props.color }}>
                    <span>{props.number}</span>
                    {props.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </>
    );
  };
  const Data = [
    {
      link: "/manager/pipline_projects",
      backgroundColor: "#F1C21B",
      icon: Icon4,
      color: "white",
      number: "12",
      text: "Projects in Pipeline",
    },
    {
      link: "/",
      backgroundColor: "#393939",
      icon: Icon4,
      color: "white",
      number: "12",
      text: "Tasks in Pipeline",
    },
    {
      link: "/",
      backgroundColor: "#0A0E30",
      icon: Icon3,
      color: "white",
      number: "12",
      text: "In Progress Project",
    },
    {
      link: "/",
      backgroundColor: "#DA1E28",
      icon: Icon5,
      color: "white",
      number: "12",
      text: "On Hold",
    },
    {
      link: "/",
      backgroundColor: "#24A148",
      icon: Icon6,
      color: "white",
      number: "12",
      text: "Completed Project",
    },
  ];
  return (
    <>
      <div style={{ marginBottom: "1.5rem" }}>
        <PageInnerTitle name="project Summary" />
        <div className="project_summary_card_top_div">
          {Data.map((val, i) => {
            return (
              <App
                key={i}
                link={val.link}
                backgroundColor={val.backgroundColor}
                icon={val.icon}
                color={val.color}
                number={val.number}
                text={val.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
const ProjectListApp = () => {
  return (
    <>
      <div className="custom_container_iner ProjectList_top_div">
        <PageInnerTitle name="project" />
        <div className="profile_tab_div mt-3">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex">
              <Nav.Item>
                <Nav.Link eventKey="first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Completed</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="OnHold">On Hold</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="m_t"></div>
                <ProjectList />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="m_t"></div>
                <ProjectList />
              </Tab.Pane>
              <Tab.Pane eventKey="OnHold">
                <div className="m_t"></div>
                <ProjectList />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const ProjectList = () => {
  const Data = [
    {
      link: "/",
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
    {
      link: "/",
      projectIcon: ProjectIconImg,
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
    {
      link: "/",
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
    {
      link: "/",
      projectIcon: ProjectIconImg,
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
    {
      link: "/",
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
    {
      link: "/",
      projectIcon: ProjectIconImg,
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
    {
      link: "/",
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
    {
      link: "/",
      projectIcon: ProjectIconImg,
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
    {
      link: "/",
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
    {
      link: "/",
      projectIcon: ProjectIconImg,
      name: "Max HR",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "40%",
    },
  ];
  const App = (props) => {
    return (
      <>
        <NavLink to={props.link}>
          <div className="ProjectList_link_div">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div>
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                      <div className=" d-flex  justify-content-center">
                        {props.projectIcon ? (
                          <Img
                            className="ProjectList_logo"
                            backgroundImage={props.projectIcon}
                          />
                        ) : (
                          <div className="ProjectList_logo_text">
                            <span>
                              {props.name
                                .split(" ")
                                .map((n) => n[0])
                                .join(" ")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                      <div className="ProjectList_name_top_div">
                        <p className="ProjectList_name">{props.name}</p>
                        <p className="ProjectList_text">{props.date}</p>
                      </div>
                      <div className="ProjectList_name_top_div">
                        <p className="ProjectList_text">
                          <span>
                            <BiLink />
                          </span>
                          {props.brief}
                        </p>
                        <p className="ProjectList_text">
                          <span>
                            <AiOutlineMessage />
                          </span>
                          {props.comments}
                        </p>
                        <p className="ProjectList_text">
                          <span>
                            <MdOutlineReviews />
                          </span>
                          {props.reviews}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="ProjectList_progress_main_div">
                  <div className="row">
                    <div className="col-6">
                      <p className="ProjectList_name">Progress</p>
                    </div>
                    <div className="col-6 ProjectList_name_valu">
                      <span>{props.progress}</span>
                    </div>
                  </div>

                  <div className="progress ProjectList_progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: props.progress }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </>
    );
  };
  return (
    <>
      <div>
        {Data.map((val, i) => {
          return (
            <App
              key={i}
              link={val.link}
              projectIcon={val.projectIcon}
              name={val.name}
              date={val.date}
              brief={val.brief}
              comments={val.comments}
              reviews={val.reviews}
              progress={val.progress}
            />
          );
        })}
      </div>
    </>
  );
};
const CalendarApp = () => {
  const [value, onChangee] = useState(new Date());
  const navigate = useNavigate();
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="dashbaord_white_card dashbaord_white_card2">
            <div className="dashbaord_white_title">
              <div>
                <Calendar
                  className="dashbaord_calendar"
                  onChange={(date) => {
                    onChangee(date);
                    navigate("/");
                  }}
                  value={value}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const MeetingsList = () => {
  const App = (props) => {
    return (
      <>
        <div className="row g-xxl-0 g-xl-0 g-lg-0 g-md-0 g-sm-3 g-3 MeetingsList_row_div ">
          <div className="  col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="MeetingsList_title_div">
              <h3>Review: {props.reviewName}</h3>
            </div>
          </div>
          <div className=" col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="MeetingsList_img_div">
              <Img className="MeetingsList_img" backgroundImage={props.icon1} />
              <Img className="MeetingsList_img" backgroundImage={props.icon2} />
              <div className="MeetingsList_img_more">+{props.iconText}</div>
            </div>
          </div>
          <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
            <div className="MeetingsList_time">
              <p>
                <span>In:</span>
                {props.time}
              </p>
            </div>
          </div>
          <div className=" col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
            <div className="MeetingsList_btn">
              <FullBtn name="Join" />
            </div>
          </div>
        </div>
      </>
    );
  };
  const Data = [
    {
      reviewName: "Project Management",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "2",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "sunny charkhwal",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "3",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "Project Management",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "2",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "sunny charkhwal",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "3",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "Project Management",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "2",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "sunny charkhwal",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "3",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "Project Management",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "2",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "sunny charkhwal",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "3",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "Project Management",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "2",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "sunny charkhwal",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "3",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "Project Management",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "2",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "sunny charkhwal",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "3",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "Project Management",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "2",
      time: "00:23:45",
      link: "/",
    },
    {
      reviewName: "sunny charkhwal",
      icon1: MeetingsImg,
      icon2: MeetingsImg,
      iconText: "3",
      time: "00:23:45",
      link: "/",
    },
  ];
  return (
    <>
      <div className="custom_container_iner ProjectList_top_div">
        <PageInnerTitle name="Meetings" />

        <div className="MeetingsList_main_top_div">
          {Data.map((val, i) => {
            return (
              <App
                key={i}
                reviewName={val.reviewName}
                icon1={val.icon1}
                icon2={val.icon2}
                iconText={val.iconText}
                time={val.time}
                link={val.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
const MyNotes = () => {
  const [addSkillsModal, setAddSkillsModal] = React.useState(false);
  const App = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const DeletModal = (props) => {
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
    return (
      <>
        <div className="col-12">
          <div className="my_notes_main_div">
            <p>{props.date}</p>
            <h3>{props.name}</h3>
            <h5 onClick={() => setAddSkillsModal(true)}>
              {props.text}
              <span>View more</span>
            </h5>
            <RiDeleteBin6Line onClick={() => setModalShow(true)} />
            <DeletModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </>
    );
  };
  const Data = [
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
    {
      date: "20 April",
      name: "Exploration Ideas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es",
    },
  ];
  const AddSkillsModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="UploadDocumentModal_body ExperienceEditModal_body">
          <div className="UploadDocumentModal_body_close_btn">
            <span onClick={props.onHide}>
              <AiOutlineClose />
            </span>
          </div>
          <div>
            <div className=" d-flex">
              <div>
                <div className="Experience_timline_title2">
                  <h3>My Notes</h3>
                </div>
              </div>
            </div>
            <div className="ExperienceEditModal_text">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-12">
                  <div className="row align-items-end">
                    <div className="col-12">
                      <div>
                        <InputBox
                          type="text"
                          label="Add Title of Notes"
                          placeholder="Add Notes Title"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row mt-2">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                          <label className="all_page_my_label">
                            Last Modified
                          </label>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8 col-8">
                          <label className="all_page_my_label">
                            19th April 2023, 20:39 PM
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div>
                        <InputBox
                          type="text"
                          label="Add Tags"
                          placeholder="Add Tags"
                        />
                      </div>
                      <label className="all_page_my_label">
                        Add as many tags you want seperate with comma
                      </label>
                    </div>
                    <div className="col-12 mb-2">
                      <div className="skills_main_div ">
                        <div className="skills_main_inner_div">
                          <span>
                            Illustrator <MdOutlineClose />
                          </span>
                        </div>
                        <div className="skills_main_inner_div">
                          <span>
                            Illustrator <MdOutlineClose />
                          </span>
                        </div>
                        <div className="skills_main_inner_div">
                          <span>
                            Illustrator <MdOutlineClose />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <TextareaBox
                        label="Add Description"
                        placeholder="Add Description"
                        rows="5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="UploadDocumentModal_body_btn_div">
            <button
              className="UploadDocumentModal_body_btn"
              onClick={props.onHide}
            >
              Close
            </button>
            <button className="UploadDocumentModal_body_btn2">Save</button>
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  return (
    <>
      <div className="custom_container_iner">
        <PageInnerTitle name="My Notes" />
        <div className="my_notes_top_btn_div">
          <OutlineBtnWithIcon
            onClick={() => setAddSkillsModal(true)}
            name="Add New Notes"
            icon={<BsPlus />}
          />
        </div>
        <div className="my_notes_top_main_div">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {Data.map((val, i) => {
              return (
                <App key={i} date={val.date} name={val.name} text={val.text} />
              );
            })}
          </div>
        </div>
        <div className="my_notes_bottom_btn_div">
          <FullBtn name="View All" link="/manager/notes" />
        </div>

        <AddSkillsModal
          show={addSkillsModal}
          onHide={() => setAddSkillsModal(false)}
        />
      </div>
    </>
  );
};
