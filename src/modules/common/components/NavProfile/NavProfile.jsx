import ProfileImg from "../img/Img";
import Profile from "../../../../pics/profile.jpeg";
const NavProfile = (props) => {
  return (
    <>
      <div className="profile_img_top_div" {...props}>
        <div className="profile_img_div">
          <ProfileImg className="profile_img" backgroundImage={Profile} />
        </div>
      </div>
    </>
  );
};
export default NavProfile;
