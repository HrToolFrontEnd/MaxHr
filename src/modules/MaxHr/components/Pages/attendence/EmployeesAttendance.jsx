import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { NavLink } from "react-router-dom";
import { BsArrowRight, BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Input from "../../../../common/components/input/Input";
import Select from "react-select";
import { Modal } from "react-bootstrap";
import styles from "../../Navbar/Navbar.module.scss";
import { Nav, Tab } from "react-bootstrap";
export const EmployeesAttendance = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
            <TopPageTitle Name="Attendance" />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
            <NavLink to="/hr/previous_leaves">
              <span>Action on Leave</span>
              <BsArrowRight />
            </NavLink>
          </div>
        </div>

        <div className="profile_tab_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex">
              <Nav.Item>
                <Nav.Link eventKey="first">Daily</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Monthly</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="m_t"></div>
                <EmployeesAttendanceList />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Monthly />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const DateCheckApp = () => {
  return (
    <>
      <span className="EmployeesAttendanceList_check_btn">
        <BsCheckLg />
      </span>
    </>
  );
};
const EmployeesAttendanceList = () => {
  const [Green, setGreen] = React.useState(false);
  const ReimbursementData = [
    {
      EID: "01",
      Name: "sunny charkhwal",
      date1: <DateCheckApp />,
      date2: <DateCheckApp />,
      date3: <DateCheckApp />,
      date4: <DateCheckApp />,
      date5: <DateCheckApp />,
      date6: <DateCheckApp />,
      date7: <DateCheckApp />,
      date8: <DateCheckApp />,
      date9: <DateCheckApp />,
      date10: <DateCheckApp />,
      date11: <DateCheckApp />,
      date12: <DateCheckApp />,
      date13: <DateCheckApp />,
      date14: <DateCheckApp />,
      date15: <DateCheckApp />,
      date16: <DateCheckApp />,
      date17: <DateCheckApp />,
      date18: <DateCheckApp />,
      date19: <DateCheckApp />,
      date20: <DateCheckApp />,
      date21: <DateCheckApp />,
      date22: <DateCheckApp />,
      date23: <DateCheckApp />,
      date24: <DateCheckApp />,
      date25: <DateCheckApp />,
      date26: <DateCheckApp />,
      date27: <DateCheckApp />,
      date28: <DateCheckApp />,
      date29: <DateCheckApp />,
      date30: <DateCheckApp />,
      date31: <DateCheckApp />,
      date32: <DateCheckApp />,
      Absent: "1.5",
    },
    {
      EID: "01",
      Name: "sunny charkhwal",
      date1: <DateCheckApp />,
      date2: <DateCheckApp />,
      date3: <DateCheckApp />,
      date4: <DateCheckApp />,
      date5: <DateCheckApp />,
      date6: <DateCheckApp />,
      date7: <DateCheckApp />,
      date8: <DateCheckApp />,
      date9: <DateCheckApp />,
      date10: <DateCheckApp />,
      date11: <DateCheckApp />,
      date12: <DateCheckApp />,
      date13: <DateCheckApp />,
      date14: <DateCheckApp />,
      date15: <DateCheckApp />,
      date16: <DateCheckApp />,
      date17: <DateCheckApp />,
      date18: <DateCheckApp />,
      date19: <DateCheckApp />,
      date20: <DateCheckApp />,
      date21: <DateCheckApp />,
      date22: <DateCheckApp />,
      date23: <DateCheckApp />,
      date24: <DateCheckApp />,
      date25: <DateCheckApp />,
      date26: <DateCheckApp />,
      date27: <DateCheckApp />,
      date28: <DateCheckApp />,
      date29: <DateCheckApp />,
      date30: <DateCheckApp />,
      date31: <DateCheckApp />,
      date32: <DateCheckApp />,
      Absent: "1.5",
    },
  ];
  const ReimbursementApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          {Object.keys(props).map((key) => (
            <td key={key}>{props[key]}</td>
          ))}
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
          <div>
            <div className="row g-3">
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
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                <div className="dashboard_top_week_Select">
                  <Select options={options} placeholder="Departments" />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
          </div>
          <div className="ApprovalDetailsPage_top_div">
            <div className={styles.EmployeesAttendanceList_main_div}>
              <table className="table table-hover text-center text-capitalize">
                <thead>
                  <tr className="ApprovalDetailsPage_thead_tr">
                    <th scope="col">E. ID</th>
                    <th scope="col">Employee Name</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>21</th>
                    <th>22</th>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>26</th>
                    <th>27</th>
                    <th>28</th>
                    <th>29</th>
                    <th>30</th>
                    <th>31</th>
                    <th>Absent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ApprovalDetailsPage_thead_td">
                    <td>1</td>
                    <td>sunny charkhwal</td>
                    <td>
                      <span className="EmployeesAttendanceList_check_btn">
                        <BsCheckLg onClick={() => setGreen(true)} />
                      </span>
                      <GreenModal show={Green} onHide={() => setGreen(false)} />
                    </td>
                    <td>
                      <span>
                        <BsCheckLg onClick={() => setGreen(true)} />
                      </span>
                    </td>
                    <td>
                      <span className="EmployeesAttendanceList_check_btn2">
                        <IoCloseSharp onClick={() => setGreen(true)} />
                      </span>
                    </td>
                  </tr>
                  {ReimbursementData.map((val, i) => {
                    return <ReimbursementApp key={i} {...val} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const GreenModal = (props) => {
  const GreenModalTimline = (props) => {
    return (
      <>
        <li>
          <div>
            <p>
              Punch
              <span style={{ color: props.statuscolor }}>{props.status}</span>
              at
            </p>
            <h6>
              <BiTimeFive /> <span>{props.time}</span>
            </h6>
          </div>
        </li>
      </>
    );
  };
  const GreenModalTimlineApp = [
    {
      status: "in",
      time: "10:00 Am",
      statuscolor: "#24a148",
    },
    {
      status: "out",
      time: "10:00 Am",
      statuscolor: "#da1e28",
    },
    {
      status: "in",
      time: "10:00 Am",
      statuscolor: "#24a148",
    },
    {
      status: "out",
      time: "10:00 Am",
      statuscolor: "#da1e28",
    },
    {
      status: "in",
      time: "10:00 Am",
      statuscolor: "#24a148",
    },
    {
      status: "out",
      time: "10:00 Am",
      statuscolor: "#da1e28",
    },
    {
      status: "in",
      time: "10:00 Am",
      statuscolor: "#24a148",
    },
    {
      status: "out",
      time: "10:00 Am",
      statuscolor: "#da1e28",
    },
    {
      status: "in",
      time: "10:00 Am",
      statuscolor: "#24a148",
    },
    {
      status: "out",
      time: "10:00 Am",
      statuscolor: "#da1e28",
    },
    {
      status: "in",
      time: "10:00 Am",
      statuscolor: "#24a148",
    },
    {
      status: "out",
      time: "10:00 Am",
      statuscolor: "#da1e28",
    },
  ];
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="UploadDocumentModal_body">
        <div className="UploadDocumentModal_body_close_btn">
          <span onClick={props.onHide}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="GreenModal_title">
          <h3>Attendace Info</h3>
        </div>
        <div className="GreenModal_Timesheet_main_div">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="GreenModal_Timesheet_top_div">
                <h5>
                  Timesheet: <span>11 Mar 2019</span>
                </h5>

                <div className="GreenModal_card mb-0">
                  <p className="title">
                    Punch <span>IN</span> at
                  </p>
                  <p className="date">Wed, 11th Mar 2019 10:00 AM</p>
                </div>
                <div className="GreenModal_round_text_div">
                  <div className="GreenModal_round_text">8.25 hrs</div>
                </div>
                <div className="GreenModal_card">
                  <p className="title">
                    Punch <span>OUT</span> at
                  </p>
                  <p className="date">Wed, 11th Mar 2019 07:00 PM</p>
                </div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="GreenModal_card d-flex mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-3 mb-sm-3 mb-3">
                      <p className="title mx-2">Break:</p>
                      <p className="date">1.21 hrs</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="GreenModal_card mb-0">
                      <p className="title mx-2">
                        Frequency:{" "}
                        <span className="GreenModal_card_inner_span">24</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="GreenModal_Timesheet_top_div">
                <h5>
                  <span>Activity</span>
                  <ul className="GreenModal_timline_top_div">
                    {GreenModalTimlineApp.map((val, i) => {
                      return (
                        <GreenModalTimline
                          key={i}
                          status={val.status}
                          time={val.time}
                          statuscolor={val.statuscolor}
                        />
                      );
                    })}
                  </ul>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
const Monthly = () => {
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  const LeaveData = [
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
  ];
  const LeaveApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.EID}</td>
          <td>{props.EmployeeName}</td>
          <td>{props.JoiningDate}</td>
          <td>{props.Role}</td>
          <td>{props.Apr}</td>
          <td>{props.May}</td>
          <td>{props.Jun}</td>
          <td>{props.Jul}</td>
          <td>{props.Aug}</td>
          <td>{props.Sep}</td>
          <td>{props.Oct}</td>
          <td>{props.Nov}</td>
          <td>{props.Dec}</td>
          <td>{props.Jan}</td>
          <td>{props.Feb}</td>
          <td>{props.Mar}</td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className=" mt-4">
        <div className="custom_container_iner">
          <div>
            <div className="row g-3">
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
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                <div className="dashboard_top_week_Select">
                  <Select options={options} placeholder="Departments" />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
          </div>
          <div className="ApprovalDetailsPage_top_div">
            <table className="table table-hover ApprovalDetailsPage_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">E. ID</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Joining Date</th>
                  <th scope="col">Role</th>
                  <th scope="col">Apr</th>
                  <th scope="col">May</th>
                  <th scope="col">Jun</th>
                  <th scope="col">Jul</th>
                  <th scope="col">Aug</th>
                  <th scope="col">Sep</th>
                  <th scope="col">Oct</th>
                  <th scope="col">Nov</th>
                  <th scope="col">Dec</th>
                  <th scope="col">Jan</th>
                  <th scope="col">Feb</th>
                  <th scope="col">Mar</th>
                </tr>
              </thead>
              <tbody>
                {LeaveData.map((val, i) => {
                  return (
                    <LeaveApp
                      key={i}
                      EID={val.EID}
                      EmployeeName={val.EmployeeName}
                      JoiningDate={val.JoiningDate}
                      Role={val.Role}
                      Apr={val.Apr}
                      May={val.May}
                      Jun={val.Jun}
                      Jul={val.Jul}
                      Aug={val.Aug}
                      Sep={val.Sep}
                      Oct={val.Oct}
                      Nov={val.Nov}
                      Dec={val.Dec}
                      Jan={val.Jan}
                      Feb={val.Feb}
                      Mar={val.Mar}
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
