import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Input from "../../../../common/components/input/Input";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const TeamApperaisal = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
            <TopPageTitle
              TitleLink={-1}
              TilelIcon={<BsArrowLeft />}
              Name="Team’s Appraisal"
            />
          </div>
        </div>
        <div className="profile_iner_cont">
          <TeamApperaisalList />
        </div>
      </div>
    </>
  );
};
const TeamApperaisalList = () => {
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  const UserDetailsListData = [
    {
      serialnumber: "01",
      Name: "sunny charkhwal",
      EmployeesId: "123456789",
      designation: "react js developer",
      modified: "28 Apr 2022",
    },
  ];
  const UserDetailsListCard = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.serialnumber}</td>
          <td>{props.EmployeesId}</td>
          <td>{props.Name}</td>
          <td>{props.designation}</td>
          <td>{props.modified}</td>
          <td>
            <NavLink to="/hr/profile">veiw</NavLink>
          </td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div>
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
                <Select options={options} placeholder="Department" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Designation" />
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
        <table className="table table-hover text-capitalize mt-4 table_top_div TeamApperaisalList_list">
          <thead>
            <tr className="UserDetails_list_th ApprovalDetailsPage_thead_tr">
              <th scope="col">S. no</th>
              <th scope="col">Employees Id</th>
              <th scope="col">Employees name</th>
              <th scope="col">designation</th>
              <th scope="col">Appraisal date</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {UserDetailsListData.map((val, i) => {
              return (
                <UserDetailsListCard
                  key={i}
                  serialnumber={val.serialnumber}
                  EmployeesId={val.EmployeesId}
                  Name={val.Name}
                  designation={val.designation}
                  modified={val.modified}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
