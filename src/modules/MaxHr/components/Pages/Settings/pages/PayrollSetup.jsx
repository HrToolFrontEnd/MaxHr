import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import Select from "react-select";

export const PayrollSetup = () => {
  const options = [
    { value: " 01", label: " 01" },
    { value: " 02", label: " 02" },
    { value: "03", label: "03" },
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
                  <div className="col-12">
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="1"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="1"
                        >
                          Payroll Enabled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="setting_text">
                      Choose when you would like to pay your employees. Select a
                      date after the 15th to pay your employees for the same
                      month eg. if you pick 31, then your employees will get
                      paid for January on 31st January. Or, if you pick 1, then
                      your employees will get paid for January on 1st February.
                    </div>
                  </div>
                  <div className="col-12 dep_all">
                    <div className="dashboard_top_week_Select">
                      <label className="all_page_my_label">Payroll Date</label>
                      <Select options={options} placeholder="01" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="2"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="2"
                        >
                          Automatically run payroll on selected date
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="setting_text">
                      Employees can request salary advances through XPayroll. If
                      approved, the advance amount will be paid immediately and
                      automatically recovered from future payments to the
                      employees.
                    </div>
                  </div>
                  <div className="col-12">
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
                          Let employees request salary advances
                        </label>
                      </div>
                    </div>
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
