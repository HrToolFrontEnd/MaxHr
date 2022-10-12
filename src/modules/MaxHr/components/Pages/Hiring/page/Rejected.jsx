import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft, BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

import Select from "react-select";
import { Nav, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Input from "../../../../../common/components/input/Input";
import { FiEdit } from "react-icons/fi";
export const Rejected = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <NewApplicationTabs />
      </div>
    </>
  );
};
const PageTop = () => {
  return (
    <>
      <div>
        <div className="row TotalOpenings_input_main_div g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <TopPageTitle
              TitleLink={-1}
              TilelIcon={<BsArrowLeft />}
              Name="Rejected Candidates"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const NewApplicationTabs = () => {
  return (
    <>
      <div className="new_application_tabs_div">
        <NewApplicationSlider />
      </div>
    </>
  );
};

const NewApplicationTabel = () => {
  const MissingInformationData = [
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_normal",
    },
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_details",
    },
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_normal",
    },
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_details",
    },
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_normal",
    },
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_details",
    },
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_normal",
    },
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_details",
    },
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_normal",
    },
    {
      Name: "sunny charkhwal",
      date: "05/25/2021",
      Availability: "Immediate",
      Experience: "5 Years",
      Expectation: "6 LPA",
      link: "/hr/rejected_details",
    },
  ];
  const MissingInformationApp = (props) => {
    const navigate = useNavigate();
    const [NewApplicationTabelName, setNewApplicationTabelName] =
      useState(true);
    const NewApplicationTabelNameChang = () => {
      setNewApplicationTabelName(!NewApplicationTabelName);
    };
    return (
      <>
        <tr
          className="ApprovalDetailsPage_thead_td"
          style={{ verticalAlign: "middle" }}
        >
          <td className="MissingInformation_td d-flex  align-items-center">
            <span
              onMouseOver={NewApplicationTabelNameChang}
              onMouseOut={NewApplicationTabelNameChang}
            >
              {NewApplicationTabelName ? (
                <Test1 text="s" />
              ) : (
                <Test1 text="+4" />
              )}
            </span>
            {props.Name}
          </td>
          <td className="MissingInformation_td">{props.date}</td>
          <td className="MissingInformation_td">{props.Availability}</td>
          <td className="MissingInformation_td">{props.Experience}</td>
          <td className="MissingInformation_td">{props.Expectation}</td>
          <td>
            <button
              onClick={() => navigate(props.link)}
              className="missing_information_td_button"
            >
              View
            </button>
          </td>
        </tr>
      </>
    );
  };
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div>
        <div className="custom_container_iner">
          <div className="row g-3 mb-4">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="ApprovalDetailsPage_date_picker">
                <label>From</label>
                <Input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="ApprovalDetailsPage_date_picker">
                <label>to</label>
                <Input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="all Departments" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="all round" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
              <div className="ApprovalDetailsPage_date_picker">
                <div className="ApprovalDetailsPage_search_input_iner_div">
                  <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ApprovalDetailsPage_top_div pt-0">
            <table className="table table-hover MissingInformation_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th
                    scope="col"
                    className=" text-start"
                    style={{ paddingLeft: "5rem" }}
                  >
                    <span className="new_application_table_filter_div">
                      Name
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Date
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Availability
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Experience
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      Expectation
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">Resume</th>
                </tr>
              </thead>
              <tbody>
                {MissingInformationData.map((val, i) => {
                  return (
                    <MissingInformationApp
                      key={i}
                      Name={val.Name}
                      date={val.date}
                      Availability={val.Availability}
                      Experience={val.Experience}
                      Expectation={val.Expectation}
                      link={val.link}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
const Test1 = (props) => {
  return (
    <>
      <div className="new_application_tabel_name_text">
        <h3>{props.text}</h3>
      </div>
    </>
  );
};
const NewApplicationSlider = () => {
  return (
    <>
      <div className="interviews_round_tabs_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex">
            <Nav.Item>
              <Nav.Link eventKey="first">
                <JobCards
                  roundName=" UX Designer"
                  candidatesNumber="12 Applications"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                <JobCards
                  roundName="UI Developer "
                  candidatesNumber="12 Applications"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second3">
                <JobCards roundName="SEO " candidatesNumber="12 Applications" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second4">
                <JobCards
                  roundName="HR Manager"
                  candidatesNumber="HR Manager"
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="m_t"></div>
              <NewApplicationTabel />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="m_t"></div>
              <NewApplicationTabel />
            </Tab.Pane>
            <Tab.Pane eventKey="second3">
              <div className="m_t"></div>
              <NewApplicationTabel />
            </Tab.Pane>
            <Tab.Pane eventKey="second4">
              <div className="m_t"></div>
              <NewApplicationTabel />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
const JobCards = (props) => {
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
            <NavLink
              className="JobCards_main_div_menu"
              to="/hr/create_new_jobs"
            >
              <FiEdit />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
