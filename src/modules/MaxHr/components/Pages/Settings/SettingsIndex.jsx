import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export const SettingsIndex = () => {
  const SettingsIndexApp = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="Reports_card_main_div">
            <h3>{props.toptile}</h3>
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              {props.arr.cat1.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 "
                  >
                    <NavLink to={val.link}>
                      <div className="Reports_card_inner_div">
                        <h4>
                          {val.inertitle}
                          <span>
                            <BsArrowRight />
                          </span>
                        </h4>
                        <p>{val.text}</p>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };
  const SettingsIndexData = [
    {
      toptile: "Company Setup",
      cat1: [
        {
          link: "/hr/company_setup",
          inertitle: "Company Setup",
          text: "Add your company details here",
        },
        {
          link: "/hr/dashboard_setup",
          inertitle: "Dashboard Setup",
          text: "Customize your dashboard",
        },
      ],
    },
    {
      toptile: "Payroll Setup",
      cat1: [
        {
          link: "/hr/payroll_setup",
          inertitle: "Payroll Setup",
          text: "Payroll Date, Auto Pilot, Advance Salary",
        },
        {
          link: "/hr/default_salary_stracture",
          inertitle: "Default Salary Stracture",
          text: "Create / Change Salary Stracture",
        },
        {
          link: "/hr/employee_notification",
          inertitle: "Employee Notification",
          text: "Notify Your Employee",
        },
      ],
    },
    {
      toptile: "Holidays, Leave & Attendence",
      cat1: [
        {
          link: "/hr/holidays_setting",
          inertitle: "Holidays",
          text: "Choose / Create Holidays",
        },
        {
          link: "/hr/holidays_setting",
          inertitle: "Leave",
          text: "Choose / Create Leave Types",
        },
        {
          link: "/hr/holidays_setting",
          inertitle: "Attendence",
          text: "Define timings for attendence",
        },
      ],
    },
  ];
  return (
    <>
      <TopPageTitle Name="Settings" />
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        {SettingsIndexData.map((val, i) => {
          return <SettingsIndexApp key={i} toptile={val.toptile} arr={val} />;
        })}
      </div>
      <SettingsBottomBtn />
    </>
  );
};
const SettingsBottomBtn = () => {
  const SettingsBottomBtnApp = (props) => {
    return (
      <>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="Reports_card_main_div">
            <h3>{props.toptile}</h3>
            <NavLink to={props.link}>
              <div className="Reports_card_inner_div">
                <h4>
                  {props.inertitle}
                  <span>
                    <BsArrowRight />
                  </span>
                </h4>
                <p>{props.text}</p>
              </div>
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  const SettingsBottomBtnData = [
    {
      toptile: "Payment Setup",
      link: "/hr/payment_setup",
      inertitle: "Payment Setup",
      text: "Salary Transfer, Tax Payment, PF, ESI",
    },
    {
      toptile: "TDS Filing Setup",
      link: "/hr/automate_filings",
      inertitle: "Automate filings",
      text: "24Q, 26Q Filing",
    },
    {
      toptile: "Employee Data",
      link: "/hr/employee_data",
      inertitle: "Employee Data",
      text: "ID, Directory, Additional Info Request",
    },
    {
      toptile: "Reimbursement Setup",
      link: "/hr/reimbursement_setup",
      inertitle: "Reimbursement Setup",
      text: "Define Reimbursement Criteria",
    },
    {
      toptile: "Tax deducation Setup",
      link: "/hr/tax_deduction_setup",
      inertitle: "Tax deducation Setup",
      text: "Update Require Admin Approvals?",
    },
    {
      toptile: "Document Setup",
      link: "/hr/document_setup",
      inertitle: "Document Setup",
      text: "Add Document, you need from Employee",
    },
    {
      toptile: "Contractor Setup",
      link: "/hr/contractor_setup",
      inertitle: "Contractor Setup",
      text: "Define Contractor",
    },
    {
      toptile: "User Role",
      link: "/hr/user_role",
      inertitle: "User Role",
      text: "Define user role and its permission",
    },
    {
      toptile: "Appraisal",
      link: "/hr/appraisal_setting",
      inertitle: "Appraisal",
      text: "Define everything about appraisal",
    },
  ];
  return (
    <>
      <div className="row mt-0 g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        {SettingsBottomBtnData.map((val, i) => {
          return (
            <SettingsBottomBtnApp
              key={i}
              toptile={val.toptile}
              link={val.link}
              inertitle={val.inertitle}
              text={val.text}
            />
          );
        })}
      </div>
    </>
  );
};
