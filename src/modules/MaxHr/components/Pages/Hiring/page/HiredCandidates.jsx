import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft, BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Select from "react-select";
import { Nav, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const HiredCandidates = () => {
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
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div>
        <div className="row TotalOpenings_input_main_div g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
            <TopPageTitle
              TitleLink={-1}
              TilelIcon={<BsArrowLeft />}
              Name="Hired Candidates"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
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
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="All Department" />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="This week" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const NewApplicationTabs = () => {
  return (
    <>
      <div className="new_application_tabs_div mt-2">
        <NewApplicationSlider />
      </div>
    </>
  );
};

const NewApplicationTabel = () => {
  const MissingInformationData = [
    {
      Name: "sunny charkhwal",
    },
    {
      Name: "sunny charkhwal",
    },
    {
      Name: "sunny charkhwal",
    },
    {
      Name: "sunny charkhwal",
    },
    {
      Name: "sunny charkhwal",
    },
    {
      Name: "sunny charkhwal",
    },
    {
      Name: "sunny charkhwal",
    },
    {
      Name: "sunny charkhwal",
    },
    {
      Name: "sunny charkhwal",
    },
    {
      Name: "sunny charkhwal",
    },
  ];
  const MissingInformationApp = (props) => {
    const [NewApplicationTabelName, setNewApplicationTabelName] =
      useState(true);
    const NewApplicationTabelNameChang = () => {
      setNewApplicationTabelName(!NewApplicationTabelName);
    };
    const ratingChanged = () => {};
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
          <td className="MissingInformation_td">
            <div className="Feedback_Ratings_div Feedback_Ratings_div_hired">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#F1C21B"
              />
              <h6>5.0</h6>
            </div>
          </td>
          <td className="MissingInformation_td">
            <div className="Feedback_Ratings_div Feedback_Ratings_div_hired">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#F1C21B"
              />
              <h6>5.0</h6>
            </div>
          </td>
          <td className="MissingInformation_td">
            <div className="Feedback_Ratings_div Feedback_Ratings_div_hired">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#F1C21B"
              />
              <h6>5.0</h6>
            </div>
          </td>
          <td className="MissingInformation_td">
            <div className="Feedback_Ratings_div Feedback_Ratings_div_hired">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#F1C21B"
              />
              <h6>5.0</h6>
            </div>
          </td>
          <td className="MissingInformation_td">
            <div className="Feedback_Ratings_div Feedback_Ratings_div_hired">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#F1C21B"
              />
              <h6>5.0</h6>
            </div>
          </td>
          <td>
            <NavLink to="/hr/background_check">
              <button className="missing_information_td_button">View</button>
            </NavLink>
          </td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div>
        <div className="custom_container_iner">
          <div className="ApprovalDetailsPage_top_div pt-0">
            <table className="table table-hover HiredCandidates_tabel_main_div text-center text-capitalize">
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
                      1st Interview
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      2st Interview
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      3st Interview
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      4st Interview
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="new_application_table_filter_div">
                      5st Interview
                      <span className="new_application_table_filter">
                        <BsCaretUpFill />
                        <BsCaretDownFill />
                      </span>
                    </span>
                  </th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody>
                {MissingInformationData.map((val, i) => {
                  return <MissingInformationApp key={i} Name={val.Name} />;
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
