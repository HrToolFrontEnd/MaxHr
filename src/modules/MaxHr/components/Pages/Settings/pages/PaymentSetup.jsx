import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
export const PaymentSetup = () => {
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
                    <label className="all_page_my_label">Payments</label>
                    <div className=" setting_text">
                      Select which payments and filings you would like Maxlence
                      HR to handle for you. For the most automated and
                      effortless experience, you should let us handle
                      everything.
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
                          Salary transfers to employees’ bank accounts
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="3"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="3"
                        >
                          Payments to contractors, vendors, consultants etc.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Preferred method for bank transfer
                    </label>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="4"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="4"
                        >
                          Prefer NEFT transfer over IMPS / RTGS.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Compliance Payments
                    </label>
                    <div className=" setting_text">
                      Please note that disabling the payment of TDS/PF/ESI/PT
                      does not disable the deduction of the same in your
                      employees' payslips.
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="5"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="5"
                        >
                          Salary TDS payments (if applicable)
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="6"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="6"
                        >
                          Non-salary TDS payments (for contractors)
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="7"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="7"
                        >
                          PF payments and filing (if applicable)
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="8"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="8"
                        >
                          ESI payments and filing (if applicable)
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="8"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="8"
                        >
                          Professional tax payments and filing (if applicable)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="all_page_my_label">
                      Compliance Setup
                    </label>
                    <div className=" setting_text">
                      Please choose your PF and ESI settings.
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="10"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="10"
                        >
                          Include employer contribution to ESI in employee CTC
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="11"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="11"
                        >
                          Include employer contribution to PF in employee CTC
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="12"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="12"
                        >
                          Include PF edli + admin charges in employee CTC
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="13"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="13"
                        >
                          Use only basic salary for calculating PF
                        </label>
                      </div>
                    </div>
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="14"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="14"
                        >
                          Use PF limit of $500 while calculating contributions
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
