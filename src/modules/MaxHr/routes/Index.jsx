import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Dashboard from "../page/Dashboard";
import Announcement from "../page/Announcement";
import Profile from "../page/Profile";
import NavContext from "../Context/NavContext";
import Finance from "../page/Finance";
import Attendence from "../page/Attendence";
import Performance from "../page/Performance";
import OrganizationChart from "../page/OrganizationChart";
import Hiring from "../page/Hiring";
import Training from "../page/Training";
import TaskManagement from "../page/TaskManagement";
import Payroll from "../page/Payroll";
import Reports from "../page/Reports";
import Settings from "../page/Settings";
import Messages from "../page/Messages";
import Calendar from "../page/Calendar";
import Reimbursement from "../page/Reimbursement";
import NoticePeriod from "../page/NoticePeriod";
import TimesheetReview from "../page/TimesheetReview";
import Resignation from "../page/Resignation";
import Leave from "../page/Leave";
import Notification from "../page/Notification";
import AnnouncementProfile from "../components/Pages/Profile/components/page/AnnouncementProfile";
import { UserDetails } from "../page/UserDetails";
import { ApplyLeave } from "../components/Pages/attendence/ApplyLeave";
import { PreviousLeaves } from "../components/Pages/attendence/PreviousLeaves";
import { EmployeesAttendance } from "../components/Pages/attendence/EmployeesAttendance";
import { EmployeesPerformance } from "../components/Pages/Performance/EmployeesPerformance";
import { Appraisal } from "../components/Pages/Performance/Appraisal";
import { UserAppraisal } from "../components/Pages/Performance/UserAppraisal";
import { TeamApperaisal } from "../components/Pages/Performance/TeamApperaisal";
import { SalaryRegister } from "../components/Pages/Reports/SalaryRegister";
import { AttendenceInner } from "../components/Pages/Reports/Attendence";
import { TaxDeductions } from "../components/Pages/Reports/TaxDeductions";
import { MissingInformation } from "../components/Pages/Reports/MissingInformation";
import { ReportReimbursements } from "../components/Pages/Reports/ReportReimbursements";
import { UpcomingContractorPayments } from "../components/Pages/Reports/UpcomingContractorPayments";
import { HrRegister } from "../components/Pages/Reports/HrRegister";
import { CompanySetup } from "../components/Pages/Settings/pages/CompanySetup";
import { DashboardSetup } from "../components/Pages/Settings/pages/DashboardSetup";
import { PayrollSetup } from "../components/Pages/Settings/pages/PayrollSetup";
import { DefaultSalaryStracture } from "../components/Pages/Settings/pages/DefaultSalaryStracture";
import { EmployeeNotification } from "../components/Pages/Settings/pages/EmployeeNotification";
import { HolidaysSetting } from "../components/Pages/Settings/pages/HolidaysSetting";
import { PaymentSetup } from "../components/Pages/Settings/pages/PaymentSetup";
import { AutomateFilings } from "../components/Pages/Settings/pages/AutomateFilings";
import { EmployeeData } from "../components/Pages/Settings/pages/EmployeeData";
import { ReimbursementSetup } from "../components/Pages/Settings/pages/ReimbursementSetup";
import { TaxDeductionSetup } from "../components/Pages/Settings/pages/TaxDeductionSetup";
import { DocumentSetup } from "../components/Pages/Settings/pages/DocumentSetup";
import { ContractorSetup } from "../components/Pages/Settings/pages/ContractorSetup";
import { UserRole } from "../components/Pages/Settings/pages/UserRole";
import { AppraisalSetting } from "../components/Pages/Settings/pages/AppraisalSetting";
import { TotalOpenings } from "../components/Pages/Hiring/page/TotalOpenings";
import { CreateNewJobs } from "../components/Pages/Hiring/page/CreateNewJobs";
import { NewApplication } from "../components/Pages/Hiring/page/NewApplication";
import { Interviews } from "../components/Pages/Hiring/page/Interviews";
import { ShortlistedCandidates } from "../components/Pages/Hiring/page/ShortlistedCandidates";
import { HiredCandidates } from "../components/Pages/Hiring/page/HiredCandidates";
import { DesignApplication } from "../components/Pages/Hiring/page/DesignApplication";
import { ScheduleInterview } from "../components/Pages/Hiring/page/ScheduleInterview";
import { Hire } from "../components/Pages/Hiring/page/Hire";
import { Feedback } from "../components/Pages/Hiring/page/Feedback";
import { BackgroundCheck } from "../components/Pages/Hiring/page/BackgroundCheck";
import ContractorManagement from "../page/ContractorManagement";
import { AssetManagement } from "../page/AssetManagement";
import { AddAsset } from "../components/Pages/AssetManagement/AddAsset";
import { ActionOnAsset } from "../components/Pages/AssetManagement/ActionOnAsset";
import { ActionOnContractor } from "../components/Pages/Management/ActionOnContractor";
import { AddContractor } from "../components/Pages/Management/AddContractor";
import { Rejected } from "../components/Pages/Hiring/page/Rejected";
import { RejectedNormal } from "../components/Pages/Hiring/page/RejectedNormal";
import { RejectedDetails } from "../components/Pages/Hiring/page/RejectedDetails";
import { AddDepartment } from "../components/Pages/Hiring/page/AddDepartment";
import { CeleberationsListPage } from "../page/CeleberationsListPage";
import { HolidayslistPage } from "../page/HolidayslistPage";
import { AddEmployee } from "../components/Pages/OrgnizationChart/AddEmployee";
import { EmployeesManagement } from "../components/Pages/Profile/EmployeesManagement";
import { AddTicket } from "../components/Pages/Help&Support/AddTicket";
import { TicketHistory } from "../components/Pages/Help&Support/TicketHistory";
import { ActionTicket } from "../components/Pages/Help&Support/ActionTicket";

