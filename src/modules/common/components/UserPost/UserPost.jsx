import { AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
import UserImg from "../../../common/components/img/Img";
import Car from "../../../../pics/car.png";
import { EditPost } from "../EditPost/EditPost";
import { CommentUiApp } from "../CommentUiApp/CommentUiApp";
import { UserUi } from "../UserUi/UserUi";
export const UserPost = () => {
  return (
    <>
      <div className="Announcement_iner mb-4">
        <div className="UserPost_top_div">
          <UserUi
            name="Gaurav Kaushik"
            time="5 Seconds ago"
            SubName="@SEO"
            icon={<AiOutlineShareAlt />}
            StarIcon={<AiFillStar />}
          />
          <EditPost />
          <div>
            <UserImg className="UserPost_img shadow" backgroundImage={Car} />
          </div>
        </div>
        <div className="post_textarea_hr">
          <hr />
        </div>
        <CommentUiApp />
      </div>
    </>
  );
};
