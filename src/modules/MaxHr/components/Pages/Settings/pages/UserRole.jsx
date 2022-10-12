import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import Select from "react-select";
export const UserRole = () => {
  const options = [
    { value: " Yes", label: " Yes" },
    { value: " No", label: " No" },
  ];
  return (
    <>
      <div className="custom_container">
        <TopPageTitle
          TitleLink={-1}
          TilelIcon={<BsArrowLeft />}
          Name="Settings"
        />
        <div className="dashboard_setup_top_main_div">
          <div className="dashboard_setup_top_main_div_inner">
            <div>
              <div>
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-12 dep_all">
                    <div className="dashboard_top_week_Select">
                      <label className="all_page_my_label">
                        Attendence Enabled?
                      </label>
                      <Select options={options} placeholder="Administrator" />
                    </div>
                  </div>
                  <div className="col-12">
                    <UserRoleList />
                  </div>
                  <div className="col-12  mb-4 company_setup_bottom_btn">
                    <div className=" text-capitalize text-center">
                      <button className=" ApprovalDetailsPage_btn">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const UserRoleList = () => {
  const UserRoleListApp = (props) => {
    return (
      <>
        <div className="user_role_top_title_div">
          <h3>{props.toptitle}</h3>
        </div>
        <div className="user_role_main_div">
          <div className="row mt-3">
            {props.arr.cat1.map((val, i) => {
              return (
                <div
                  key={i}
                  className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                >
                  <div className="automation_checkbox_div">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={val.id}
                        defaultChecked="false"
                      />
                      <label
                        className="form-check-label automation_checkbox_label"
                        htmlFor={val.id}
                      >
                        {val.innertitle}
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  const UserRoleListData = [
    {
      toptitle: "Employee related permissions",
      cat1: [
        {
          id: "1",
          innertitle: "Add New employees/Contractors",
        },
        {
          id: "2",
          innertitle: "Approve changes to employee data",
        },
        {
          id: "3",
          innertitle: "View & Edit Profiles",
        },
        {
          id: "4",
          innertitle: "Assign new user role",
        },
        {
          id: "5",
          innertitle: "Dismiss People",
        },
        {
          id: "6",
          innertitle: "Disable Login",
        },
        {
          id: "7",
          innertitle: "Change Salary",
        },
        {
          id: "8",
          innertitle: "Stop / Resume salary",
        },
        {
          id: "9",
          innertitle: "Edit past payroll",
        },
        {
          id: "10",
          innertitle: "View pay slips",
        },
        {
          id: "11",
          innertitle: "Edit Bank Information",
        },
        {
          id: "12",
          innertitle: "Update Tax deductions",
        },
        {
          id: "13",
          innertitle: "Edit Leaves & Attendence",
        },
        {
          id: "14",
          innertitle: "View Contractor’s past payments",
        },
        {
          id: "15",
          innertitle: "Generate Letters for Employee/Contractor",
        },
      ],
    },
    {
      toptitle: "Payroll/Payments related permissions",
      cat1: [
        {
          id: "16",
          innertitle: "View payroll",
        },
        {
          id: "17",
          innertitle: "Pay advance salaries",
        },
        {
          id: "18",
          innertitle: "Edit payroll",
        },
        {
          id: "19",
          innertitle: "Pay one time payments",
        },
        {
          id: "20",
          innertitle: "Finalize payroll",
        },
        {
          id: "21",
          innertitle: "Add one time payments",
        },
        {
          id: "22",
          innertitle: "Pay contractors",
        },
      ],
    },
    {
      toptitle: "Reimbursements",
      cat1: [
        {
          id: "23",
          innertitle: "View reimbursements",
        },
        {
          id: "24",
          innertitle: "Pay reimbursements",
        },
        {
          id: "25",
          innertitle: "Add reimbursements",
        },
        {
          id: "26",
          innertitle: "Approve & reject flexible benefits",
        },
        {
          id: "27",
          innertitle: "Approve & reject reimbursements",
        },
      ],
    },
    {
      toptitle: "Company Settings",
      cat1: [
        {
          id: "28",
          innertitle: "Edit company details",
        },
        {
          id: "29",
          innertitle: "Edit document templates",
        },
      ],
    },
    {
      toptitle: "Attendence Permission",
      cat1: [
        {
          id: "30",
          innertitle: "Attendence admin",
        },
      ],
    },
    {
      toptitle: "Documents Permission",
      cat1: [
        {
          id: "31",
          innertitle: "View documents",
        },
        {
          id: "32",
          innertitle: "Delete documents",
        },
        {
          id: "33",
          innertitle: "Upload Common documents",
        },
      ],
    },
    {
      toptitle: "Reports Permission",
      cat1: [
        {
          id: "34",
          innertitle: "View Reports",
        },
        {
          id: "35",
          innertitle: "Audit",
        },
        {
          id: "36",
          innertitle: "Salary Register",
        },
        {
          id: "37",
          innertitle: "Reimbursements",
        },
        {
          id: "39",
          innertitle: "HR Register",
        },
        {
          id: "40",
          innertitle: "Ledger",
        },
        {
          id: "41",
          innertitle: "Documents",
        },
        {
          id: "42",
          innertitle: "Contractor payments",
        },
        {
          id: "43",
          innertitle: "Missing informations",
        },
        {
          id: "44",
          innertitle: "TDS challans",
        },
        {
          id: "45",
          innertitle: "Tax deductions",
        },
      ],
    },
    {
      toptitle: "Other features",
      cat1: [
        {
          id: "38",
          innertitle: "Create Announcements",
        },
      ],
    },
  ];
  return (
    <>
      {UserRoleListData.map((val, i) => {
        return <UserRoleListApp key={i} toptitle={val.toptitle} arr={val} />;
      })}
    </>
  );
};
