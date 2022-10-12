import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import Select from "react-select";
export const HolidaysSetting = () => {
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
                      <Select options={options} placeholder="Yes" />
                    </div>
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
                          Enable attendence for contractors
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">Weekend</label>
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
                          Enable attendence for contractors
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
                          Sunday
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="4"
                          defaultChecked="false"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="4"
                        >
                          1st Saturday
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="5"
                          defaultChecked="false"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="5"
                        >
                          2st Saturday
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="6"
                          defaultChecked="false"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="6"
                        >
                          3rd Saturday
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="7"
                          defaultChecked="false"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="7"
                        >
                          4th Saturday
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="8"
                          defaultChecked="false"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="8"
                        >
                          5th Saturday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">Types of Leaves</label>
                    <DefaultSalaryStractureList />
                  </div>
                  <div className="col-12">
                    <div>
                      <label className="all_page_my_label">
                        Negative Leaves
                      </label>
                      <div className="automation_checkbox_div">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="9"
                            defaultChecked="false"
                          />
                          <label
                            className="form-check-label automation_checkbox_label"
                            htmlFor="9"
                          >
                            Allow employees to have negative leave balance
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="all_page_my_label">
                        Attendance on Payslip
                      </label>
                      <div className="automation_checkbox_div">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="10"
                            defaultChecked="false"
                          />
                          <label
                            className="form-check-label automation_checkbox_label"
                            htmlFor="10"
                          >
                            Show Attendence on Payslip
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="all_page_my_label">
                        Leaves Calendar
                      </label>
                      <div className="automation_checkbox_div">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="11"
                            defaultChecked="false"
                          />
                          <label
                            className="form-check-label automation_checkbox_label"
                            htmlFor="11"
                          >
                            Use Financial year instead of Calendar Year
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="all_page_my_label">Shifts</label>
                      <div className="automation_checkbox_div">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="12"
                            defaultChecked="false"
                          />
                          <label
                            className="form-check-label automation_checkbox_label"
                            htmlFor="12"
                          >
                            Track Shift Timings
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Default Shif Timing (in 24-hour format, eg. 6 pm is 18:00)
                    </label>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                        <div className="add_remarks_input_div default_salary_stracture_input">
                          <input
                            type="text"
                            className="form-control w-100 px-3 "
                            placeholder="Start (hh:mm)"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                        <div className="add_remarks_input_div default_salary_stracture_input">
                          <input
                            type="text"
                            className="form-control w-100 px-3"
                            placeholder="End (hh:mm)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Grace Period for Check In
                    </label>
                    <div className="add_remarks_input_div default_salary_stracture_input">
                      <input
                        type="text"
                        className="form-control w-100 px-3 "
                        placeholder="(hh:mm)"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Minimum Shift Duration (Full Day)
                    </label>
                    <div className="add_remarks_input_div default_salary_stracture_input">
                      <input
                        type="text"
                        className="form-control w-100 px-3 "
                        placeholder="(hh:mm)"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Minimum Shift Duration (Half Day)
                    </label>
                    <div className="add_remarks_input_div default_salary_stracture_input">
                      <input
                        type="text"
                        className="form-control w-100 px-3 "
                        placeholder="(hh:mm)"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Organization Holidays
                    </label>
                    <OrganizationHolidaysList />
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Add Custom Holidays
                    </label>
                    <div className="setting_text">
                      After adding custom holidays, Please come back to this
                      page to select it for your locations.
                    </div>
                  </div>
                  <div className="col-12">
                    <DateDescriptionList />
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
const DefaultSalaryStractureList = () => {
  return (
    <>
      <div>
        <div className="ApprovalDetailsPage_top_div pt-0">
          <table className="table table-hover default_salary_stracture_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col">Leave Type</th>
                <th scope="col">Default Amount</th>
                <th scope="col">Monthly Increment</th>
                <th scope="col">Max Amount</th>
                <th scope="col">Carry Forward</th>
              </tr>
            </thead>
            <tbody className="default_salary_tbody">
              <tr className="ApprovalDetailsPage_thead_td">
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="text"
                      className="form-control w-100 "
                      placeholder="eg. Casual Leave"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="number"
                      className="form-control w-100 "
                      placeholder="00"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="number"
                      className="form-control w-100 "
                      placeholder="00"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="number"
                      className="form-control w-100 "
                      placeholder="00"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="number"
                      className="form-control w-100 "
                      placeholder="00"
                    />
                  </div>
                </td>
              </tr>
              <tr className="ApprovalDetailsPage_thead_td">
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="text"
                      className="form-control w-100 "
                      placeholder="eg. Casual Leave"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="number"
                      className="form-control w-100 "
                      placeholder="00"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="number"
                      className="form-control w-100 "
                      placeholder="00"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="number"
                      className="form-control w-100 "
                      placeholder="00"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="number"
                      className="form-control w-100 "
                      placeholder="00"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const OrganizationHolidaysList = () => {
  const OrganizationHolidaysListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>
            <input className="form-check-input" type="checkbox" />
          </td>
          <td>{props.date}</td>
          <td>{props.day}</td>
          <td>{props.Description}</td>
        </tr>
      </>
    );
  };
  const OrganizationHolidaysListData = [
    {
      date: "01/01/2021",
      day: "Friday",
      Description: "New Year",
    },
    {
      date: "01/01/2021",
      day: "Friday",
      Description: "New Year",
    },
    {
      date: "01/01/2021",
      day: "Friday",
      Description: "New Year",
    },
    {
      date: "01/01/2021",
      day: "Friday",
      Description: "New Year",
    },
  ];
  return (
    <>
      <div>
        <div className="ApprovalDetailsPage_top_div pt-0">
          <table className="table table-hover HolidaysSetting_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col">Checkbox</th>
                <th scope="col">Date</th>
                <th scope="col">Day</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody className="default_salary_tbody">
              {OrganizationHolidaysListData.map((val, i) => {
                return (
                  <OrganizationHolidaysListApp
                    key={i}
                    date={val.date}
                    day={val.day}
                    Description={val.Description}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const DateDescriptionList = () => {
  return (
    <>
      <div>
        <div className="ApprovalDetailsPage_top_div pt-0">
          <table className="table table-hover DateDescriptionList_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col">Date</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody className="default_salary_tbody">
              <tr className="ApprovalDetailsPage_thead_td">
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="date"
                      className="form-control w-100 "
                      placeholder="DD:MM:YY"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="text"
                      className="form-control w-100 "
                      placeholder="Holiday Name"
                    />
                  </div>
                </td>
              </tr>
              <tr className="ApprovalDetailsPage_thead_td">
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="date"
                      className="form-control w-100 "
                      placeholder="DD:MM:YY"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="text"
                      className="form-control w-100 "
                      placeholder="Holiday Name"
                    />
                  </div>
                </td>
              </tr>
              <tr className="ApprovalDetailsPage_thead_td">
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="date"
                      className="form-control w-100 "
                      placeholder="DD:MM:YY"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="text"
                      className="form-control w-100 "
                      placeholder="Holiday Name"
                    />
                  </div>
                </td>
              </tr>
              <tr className="ApprovalDetailsPage_thead_td">
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="date"
                      className="form-control w-100 "
                      placeholder="DD:MM:YY"
                    />
                  </div>
                </td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="text"
                      className="form-control w-100 "
                      placeholder="Holiday Name"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
