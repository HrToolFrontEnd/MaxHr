import { Nav, Tab } from "react-bootstrap";
import { PagesTopTitle } from "../../../components/Pages/Dashboard/index";
import React from "react";
import { EmployeesProfileCard } from "./components/EmployeesProfileCard";
import { Announcement } from "./components/Announcement";
import { AboutProfile } from "./components/AboutProfile";
import { EmployeesDocument } from "./components/EmployeesDocument";
import { Experience, PreviousExperiences } from "./components/Experience";
import { IssueAssets, ReturnIssueAssets } from "./components/IssueAssets";
import { SalaryStracture } from "./components/SalaryStracture";
import { AnnouncementFilter } from "../Announcement/Index";
import { Projects } from "./components/Projects";
import { OffBoard } from "./components/OffBoard";
export const Tabs = () => {
  return (
    <>
      <PagesTopTitle title="my Profile" />
      <EmployeesProfileCard />
      <InerNewTab />
    </>
  );
};
const InerNewTab = () => {
  return (
    <>
      <div className="profile_tab_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="profile_tab_div2">
            <div className="row">
              <div className="col-12">
                <Nav variant="pills" className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Announcement</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Projects">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second1">Experience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second2">Documents</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Assets">Assets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="OffBoard">Off Board</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Board">Salary Stracture</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="MyRole">My Role</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="OffBoard">
              <div className="m_t"></div>
              <OffBoard />
            </Tab.Pane>
            <Tab.Pane eventKey="MyRole">
              <div className="m_t"></div>
              <h1>My Role</h1>
            </Tab.Pane>
            <Tab.Pane eventKey="first">
              <div className="m_t"></div>
              <AnnouncementFilter />
              <Announcement />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="m_t"></div>
              <div>
                <AboutProfile />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second1">
              <div className="m_t"></div>
              <Experience />
              <div className="m_t"></div>
              <PreviousExperiences />
            </Tab.Pane>
            <Tab.Pane eventKey="second2">
              <div className="m_t"></div>
              <EmployeesDocument />
            </Tab.Pane>
            <Tab.Pane eventKey="Assets">
              <div className="m_t"></div>
              <IssueAssets />
              <div className="m_t"></div>
              <ReturnIssueAssets />
            </Tab.Pane>
            <Tab.Pane eventKey="Board">
              <div className="m_t"></div>

              <div className="profile_iner_cont">
                <div className="EmployeesDocument_top_title">
                  <h3> Salary Stracture</h3>
                </div>
                <SalaryStracture />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Projects">
              <div className="m_t"></div>
              <Projects />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
