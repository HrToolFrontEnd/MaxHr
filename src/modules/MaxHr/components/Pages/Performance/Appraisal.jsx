import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { UploadDocumentIner } from "../Profile/components/EmployeesDocument";
export const Appraisal = () => {
  const steps = [<Stap1 />, <Stap2 />, <Stap3 />, <Stap4 />];
  const [currentStep, setCurrentStep] = useState(0);
  const getCurrentStepCheckbox = (index) => {
    if (currentStep === index) return <MdOutlineRadioButtonChecked />;
    else if (currentStep > index) return <BiCheckCircle />;
    else return <RiCheckboxBlankCircleLine />;
  };
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-12">
            <TopPageTitle
              TilelIcon={<BsArrowLeft />}
              TitleLink={-1}
              Name="Appraisal"
            />
          </div>
        </div>
        <div className="Appraisal_progress_bar_custom_container">
          <div>
            <progress
              className="Appraisal_progress_bar"
              value={(100 / steps.length) * (currentStep + 1)}
              max="100"
            >
              32%
            </progress>
            <div className="Appraisal_progress_text_bar">
              <ul>
                <li>
                  <span>{getCurrentStepCheckbox(0)}</span>
                  Step 1
                </li>
                <li>
                  <span>{getCurrentStepCheckbox(1)}</span>
                  Step 2
                </li>
                <li>
                  <span>{getCurrentStepCheckbox(2)}</span>
                  Step 3
                </li>
                <li>
                  <span>{getCurrentStepCheckbox(3)}</span>
                  Step 4
                </li>
              </ul>
            </div>
          </div>
          <div>{steps[currentStep]}</div>
          <div>
            <div className="IssueAssets_btn_bottom_div IssueAssets_btn_bottom_div2">
              <div>
                <button
                  className="IssueAssets_btn3"
                  onClick={() => setCurrentStep((old) => old - 1)}
                  disabled={!currentStep}
                >
                  Previous
                </button>
              </div>
              <div>
                <div>
                  <button
                    className="IssueAssets_btn2"
                    onClick={() => setCurrentStep((old) => old + 1)}
                    disabled={steps.length === currentStep + 1}
                  >
                    {steps.length === currentStep + 1 ? "Save" : "Next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Stap1 = () => {
  const [LikeBtn, setLikeBtn] = useState(true);

  const [DisLikeBtn, seDisLikeBtn] = useState(true);

  const DisLikeBtnColorChang = () => {
    seDisLikeBtn(!DisLikeBtn);
  };

  const LikeColorChang = () => {
    setLikeBtn(!LikeBtn);
  };
  return (
    <>
      <div className="row Appraisal_stap_1_top_btn">
        <div className="col-12 MyAttendence_next_page">
          <NavLink to="/hr/user_appraisal">
            <span>Previous Appraisal</span>
            <BsArrowRight />
          </NavLink>
        </div>
      </div>
      <StapText
        question="Question 1"
        questiontext="1. Can you observe any meaningful relationship between what you do and overall goals of the company?"
      />
      <div>
        <div className="row ">
          <div className="col-6">
            <div onClick={LikeColorChang} className="Appraisal_stap_1_like_btn">
              <p className={`${LikeBtn ? "LikeBtn_color" : " LikeBtn_color2"}`}>
                <span>
                  <AiFillLike />
                </span>
              </p>
            </div>
          </div>
          <div className="col-6">
            <div
              onClick={DisLikeBtnColorChang}
              className="Appraisal_stap_1_like_btn"
            >
              <p
                className={`${
                  DisLikeBtn ? "DisLikeBtn_color" : " DisLikeBtn_color2"
                }`}
              >
                <span>
                  <AiFillDislike />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Stap2 = () => {
  return (
    <>
      <StapText
        question="Question 2"
        questiontext="2. What elements of your job interest you the most?"
      />
      <div className="ApprovalDetailsPage_date_picker">
        <textarea
          className="form-control"
          placeholder="Placeholder text"
          rows="6"
        ></textarea>
      </div>
    </>
  );
};
const Stap3 = () => {
  return (
    <>
      <StapText
        question="Question 3"
        questiontext="3. What elements of your job interest you the most?"
      />
      <div className="ApprovalDetailsPage_date_picker">
        <textarea
          className="form-control"
          placeholder="Placeholder text"
          rows="6"
        ></textarea>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <label className="all_page_my_label">
            Upload Reimbursement Document
          </label>
          <div className="ApplyLeave_leave_upload_div">
            <UploadDocumentIner />
          </div>
          <small className="all_page_my_label">
            Only .jpg and .png files. 500kb max file size.
          </small>
        </div>
      </div>
    </>
  );
};
const Stap4 = () => {
  return (
    <>
      <h3>stap 4</h3>
    </>
  );
};
const StapText = (props) => {
  return (
    <>
      <div className="Appraisal_stap_1_text_div">
        <p>{props.question}</p>
        <h3>{props.questiontext}</h3>
      </div>
    </>
  );
};
