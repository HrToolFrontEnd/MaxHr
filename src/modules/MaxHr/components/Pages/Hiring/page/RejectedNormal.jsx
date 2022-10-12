import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BiSearch, BiLink } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import PhotoApp from "../../../../../common/components/img/Img";
import Icon from "../../../../../../pics/profile.jpeg";
import { AiFillLinkedin } from "react-icons/ai";
import PdfIcon from "../../../../../../pics/test.pdf";
import { ApplicationBtn } from "./DesignApplication";
export const RejectedNormal = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <CompletedJobsList />
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
            Name="Rejected Candidates"
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
const CompletedJobsList = () => {
  const RedirectPage = () => {
    window.open("https://www.linkedin.com/login", "_blank");
  };
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };

  const JobsListApp = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="EmployeesProfileCard_top_div">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
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
              <div
                style={{ borderRight: "none" }}
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 EmployeesProfileCard_div_info"
              >
                <div className="col-12">
                  <div className="Application_btn_div">
                    <button
                      onClick={() => changNameUser(PdfIcon)}
                      className="IssueAssets_btn"
                    >
                      Downlaod Resume
                    </button>
                  </div>
                </div>
                <div className="Application_btn_div">
                  <ApplicationBtn />
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
