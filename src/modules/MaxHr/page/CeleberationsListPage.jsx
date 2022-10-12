import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AiOutlinePlus, AiTwotoneSetting } from "react-icons/ai";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import Select from "react-select";
export const CeleberationsListPage = (props) => {
  const [userBreks, setUserBreks] = useState(true);

  const changNameUser = () => {
    setUserBreks(!userBreks);
  };
  const ReimbursementData = [
    {
      ID: "MXD01",
      Employee: "sunny charkhwal",
      Department: "Design",
      Position: "Design Intern",
      CelebrationType: "Birthday",
      date: "1st May, Sun",
    },
  ];
  const ReimbursementApp = (props) => {
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
          <td>{props.ID}</td>
          <td>{props.Employee}</td>
          <td>{props.Department}</td>
          <td>{props.Position}</td>
          <td>{props.CelebrationType}</td>
          <td>{props.date}</td>
          <td>
            <div
              className={`${
                userBreks ? "add_remarks_title" : "add_remarks_title2"
              }`}
            >
              <div className="add_remarks_title" onClick={changNameUser}>
                Add Remarks
                <span>
                  <AiOutlinePlus />
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
              <div className="col-6">
                <ul className="d-flex align-content-center ApprovalDetailsPage_ul_top_div">
                  <li>
                    <NavLink to={-1}>
                      <BsArrowLeft />
                    </NavLink>
                  </li>
                  <li>
                    <h3>Celeberations</h3>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <div>
                  <div className="celebrations_card_setting_icon_div">
                    <NavLink to="/">
                      <AiTwotoneSetting />
                    </NavLink>
                  </div>
                </div>
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
                  <th scope="col">ID</th>
                  <th scope="col">Employee</th>
                  <th scope="col">Department</th>
                  <th scope="col">Position</th>
                  <th scope="col">Celebration Type</th>
                  <th scope="col">Date</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ApprovalDetailsPage_thead_td">
                  <td>MXD01</td>
                  <td>sunny charkhwal</td>
                  <td>Printer</td>
                  <td>05/25/2021</td>
                  <td>Birthday</td>
                  <td>1st May, Sun</td>
                  <td>
                    <div
                      className={`${
                        userBreks ? "add_remarks_title" : "add_remarks_title2"
                      }`}
                    >
                      <div
                        className="add_remarks_title"
                        onClick={changNameUser}
                      >
                        Add Remarks
                        <span>
                          <AiOutlinePlus />
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
                  <td>MXD01</td>
                  <td>sunny charkhwal</td>
                  <td>Printer</td>
                  <td>05/25/2021</td>
                  <td>Birthday</td>
                  <td>1st May, Sun</td>
                  <td>
                    <div
                      className={`${
                        userBreks ? "add_remarks_title" : "add_remarks_title2"
                      }`}
                    >
                      <div
                        className="add_remarks_title"
                        onClick={changNameUser}
                      >
                        Add Remarks
                        <span>
                          <AiOutlinePlus />
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
                {ReimbursementData.map((val, i) => {
                  return (
                    <ReimbursementApp
                      key={i}
                      ID={val.ID}
                      Employee={val.Employee}
                      Department={val.Department}
                      Position={val.Position}
                      CelebrationType={val.CelebrationType}
                      date={val.date}
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
