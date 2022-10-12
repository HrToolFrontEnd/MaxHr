import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { EmployeesProfileCard } from "../Profile/components/EmployeesProfileCard";
import Calendar from "react-calendar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export const MyAttendence = () => {
  const [value, onChangee] = useState(new Date());
  return (
    <>
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
          <TopPageTitle Name="My Attendence" />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
          <NavLink to="/hr/apply_leave">
            <span>Apply for Leave</span>
            <BsArrowRight />
          </NavLink>
        </div>
      </div>
      <EmployeesProfileCard />
      <Calendar
        className="MyAttendence_dashbaord_calendar"
        onChange={(date) => {
          onChangee(date);
          alert(date);
          // navigate("/hr/calendar");
        }}
        value={value}
      />
      <div className="MyAttendence_dashbaord_calendar_iner_div">
        <div className="MyAttendence_dashbaord_calendar_iner_text_div">
          <p>
            Absent: <span className="iner_color">00</span>
          </p>
          <p>
            Holidays: <span className="iner_color">01</span>
          </p>
          <p>
            No of Working Days: <span>24</span>
          </p>
          <p>
            Present: <span>24</span>
          </p>
        </div>
      </div>
    </>
  );
};
