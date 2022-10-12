import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import PdfIcon from "../../../../../../pics/test.pdf";
import InterviewedChip from "./InterviewedChip";
import { NavLink } from "react-router-dom";
export const ScheduleInterview = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <div className="ScheduleInterview_top_div_main mt-4">
          <div className="ScheduleInterview_top_div">
            <Profile />
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="ApprovalDetailsPage_date_picker">
                  <input
                    type="datetime-local"
                    className="form-control Schedule_Interview_date"
                  />
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 Schedule_Interview_chips_top">
                <div className="Schedule_Interview_chips">
                  <InterviewedChip />
                </div>
              </div>
              <div className="col-12">
                <div>
                  <div className="ApprovalDetailsPage_date_picker">
                    <label className="all_page_my_label">Message</label>
                    <textarea
                      className="form-control"
                      placeholder="Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker "
                      rows="6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="IssueAssets_btn_bottom_div IssueAssets_btn_bottom_div2 ">
                  <div className="ScheduleInterview_btn_div">
                    <div>
                      <NavLink to="/hr/design_application">
                        <button className="IssueAssets_btn3 ScheduleInterview_btn">
                          Cancel
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <div className="ScheduleInterview_btn_div">
                    <NavLink to="/hr/design_application">
                      <button className="IssueAssets_btn2 ScheduleInterview_btn2">
                        Schedule Interview
                      </button>
                    </NavLink>
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
const PageTop = () => {
  return (
    <>
      <div className="row TotalOpenings_input_main_div g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
          <TopPageTitle
            TitleLink={-1}
            TilelIcon={<BsArrowLeft />}
            Name="Schedule 1st Interview"
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="TotalOpenings_input_div">
            <span>
              <BiSearch />
            </span>
            <input
              type="email"
              className="form-control w-100"
              placeholder="Search by name, email or department"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Profile = () => {
  const RedirectPage = () => {
    window.open("https://www.linkedin.com/login", "_blank");
  };
  const RedirectPage2 = () => {
    window.open("https://goo.gl/maps/FUQb5Rv4MAWBXggR7", "_blank");
  };
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };
  return (
    <>
      <div className="design_application_top_div">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-6">
            <div className="design_application_name_div">
              <h3>Soham Gupta</h3>
            </div>
          </div>
          <div className="col-6">
            <div className="design_application_time_div">
              <p>
                <span>
                  <IoTimeOutline />
                </span>
                5 Days Ago
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="row g-2">
              <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className="design_application_location_div">
                  <p>
                    <span>
                      <IoLocationOutline onClick={RedirectPage2} />
                    </span>
                    Noida
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                <div className="design_application_location_div design_application_link_div">
                  <p>
                    Linkedin Profile
                    <span>
                      <AiFillLinkedin onClick={RedirectPage} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-xxl-7 col-lg-7 col-md-5 col-sm-12 col-12">
                <div className="design_application_location_div design_application_link_div">
                  <p>
                    Resume
                    <span>
                      <BiLink onClick={() => changNameUser(PdfIcon)} />
                    </span>
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
