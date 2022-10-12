import PhotoApp from "../../../../../common/components/img/Img";
import Icon from "../../../../../../pics/profile.jpeg";
import React from "react";
import { AiFillLinkedin, AiOutlineClockCircle } from "react-icons/ai";
import PdfIcon from "../../../../../../pics/test.pdf";
import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
export const Feedback = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <CompletedJobsList />
        <div className="row">
          <div className="col-12">
            <div className=" mt-3">
              <div className="ApprovalDetailsPage_date_picker">
                <label>Feedback</label>
                <textarea
                  className="form-control"
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"
                  rows="13"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-12 company_setup_bottom_btn">
            <div className="IssueAssets_btn_bottom_div">
              <NavLink to="/hr/interviews">
                <button className="IssueAssets_btn">Save</button>
              </NavLink>
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
            Name="Feedback"
          />
        </div>
      </div>
    </>
  );
};
const CompletedJobsList = () => {
  const RedirectPage = () => {
    window.open("https://www.linkedin.com/login", "_blank");
  };
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };

  const JobsListApp = (props) => {
    const ratingChanged = () => {};
    return (
      <>
        <div className="col-12">
          <div className="EmployeesProfileCard_top_div">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div>
                  <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-3 col-3">
                      <PhotoApp
                        className="JobsList_img"
                        backgroundImage={Icon}
                      />
                    </div>
                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8 mx-2">
                      <div className="JobsList_img_text">
                        <h3>{props.name}</h3>
                        <p>{props.postName}</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="JobsList_img_sub_text">
                        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p>
                              Experience: <span>3 Years</span>
                            </p>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p>
                              Linkedin Profile
                              <span onClick={RedirectPage}>
                                <AiFillLinkedin />
                              </span>
                            </p>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p>
                              Resume
                              <span>
                                <BiLink
                                  onClick={() => changNameUser(PdfIcon)}
                                />
                              </span>
                            </p>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p>
                              cv
                              <span>
                                <BiLink
                                  onClick={() => changNameUser(PdfIcon)}
                                />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 d-flex align-items-end">
                <div className="Completed_Jobs_List_feedback_star justify-content-start">
                  Overall Rating:
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={16}
                    activeColor="#F1C21B"
                  />
                  4.0
                </div>
              </div>
              <div className="col-12">
                <div>
                  <div className="JobsList_mid_title">
                    <h3> Interviewed By</h3>
                  </div>
                  <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div>
                        <ul className="upcoming_interviews_ul">
                          <li>Gaurav Kaushik</li>
                          <li>Akhilesh Soni</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 Completed_Jobs_List_time">
                      <div className="datetime_local_top_div justify-content-start">
                        <div>
                          <AiOutlineClockCircle /> 24/04/2022
                          <span>10:00-11:00</span>
                        </div>
                      </div>
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
  const JobsListData = [
    {
      name: "Jan Mik",
      postName: "UX Designer",
    },
  ];
  return (
    <>
      <div className="JobsList_main_div">
        <div className="row">
          {JobsListData.map((val, i) => {
            return (
              <JobsListApp key={i} name={val.name} postName={val.postName} />
            );
          })}
        </div>
      </div>
    </>
  );
};
