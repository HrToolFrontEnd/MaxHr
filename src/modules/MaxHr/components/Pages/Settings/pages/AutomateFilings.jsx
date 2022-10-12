import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import Select from "react-select";
export const AutomateFilings = () => {
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
                  <div className="col-12">
                    <label className="all_page_my_label">
                      TDS Filing Setup
                    </label>
                    <div className=" setting_text">
                      Maxlence HR can automatically file your TDS returns at the
                      end of every quarter. If your payroll is being run by us
                      for an entire quarter, you should definitely let us file
                      your 24Q returns. If there have been salary TDS deductions
                      in this quarter from outside of Maxlence HR, we recommend
                      that you file your returns manually, and let us file from
                      the next quarter. For 26Q, have Maxlence HR file your
                      returns if you are making all your non-salary payments (to
                      contractors, vendors etc.) through us. Maxlence HR will
                      not be able to generate Form 16s for your employees unless
                      the TDS returns are being filed by us.
                    </div>
                  </div>
                  <div className="col-12">
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
                          Automatically file 24Q
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 dep_all">
                    <div className="dashboard_top_week_Select">
                      <label className="all_page_my_label">
                        Start 24Q filing form
                      </label>
                      <Select options={options} placeholder="Immediately" />
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
                          Automatically file 26Q
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 dep_all">
                    <div className="dashboard_top_week_Select">
                      <label className="all_page_my_label">
                        Start 26Q filing form
                      </label>
                      <Select options={options} placeholder="Immediately" />
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
