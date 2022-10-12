import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import Select from "react-select";
const Leave = (props) => {
  const [userBreks, setUserBreks] = useState(true);

  const changNameUser = () => {
    setUserBreks(!userBreks);
  };
  const LeaveData = [
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      LeaveType: "Sick Leave",
      RemainingLeaves: "05",
      From: "10/05/2021",
      To: "10/07/2021",
    },
  ];
  const LeaveApp = (props) => {
    const [userApprove, setUserApprove] = useState(true);
    const [userBreks, setUserBreks] = useState(true);

    const changNameUser = () => {
      setUserBreks(!userBreks);
    };
    const changApprove = () => {
      setUserApprove(!userApprove);
    };

    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.EID}</td>
          <td>{props.EmployeeName}</td>
          <td>{props.LeaveType}</td>
          <td>{props.RemainingLeaves}</td>
          <td>{props.From}</td>
          <td>{props.To}</td>
          <td>
            <div
              className={`${
                userBreks ? "add_remarks_title_leave" : "add_remarks_title2"
              }`}
            >
              <div className="add_remarks_title_leave" onClick={changNameUser}>
                <span>
                  <FiPlusCircle />
                </span>
              </div>
            </div>
            <div
              className={`${userBreks ? "AddRemarksRemover" : "AddRemarks"}`}
            >
              <div className="add_remarks_input_div">
                <Input
                  type="text"
                  className="form-control"
                  placeholder=" Add Remarks..."
                />
              </div>
            </div>
          </td>
          <td className=" position-relative">
            <div className="add_remarks_title3">
              Pending
              <span onClick={changApprove}>
                <FiChevronDown />
              </span>
            </div>
            <div className={`${userApprove ? "approve2" : "reject2"}`}>
              <div
                className="reimbursement_card_options"
                onClick={changApprove}
              >
                <p className="">approve</p>
                <p>reject</p>
              </div>
            </div>
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
      <div className="custom_container">
        <div className="custom_container_iner">
          <div>
            <div className="row">
              <div className="col-12">
                <ul className="d-flex align-content-center ApprovalDetailsPage_ul_top_div">
                  <li>
                    <NavLink to="/hr/dashboard">
                      <BsArrowLeft />
                    </NavLink>
                  </li>
                  <li>
                    <h3>Leave</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
                  <th scope="col">Leave Type</th>
                  <th scope="col">Remaining Leaves</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ApprovalDetailsPage_thead_td">
                  <td>01</td>
                  <td>sunny charkhwal</td>
                  <td>Sick Leave</td>
                  <td>05</td>
                  <td>10/05/2021</td>
                  <td>10/05/2021</td>
                  <td>
                    <div
                      className={`${
                        userBreks
                          ? "add_remarks_title_leave"
                          : "add_remarks_title2"
                      }`}
                    >
                      <div
                        className="add_remarks_title_leave"
                        onClick={changNameUser}
                      >
                        <span>
                          <FiPlusCircle />
                        </span>
                      </div>
                    </div>
                    <div
                      className={`${
                        userBreks ? "AddRemarksRemover" : "AddRemarks"
                      }`}
                    >
                      <div className="add_remarks_input_div">
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=" Add Remarks..."
                        />
                      </div>
                    </div>
                  </td>
                  <td className=" position-relative approve_tabel">approve</td>
                </tr>
                <tr className="ApprovalDetailsPage_thead_td">
                  <td>01</td>
                  <td>sunny charkhwal</td>
                  <td>Sick Leave</td>
                  <td>05</td>
                  <td>10/05/2021</td>
                  <td>10/05/2021</td>
                  <td>
                    <div
                      className={`${
                        userBreks
                          ? "add_remarks_title_leave"
                          : "add_remarks_title2"
                      }`}
                    >
                      <div
                        className="add_remarks_title_leave"
                        onClick={changNameUser}
                      >
                        <span>
                          <FiPlusCircle />
                        </span>
                      </div>
                    </div>
                    <div
                      className={`${
                        userBreks ? "AddRemarksRemover" : "AddRemarks"
                      }`}
                    >
                      <div className="add_remarks_input_div">
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=" Add Remarks..."
                        />
                      </div>
                    </div>
                  </td>
                  <td className=" position-relative reject_tabel">reject</td>
                </tr>
                {LeaveData.map((val, i) => {
                  return (
                    <LeaveApp
                      key={i}
                      EID={val.EID}
                      EmployeeName={val.EmployeeName}
                      LeaveType={val.LeaveType}
                      RemainingLeaves={val.RemainingLeaves}
                      From={val.From}
                      To={val.To}
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
export default Leave;
