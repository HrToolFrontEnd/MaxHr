import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
export const MissingInformation = () => {
  return (
    <>
      <div className="custom_container">
        <MissingInformationList />
      </div>
    </>
  );
};

const MissingInformationList = () => {
  const MissingInformationData = [
    {
      EmployeeName: "sunny charkhwal",
      date: "05/25/2021",
      Missinginformation: "ID Card, NDA, Bank Account",
    },
  ];
  const MissingInformationApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td className="MissingInformation_td">
            <input className="form-check-input" type="checkbox" />
          </td>
          <td className="MissingInformation_td">{props.EmployeeName}</td>
          <td className="MissingInformation_td">{props.date}</td>

          <td className="MissingInformation_td">{props.Missinginformation}</td>
          <td>
            <div className="add_remarks_input_div">
              <input
                type="text"
                className="form-control w-100"
                placeholder="Add custome message or other stuff required or request"
              />
            </div>
          </td>
          <td>
            <button className="missing_information_td_button">
              send reminder
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
                    <h3>missing information</h3>
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
          <div className="MissingInformation_alert" role="alert">
            To send a reminder to your employees to fill up their missing
            information, Please choose the employee below.
          </div>
          <div className="ApprovalDetailsPage_top_div pt-0">
            <table className="table table-hover MissingInformation_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">
                    <input className="form-check-input" type="checkbox" />
                  </th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">send date</th>
                  <th scope="col">Missing information</th>
                  <th scope="col">Add Custom message</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {MissingInformationData.map((val, i) => {
                  return (
                    <MissingInformationApp
                      key={i}
                      EmployeeName={val.EmployeeName}
                      date={val.date}
                      Missinginformation={val.Missinginformation}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-12 company_setup_bottom_btn">
            <div className="IssueAssets_btn_bottom_div">
              <button className="IssueAssets_btn">Send Reminder</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
