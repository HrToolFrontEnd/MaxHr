import Select from "react-select";
import { NavLink } from "react-router-dom";
import IconImg from "../../../../common/components/img/Img";
import D1 from "../../../.././../pics/d1.png";
import D2 from "../../../.././../pics/d2.png";
import D4 from "../../../.././../pics/d3.png";
import D3 from "../../../.././../pics/d4.png";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import CardIconImg from "../../../../../pics/profile.jpeg";
import Birthday from "../../../../../pics/b.png";
import Anniversiry from "../../../../../pics/p.png";
import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
// import { Modal } from "react-bootstrap";
import React from "react";
// import { AiFillCloseCircle } from "react-icons/ai";
// import ModalIcon1 from "../../../../../pics/modal1.png";
// import ModalIcon2 from "../../../../../pics/modal2.png";
// import ModalIcon3 from "../../../../../pics/modal3.png";
// import PdfIcon from "../../../../../pics/pdf.png";
// import DocIcon from "../../../../../pics/Doc.png";
// import { FaDownload } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
export const UserName = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div>
        <div className="row">
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
            <div className="dashboard_top_user_name">
              <h3>
                Hello Gaurav <span>Good Morning</span>
              </h3>
            </div>
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
export const PagesTopTitle = (props) => {
  return (
    <>
      <div className="page_top_title">
        <h3>{props.title}</h3>
      </div>
    </>
  );
};
export const InfoCard = (props) => {
  const InfoCardApp = (props) => {
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
          <NavLink to={`${props.url}`}>
            <div
              className=" dashbaord_imfo_card"
              style={{ backgroundColor: props.backgroundcolor }}
            >
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-3 col-sm-3 col-3 dashbaord_imfo_card_icon_col_div">
                  <div
                    className="dashbaord_imfo_card_icon_div"
                    style={{ backgroundColor: props.iconbackgroundcolor }}
                  >
                    <IconImg
                      className="dashbaord_img"
                      backgroundImage={props.dashbaordIcon}
                    />
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-9 col-sm-9 col-9">
                  <div
                    className="dashbaord_imfo_card_text"
                    style={{ color: props.textcolor }}
                  >
                    <h4>{props.cardtitle}</h4>
                    <p>{props.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </>
    );
  };
  const InfoCardAppData = [
    {
      backgroundcolor: "#0043ce",
      textcolor: "white",
      cardtitle: "Total Employees",
      date: "28",
      dashbaordIcon: D1,
      iconbackgroundcolor: "#2062ec",
      url: "/hr/organizationchart",
    },
    {
      backgroundcolor: "#F1C21B",
      textcolor: "black",
      cardtitle: "Onboarding This Week",
      date: "12",
      dashbaordIcon: D2,
      iconbackgroundcolor: "#FEDA5A",
      url: "/hr/organizationchart",
    },
    {
      backgroundcolor: "#900F9B",
      textcolor: "white",
      cardtitle: "Interviews This week",
      date: "12",
      dashbaordIcon: D3,
      iconbackgroundcolor: "#B916C7",
      url: "/hr/organizationchart",
    },
    {
      backgroundcolor: "#DA1E28",
      textcolor: "white",
      cardtitle: "Releiving This Week",
      date: "12",
      dashbaordIcon: D4,
      iconbackgroundcolor: "#FB404A",
      url: "/hr/organizationchart",
    },
  ];
  return (
    <>
      <div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          {InfoCardAppData.map((val, i) => {
            return (
              <InfoCardApp
                key={i}
                backgroundcolor={val.backgroundcolor}
                textcolor={val.textcolor}
                cardtitle={val.cardtitle}
                date={val.date}
                // icon={val.icon}
                dashbaordIcon={val.dashbaordIcon}
                iconbackgroundcolor={val.iconbackgroundcolor}
                url={val.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export const EmployeesChart = (props) => {
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <NavLink to="/hr/attendence">
          <div className="dashbaord_white_card">
            <div className="dashbaord_white_title">
              <p>
                total employees: <span>20</span>
              </p>
            </div>
            <div className="whp_away_card_overflow_div">
              <Chart
                type="donut"
                series={[23, 80]}
                options={{
                  colors: ["#DA1E28", "#2DCD1F"],
                  labels: ["Leave", "Working"],

                  dataLabels: {
                    enabled: true,
                    background: {
                      enabled: true,
                      foreColor: "black",
                      opacity: 1,
                    },
                    dropShadow: {
                      enabled: false,
                      opacity: 1,
                    },
                  },
                  chart: {
                    height: "100%",
                    width: "100%",
                  },
                  legend: {
                    show: true,
                    position: "bottom",
                    horizontalAlign: "center",
                    fontSize: "15px",
                    markers: {
                      width: 12,
                      height: 12,
                      radius: 0,
                      offsetX: -10,
                      offsetY: 0,
                    },
                    itemMargin: {
                      horizontal: 40,
                      vertical: 0,
                    },
                  },
                }}
              ></Chart>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};
export const WorkingFormatChart = () => {
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <NavLink to="/hr/attendence">
          <div className="dashbaord_white_card">
            <div className="dashbaord_white_title">
              <p>Working Format</p>
            </div>
            <div className="whp_away_card_overflow_div">
              <Chart
                type="donut"
                series={[23, 80]}
                options={{
                  colors: ["#85E57D", "#2DCD1F"],
                  labels: ["Office", "Home"],
                  dataLabels: {
                    enabled: true,
                    background: {
                      enabled: true,
                      foreColor: "black",
                      opacity: 1,
                    },
                    dropShadow: {
                      enabled: false,
                      opacity: 1,
                    },
                  },
                  chart: {
                    height: "100%",
                    width: "100%",
                  },
                  legend: {
                    show: true,
                    position: "bottom",
                    horizontalAlign: "center",
                    fontSize: "15px",
                    markers: {
                      width: 12,
                      height: 12,
                      radius: 0,
                      offsetX: -10,
                      offsetY: 0,
                    },
                    itemMargin: {
                      horizontal: 40,
                      vertical: 0,
                    },
                  },
                }}
              ></Chart>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};
export const WhoAwayApp = () => {
  const [WhoAwayAppPopup, setWhoAwayAppPopup] = useState(true);
  const WhoAwayAppPopupOpen = () => {
    setWhoAwayAppPopup(!WhoAwayAppPopup);
  };
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 position-relative">
        <div className="dashbaord_white_card">
          <div className="dashbaord_white_title">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-6 col-sm-6 col-6">
                <p>Who’s Away</p>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-6 col-sm-6 col-6 ">
                <div className="dashboard_top_week_Select">
                  <Select options={options} placeholder="This week" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              WhoAwayAppPopup ? "WhoAwayAppPopup1" : "WhoAwayAppPopup2"
            }`}
          >
            <div className=" position-absolute WhoAwayAppPopup_top_div">
              <div>
                <div className="row ">
                  <div className="col-3">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                      onClick={WhoAwayAppPopupOpen}
                    />
                  </div>
                  <div className="col-9">
                    <div className="WhoAwayAppPopup_text">
                      <h5>Employee Name</h5>
                      <p className="WhoAwayAppPopup_text_subname">
                        Social Media Marketer
                      </p>
                      <p>
                        <span>
                          <AiOutlineCalendar />
                        </span>
                        12:30 01:00
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="WhoAwayAppPopup_bottom_text">
                        <p>30 Minutes</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="WhoAwayAppPopup_bottom_text2">
                        <p>lunch Break</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="whp_away_card_overflow_div">
            <div className="celebrations_card_img_top_div ">
              <div className="celebrations_card_line_title">
                <p>today (02)</p>
                <hr />
              </div>
              <div>
                <div className="WhoAwayAppCard_top_img_div">
                  <div className=" d-flex">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />{" "}
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />
                  </div>
                </div>
                <div className="WhoAwayAppCard_top_img_div">
                  <div className=" d-flex">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                      onClick={WhoAwayAppPopupOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="celebrations_card_img_top_div ">
              <div className="celebrations_card_line_title">
                <p>today (02)</p>
                <hr />
              </div>
              <div>
                <div className="WhoAwayAppCard_top_img_div">
                  <div className=" d-flex">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />{" "}
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />
                  </div>
                </div>
                <div className="WhoAwayAppCard_top_img_div">
                  <div className=" d-flex">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                      onClick={WhoAwayAppPopupOpen}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="WhoAwayAppCard_top_img_div">
                  <div className=" d-flex">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />{" "}
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                    />
                  </div>
                </div>
                <div className="WhoAwayAppCard_top_img_div">
                  <div className=" d-flex">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={CardIconImg}
                      onClick={WhoAwayAppPopupOpen}
                    />
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
export const CelebrationsApp = () => {
  const CelebrationsData = [
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg,
          name: "Suman Gupta",
          DOB: "27th Nov - Happy Birthday!",
          BirthdayImg: Birthday,
        },
      ],
    },
    {
      toptitle: "Tomorrow(01)",

      cat1: [
        {
          userImg: CardIconImg,
          name: "Suman Gupta",
          DOB: "01st Dec - Happy  Anniversiry!",
          BirthdayImg: Anniversiry,
        },
        {
          userImg: CardIconImg,
          name: "Suman Gupta",
          DOB: "29th Nov - Happy Birthday!",
          BirthdayImg: Birthday,
        },
        {
          userImg: CardIconImg,
          name: "Suman Gupta",
          DOB: "31th Nov - Happy Birthday!",
          BirthdayImg: Birthday,
        },
      ],
    },
  ];

  const Celebrations = (props) => {
    return (
      <>
        <div>
          <div className="celebrations_card_line_title">
            <p>{props.toptitle}</p>
            <hr />
          </div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div key={i} className="celebrations_card_img_top_div">
                <div className="row ">
                  <div className="col-2">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={val.userImg}
                    />
                  </div>
                  <div className="col-7">
                    <div className="celebrations_card_user_info">
                      <h5>{val.name}</h5>
                      <p>{val.DOB}</p>
                    </div>
                  </div>
                  <div className="col-3 celebrations_card_icon_div">
                    <IconImg
                      className="celebrations_card_img_icon"
                      backgroundImage={val.BirthdayImg}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="dashbaord_white_card">
          <div className="dashbaord_white_title">
            <div className="row">
              <div className="col-6">
                <div>
                  <p>Celebrations</p>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <div className="reimbursement_top_title_link_page">
                    <NavLink to="/hr/celeberations_List_Page">View All</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="celebrations_card_overflow_div">
            {CelebrationsData.map((val, i) => {
              return <Celebrations key={i} toptitle={val.toptitle} arr={val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export const HolidaysApp = () => {
  const HolidaysData = [
    {
      name: "Diwali",
      day: "Monday",
      date: "30th Nov, 2021",
    },
    {
      name: "Ramnavami",
      day: "Monday",
      date: "30th Nov, 2021",
    },
    {
      name: "Dussehara",
      day: "Monday",
      date: "30th Nov, 2021",
    },
    {
      name: "Christmas",
      day: "Monday",
      date: "30th Nov, 2021",
    },
    {
      name: "Diwali",
      day: "Monday",
      date: "30th Nov, 2021",
    },
  ];
  const Holidays = (props) => {
    return (
      <>
        <div className="holidays_card">
          <h5>{props.name}</h5>
          <p>
            {props.day} <span>{props.date}</span>
          </p>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="dashbaord_white_card">
          <div className="dashbaord_white_title">
            <div className="row">
              <div className="col-6">
                <div>
                  <p>Holidays</p>
                </div>
              </div>
              <div className="col-6">
                <div className="reimbursement_top_title_link_page">
                  <NavLink to="/hr/holidays_list_page">View All</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="celebrations_card_overflow_div">
            <div className="holidays_card_top_main_div">
              {HolidaysData.map((val, i) => {
                return (
                  <Holidays
                    key={i}
                    name={val.name}
                    day={val.day}
                    date={val.date}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const CalendarApp = () => {
  const [value, onChangee] = useState(new Date());
  const navigate = useNavigate();
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="dashbaord_white_card dashbaord_white_card2">
          <div className="dashbaord_white_title">
            <div>
              <Calendar
                className="dashbaord_calendar"
                onChange={(date) => {
                  onChangee(date);
                  navigate("/hr/calendar");
                }}
                value={value}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const WorkingTimeChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Overtime",
        type: "column",
        data: [11, 30, 31, 40, 41, 49, 65],
      },
      {
        name: "Working Time",
        type: "column",
        data: [20, 29, 37, 36, 44, 45, 70],
      },
    ],
    options: {
      colors: ["#2DCD1F", "#DA1E28"],
      chart: {
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      xaxis: {
        categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      },
      yaxis: {
        categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
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
          offsetX: -10,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 40,
          vertical: 0,
        },
      },
      bar: {
        barWidth: "10%",
      },
    },
  });
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="col-12">
        <div className="dashbaord_white_card">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
              <div className="dashbaord_white_title">
                <p>Working Time</p>
              </div>
              <div id="chart">
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="line"
                  height={300}
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-6">
                  <div className="dashboard_top_week_Select2">
                    <Select options={options} placeholder="All Department" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="dashboard_top_week_Select2">
                    <Select options={options} placeholder="This week" />
                  </div>
                </div>
              </div>
              <div className="working_time_info_main_div">
                <div className="working_time_info">
                  <p>
                    Scheduled Hours: <span className="span1">120:00:00</span>
                  </p>
                  <p>
                    Overtime Hours: <span className="span2">120:00:00</span>
                  </p>
                  <p>
                    Total Hours: <span className="span3">131:27:34</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const ApprovalsCard = (props) => {
  // let link = props.modallink;
  // const [modalShow, setModalShow] = React.useState(false);
  const Approvals = (props) => {
    return (
      <>
        <div>
          <div className="celebrations_card_line_title">
            <p>{props.toptitle}</p>
            <hr />
          </div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div key={i} className="celebrations_card_img_top_div">
                <div className="row ">
                  <div className="col-2">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={val.userImg}
                    />
                    {/* <NavLink to={val.link}></NavLink> */}
                  </div>
                  <div className="col-7">
                    <div className="celebrations_card_user_info">
                      <h5>{val.name}</h5>
                      <p>{val.DOB}</p>
                    </div>
                    {/* <NavLink to={val.link}></NavLink> */}
                  </div>
                  {/* <div className="col-3 celebrations_card_icon_div2">
                    <span onClick={() => setModalShow(true)}>view</span>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      modallink={link}
                    />
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="dashbaord_white_card">
          <div className="dashbaord_white_title">
            <div className="row">
              <div className="col-8">
                <div className=" d-flex reimbursement_top_title">
                  <p>{props.title}</p>
                  <NavLink
                    to={props.pagelink ? props.pagelink : "/hr/not-found"}
                  >
                    3 new
                  </NavLink>
                </div>
              </div>
              <div className="col-4">
                <div className="reimbursement_top_title_link_page">
                  <div>
                    <NavLink
                      to={props.pagelink ? props.pagelink : "/hr/not-found"}
                    >
                      View All
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="celebrations_card_overflow_div">
            {props.data.map((val, i) => {
              return <Approvals key={i} toptitle={val.toptitle} arr={val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

// Modal
// const MyVerticallyCenteredModal = (props) => {
//   const changNameUser = (CardIconImg) => {
//     window.open(CardIconImg, "__blank");
//   };
//   const ApprovalsModalCard = (props) => {
//     return (
//       <>
//         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
//           <div className="ApprovalsCard_modal_pic_main_div">
//             <IconImg
//               className="ApprovalsCard_modal_pic"
//               backgroundImage={props.modalImg}
//             />
//             <div className="ApprovalsCard_modal_pic_bottom_title_div ApprovalsCard_modal_text_show_hide">
//               <div className="row ApprovalsCard_modal_icon_row">
//                 <div className="col-2">
//                   <IconImg
//                     className="ApprovalsCard_modal_icon"
//                     backgroundImage={props.modalImgIcon}
//                   />
//                 </div>
//                 <div className="col-10">
//                   <div className="ApprovalsCard_modal_icon_name">
//                     {props.name}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="ApprovalsCard_modal_pic_overlay"
//               onClick={() => changNameUser(CardIconImg)}
//             >
//               <div className="row m-0 ApprovalsCard_modal_icon_row">
//                 <div className="col-2">
//                   <IconImg
//                     className="ApprovalsCard_modal_icon"
//                     backgroundImage={props.modalImgIcon}
//                   />
//                 </div>
//                 <div className="col-10">
//                   <div className="ApprovalsCard_modal_icon_name text-white">
//                     {props.name}
//                     <div className="ApprovalsCard_modal_icon_size">
//                       <small> {props.fileSize}</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="ApprovalsCard_modal_icon_btn_div">
//                 <NavLink className="ApprovalsCard_modal_icon_btn" to="/">
//                   <FaDownload />
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
//   const ApprovalsModalCardData = [
//     {
//       modalImg: CardIconImg,
//       modalImgIcon: ModalIcon1,
//       name: "name...",
//       fileSize: "28kb",
//     },
//     {
//       modalImg: DocIcon,
//       modalImgIcon: ModalIcon2,
//       name: "name...",
//       fileSize: "28kb",
//     },
//     {
//       modalImg: PdfIcon,
//       modalImgIcon: ModalIcon3,
//       name: "name...",
//       fileSize: "28kb",
//     },
//   ];
//   return (
//     <>
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Body className="text-capitalize">
//           <div className="ApprovalsCard_modal_title_top_div">
//             <div className="row">
//               <div className="col-8">
//                 <div className="ApprovalsCard_modal_title">
//                   <h3>Sonali Bhagat</h3>
//                 </div>
//               </div>
//               <div className="col-4">
//                 <div className="ApprovalsCard_modal_hide_btn">
//                   <AiFillCloseCircle onClick={props.onHide} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="row g-4">
//               {ApprovalsModalCardData.map((val, i) => {
//                 return (
//                   <ApprovalsModalCard
//                     key={i}
//                     modalImg={val.modalImg}
//                     modalImgIcon={val.modalImgIcon}
//                     name={val.name}
//                     fileSize={val.fileSize}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-12">
//               <div className=" text-capitalize text-center ApprovalDetailsPage_btn2_div">
//                 <NavLink
//                   className=" ApprovalDetailsPage_btn2"
//                   to={props.modallink ? props.modallink : "/hr/not-found"}
//                 >
//                   View All
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };
