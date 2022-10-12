import { Post } from "../../../../common/components/post/Post";
import { PostUser } from "../../../../common/components/PostUser/PostUser";
import { UserPost } from "../../../../common/components/UserPost/UserPost";
// import { UserPost } from "../../../../common/components/UserPost/UserPost";
import Select from "react-select";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const Index = () => {
  return (
    <>
      <Post />
      <AnnouncementFilter />
      <PostUser />
      <UserPost />
    </>
  );
};
export const AnnouncementFilter = () => {
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div className=" mb-4">
        <div className="row g-3">
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="Departments" />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="short by" />
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
            <div className="ApprovalDetailsPage_date_picker">
              <div className="ApprovalDetailsPage_search_input_iner_div">
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
