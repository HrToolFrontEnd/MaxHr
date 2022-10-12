import { NavLink } from "react-router-dom";
import Select from "react-select";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowRight } from "react-icons/bs";
import User from "../../../../../pics/group.png";
import UserIcon from "../../../../common/components/img/Img";
import Chart from "react-apexcharts";
export const EmployeesPerformance = () => {
  const options = [
    { value: "2021", label: "2021" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
  ];
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
            <TopPageTitle Name="Employees’ Performance" />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
            <NavLink to="/hr/team_apperaisal">
              <span>Team’s Appraisal</span>
              <BsArrowRight />
            </NavLink>
          </div>
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="top_inner_title">
              <h3>Absenteeism</h3>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="All Department" />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="Employees" />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="2022" />
            </div>
          </div>
          <div></div>
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                <div className="MyPerformance_chart_div">
                  <div className="row">
                    <div className="col-4 user_icon_MyPerformance_text_top_div">
                      <UserIcon
                        className="user_icon_MyPerformance"
                        backgroundImage={User}
                      />
                    </div>
                    <div className="col-8 user_icon_MyPerformance_text_top_div">
                      <div className="user_icon_MyPerformance_text_div">
                        <h3>7.7 Days</h3>
                        <p>Avg Yearly Absenteeism</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                <div className="MyPerformance_chart_div">
                  <div className="row">
                    <div className="col-4 user_icon_MyPerformance_text_top_div">
                      <UserIcon
                        className="user_icon_MyPerformance"
                        backgroundImage={User}
                      />
                    </div>
                    <div className="col-8 user_icon_MyPerformance_text_top_div">
                      <div className="user_icon_MyPerformance_text_div">
                        <h3>7.7 Days</h3>
                        <p>Avg Yearly Absenteeism</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="MyPerformance_chart_div2">
              <Chart
                height={320}
                type="line"
                series={[
                  {
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                  },
                ]}
                options={{
                  labels: ["Office"],
                  chart: {
                    type: "line",
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  colors: ["#DA1E28"],
                  dataLabels: {
                    enabled: true,
                  },
                  stroke: {
                    curve: "smooth",
                  },
                  title: {
                    text: "Absenteeism over the last 12 Months",
                    align: "left",
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: undefined,
                      color: "#263238",
                    },
                  },
                  grid: {
                    borderColor: "#e7e7e7",
                    row: {
                      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                      opacity: 0.5,
                    },
                  },

                  xaxis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                    ],
                  },
                  legend: {
                    show: true,
                    position: "top",
                    horizontalAlign: "right",
                    floating: true,
                    offsetY: -25,
                    offsetX: -5,
                  },
                }}
              ></Chart>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <TopPageTitle Name="Overall work effectiveness" />
          </div>
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div className="MyPerformance_chart_div2 mt-0">
              <Chart
                height={320}
                type="line"
                series={[
                  {
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                  },
                ]}
                options={{
                  labels: ["Office"],
                  chart: {
                    type: "line",
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  colors: ["#DA1E28"],
                  dataLabels: {
                    enabled: true,
                  },
                  stroke: {
                    curve: "smooth",
                  },
                  title: {
                    text: "Absenteeism over the last 12 Months",
                    align: "left",
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: undefined,
                      color: "#263238",
                    },
                  },
                  grid: {
                    borderColor: "#e7e7e7",
                    row: {
                      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                      opacity: 0.5,
                    },
                  },

                  xaxis: {
                    categories: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                    ],
                  },
                  legend: {
                    show: true,
                    position: "top",
                    horizontalAlign: "right",
                    floating: true,
                    offsetY: -25,
                    offsetX: -5,
                  },
                }}
              ></Chart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
