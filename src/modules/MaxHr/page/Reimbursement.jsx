import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import Select from "react-select";
const Reimbursement = (props) => {
  const [userBreks, setUserBreks] = useState(true);

  const changNameUser = () => {
    setUserBreks(!userBreks);
  };
  const ReimbursementData = [
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "sunny charkhwal",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
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
          <td>{props.EID}</td>
          <td>{props.From}</td>
          <td>{props.ItemName}</td>
          <td>{props.date}</td>
          <td>
            <span className="reimbursement_view_btn">
              <NavLink to="/hr/user_details">view</NavLink>
            </span>
          </td>
          <td>{props.EComment}</td>
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
              <div className="col-12">
                <ul className="d-flex align-content-center ApprovalDetailsPage_ul_top_div">
                  <li>
                    <NavLink to="/hr/dashboard">
                      <BsArrowLeft />
                    </NavLink>
                  </li>
                  <li>
                    <h3>Reimbursement</h3>
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
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                <div className="dashboard_top_week_Select">
                  <Select options={options} placeholder="Item Name" />
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
                  <th scope="col">From</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Document</th>
                  <th scope="col">E. Comment</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ApprovalDetailsPage_thead_td">
                  <td>01</td>
                  <td>sunny charkhwal</td>
                  <td>Printer</td>
                  <td>05/25/2021</td>
                  <td>
                    <span className="reimbursement_view_btn">
                      <NavLink to="/hr/user_details">view</NavLink>
                    </span>
                  </td>
                  <td>NA</td>
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
                  <td>01</td>
                  <td>sunny charkhwal</td>
                  <td>Printer</td>
                  <td>05/25/2021</td>
                  <td>
                    <span className="reimbursement_view_btn">
                      <NavLink to="/hr/user_details">view</NavLink>
                    </span>
                  </td>
                  <td>NA</td>
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
                      EID={val.EID}
                      From={val.From}
                      ItemName={val.ItemName}
                      date={val.date}
                      EComment={val.EComment}
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
export default Reimbursement;
