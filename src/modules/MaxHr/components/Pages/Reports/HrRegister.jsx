import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
export const HrRegister = () => {
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
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      Email: "sunny@maxlence.com.au",
      Phone: "+91 8349933768",
      Gender: "Male",
      Pan: "CAEWPK2345G",
      DOB: "01-05-2021",
      Title: "UX Designer",
      Department: "Design",
      Manager: "Shived Bansaal",
      Addedon: "01-02-2021",
      DoJ: "01-02-2021",
      Dol: "NA",
      Stop: "NA",
      Bank: "4241234809872",
      IFSC: "HDFC 12334556",
    },
  ];
  const SalaryRegisterListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.EID}</td>
          <td>{props.Name}</td>
          <td>{props.Email}</td>
          <td>{props.Phone}</td>
          <td>{props.Gender}</td>
          <td>{props.Pan}</td>
          <td>{props.DOB}</td>
          <td>{props.Title}</td>
          <td>{props.Department}</td>
          <td>{props.Manager}</td>
          <td>{props.Addedon}</td>
          <td>{props.DoJ}</td>
          <td>{props.Dol}</td>
          <td>{props.Stop}</td>
          <td>{props.Bank}</td>
          <td>{props.IFSC}</td>
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
                    <h3>hR register</h3>
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
            <table className="table table-hover HrRegister_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">Emp Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Pan</th>
                  <th scope="col">DOB (dd-mm-yyyy)</th>
                  <th scope="col">Title</th>
                  <th scope="col">Department</th>
                  <th scope="col">Manager</th>
                  <th scope="col">Added on (dd-mm-yyyy)</th>
                  <th scope="col">DoJ (dd-mm-yyyy)</th>
                  <th scope="col">Dol (dd-mm-yyyy)</th>
                  <th scope="col">Stop Salary</th>
                  <th scope="col">Bank a/c Number</th>
                  <th scope="col">Bank IFSC</th>
                </tr>
              </thead>
              <tbody>
                {SalaryRegisterListData.map((val, i) => {
                  return (
                    <SalaryRegisterListApp
                      key={i}
                      EID={val.EID}
                      Name={val.Name}
                      Email={val.Email}
                      Phone={val.Phone}
                      Gender={val.Gender}
                      Pan={val.Pan}
                      DOB={val.DOB}
                      Title={val.Title}
                      Department={val.Department}
                      Manager={val.Manager}
                      Addedon={val.Addedon}
                      DoJ={val.DoJ}
                      Dol={val.Dol}
                      Stop={val.Stop}
                      Bank={val.Bank}
                      IFSC={val.IFSC}
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
