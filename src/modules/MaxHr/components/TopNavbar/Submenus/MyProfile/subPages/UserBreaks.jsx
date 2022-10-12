const UserBreks = (props) => {
  return (
    <>
      <div className="user_breks_row">
        <div className="row m-0">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-2 col-2">
            {props.icon}
          </div>
          <div className="col-6">
            <p>{props.title}</p>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
            <p>{props.time}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserBreks;
