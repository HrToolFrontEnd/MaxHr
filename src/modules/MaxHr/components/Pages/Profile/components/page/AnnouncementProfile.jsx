import { BsArrowLeft } from "react-icons/bs";
import { EmployeesProfileCard } from "../EmployeesProfileCard";
import { Nav, Tab } from "react-bootstrap";
import { PostUser } from "../../../../../../common/components/PostUser/PostUser";
import { UserPost } from "../../../../../../common/components/UserPost/UserPost";
import ProfileIcon from "../../../../../../common/components/img/Img";
import EX from "../../../../../../../pics/ex.png";
import EX2 from "../../../../../../../pics/ex2.png";
import { UploadDocumentList } from "../EmployeesDocument";
import TopPageTitle from "../../../../../../common/components/topPageTitle/Index";
import { Projects } from "../Projects";
import { EmployeesSalaryStracture } from "../EmployeesSalaryStracture";
import { IssueAssetsAppTop } from "../IssueAssets";
import { AboutInput } from "../AboutProfile";
import { EmployeesOffBoard } from "../EmployeesOffBoard";
import { Promote } from "../Promote";
import { Demote } from "../Demote";
import { RR } from "../R&R";

const Announcement = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-12">
            <div className="Announcement_title_top_div">
              <TopPageTitle
                Name="Employees Detail"
                TilelIcon={<BsArrowLeft />}
                TitleLink={-1}
              />
            </div>
          </div>
        </div>

        <div>
          <EmployeesProfileCard />
          <div className="profile_tab_div">
            <Tab.Container id="left-tabs-example" defaultActiveKey="0">
              <div className="profile_tab_div2">
                <div className="row">
                  <div className="col-12">
                    <Nav variant="pills" className="flex">
                      <Nav.Item>
                        <Nav.Link eventKey="0">Announcement</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="1">About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Projects">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3">Documents</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Assets">Assets</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Board">Off Board</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="SalaryStracture">
                          Salary Stracture
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Promote">Promote</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Demote">Demote</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="R&R">R&R</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>

              <Tab.Content>
                <Tab.Pane eventKey="R&R">
                  <div className="m_t"></div>
                  <RR />
                </Tab.Pane>
                <Tab.Pane eventKey="Demote">
                  <div className="m_t"></div>
                  <Demote />
                </Tab.Pane>
                <Tab.Pane eventKey="Promote">
                  <div className="m_t"></div>
                  <Promote />
                </Tab.Pane>
                <Tab.Pane eventKey="SalaryStracture">
                  <div className="m_t"></div>
                  <EmployeesSalaryStracture />
                </Tab.Pane>
                <Tab.Pane eventKey="Projects">
                  <div className="m_t"></div>
                  <Projects />
                </Tab.Pane>
                <Tab.Pane eventKey="0">
                  <div className="m_t"></div>
                  <PostUser />
                  <UserPost />
                </Tab.Pane>
                <Tab.Pane eventKey="1">
                  <div className="m_t"></div>
                  <AnnouncementAbout />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <div className="m_t"></div>
                  <Experience />
                  <div className="m_t"></div>
                  <PreviousExperiences />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <div className="m_t"></div>
                  <UploadDocumentList />
                </Tab.Pane>
                <Tab.Pane eventKey="Assets">
                  <div className="m_t"></div>
                  <IssueAssetsAppTop />
                </Tab.Pane>
                <Tab.Pane eventKey="Board">
                  <div className="m_t"></div>
                  <EmployeesOffBoard />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default Announcement;

const AnnouncementAbout = () => {
  return (
    <>
      <div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className=" col-12">
            <div className="profile_iner_cont">
              <AboutInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Experience = () => {
  const ExperienceApp = (props) => {
    return (
      <>
        <li>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-2">
                  <ProfileIcon
                    className="Experience_timline_img"
                    backgroundImage={props.img}
                  />
                </div>
                <div className="col-10">
                  <div className="Experience_timline_title">
                    <h3>{props.name}</h3>
                    <p>{props.date}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="Experience_timline_title_iner">
                <h4>{props.role}</h4>
              </div>
              <div className="Experience_timline_title_iner_text">
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  };
  const ExperienceData = [
    {
      img: EX,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX2,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX2,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX2,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="profile_iner_cont">
            <div className="row">
              <div className="col-12 ">
                <div className="EmployeesDocument_top_title">
                  <h3>Experience with Maxlence Consulting</h3>
                  <p>4 years 0 month 3 days</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <ul className="Experience_timline_top_div">
                    {ExperienceData.map((val, i) => {
                      return (
                        <ExperienceApp
                          key={i}
                          img={val.img}
                          name={val.name}
                          date={val.date}
                          role={val.role}
                          text={val.text}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
              <div className="profile_iner_cont">
                <div className="row mb-2">
                  <div className="col-6">
                    <p className="skills_title">Skills</p>
                  </div>
                </div>
                <div className="skills_main_div ">
                  <div className="skills_main_inner_div">
                    <span>Photoshop</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Illustrator</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>HTML</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>CSS</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Javascript</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Reserach</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Php</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Python</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
              <div className="profile_iner_cont">
                <div className="row mb-2">
                  <div className="col-12">
                    <p className="skills_title">Project Completed</p>
                  </div>
                </div>
                <div className="skills_main_div ">
                  <div className="skills_main_inner_div">
                    <span>Aftercare</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Maxlence PM</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Maxlence HR</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Maxlence CRM</span>
                  </div>
                  <div className="skills_main_inner_div">
                    <span>Maxlence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const PreviousExperiences = () => {
  const PreviousExperiencesApp = (props) => {
    return (
      <>
        <li>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="Experience_timline_title2">
                    <h3>
                      {props.name} <span>{props.subName}</span>
                    </h3>
                    <p>
                      {props.date} to {props.subDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-12">
              <div className="Experience_timline_title_iner">
                <h4>{props.role}</h4>
              </div>
              <div className="Experience_timline_title_iner_text">
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  };
  const PreviousExperiencesData = [
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="row">
          <div className="col-12 ">
            <div className="EmployeesDocument_top_title">
              <h3>Previous Experiences</h3>
              <p>4 years 0 month 3 days</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <ul className="Experience_timline_top_div">
                {PreviousExperiencesData.map((val, i) => {
                  return (
                    <PreviousExperiencesApp
                      key={i}
                      name={val.name}
                      subName={val.subName}
                      date={val.date}
                      subDate={val.subDate}
                      role={val.role}
                      text={val.text}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
