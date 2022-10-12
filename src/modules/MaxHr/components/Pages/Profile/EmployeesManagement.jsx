import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { EmployeesCard } from "./components/EmployeesCard";
import { FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { GirdAndListView } from "../../../../common/components/GirdAndListView/GirdAndListView";
import Photo from "../../../../common/components/img/Img";
import ProfilPhoto2 from "../../../../../pics/profile2.jpeg";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const EmployeesManagement = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
            <div className="Announcement_title_top_div">
              <TopPageTitle
                Name="Employees’ Management"
                TilelIcon={<BsArrowLeft />}
                TitleLink={-1}
              />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
            <NavLink to="/hr/add_employee">
              <span>Add Employee</span>
              <FiPlus />
            </NavLink>
          </div>
        </div>

        <GirdAndListView
          GirdView={<EmployeesCard />}
          ListView={<EmployeesListView />}
        />
      </div>
    </>
  );
};

const EmployeesListView = (props) => {
  const Data = [
    {
      Photo: ProfilPhoto2,
      Title: "react js developer",
      EmployeeName: "ashish kumar madaan",
      ContactNumber: "sunny@maxlence.com.au",
      EmailID: "+91 834 9933 768",
    },
    {
      Photo: ProfilPhoto2,
      Title: "react js developer",
      EmployeeName: "ashish kumar madaan",
      ContactNumber: "sunny@maxlence.com.au",
      EmailID: "+91 834 9933 768",
    },
    {
      Photo: ProfilPhoto2,
      Title: "react js developer",
      EmployeeName: "ashish kumar madaan",
      ContactNumber: "sunny@maxlence.com.au",
      EmailID: "+91 834 9933 768",
    },
    {
      Photo: ProfilPhoto2,
      Title: "react js developer",
      EmployeeName: "ashish kumar madaan",
      ContactNumber: "sunny@maxlence.com.au",
      EmailID: "+91 834 9933 768",
    },
  ];
  const App = (props) => {
    const navigate = useNavigate();
    return (
      <>
        <tr
          className="ApprovalDetailsPage_thead_td"
          onClick={() => navigate("/hr/announcement_profile")}
          style={{ cursor: "pointer" }}
        >
          <td className="upload_document_list_img_top_div">
            <Photo
              backgroundImage={props.Photo}
              className="upload_document_list_img"
            />
            {props.EmployeeName}
          </td>
          <td>{props.Title}</td>
          <td>{props.ContactNumber}</td>
          <td>{props.EmailID}</td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className="m_t"></div>
      <div className="custom_container_iner">
        <div className="ApprovalDetailsPage_top_div">
          <table className="table table-hover upload_document_list_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr ">
                <th scope="col" className="text-start">
                  Employee Name
                </th>
                <th scope="col">Job Title</th>
                <th scope="col">Email ID</th>
                <th scope="col">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((val, i) => {
                return (
                  <App
                    key={i}
                    Photo={val.Photo}
                    Title={val.Title}
                    EmployeeName={val.EmployeeName}
                    ContactNumber={val.ContactNumber}
                    EmailID={val.EmailID}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
