import {
  PagesTopTitle,
  UserName,
  InfoCard,
  EmployeesChart,
  CalendarApp,
  HolidaysApp,
  CelebrationsApp,
  WhoAwayApp,
  WorkingFormatChart,
  ApprovalsCard,
  WorkingTimeChart,
} from "../components/Pages/Dashboard/index";
import CardIconImg from "../../../pics/profile.jpeg";
import CardIconImg2 from "../../../pics/profile2.jpeg";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
const Dashboard = (props) => {
  const ApprovalsCardData = [
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg,
          name: "Sonali Bhagat",
          DOB: "amount:INR 2400",
          link: "/",
          ApprovalsCardIcon: <IoEllipsisVerticalSharp />,
        },
        {
          userImg: CardIconImg2,
          name: "Sonali Bhagat",
          DOB: "amount:INR 2400",
          link: "/",
          ApprovalsCardIcon: <IoEllipsisVerticalSharp />,
        },
      ],
    },
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg2,
          name: "Sonali Bhagat",
          DOB: "amount:INR 2400",
          link: "/",
          ApprovalsCardIcon: <IoEllipsisVerticalSharp />,
        },
        {
          userImg: CardIconImg,
          name: "Sonali Bhagat",
          DOB: "amount:INR 2400",
          link: "/",
          ApprovalsCardIcon: <IoEllipsisVerticalSharp />,
        },
      ],
    },
  ];
  const ApprovalsCardData2 = [
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg,
          name: "Sonali Bhagat",
          DOB: "amount:INR 2400",
          link: "/",
        },
        {
          userImg: CardIconImg2,
          name: "Sonali Bhagat",
          DOB: "amount:INR 2400",
          link: "/",
        },
      ],
    },
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg2,
          name: "Sonali Bhagat",
          DOB: "amount:INR 2400",
          link: "/",
        },
        {
          userImg: CardIconImg,
          name: "Sonali Bhagat",
          DOB: "amount:INR 2400",
          link: "/",
        },
      ],
    },
  ];

  return (
    <>
      <div className="custom_container">
        <UserName />
        <PagesTopTitle title="dashbaord" />

        <div className="row mb-3 g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <InfoCard />
          <EmployeesChart />
          <WorkingFormatChart />
          <WhoAwayApp />
          <CelebrationsApp />
          <HolidaysApp />
          <CalendarApp />
          <WorkingTimeChart />
        </div>
        <PagesTopTitle title="Request for Approvals" />
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <ApprovalsCard
            data={ApprovalsCardData}
            title="Reimbursement"
            pagelink="/hr/reimbursement"
            modallink="/hr/reimbursement"
          />
          <ApprovalsCard
            data={ApprovalsCardData}
            title="Leave"
            pagelink="/hr/leave"
            modallink="/hr/leave"
          />
          <ApprovalsCard
            data={ApprovalsCardData2}
            title="Timesheet"
            pagelink="/hr/timesheet_review"
            modallink="/hr/timesheet_review"
          />
          <ApprovalsCard
            data={ApprovalsCardData}
            title="Notice Period"
            pagelink="/hr/notice_period"
            modallink="/hr/notice_period"
          />
          <ApprovalsCard
            data={ApprovalsCardData}
            title="Resignation"
            pagelink="/hr/resignation"
            modallink="/hr/resignation"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
