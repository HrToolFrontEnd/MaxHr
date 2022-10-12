const ProfileList = (props) => {
  return (
    <>
      <div className="profile_list_title_main_div">
        <div className="row m-0">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 p-0">
            <ul className="profile_list_title_div">
              <li className="profile_list_title_first_li">
                <div style={{ backgroundColor: props.color }}></div>
              </li>
              <li>
                <p className="profile_list_title">{props.title}</p>
              </li>
            </ul>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 p-0">
            <div className="profile_list_date_div">
              <p>{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileList;
