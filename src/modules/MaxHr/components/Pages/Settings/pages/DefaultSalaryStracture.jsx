import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";

export const DefaultSalaryStracture = () => {
  const [salary, setsalary] = useState(true);
  const salaryOpen = () => {
    setsalary(!salary);
  };
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
                    <div className=" setting_text">
                      1.You can customize the default salary structure that
                      Maxlence HR uses for your employees. <br /> 2.Employer
                      contributions to PF and ESI (if applicable) are applied
                      after the salary has been bifurcated into the components
                      in the ratio defined. Hence, the final salary structure
                      can have a slightly different ratio.
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="2"
                          onClick={salaryOpen}
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="2"
                        >
                          Use Maxlence HR's default salary structure
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className={`${salary ? "salaryShow" : "salaryHide"}`}>
                      <div className=" setting_text">
                        1.You can customize the default salary structure that
                        Maxlence HR uses for your employees. <br /> 2.Employer
                        contributions to PF and ESI (if applicable) are applied
                        after the salary has been bifurcated into the components
                        in the ratio defined. Hence, the final salary structure
                        can have a slightly different ratio.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <DefaultSalaryStractureList />
                  </div>
                  <div className="col-12">
                    <div className=" setting_text">
                      1.You can customize the default salary structure that
                      Maxlence HR uses for your employees. <br /> 2.Employer
                      contributions to PF and ESI (if applicable) are applied
                      after the salary has been bifurcated into the components
                      in the ratio defined. Hence, the final salary structure
                      can have a slightly different ratio.
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
                          Consider FBP allowances to be taxable by default
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
const DefaultSalaryStractureList = () => {
  return (
    <>
      <div>
        <div className="ApprovalDetailsPage_top_div pt-0">
          <table className="table table-hover default_salary_stracture_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col">Salary Component</th>
                <th scope="col">%age of CTC or Amount</th>
                <th scope="col">Percentage or Fixed?</th>
                <th scope="col">Taxable?</th>
              </tr>
            </thead>
            <tbody className="default_salary_tbody">
              <tr className="ApprovalDetailsPage_thead_td">
                <td>Basic Salary</td>
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="number"
                      className="form-control w-100 "
                      placeholder="50"
                    />
                  </div>
                </td>
                <td className="default_salary_stracture_input">Percentage</td>

                <td className="default_salary_stracture_input">yes</td>
              </tr>
              <tr className="ApprovalDetailsPage_thead_td">
                <td>
                  <div className="add_remarks_input_div default_salary_stracture_input">
                    <input
                      type="text"
                      className="form-control w-100 "
                      placeholder="Basic Salary"
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
                <td className="default_salary_stracture_input">
                  <select className="form-select">
                    <option>Percentage</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </td>

                <td className="default_salary_stracture_input">
                  <select className="form-select">
                    <option>NA</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
