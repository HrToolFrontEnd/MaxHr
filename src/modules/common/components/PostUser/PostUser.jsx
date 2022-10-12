import { UserUi } from "../UserUi/UserUi";
import { CommentUiApp } from "../CommentUiApp/CommentUiApp";
import { EditPost } from "../EditPost/EditPost";
import { AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
export const PostUser = () => {
  return (
    <>
      <div className="Announcement_iner mb-4 position-relative">
        <div className="PostUser_top_profile_div">
          <UserUi
            name="Gaurav Kaushik"
            time="5 Seconds ago"
            SubName="@Everyone"
            icon={<AiOutlineShareAlt />}
            StarIcon={<AiFillStar />}
          />
          <div className="row">
            <div className="col-12">
              <div className="PostUser_text">
                <p>
                  “Give yourself credit for the days you have made it through,
                  when you thought you couldn’t” Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Eligendi cupiditate vel nobis
                  enim magnam, inventore ipsa saepe rerum est quidem quis
                  voluptatibus quia error voluptate ullam mollitia deserunt unde
                  recusandae.
                </p>
              </div>
            </div>
          </div>
          <EditPost />
        </div>
        <div className="post_textarea_hr">
          <hr />
        </div>
        <CommentUiApp />
      </div>
    </>
  );
};
