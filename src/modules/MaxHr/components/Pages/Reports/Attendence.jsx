import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
export const AttendenceInner = () => {
  return (
    <>
      <div className="custom_container">
        <AttendenceList />
      </div>
    </>
  );
};

const AttendenceList = () => {
  const AttendenceData = [
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      HalfDay: "00",
      OnLeave: "00",
      UnpaidLeave: "00",
      HRA: "00",
      twd: "26",
      Present: "26",
    },
  ];
  const AttendenceApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.EID}</td>
          <td>{props.Name}</td>
          <td>{props.HalfDay}</td>
          <td>{props.OnLeave}</td>
          <td>{props.UnpaidLeave}</td>
          <td>{props.HRA}</td>
          <td>{props.twd}</td>
          <td>{props.Present}</td>
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
            <div className="row">
              <div className="col-12">
                <ul className="d-flex align-content-center ApprovalDetailsPage_ul_top_div">
                  <li>
                    <NavLink to={-1}>
                      <BsArrowLeft />
                    </NavLink>
                  </li>
                  <li>
                    <h3>Attendence</h3>
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
                  <Select options={options} placeholder="Sort by" />
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
            <table className="table table-hover Reports_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">Emp Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Half Day</th>
                  <th scope="col">On Leave</th>
                  <th scope="col">Unpaid Leave</th>
                  <th scope="col">HRA</th>
                  <th scope="col">Total Working Days</th>
                  <th scope="col">Present</th>
                </tr>
              </thead>
              <tbody>
                {AttendenceData.map((val, i) => {
                  return (
                    <AttendenceApp
                      key={i}
                      EID={val.EID}
                      Name={val.Name}
                      HalfDay={val.HalfDay}
                      OnLeave={val.OnLeave}
                      UnpaidLeave={val.UnpaidLeave}
                      HRA={val.HRA}
                      twd={val.twd}
                      Present={val.Present}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-12 company_setup_bottom_btn">
            <div className="IssueAssets_btn_bottom_div">
              <button className="IssueAssets_btn">Download</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
