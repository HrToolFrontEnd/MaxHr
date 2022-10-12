import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Select from "react-select";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Img from "../../../../common/components/img/Img";
import SalarySlipTemplate from "../../../../../pics/SalarySlip.png";
export const PayrollIndex = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="profile_tab_div">
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <div className="Choose_Payslip_top_title">
              <TopPageTitle Name="Salary" />
            </div>
          </div>
          <div className="col-6">
            <div className="Choose_Payslip_btn_div">
              <button onClick={() => setModalShow(true)}>Choose Payslip</button>
              <PayslipModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
        <SalaryList />
      </div>
    </>
  );
};
const SalaryList = () => {
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  const Month = [{ value: " December", label: " December" }];
  const Year = [
    { value: " 2021", label: " 2021" },
    { value: "2022", label: "2022" },
  ];
  const LeaveData = [
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "yes",
      statusColor: "green",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "no",
      statusColor: "red",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "yes",
      statusColor: "green",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "no",
      statusColor: "red",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "yes",
      statusColor: "green",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "no",
      statusColor: "red",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "yes",
      statusColor: "green",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "no",
      statusColor: "red",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "yes",
      statusColor: "green",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      Title: "NA",
      PreviousDues: "NA",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      Houserent: "NA",
      SpecialAllowance: "NA",
      Conveyance: "NA",
      AddnlSpecial: "NA",
      TelephoneAllowance: "NA",
      FixedSalary: "NA",
      OtherReimbursement: "NA",
      Incentives: "NA",
      PreviousPending: "NA",
      ProvidentFund: "NA",
      ProfessionalTax: "NA",
      IncomeTax: "NA",
      GrossEarning: "NA",
      GrossDeduction: "NA",
      NetPay: "NA",
      status: "no",
      statusColor: "red",
    },
  ];
  const LeaveApp = (props) => {
    const [userApprove, setUserApprove] = useState(true);
    const changApprove = () => {
      setUserApprove(!userApprove);
    };
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>
            <input
              className="form-check-input ApprovalDetailsPage_input"
              type="checkbox"
            />
            {props.EID}
          </td>
          <td>{props.EmployeeName}</td>
          <td>{props.JoiningDate}</td>
          <td>{props.Role}</td>
          <td>{props.Title}</td>
          <td>{props.PreviousDues}</td>
          <td>{props.Reimbursement}</td>
          <td>{props.EmployeeMonth}</td>
          <td>{props.Basic}</td>
          <td>{props.Houserent}</td>
          <td>{props.SpecialAllowance}</td>
          <td>{props.Conveyance}</td>
          <td>{props.AddnlSpecial}</td>
          <td>{props.TelephoneAllowance}</td>
          <td>{props.FixedSalary}</td>
          <td>{props.OtherReimbursement}</td>
          <td>{props.Incentives}</td>
          <td>{props.PreviousPending}</td>
          <td>{props.ProvidentFund}</td>
          <td>{props.ProfessionalTax}</td>
          <td>{props.IncomeTax}</td>
          <td>{props.GrossEarning}</td>
          <td>{props.GrossDeduction}</td>
          <td>{props.NetPay}</td>
          <td className=" position-relative">
            <div className="add_remarks_title3">
              <label style={{ color: props.statusColor }}>{props.status}</label>
              <span onClick={changApprove}>
                <FiChevronDown />
              </span>
            </div>
            <div className={`${userApprove ? "approve2" : "reject2"}`}>
              <div
                className="reimbursement_card_options"
                onClick={changApprove}
              >
                <p className="">yes</p>
                <p>no</p>
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className=" mt-4">
        <div className="custom_container_iner">
          <div>
            <div className="row g-3">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                <div className="dashboard_top_week_Select">
                  <label className="all_page_my_label">Select Department</label>
                  <Select options={options} placeholder="Departments" />
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                <div className="dashboard_top_week_Select">
                  <label className="all_page_my_label">Select Month</label>
                  <Select options={Month} placeholder="Month" />
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
                <div className="dashboard_top_week_Select">
                  <label className="all_page_my_label">Select Year</label>
                  <Select options={Year} placeholder="Year" />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
                <div className="ApprovalDetailsPage_date_picker">
                  <label className="all_page_my_label">Seacrh Employee</label>
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
            <table className="table table-hover ApprovalDetailsPage_main_div_payroll text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">E. ID</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Joining Date</th>
                  <th scope="col">Role</th>
                  <th scope="col">Title</th>
                  <th scope="col">Previous Dues if any</th>
                  <th scope="col">Reimbursement if any</th>
                  <th scope="col">Employee of the month</th>
                  <th scope="col">Basic</th>
                  <th scope="col">House rent Allowance</th>
                  <th scope="col">Special Allowance</th>
                  <th scope="col">Conveyance</th>
                  <th scope="col">Addnl. Special Allowance</th>
                  <th scope="col">Telephone Allowance</th>
                  <th scope="col">Fixed Salary</th>
                  <th scope="col">Mobile & Other Reimbursement</th>
                  <th scope="col">Incentives</th>
                  <th scope="col">Other Previous Pending</th>
                  <th scope="col">Provident Fund*</th>
                  <th scope="col">Professional Tax*</th>
                  <th scope="col">Income Tax*</th>
                  <th scope="col">Gross Earning*</th>
                  <th scope="col">Gross Deduction*</th>
                  <th scope="col">Net Pay:</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {LeaveData.map((val, i) => {
                  return (
                    <LeaveApp
                      key={i}
                      EID={val.EID}
                      EmployeeName={val.EmployeeName}
                      JoiningDate={val.JoiningDate}
                      Role={val.Role}
                      Title={val.Title}
                      PreviousDues={val.PreviousDues}
                      Reimbursement={val.Reimbursement}
                      EmployeeMonth={val.EmployeeMonth}
                      Basic={val.Basic}
                      Houserent={val.Houserent}
                      SpecialAllowance={val.SpecialAllowance}
                      Conveyance={val.Conveyance}
                      AddnlSpecial={val.AddnlSpecial}
                      TelephoneAllowance={val.TelephoneAllowance}
                      FixedSalary={val.FixedSalary}
                      OtherReimbursement={val.OtherReimbursement}
                      Incentives={val.Incentives}
                      PreviousPending={val.PreviousPending}
                      ProvidentFund={val.ProvidentFund}
                      ProfessionalTax={val.ProfessionalTax}
                      IncomeTax={val.IncomeTax}
                      GrossEarning={val.GrossEarning}
                      GrossDeduction={val.GrossDeduction}
                      NetPay={val.NetPay}
                      status={val.status}
                      statusColor={val.statusColor}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="IssueAssets_btn_bottom_div">
            <button className="IssueAssets_btn">Send to Account</button>
          </div>
        </div>
      </div>
    </>
  );
};
const PayslipModal = (props) => {
  const Data = [
    {
      TemplateTitle: "Template 1",
      TemplateImg: SalarySlipTemplate,
    },
    {
      TemplateTitle: "Template 2",
      TemplateImg: SalarySlipTemplate,
    },
    {
      TemplateTitle: "Template 3",
      TemplateImg: SalarySlipTemplate,
    },
    {
      TemplateTitle: "Template 4",
      TemplateImg: SalarySlipTemplate,
    },
  ];
  const App = (propss) => {
    return (
      <>
        <div className="col-12">
          <div className="Salary_Slip_Template_title">
            <h3>{propss.TemplateTitle}</h3>
          </div>
          <div className="Salary_Slip_Template_img_div">
            <Img
              className="Salary_Slip_Template_img"
              backgroundImage={propss.TemplateImg}
            />
            <div className="Salary_Slip_Template_img_btn">
              <button
                className="UploadDocumentModal_body_btn2"
                onClick={props.onHide}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="contractor_management_Modsal_title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Select Salary Slip Template</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="Salary_Slip_Template_main_div">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {Data.map((val, i) => {
              return (
                <App
                  key={i}
                  TemplateTitle={val.TemplateTitle}
                  TemplateImg={val.TemplateImg}
                />
              );
            })}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
