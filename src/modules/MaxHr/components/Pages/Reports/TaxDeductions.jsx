import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
export const TaxDeductions = () => {
  return (
    <>
      <div className="custom_container">
        <TaxDeductionsList />
      </div>
    </>
  );
};

const TaxDeductionsList = () => {
  const TaxDeductionsData = [
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
    {
      EID: "MX12 HR",
      Name: "sunny charkhwal",
      NewRegime: "0",
      Rent: "0",
      a80C: "0",
      HRA: "0",
      a80CCD: "0",
      a80D: "0",
      a80DD: "0",
      a80E: "0",
      a80G: "0",
      Section24: "0",
      a80EE: "0",
      LTA: "0",
      From12BB: "NA",
    },
  ];
  const TaxDeductionsApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.EID}</td>
          <td>{props.Name}</td>
          <td>{props.NewRegime}</td>
          <td>{props.Rent}</td>
          <td>{props.a80C}</td>
          <td>{props.HRA}</td>
          <td>{props.a80CCD}</td>
          <td>{props.a80D}</td>
          <td>{props.a80DD}</td>
          <td>{props.a80E}</td>
          <td>{props.a80G}</td>
          <td>{props.Section24}</td>
          <td>{props.a80EE}</td>
          <td>{props.LTA}</td>
          <td>{props.From12BB}</td>
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
                    <h3>Tax Deductions</h3>
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
                  <th scope="col">New Regime?</th>
                  <th scope="col">Rent</th>
                  <th scope="col">80C</th>
                  <th scope="col">HRA</th>
                  <th scope="col">80CCD</th>
                  <th scope="col">80D</th>
                  <th scope="col">80DD</th>
                  <th scope="col">80E</th>
                  <th scope="col">80G</th>
                  <th scope="col">Section 24</th>
                  <th scope="col">80 EE</th>
                  <th scope="col">LTA</th>
                  <th scope="col">From 12 BB</th>
                </tr>
              </thead>
              <tbody>
                {TaxDeductionsData.map((val, i) => {
                  return (
                    <TaxDeductionsApp
                      key={i}
                      EID={val.EID}
                      Name={val.Name}
                      NewRegime={val.NewRegime}
                      Rent={val.Rent}
                      a80C={val.a80C}
                      HRA={val.HRA}
                      a80CCD={val.a80CCD}
                      a80D={val.a80D}
                      a80DD={val.a80DD}
                      a80E={val.a80E}
                      a80G={val.a80G}
                      Section24={val.Section24}
                      a80EE={val.a80EE}
                      LTA={val.LTA}
                      From12BB={val.From12BB}
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
