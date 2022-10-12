import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
export const UpcomingContractorPayments = () => {
  return (
    <>
      <div className="custom_container">
        <SalaryRegisterList />
      </div>
    </>
  );
};

const SalaryRegisterList = () => {
  const SalaryRegisterListData = [
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      GrossCTC: "12000",
      BasicSalary: "12000",
      DA: "12000",
      HRA: "12000",
      SA: "12000",
      LTA: "12000",
      TDS: "12000",
      Adj: "00",
      Reimb: "12000",
      Imprest: "12000",
      Advance: "00",
      Netay: "12000",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      GrossCTC: "12000",
      BasicSalary: "12000",
      DA: "12000",
      HRA: "12000",
      SA: "12000",
      LTA: "12000",
      TDS: "12000",
      Adj: "00",
      Reimb: "12000",
      Imprest: "12000",
      Advance: "00",
      Netay: "12000",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      GrossCTC: "12000",
      BasicSalary: "12000",
      DA: "12000",
      HRA: "12000",
      SA: "12000",
      LTA: "12000",
      TDS: "12000",
      Adj: "00",
      Reimb: "12000",
      Imprest: "12000",
      Advance: "00",
      Netay: "12000",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      GrossCTC: "12000",
      BasicSalary: "12000",
      DA: "12000",
      HRA: "12000",
      SA: "12000",
      LTA: "12000",
      TDS: "12000",
      Adj: "00",
      Reimb: "12000",
      Imprest: "12000",
      Advance: "00",
      Netay: "12000",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      GrossCTC: "12000",
      BasicSalary: "12000",
      DA: "12000",
      HRA: "12000",
      SA: "12000",
      LTA: "12000",
      TDS: "12000",
      Adj: "00",
      Reimb: "12000",
      Imprest: "12000",
      Advance: "00",
      Netay: "12000",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      GrossCTC: "12000",
      BasicSalary: "12000",
      DA: "12000",
      HRA: "12000",
      SA: "12000",
      LTA: "12000",
      TDS: "12000",
      Adj: "00",
      Reimb: "12000",
      Imprest: "12000",
      Advance: "00",
      Netay: "12000",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      GrossCTC: "12000",
      BasicSalary: "12000",
      DA: "12000",
      HRA: "12000",
      SA: "12000",
      LTA: "12000",
      TDS: "12000",
      Adj: "00",
      Reimb: "12000",
      Imprest: "12000",
      Advance: "00",
      Netay: "12000",
    },
  ];
  const SalaryRegisterListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.EID}</td>
          <td>{props.Name}</td>
          <td>{props.GrossCTC}</td>
          <td>{props.BasicSalary}</td>
          <td>{props.DA}</td>
          <td>{props.HRA}</td>
          <td>{props.SA}</td>
          <td>{props.LTA}</td>
          <td>{props.TDS}</td>
          <td>{props.Adj}</td>
          <td>{props.Reimb}</td>
          <td>{props.Imprest}</td>
          <td>{props.Advance}</td>
          <td>{props.Netay}</td>
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
                    <h3>Upcoming Contractor Payments</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="row g-3">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                <div className="dashboard_top_week_Select">
                  <label className="all_page_my_label">Type</label>
                  <Select options={options} placeholder="All" />
                </div>
              </div>

              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                <div className="dashboard_top_week_Select">
                  <label className="all_page_my_label">Departments</label>
                  <Select options={options} placeholder="All" />
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                <div className="dashboard_top_week_Select">
                  <label className="all_page_my_label">Status</label>
                  <Select options={options} placeholder="All" />
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
                  <th scope="col">Gross CTC</th>
                  <th scope="col">Basic Salary</th>
                  <th scope="col">DA</th>
                  <th scope="col">HRA</th>
                  <th scope="col">SA</th>
                  <th scope="col">LTA</th>
                  <th scope="col">TDS</th>
                  <th scope="col">Adj</th>
                  <th scope="col">Reimb</th>
                  <th scope="col">Imprest</th>
                  <th scope="col">Advance</th>
                  <th scope="col">Net Pay</th>
                </tr>
              </thead>
              <tbody>
                {SalaryRegisterListData.map((val, i) => {
                  return (
                    <SalaryRegisterListApp
                      key={i}
                      EID={val.EID}
                      Name={val.Name}
                      GrossCTC={val.GrossCTC}
                      BasicSalary={val.BasicSalary}
                      DA={val.DA}
                      HRA={val.HRA}
                      SA={val.SA}
                      Adj={val.Adj}
                      Reimb={val.Reimb}
                      Imprest={val.Imprest}
                      Advance={val.Advance}
                      Netay={val.Netay}
                      LTA={val.LTA}
                      TDS={val.TDS}
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
