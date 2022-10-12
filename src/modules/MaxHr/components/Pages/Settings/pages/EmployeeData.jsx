import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { AboutProfileInput } from "../../Profile/components/AboutProfile";
export const EmployeeData = () => {
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
                  <div className="col-12">
                    <AboutProfileInput
                      label="Employee ID Prefix (otional)"
                      type="text"
                      className="form-control"
                      placeholder="Placeholder text"
                    />
                  </div>
                  <div className="col-12">
                    <AboutProfileInput
                      label="Employee ID Length (otional)"
                      type="text"
                      className="form-control"
                      placeholder="0"
                    />
                    <small className="all_page_my_label">
                      Desired length of the employee ID, including prefix. Enter
                      ‘0’ for minimal lenght
                    </small>
                  </div>
                  <div className="col-12">
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="1"
                          defaultChecked="false"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="1"
                        >
                          Show Employee ID in payslip
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="2"
                          defaultChecked="false"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="2"
                        >
                          Show company address in payslip
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="3"
                          defaultChecked="false"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="3"
                        >
                          Enable employee directory for all employees
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Optiona employee data
                    </label>
                    <div className="setting_text3">
                      If you would like to gather additional data from your
                      employees, please select from the options below.
                    </div>
                    <OptionaEmployeeData />
                  </div>
                  <div className="col-12">
                    <div className="setting_text3">
                      You can also enter custom fields.
                    </div>
                    <AboutProfileInput
                      type="text"
                      className="form-control"
                      placeholder="Houser Number"
                    />
                    <AboutProfileInput
                      type="text"
                      className="form-control"
                      placeholder="Custome Field 2"
                    />{" "}
                    <AboutProfileInput
                      type="text"
                      className="form-control"
                      placeholder="Custome Field 3"
                    />{" "}
                    <AboutProfileInput
                      type="text"
                      className="form-control"
                      placeholder="Custome Field 4"
                    />{" "}
                    <AboutProfileInput
                      type="text"
                      className="form-control"
                      placeholder="Custome Field 5"
                    />
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
const OptionaEmployeeData = () => {
  const OptionaEmployeeDataApp = (props) => {
    return (
      <>
        <div className="automation_checkbox_div">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id={props.id} />
            <label
              className="form-check-label automation_checkbox_label"
              htmlFor={props.id}
            >
              {props.title}
            </label>
          </div>
        </div>
      </>
    );
  };
  const OptionaEmployee = [
    {
      title: "Personal Phone Number",
      id: "5",
    },
    {
      title: "Personal Email Address",
      id: "6",
    },
    {
      title: "Father’s Name",
      id: "7",
    },
    {
      title: "Father’s DOB",
      id: "8",
    },
  ];
  return (
    <>
      <div className=" mt-3">
        {OptionaEmployee.map((val, i) => {
          return (
            <OptionaEmployeeDataApp key={i} id={val.id} title={val.title} />
          );
        })}
      </div>
    </>
  );
};
