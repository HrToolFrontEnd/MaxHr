import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";

export const EmployeeNotification = () => {
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
                    <div className="ApprovalDetailsPage_date_picker">
                      <label className="all_page_my_label">
                        Employee notifications after payroll execution
                      </label>
                      <div className=" setting_text mt-2">
                        Choose how you would like to inform your employees after
                        their payroll has been executed.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
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
                          SMS
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 m-0">
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
                          Email (will include their payslip)
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
