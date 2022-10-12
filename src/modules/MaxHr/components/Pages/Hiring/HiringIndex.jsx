import Select from "react-select";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import Image from "../../../../common/components/img/Img";
import DashbordBg from "../../../../../pics/hrbg.png";
import { NavLink } from "react-router-dom";
import DashbordBgIcon from "../../../../../pics/hrbgIcon.png";
import DashbordIcon1 from "../../../../../pics/hricon1.png";
import DashbordIcon2 from "../../../../../pics/hricon2.png";
import DashbordIcon3 from "../../../../../pics/hricon3.png";
import DashbordIcon4 from "../../../../../pics/hricon4.png";
import ProfileIcon from "../../../../../pics/profile.jpeg";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlinePlus } from "react-icons/ai";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import Calendar from "react-calendar";

export const HiringIndex = () => {
  return (
    <>
      <HiringIndexTop />
      <HiringIndexCard />
      <div className=" mt-4">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
            <div className="upcoming_interviews_main_div">
              <WorkingTimeChart />
            </div>
          </div>
          <div className="col-4">
            <CalendarApp />
          </div>
        </div>
      </div>
    </>
  );
};
const HiringIndexTop = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className=" mb-4">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 HiringIndex_top_title">
          <div className="col-xxl-8 col-xl-8 col-lg-6 col-md-5 col-sm-3 col-3">
            <TopPageTitle Name="Hiring" />
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-9 col-9 MyAttendence_next_page">
            <NavLink to="/hr/create_new_jobs">
              <span>Create new Job</span>
              <AiOutlinePlus />
            </NavLink>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="This week" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const HiringIndexCard = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-12 col-12">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-6 col-sm-12 col-12">
              <NavLink to="/hr/new_application">
                <div className="DashbordBg_img_div">
                  <Image
                    className="DashbordBg_img"
                    backgroundImage={DashbordBg}
                  />
                  <div className="DashbordBg_img_div_inner">
                    <div className="row">
                      <div className="col-6">
                        <Image
                          className="DashbordBg_icon_img"
                          backgroundImage={DashbordBgIcon}
                        />
                      </div>
                      <div className="col-6 DashbordBg_icon_img_text_TOP">
                        <div className="DashbordBg_icon_img_text">
                          <p>
                            View details
                            <span>
                              <BsArrowLeft />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="DashbordBg_img_div_inner_bottom_text">
                          <h3>1436</h3>
                          <p>New Applications</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-12">
                  <div className="DashbordBg_icon1_div">
                    <div className="row">
                      <div className="col-12">
                        <NavLink to="/hr/interviews">
                          <div className="DashbordBg_icon_top_div_iner">
                            <Image
                              className="DashbordBg_icon1"
                              backgroundImage={DashbordIcon1}
                            />
                            <div>
                              <h3>123</h3>
                              <p>Interviews</p>
                            </div>
                          </div>
                          <div className="DashbordBg_icon_top_div_iner2">
                            <p>
                              View
                              <span>
                                <BsArrowLeft />
                              </span>
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="DashbordBg_icon1_div DashbordBg_icon1_div2">
                    <div className="row">
                      <div className="col-12">
                        <NavLink to="/hr/hired_candidates">
                          <div className="DashbordBg_icon_top_div_iner">
                            <Image
                              className="DashbordBg_icon1"
                              backgroundImage={DashbordIcon2}
                            />
                            <div>
                              <h3>101</h3>
                              <p>Hired</p>
                            </div>
                          </div>
                          <div className="DashbordBg_icon_top_div_iner2">
                            <p>
                              View
                              <span>
                                <BsArrowLeft />
                              </span>
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="DashbordBg_icon1_div ">
                <div className="row">
                  <div className="col-12">
                    <NavLink to="/hr/shortlisted_candidates">
                      <div className="DashbordBg_icon_top_div_iner">
                        <Image
                          className="DashbordBg_icon1"
                          backgroundImage={DashbordIcon3}
                        />
                        <div>
                          <h3>123</h3>
                          <p>Shortlisted</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="DashbordBg_icon1_div ">
                <div className="row">
                  <div className="col-12">
                    <NavLink to="/hr/rejected">
                      <div className="DashbordBg_icon_top_div_iner">
                        <Image
                          className="DashbordBg_icon1"
                          backgroundImage={DashbordIcon4}
                        />
                        <div>
                          <h3>123</h3>
                          <p>Rejected</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="DashbordBg_icon1_div ">
                <div className="row">
                  <div className="col-12">
                    <NavLink to="/hr/total_openings">
                      <div className="DashbordBg_icon_top_div_iner">
                        <Image
                          className="DashbordBg_icon1"
                          backgroundImage={DashbordIcon4}
                        />
                        <div>
                          <h3>23</h3>
                          <p>All Jobs</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <UpcomingInterviews />
        </div>
      </div>
    </>
  );
};
const UpcomingInterviews = () => {
  const UpcomingInterviewsApp = (props) => {
    return (
      <>
        <div className="col-12">
          <NavLink to="/hr/interviews">
            <div className="upcoming_interviews_main_div_inner">
              <div className="row">
                <div className="col-6">
                  <div className="upcoming_interviews_icon_div">
                    <Image
                      className="upcoming_interviews_icon"
                      backgroundImage={props.UserImg}
                    />
                    <div className="upcoming_interviews_icon_div_text">
                      <h5>{props.UserName}</h5>
                      <p>{props.UserJobTitle}</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="upcoming_interviews_time">
                    <p>
                      <span>
                        <AiOutlineClockCircle />
                        {props.time}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <ul className="upcoming_interviews_ul">
                <li>{props.HrName}</li>
                <li>{props.TlName}</li>
              </ul>
            </div>
          </NavLink>
        </div>
      </>
    );
  };
  const SettingsBottomBtnData = [
    {
      UserImg: ProfileIcon,
      UserName: "Jan Mik",
      UserJobTitle: "UX Designer",
      time: "10:00-12:45",
      HrName: "Gaurav Kaushik",
      TlName: "	Akhilesh Soni",
    },
    {
      UserImg: ProfileIcon,
      UserName: "Jan Mik",
      UserJobTitle: "UX Designer",
      time: "10:00-12:45",
      HrName: "Gaurav Kaushik",
      TlName: "	Akhilesh Soni",
    },
    {
      UserImg: ProfileIcon,
      UserName: "Jan Mik",
      UserJobTitle: "UX Designer",
      time: "10:00-12:45",
      HrName: "Gaurav Kaushik",
      TlName: "	Akhilesh Soni",
    },
    {
      UserImg: ProfileIcon,
      UserName: "Jan Mik",
      UserJobTitle: "UX Designer",
      time: "10:00-12:45",
      HrName: "Gaurav Kaushik",
      TlName: "	Akhilesh Soni",
    },
  ];
  return (
    <>
      <div className="upcoming_interviews_main_div">
        <div className="upcoming_interviews_top_title_div">
          <h3>Upcoming Interviews</h3>
        </div>
        <div className="upcoming_interviews_overflow">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {SettingsBottomBtnData.map((val, i) => {
              return (
                <UpcomingInterviewsApp
                  key={i}
                  UserImg={val.UserImg}
                  UserName={val.UserName}
                  UserJobTitle={val.UserJobTitle}
                  time={val.time}
                  HrName={val.HrName}
                  TlName={val.TlName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
const WorkingTimeChart = () => {
  const [state] = useState({
    series: [
      {
        name: "HR",
        data: [44, 55, 57],
      },
      {
        name: "Marketing",
        data: [76, 85, 101],
      },
      {
        name: "Development",
        data: [35, 41, 36],
      },
      {
        name: "Design",
        data: [35, 41, 36],
      },
    ],
    options: {
      colors: ["#F43D03", "#900F9B", "#E41662", "#0043CE"],
      chart: {
        type: "bar",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      title: {
        text: "Top Hiring Source",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Maxlence", "Linkedin", "Internshala"],
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
        fontSize: "15px",
        markers: {
          width: 12,
          height: 12,
          radius: 0,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      bar: {
        barWidth: "10%",
      },
    },
  });
  return (
    <>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={300}
      />
    </>
  );
};
const CalendarApp = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="dashbaord_white_card dashbaord_white_card2">
        <div className="dashbaord_white_title">
          <div>
            <Calendar
              className="dashbaord_calendar"
              onChange={onChange}
              value={value}
            />
          </div>
        </div>
      </div>
    </>
  );
};
