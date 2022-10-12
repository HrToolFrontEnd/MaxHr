import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { Nav, Tab } from "react-bootstrap";
import React from "react";
import { AboutProfileInput } from "../../Profile/components/AboutProfile";

export const AppraisalSetting = () => {
  return (
    <>
      <div className="custom_container">
        <TopPageTitle
          TitleLink={-1}
          TilelIcon={<BsArrowLeft />}
          Name="Settings"
        />
        <div className="CompanySetup_main_div">
          <div className="AppraisalSetting_inner_main_div">
            <div className="AppraisalSetting_top_title">
              <h3>Lets setup frequency of appraisal in your company</h3>
            </div>
            <div className="profile_tab_div CompanySetup_tab">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Frequency</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Questions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second1">Process</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second2">Outcome</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Frequency />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Questions />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second1">
                    <Process />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second2">4</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Frequency = () => {
  return (
    <>
      <div>
        <div className="setting1_text">
          Select the month in which you want to have appraisal
        </div>
        <div className="Frequency_month_top_div">
          <div className="ApprovalDetailsPage_date_picker">
            <label>Select Month</label>
            <div className="row">
              <div className="col-6">
                <select className="form-select">
                  <option>Select Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August </option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="col-3">
                <div className="Frequency_reset_btn">
                  <button>
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div className="col-3">
                <div className="Frequency_save_btn">
                  <button>
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="setting1_text">
          Select the month in which you want to have appraisal
        </div>
        <div className="Frequency_month_top_div">
          <div className="ApprovalDetailsPage_date_picker">
            <label>Select Month</label>
            <div className="row">
              <div className="col-6">
                <select className="form-select">
                  <option>Select Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August </option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="col-3">
                <div className="Frequency_reset_btn">
                  <button>
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div className="col-3">
                <div className="Frequency_save_btn">
                  <button>
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frequency_add_new">
        <div className="row">
          <div className="col-10">
            <p>Do you want to have more than 2 appraisals in one year</p>
          </div>
          <div className="col-2">
            <div className="Frequency_save_btn">
              <button>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 company_setup_bottom_btn">
          <div className=" text-capitalize text-center frequency_add_new_btn">
            <button className=" ApprovalDetailsPage_btn">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};
const Questions = () => {
  const QuestionsApp = (props) => {
    return (
      <>
        <div className="questions_top_div">
          <div className="setting1_text">{props.toptile}</div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div key={i} className="row mt-3">
                <div className="col-12">
                  <AboutProfileInput
                    label={val.label}
                    type="text"
                    className="form-control"
                    placeholder={val.placeholder}
                  />
                  <div className="row mt-2">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                      <div className="automation_checkbox_div">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={val.inputid1}
                          />
                          <label
                            className="form-check-label automation_checkbox_label"
                            htmlFor={val.inputid1}
                          >
                            {val.inputtitle1}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-6 col-6">
                      <div className="automation_checkbox_div">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={val.inputid2}
                          />
                          <label
                            className="form-check-label automation_checkbox_label"
                            htmlFor={val.inputid2}
                          >
                            {val.inputtitle2}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="setting1_text">{props.bottomtitle}</div>
          <div className=" mt-3">
            <div className="Frequency_save_btn text-start">
              <button>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  const QuestionsData = [
    {
      toptile: "General questions for all Departments",
      bottomtitle:
        "Do you want to have more more common questions for all department If yes click on add below button",
      cat1: [
        {
          label: "Question 1",
          placeholder:
            "Ask the question that you think should come at first place",
          inputid1: "A",
          inputtitle1: "Yes no type",
          inputid2: "b",
          inputtitle2: "It has attachment",
        },
      ],
    },
  ];
  return (
    <>
      {QuestionsData.map((val, i) => {
        return (
          <QuestionsApp
            key={i}
            toptile={val.toptile}
            bottomtitle={val.bottomtitle}
            arr={val}
          />
        );
      })}
      <div className="row ">
        <div className="col-12 company_setup_bottom_btn">
          <div className=" text-capitalize text-center frequency_add_new_btn">
            <button className=" ApprovalDetailsPage_btn">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};
const Process = () => {
  const ProcessApp = (props) => {
    return (
      <>
        <div>
          <div className="setting1_text">{props.toptile}</div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div key={i} className="Frequency_month_top_div">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>{val.label}</label>
                  <div className="row">
                    <div className="col-6">
                      <select className="form-select">
                        <option>Select Designation</option>
                        <option>react js developer</option>
                      </select>
                    </div>
                    <div className="col-3">
                      <div className="Frequency_reset_btn">
                        <button>
                          <span>Reset</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="Frequency_save_btn">
                        <button>
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const ProcessData = [
    {
      toptile: "Define the Steps of Appraisla at your place",
      cat1: [
        {
          label: "First it will be reviewd by",
        },
        {
          label: "Second it will be reviewd by",
        },
        {
          label: "Third it will be reviewd by",
        },
        {
          label: "Fourth it will be reviewd by",
        },
      ],
    },
  ];
  return (
    <>
      {ProcessData.map((val, i) => {
        return <ProcessApp key={i} toptile={val.toptile} arr={val} />;
      })}
      <div className="frequency_add_new">
        <div className="row">
          <div className="col-10">
            <p>Do you want to have more than 2 appraisals in one year</p>
          </div>
          <div className="col-2">
            <div className="Frequency_save_btn">
              <button>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 company_setup_bottom_btn">
          <div className=" text-capitalize text-center frequency_add_new_btn">
            <button className=" ApprovalDetailsPage_btn">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};
