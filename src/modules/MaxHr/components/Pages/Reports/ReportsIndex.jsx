import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export const ReportsIndex = () => {
  const ReportsIndexApp = (props) => {
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
  const ReportsIndexData = [
    {
      toptile: "Salary Register",
      link: "/hr/salary_register",
      inertitle: "Salary Register",
      text: "View details of past and Upcoming payrolls",
    },
    {
      toptile: "Attendence",
      link: "/hr/attendence_inner",
      inertitle: "Attendence",
      text: "View your Employees’ Attendence",
    },
    {
      toptile: "Tax Deductions",
      link: "/hr/tax_deductions",
      inertitle: "Tax Deductions",
      text: "View all the tax deductions decleared",
    },
    {
      toptile: "Missing Information",
      link: "/hr/missing_information",
      inertitle: "Missing Information",
      text: "Send reminder for missing information",
    },
    {
      toptile: "Audit Report",
      link: "/",
      inertitle: "Audit Report",
      text: "Changes made by your employees’",
    },
    {
      toptile: "Reimbursements",
      link: "/hr/report_reimbursements",
      inertitle: "Reimbursements",
      text: "View pending and approved one’",
    },
    {
      toptile: "Payroll Diary",
      link: "/",
      inertitle: "Payroll Diary",
      text: "View Account transactions",
    },
    {
      toptile: "TDS",
      link: "/",
      inertitle: "TDS",
      text: "View TDS and other Filings",
    },
    {
      toptile: "Contractor Payments",
      link: "/hr/upcoming_contractor_payments",
      inertitle: "Contractor Payments",
      text: "View upcoming contractor payments",
    },
    {
      toptile: "HR Register",
      link: "/hr/hr_register",
      inertitle: "Personal Information",
      text: "View all documents uploaded by employee",
    },
  ];
  return (
    <>
      <TopPageTitle Name="Reports" />
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        {ReportsIndexData.map((val, i) => {
          return (
            <ReportsIndexApp
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
