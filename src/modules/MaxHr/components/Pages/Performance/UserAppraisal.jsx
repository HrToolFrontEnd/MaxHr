import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { Nav, Tab } from "react-bootstrap";
import FeedbackIcon from "../../../../common/components/img/Img";
import Icon from "../../../../../pics/profile.jpeg";
import ReactStars from "react-rating-stars-component";
import React from "react";
export const UserAppraisal = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-12">
            <TopPageTitle
              TilelIcon={<BsArrowLeft />}
              TitleLink={-1}
              Name="Roushan’s Appraisal"
            />
          </div>
        </div>
        <div className="custom_container_iner">
          <div className="UserAppraisal_top_title">
            <h3>View Appraisal</h3>
          </div>
          <UserAppraisalDate />
        </div>
        <Feedback />
      </div>
    </>
  );
};
const UserAppraisalDate = () => {
  return (
    <>
      <div className="UserAppraisalDate_list_btn">
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex">
              <Nav.Item>
                <Nav.Link eventKey="first">April 2020</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">December 2021</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second1">April 2022</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Question />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Question />
              </Tab.Pane>
              <Tab.Pane eventKey="second1">
                <Question />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const Question = () => {
  const QuestionApp = (props) => {
    return (
      <>
        <div className="Question_top_div">
          <p>
            <span>{props.number}.</span>
            {props.text}
          </p>
          <div className="ApprovalDetailsPage_date_picker">
            <textarea
              className="form-control"
              placeholder={props.placeholder}
              rows="2"
            ></textarea>
          </div>
        </div>
      </>
    );
  };
  const QuestionData = [
    {
      number: "1",
      text: "Can you observe any meaningful relationship between what you do and overall goals of the company?",
      placeholder: "yes",
    },
    {
      number: "2",
      text: "What elements of your job interest you the most?",
      placeholder:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
    {
      number: "3",
      text: "What elements of your job interest you the most?",
      placeholder:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
    {
      number: "4",
      text: "What elements of your job interest you the most?",
      placeholder:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
    {
      number: "5",
      text: "What elements of your job interest you the most?",
      placeholder:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
  ];
  return (
    <>
      {QuestionData.map((val, i) => {
        return (
          <QuestionApp
            key={i}
            number={val.number}
            text={val.text}
            placeholder={val.placeholder}
          />
        );
      })}
    </>
  );
};
const Feedback = () => {
  const ratingChanged = () => {};
  return (
    <>
      <div className="row">
        <div className="col-12">
          <TopPageTitle Name="Feedback" />
        </div>
      </div>
      <div className="feedback_main_div">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div>
              <div className="feedback_icon_top_div">
                <FeedbackIcon
                  className="feedback_icon"
                  backgroundImage={Icon}
                />
                <p>
                  Self
                  <span>(sunny charkhwal)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="ApprovalDetailsPage_date_picker">
              <textarea
                className="form-control"
                placeholder="Write your feedback"
                rows="1"
              ></textarea>
            </div>
            <div className="Feedback_Ratings_main_div">
              <div className="Feedback_Ratings_div">
                <p>Ratings:</p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#F1C21B"
                />
                <h6>5.0</h6>
              </div>
              <div className="Feedback_Ratings_btn_div">
                <button className="Feedback_Ratings_btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback_main_div">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div>
              <div className="feedback_icon_top_div">
                <FeedbackIcon
                  className="feedback_icon"
                  backgroundImage={Icon}
                />
                <p>
                  Self
                  <span>(sunny charkhwal)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="ApprovalDetailsPage_date_picker">
              <textarea
                className="form-control"
                placeholder="Write your feedback"
                rows="1"
              ></textarea>
            </div>
            <div className="Feedback_Ratings_main_div">
              <div className="Feedback_Ratings_div">
                <p>Ratings:</p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#F1C21B"
                />
                <h6>5.0</h6>
              </div>
              <div className="Feedback_Ratings_btn_div">
                <button className="Feedback_Ratings_btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="feedback_main_div">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div>
              <div className="feedback_icon_top_div">
                <FeedbackIcon
                  className="feedback_icon"
                  backgroundImage={Icon}
                />
                <p>
                  Self
                  <span>(sunny charkhwal)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="ApprovalDetailsPage_date_picker">
              <textarea
                className="form-control"
                placeholder="Write your feedback"
                rows="1"
              ></textarea>
            </div>
            <div className="Feedback_Ratings_main_div">
              <div className="Feedback_Ratings_div">
                <p>Ratings:</p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#F1C21B"
                />
                <h6>5.0</h6>
              </div>
              <div className="Feedback_Ratings_btn_div">
                <button className="Feedback_Ratings_btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
