import React from "react";
import { useState } from "react";
import { BiWorld, BiChevronDown } from "react-icons/bi";
import UserImg from "../img/Img";
import AttachmentImg from "../../../../pics/atc.png";
import Car from "../../../../pics/car.png";
import { Modal } from "react-bootstrap";
import { IoCloseCircleOutline } from "react-icons/io5";
import UserIcon from "../../../../pics/profile2.jpeg";

export const Post = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [PostTextareaOption, setPostTextareaOption] = useState(true);
  const PostTextareaOptionOpen = () => {
    setPostTextareaOption(!PostTextareaOption);
  };
  const PostList = (props) => {
    return (
      <>
        <li>{props.list}</li>
      </>
    );
  };
  const PostListData = [
    {
      list: "Everyone",
    },
    {
      list: "design",
    },
    {
      list: "marketing",
    },
    {
      list: "development",
    },
  ];
  return (
    <>
      <div className="Announcement_iner mb-4 position-relative">
        <div className="post_textarea">
          <textarea
            className="form-control"
            rows="5"
            placeholder="How is your day today!....."
            onClick={() => setModalShow(true)}
          ></textarea>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div className="post_textarea_hr">
          <hr />
        </div>
        <div className="post_textarea_option">
          <div className="row">
            <div className="col-10">
              <div className="post_textarea_option_iner_main_div">
                <span onClick={PostTextareaOptionOpen}>
                  <BiWorld />
                </span>
                <p onClick={PostTextareaOptionOpen}>Everyone can view</p>
                <div onClick={PostTextareaOptionOpen}>
                  <BiChevronDown />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="post_textarea_Attachment">
                <UserImg
                  className="PostUser_Comment_user_icon_img"
                  backgroundImage={AttachmentImg}
                  onClick={() => setModalShow(true)}
                />
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              PostTextareaOption ? "PostTextareaOption" : "PostTextareaOption2"
            }`}
          >
            <div className="post_textarea_option_iner_option">
              <ul>
                {PostListData.map((val, i) => {
                  return <PostList key={i} list={val.list} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const UserUi = (props) => {
  const [PostTextareaOption, setPostTextareaOption] = useState(true);
  const [Star, setStar] = useState(true);

  const StarColor = () => {
    setStar(!Star);
  };
  const PostTextareaOptionOpen = () => {
    setPostTextareaOption(!PostTextareaOption);
  };
  const PostList = (props) => {
    return (
      <>
        <li>{props.list}</li>
      </>
    );
  };
  const PostListData = [
    {
      list: "Everyone",
    },
    {
      list: "design",
    },
    {
      list: "marketing",
    },
    {
      list: "development",
    },
  ];
  return (
    <>
      <div className="Announcement_iner mb-4">
        <div>
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 position-relative">
              <ul className="PostUser_user_icon_ul">
                <li>
                  <div className="PostUser_user_icon_div">
                    <UserImg
                      className="PostUser_user_icon"
                      backgroundImage={UserIcon}
                    />
                  </div>
                </li>
                <li>
                  <div className="PostUser_user_icon_name">
                    <h3>{props.name}</h3>
                    <p>{props.time}</p>
                  </div>
                </li>
                <li>
                  <div className="PostUser_user_icon_name_prv">
                    <p onClick={PostTextareaOptionOpen}>{props.SubName}</p>
                  </div>
                </li>
                <li>
                  <div className="PostUser_user_icon_name_share">
                    <p>
                      <span onClick={PostTextareaOptionOpen}>{props.icon}</span>
                    </p>
                  </div>
                </li>
              </ul>
              <div
                className={`${
                  PostTextareaOption ? "PostUser_Option" : "PostUser_Option2"
                }`}
              >
                <div className="post_textarea_option_iner_option">
                  <ul>
                    {PostListData.map((val, i) => {
                      return <PostList key={i} list={val.list} />;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
              <div className="PostUser_user_icon_name_star_top_div">
                <div
                  className={`${
                    Star
                      ? "PostUser_user_icon_name_star"
                      : "PostUser_user_icon_name_star2"
                  }`}
                >
                  <span onClick={StarColor}>{props.StarIcon}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// modal
const MyVerticallyCenteredModal = (props) => {
  const [PostTextareaOption, setPostTextareaOption] = useState(true);
  const PostTextareaOptionOpen = () => {
    setPostTextareaOption(!PostTextareaOption);
  };
  const PostList = (props) => {
    return (
      <>
        <li>{props.list}</li>
      </>
    );
  };
  const PostListData = [
    {
      list: "Everyone",
    },
    {
      list: "design",
    },
    {
      list: "marketing",
    },
    {
      list: "development",
    },
  ];
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="EditPost_top_div">
          <div className="EditPost_title">
            <p>share your thoughts</p>
          </div>
          <div className="post_textarea_hr">
            <hr />
          </div>
          <button className="EditPost_close_btn" onClick={props.onHide}>
            <IoCloseCircleOutline />
          </button>

          <div className="EditPost_main_itims">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <UserUi name="Gaurav Kaushik" />
                <div className="post_textarea EditPost_img_post p-0">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="I bought a new car"
                  ></textarea>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <div>
                  <UserImg className="EditPost_img" backgroundImage={Car} />
                </div>
              </div>
            </div>
          </div>
          <div className="post_textarea_hr">
            <hr />
          </div>
          <div className="post_textarea_option">
            <div className="row">
              <div className="col-10">
                <div className="EditPost_attachment_teat">
                  <p>Add attachment to your post</p>
                </div>
              </div>
              <div className="col-2">
                <div className="post_textarea_Attachment">
                  <UserImg
                    className="PostUser_Comment_user_icon_img"
                    backgroundImage={AttachmentImg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="post_textarea_hr">
            <hr />
          </div>
          <div className="post_textarea_option">
            <div className="row">
              <div className="col-10">
                <div className="post_textarea_option_iner_main_div">
                  <span onClick={PostTextareaOptionOpen}>
                    <BiWorld />
                  </span>
                  <p onClick={PostTextareaOptionOpen}>Everyone can view</p>
                  <div onClick={PostTextareaOptionOpen}>
                    <BiChevronDown />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                PostTextareaOption
                  ? "PostTextareaOption"
                  : "PostTextareaOption2"
              }`}
            >
              <div className="post_textarea_option_iner_option">
                <ul>
                  {PostListData.map((val, i) => {
                    return <PostList key={i} list={val.list} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className=" text-capitalize text-center">
            <button className=" ApprovalDetailsPage_btn">Post</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
