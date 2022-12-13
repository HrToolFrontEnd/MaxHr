import React from "react";
import { BiEdit } from "react-icons/bi";
import Img from "../components/img/Img";
let Photo = "https://source.unsplash.com/random/500x500/?girl";
export const ProfileImg = (props) => {
  const handleFileUpload = (event) => {
    console.log(event.target.files[0].name);
  };

  return (
    <>
      <input
        onChange={handleFileUpload}
        type="file"
        style={{ display: "none" }}
        id="dd"
        hidden
      />
      <div className="user_logo_upload_main_div">
        <Img backgroundImage={props.Photo} className={props.className}></Img>
        <label htmlFor="dd">
          <BiEdit />
        </label>
      </div>
    </>
  );
};
ProfileImg.defaultProps = {
  Photo: Photo,
  className: "project_details_card_img",
};
