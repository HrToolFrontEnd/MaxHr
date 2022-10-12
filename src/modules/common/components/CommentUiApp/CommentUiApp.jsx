import { Accordion } from "react-bootstrap";
import CommentInput from "../input/Input";
import { GoComment } from "react-icons/go";
import UserImg from "../img/Img";
import UserIcon from "../../../../pics/profile2.jpeg";
import { BsSuitHeartFill, BsSuitHeart, BsReply } from "react-icons/bs";
import { useState } from "react";
export const CommentUiApp = () => {
  const PostUserAppMain = (props) => {
    const [Heart, setHeart] = useState(true);
    const [Reply, setReply] = useState(true);
    const [ReplyTop, setReplyTop] = useState(true);
    const HeartColor = () => {
      setHeart(!Heart);
    };
    const ReplyOpen = () => {
      setReply(!Reply);
    };
    const ReplyTopOpen = () => {
      setReplyTop(!ReplyTop);
    };
    return (
      <>
        <div>
          <div className="row">
            <div className="col-12">
              <CommentUi
                CommentIcon={props.CommentIcon}
                CommentName={props.CommentName}
                CommentText={props.CommentText}
              />
            </div>
          </div>
          <div className="post_user_Comment_iner pt-1">
            <div className="post_user_sub_Comment_iner">
              <div className="post_user_sub_option">
                <div>
                  <div
                    className={`${
                      Heart
                        ? "PostUser_user_icon_name_Heart"
                        : "PostUser_user_icon_name_Heart3"
                    }`}
                  >
                    <div onClick={HeartColor}>
                      {Heart ? <BsSuitHeart /> : <BsSuitHeartFill />}
                    </div>
                    <p>likes</p>
                  </div>
                </div>
              </div>
              <div className="post_user_sub_option">
                <div className="replay_user_btn_div">
                  <span>
                    <BsReply />
                  </span>
                  <span className="top_Replyy" onClick={ReplyTopOpen}>
                    Replyy
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            {props.arr.cat1.map((val, i) => {
              return (
                <div key={i}>
                  <div className={`${ReplyTop ? "ReplyTop3" : "ReplyTop4"}`}>
                    <div className="post_sub_user">
                      <div className="row">
                        <div className="col-12">
                          <CommentUi
                            CommentIcon={val.icon}
                            CommentName={val.UserName}
                            CommentText={val.text}
                          />
                          <div>
                            <div className="post_user_Comment_iner pt-1">
                              <div className="post_user_sub_Comment_iner">
                                <div className="post_user_sub_option">
                                  <div>
                                    <div
                                      className={`${
                                        Heart
                                          ? "PostUser_user_icon_name_Heart"
                                          : "PostUser_user_icon_name_Heart3"
                                      }`}
                                    >
                                      <div onClick={HeartColor}>
                                        {Heart ? (
                                          <BsSuitHeart />
                                        ) : (
                                          <BsSuitHeartFill />
                                        )}
                                      </div>
                                      <p>likes</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_user_sub_option">
                                  <div
                                    className="replay_user"
                                    onClick={ReplyOpen}
                                  >
                                    <span>
                                      <BsReply />
                                    </span>
                                    Reply
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`${Reply ? "Reply1" : "Reply2"}`}>
                              <ul className="PostUser_Comment_user_icon_ul">
                                <li>
                                  <div className="PostUser_Comment_user_icon_div">
                                    <UserImg
                                      className="PostUser_Comment_user_icon"
                                      backgroundImage={UserIcon}
                                    />
                                  </div>
                                </li>
                                <li className="w-100">
                                  <div className="PostUser_user_icon_name">
                                    <CommentInput
                                      type="text"
                                      className="form-control"
                                      placeholder="Write a comment"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  const PostUserAppMainData = [
    {
      CommentIcon: UserIcon,
      CommentName: "Suman Gupta",
      CommentText: "27th Nov - Happy Birthday!",
      cat1: [
        {
          icon: UserIcon,
          UserName: "Suman Gupta",
          text: "27th Nov - Happy Birthday!",
        },
      ],
    },
    {
      CommentIcon: UserIcon,
      CommentName: "Suman Gupta",
      CommentText: "27th Nov - Happy Birthday!",
      cat1: [
        {
          icon: UserIcon,
          UserName: "Suman Gupta",
          text: "27th Nov - Happy Birthday!",
        },
        {
          icon: UserIcon,
          UserName: "Suman Gupta",
          text: "27th Nov - Happy Birthday!",
        },
      ],
    },
  ];
  return (
    <>
      <div className="post_user_Comment2">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <div className="post_user_Comment_iner ">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div>
                    <div
                      className="PostUser_user_icon_name_Heart"
                      // className={`${
                      //   Heart
                      //     ? "PostUser_user_icon_name_Heart"
                      //     : "PostUser_user_icon_name_Heart2"
                      // }`}
                    >
                      {/* <div onClick={HeartColor}>
                          {Heart ? <BsSuitHeart /> : <BsSuitHeartFill />}
                        </div> */}
                      <div>
                        <input id="toggle-heart" type="checkbox" />
                        <label htmlFor="toggle-heart">❤</label>
                      </div>
                      <p>Suman and 24 others</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 GoComment_me">
                  <Accordion.Header>
                    <span>
                      <GoComment />
                    </span>
                    9 Comment
                  </Accordion.Header>
                </div>
              </div>
            </div>
            <Accordion.Body>
              {PostUserAppMainData.map((val, i) => {
                return (
                  <PostUserAppMain
                    key={i}
                    CommentIcon={val.CommentIcon}
                    CommentName={val.CommentName}
                    CommentText={val.CommentText}
                    arr={val}
                  />
                );
              })}
              <div>
                <div>
                  <ul className="PostUser_Comment_user_icon_ul">
                    <li>
                      <div className="PostUser_Comment_user_icon_div">
                        <UserImg
                          className="PostUser_Comment_user_icon"
                          backgroundImage={UserIcon}
                        />
                      </div>
                    </li>
                    <li className="w-100">
                      <div className="PostUser_user_icon_name">
                        <CommentInput
                          type="text"
                          className="form-control"
                          placeholder="Write a comment"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
const CommentUi = (props) => {
  return (
    <>
      <ul className="PostUser_Comment_user_icon_ul">
        <li>
          <div className="PostUser_Comment_user_icon_div">
            <UserImg
              className="PostUser_Comment_user_icon"
              backgroundImage={props.CommentIcon}
            />
          </div>
        </li>
        <li>
          <div className="PostUser_user_icon_name">
            <h3>{props.CommentName}</h3>
          </div>
        </li>
      </ul>
      <div className="PostUser_sub_Comment_user">
        <p>{props.CommentText}</p>
      </div>
    </>
  );
};
