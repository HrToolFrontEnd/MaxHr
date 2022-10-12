import React from "react";
import Select from "react-select";
import { Nav, Tab } from "react-bootstrap";
import { PagesTopTitle } from "../Dashboard/index";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { EmployeesTabPanDataIner } from "../Profile/components/EmployeesDocument";
import { AboutProfileInput } from "../Profile/components/AboutProfile";
import Input from "../../../../common/components/input/Input";
import { IoSearchOutline } from "react-icons/io5";
export const Index = () => {
  const [Finance, setFinance] = useState(true);
  const [Finance2, setFinance2] = useState(true);
  const Finance2Open = () => {
    setFinance2(!Finance2);
  };
  const FinanceOpen = () => {
    setFinance(!Finance);
  };
  return (
    <>
      <div className="profile_tab_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className={`${Finance ? "finance1" : "finance2"}`}>
                <div className={`${Finance2 ? "finance7" : "finance8"}`}>
                  <div className="profil_emp_inter_page_title">My Finance</div>
                </div>
              </div>
              <div className={`${Finance ? "finance3" : "finance4"}`}>
                <div className="row">
                  <div className=" col-12">
                    <div
                      onClick={FinanceOpen}
                      className={`${Finance ? "finance3" : "finance4"}`}
                    >
                      <div className="profil_emp_inter_page_title finance_inter_page_title">
                        <BsArrowLeft />
                        Salary Slip
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Finance2 ? "finance5" : "finance6"}`}>
                <div className="row">
                  <div className=" col-12">
                    <div
                      onClick={Finance2Open}
                      className={`${Finance2 ? "finance5" : "finance6"}`}
                    >
                      <div className="profil_emp_inter_page_title finance_inter_page_title">
                        <BsArrowLeft />
                        Reimbursement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <PagesTopTitle title="Employees" />
            </Tab.Pane>
          </Tab.Content>
          <Nav variant="pills" className="flex">
            <Nav.Item>
              <Nav.Link eventKey="first">My Finance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Employees</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="m_t"></div>
              <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                  <div className="profile_iner_cont">
                    <div className={`${Finance ? "finance1" : "finance2"}`}>
                      <div className={`${Finance2 ? "finance7" : "finance8"}`}>
                        <div className="EmployeesDocument_top_title">
                          <h3>Salary Slip</h3>
                        </div>
                        <SalarySlipSelect />
                        <EmployeesTabPanDataIner />
                        <div className="IssueAssets_btn_bottom_div IssueAssets_btn_bottom_div2">
                          <div>
                            <button
                              onClick={FinanceOpen}
                              className="IssueAssets_btn2"
                            >
                              View All
                            </button>
                          </div>
                          <div>
                            <button className="IssueAssets_btn3">
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${Finance ? "finance3" : "finance4"}`}>
                      <div className="EmployeesDocument_top_title">
                        <h3>Salary Slip</h3>
                      </div>
                      <div>
                        <div className="finance_inter_select_top_div">
                          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                              <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                  <AboutProfileInput
                                    label="From"
                                    type="date"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                  <AboutProfileInput
                                    label="upto"
                                    type="date"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 profile_input_div_finance">
                              <div className="row finance_inter_select_right">
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <div className="profile_input_div w-100 m-0">
                                    <span>
                                      <IoSearchOutline />
                                    </span>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      placeholder="Search... "
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="OffBoard_tabel_title">
                          <p>Showing result from March 2019 upto March 2021 </p>
                        </div>
                        <SalarySlipDownload onClick={FinanceOpen} />
                      </div>
                    </div>
                    <div className={`${Finance2 ? "finance5" : "finance6"}`}>
                      <div className="EmployeesDocument_top_title">
                        <h3>Reimbursement</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div onClick={Finance2Open}>
                    <div>
                      <div>
                        <div className="SalarySlipDownload_side_btn">
                          <div>
                            <div className="SalarySlipDownload_side_iner_div">
                              <h3>
                                Reimbursement <BsArrowRight />
                              </h3>
                              <p>View/Request for Reimbursement</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Employees</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};

const SalarySlipSelect = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  const optionsNew = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="finance_inter_select_top_div">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="dashboard_top_week_Select">
                  <label className="all_page_my_label">Select Month</label>
                  <Select options={options} placeholder="December" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="row finance_inter_select_right">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="dashboard_top_week_Select">
                  <label className="all_page_my_label">Select Year</label>
                  <Select options={optionsNew} placeholder="2020" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const SalarySlipDownload = (props) => {
  const SalarySlipDownloadApp = (innerProps) => {
    return (
      <>
        <div className="SalarySlipDownload_top_div">
          <div className="row">
            <div className="col-6">
              <div>
                <p>{innerProps.SalarySlipDownloadTitle}</p>
              </div>
            </div>
            <div className="col-3">
              <div>
                <button onClick={props.onClick}>
                  <span>View</span>
                </button>
              </div>
            </div>
            <div className="col-3">
              <div>
                <button>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const InfoCardAppData = [
    {
      SalarySlipDownloadTitle: "Salary slip of March 2019",
    },
    {
      SalarySlipDownloadTitle: "Salary slip of March 2019",
    },
    {
      SalarySlipDownloadTitle: "Salary slip of March 2019",
    },
    {
      SalarySlipDownloadTitle: "Salary slip of March 2019",
    },
    {
      SalarySlipDownloadTitle: "Salary slip of March 2019",
    },
    {
      SalarySlipDownloadTitle: "Salary slip of March 2019",
    },
  ];
  return (
    <>
      {InfoCardAppData.map((val, i) => {
        return (
          <SalarySlipDownloadApp
            key={i}
            SalarySlipDownloadTitle={val.SalarySlipDownloadTitle}
          />
        );
      })}
    </>
  );
};
