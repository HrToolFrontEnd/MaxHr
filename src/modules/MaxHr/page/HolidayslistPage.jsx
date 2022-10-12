import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AiTwotoneSetting } from "react-icons/ai";
import React from "react";
import Select from "react-select";
export const HolidayslistPage = (props) => {
  const ReimbursementData = [
    {
      SerialNumber: "01",
      HolidayName: "First January",
      date: "01-01-2023",
      Day: "Monday",
    },
    {
      SerialNumber: "01",
      HolidayName: "First January",
      date: "01-01-2023",
      Day: "Monday",
    },
    {
      SerialNumber: "01",
      HolidayName: "First January",
      date: "01-01-2023",
      Day: "Monday",
    },
    {
      SerialNumber: "01",
      HolidayName: "First January",
      date: "01-01-2023",
      Day: "Monday",
    },
  ];
  const ReimbursementApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.SerialNumber}</td>
          <td>{props.HolidayName}</td>
          <td>{props.date}</td>
          <td>{props.Day}</td>
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
                    <h3>Holidays</h3>
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
            <table className="table table-hover HolidayslistPage_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">Serial Number</th>
                  <th scope="col">Holiday Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Day</th>
                </tr>
              </thead>
              <tbody>
                {ReimbursementData.map((val, i) => {
                  return (
                    <ReimbursementApp
                      key={i}
                      SerialNumber={val.SerialNumber}
                      HolidayName={val.HolidayName}
                      date={val.date}
                      Day={val.Day}
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
