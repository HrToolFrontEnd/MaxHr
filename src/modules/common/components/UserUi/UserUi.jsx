import UserIcon from "../../../../pics/profile2.jpeg";
import { useState } from "react";
import UserImg from "../img/Img";
export const UserUi = (props) => {
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