// import { Footer } from "../../common/components/footer/Footer";
const Index = () => {
  const [nav, setNav] = useState(true);
  const value = { nav, setNav };
  return (
    <>
      <div className="App">
        <NavContext.Provider value={value}>
          <Navbar />
          <Container
            stickyNav={<TopNavbar />}
            content={
              <>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/announcement" element={<Announcement />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/finance" element={<Finance />} />
                  <Route path="/attendence" element={<Attendence />} />
                  <Route path="/performance" element={<Performance />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/taskmanagement" element={<TaskManagement />} />
                  <Route path="/Payroll" element={<Payroll />} />
                  <Route
                    path="/organizationchart"
                    element={<OrganizationChart />}
                  />
                  <Route path="/hiring" element={<Hiring />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/Settings" element={<Settings />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/reimbursement" element={<Reimbursement />} />
                  <Route path="/notice_period" element={<NoticePeriod />} />
                  <Route
                    path="/timesheet_review"
                    element={<TimesheetReview />}
                  />
                  <Route path="/resignation" element={<Resignation />} />
                  <Route path="/leave" element={<Leave />} />
                  <Route path="/user_details" element={<UserDetails />} />
                  <Route path="/notification" element={<Notification />} />
                  <Route
                    path="/announcement_profile"
                    element={<AnnouncementProfile />}
                  />
                  <Route path="/apply_leave" element={<ApplyLeave />} />
                  <Route path="/previous_leaves" element={<PreviousLeaves />} />
                  <Route
                    path="/employees_attendance"
                    element={<EmployeesAttendance />}
                  />
                  <Route
                    path="/employees_performance"
                    element={<EmployeesPerformance />}
                  />
                  <Route path="/appraisal" element={<Appraisal />} />
                  <Route path="/user_appraisal" element={<UserAppraisal />} />
                  <Route path="/team_apperaisal" element={<TeamApperaisal />} />
                  <Route path="/salary_register" element={<SalaryRegister />} />
                  <Route
                    path="/attendence_inner"
                    element={<AttendenceInner />}
                  />
                  <Route path="/tax_deductions" element={<TaxDeductions />} />
                  <Route
                    path="/missing_information"
                    element={<MissingInformation />}
                  />
                  <Route
                    path="/report_reimbursements"
                    element={<ReportReimbursements />}
                  />
                  <Route
                    path="/upcoming_contractor_payments"
                    element={<UpcomingContractorPayments />}
                  />
                  <Route path="/hr_register" element={<HrRegister />} />
                  <Route path="/company_setup" element={<CompanySetup />} />
                  <Route path="/dashboard_setup" element={<DashboardSetup />} />
                  <Route path="/payroll_setup" element={<PayrollSetup />} />
                  <Route
                    path="/default_salary_stracture"
                    element={<DefaultSalaryStracture />}
                  />
                  <Route
                    path="/employee_notification"
                    element={<EmployeeNotification />}
                  />
                  <Route
                    path="/holidays_setting"
                    element={<HolidaysSetting />}
                  />
                  <Route path="/payment_setup" element={<PaymentSetup />} />
                  <Route
                    path="/automate_filings"
                    element={<AutomateFilings />}
                  />
                  <Route path="/employee_data" element={<EmployeeData />} />
                  <Route
                    path="/reimbursement_setup"
                    element={<ReimbursementSetup />}
                  />
                  <Route
                    path="/tax_deduction_setup"
                    element={<TaxDeductionSetup />}
                  />
                  <Route path="/document_setup" element={<DocumentSetup />} />
                  <Route
                    path="/contractor_setup"
                    element={<ContractorSetup />}
                  />
                  <Route path="/user_role" element={<UserRole />} />
                  <Route
                    path="/appraisal_setting"
                    element={<AppraisalSetting />}
                  />
                  <Route path="/total_openings" element={<TotalOpenings />} />
                  <Route path="/create_new_jobs" element={<CreateNewJobs />} />
                  <Route path="/new_application" element={<NewApplication />} />
                  <Route path="/interviews" element={<Interviews />} />
                  <Route
                    path="/shortlisted_candidates"
                    element={<ShortlistedCandidates />}
                  />
                  <Route
                    path="/hired_candidates"
                    element={<HiredCandidates />}
                  />
                  <Route
                    path="/design_application"
                    element={<DesignApplication />}
                  />
                  <Route
                    path="/schedule_interview"
                    element={<ScheduleInterview />}
                  />
                  <Route path="/hire" element={<Hire />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route
                    path="/background_check"
                    element={<BackgroundCheck />}
                  />
                  <Route
                    path="/contractor_management"
                    element={<ContractorManagement />}
                  />
                  <Route
                    path="/asset_management"
                    element={<AssetManagement />}
                  />
                  <Route path="/add_asset" element={<AddAsset />} />
                  <Route path="/action_Asset" element={<ActionOnAsset />} />
                  <Route
                    path="/action_contractor"
                    element={<ActionOnContractor />}
                  />
                  <Route path="/add_contractor" element={<AddContractor />} />
                  <Route path="/rejected" element={<Rejected />} />
                  <Route path="/rejected_normal" element={<RejectedNormal />} />
                  <Route
                    path="/rejected_details"
                    element={<RejectedDetails />}
                  />
                  <Route path="/add_department" element={<AddDepartment />} />
                  <Route
                    path="/celeberations_List_Page"
                    element={<CeleberationsListPage />}
                  />
                  <Route
                    path="/holidays_list_page"
                    element={<HolidayslistPage />}
                  />
                  <Route path="/add_employee" element={<AddEmployee />} />
                  <Route
                    path="/employees_management"
                    element={<EmployeesManagement />}
                  />
                  <Route path="/add_ticket" element={<AddTicket />} />
                  <Route path="/ticket_history" element={<TicketHistory />} />
                  <Route path="/action_ticket" element={<ActionTicket />} />

                  <Route path="*" element={<main>NOT FOUND</main>} />
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
};

export default Index;
